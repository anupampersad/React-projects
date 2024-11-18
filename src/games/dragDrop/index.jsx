import React, { createRef, useEffect, useRef, useState } from "react";
import { determineNewPosition } from "./utils";
import "./styles.css";

const DragDrop = () => {
  const [notes, setNotes] = useState([
    {
      id: 0,
      text: "Learn Basics",
    },
    {
      id: 1,
      text: "Learn React",
    },
    {
      id: 2,
      text: "Practice and improvise",
    },
  ]);

  const noteRefs = useRef([]);

  useEffect(() => {
    // localstorage logic
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

    const updatedNotes = notes.map((note) => {
      const savedNote = savedNotes.find((n) => n.id === note.id);
      if (savedNote) {
        return { ...note, position: savedNote.position };
      } else {
        const position = determineNewPosition();
        return { ...note, position };
      }
    });

    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  }, [notes.length]);

  const handleDragStart = (note, e) => {
    const { id, position: initalposition } = note;

    const noteRef = noteRefs.current[id].current;
    const rect = noteRef.getBoundingClientRect();

    // e.clientX is pos from where we are grabbing the element
    // rect.left is left pos of elemnent itself
    // diff gives the gap between note left pos and from where we are grabbing the note
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    const startPos = initalposition;

    const handleMouseMove = (e) => {
      // subtracting e.clientX - offsetX  offsets the previous found gap so that note goes that much pos left or top
      const newX = e.clientX - offsetX;
      const newY = e.clientY - offsetY;

      noteRef.style.left = `${newX}px`;
      noteRef.style.top = `${newY}px`;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);

      const finalRect = noteRef.getBoundingClientRect();
      const newPosition = { x: finalRect.left, y: finalRect.top };

      if (checkForOverlap(id)) {
        // check for overlap
        noteRef.style.left = `${startPos.x}px`;
        noteRef.style.top = `${startPos.y}px`;
      } else {
        updateNotePosition(id, newPosition);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const checkForOverlap = (id) => {
    const currentNoteRef = noteRefs.current[id].current;
    const currentRect = currentNoteRef.getBoundingClientRect();

    return notes.some((note) => {
      if (note.id === id) return false;

      const otherNoteRef = noteRefs.current[note.id].current;
      const otherRect = otherNoteRef.getBoundingClientRect();

      const overlap = !(
        currentRect.right < otherRect.left ||
        currentRect.left > otherRect.right ||
        currentRect.bottom < otherRect.top ||
        currentRect.top > otherRect.bottom
      );

      return overlap;
    });
  };

  const updateNotePosition = (id, newPosition) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, position: newPosition } : note
    );
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  return (
    <div className="canvas">
      {notes.map((n) => {
        return (
          <div
            className="note"
            key={n?.id}
            ref={
              noteRefs.current[n.id]
                ? noteRefs.current[n.id]
                : (noteRefs.current[n.id] = createRef())
            }
            style={{
              left: n?.position?.x,
              top: n?.position?.y,
            }}
            onMouseDown={(e) => {
              handleDragStart(n, e);
            }}
          >
            📌 {n?.text}
          </div>
        );
      })}
    </div>
  );
};

export default DragDrop;
