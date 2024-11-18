import React, { useCallback, useEffect, useRef, useState } from "react";
import "./styles.css";

const InfiniteScroll = () => {
  const [serachText, setSearchText] = useState("");
  const [results, setResults] = useState([]);
  const [pageNumber, setPagenumber] = useState(1);

  let controller = new AbortController();

  const fetchBooks = async (text, pageNumber) => {
    try {
      const response = await fetch(
        `http://openlibrary.org/search.json?q=${text}&page=${pageNumber}&fields=key,cover_i,title,subtitle,author_name,name`,
        {
          signal: controller.signal,
        }
      );
      const data = await response.json();
      setResults([...results, ...data.docs]);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (serachText && serachText.length >= 3) {
      fetchBooks(serachText, 1);
    }
    return () => {
      if (serachText && serachText.length >= 3) {
        controller.abort();
      }
    };
  }, [serachText]);

  // useEffect(()=>{
  //   const observer = new IntersectionObserver((entries) => {
  //     console.log("^^^^^ entries", {entries})
  //     if(entries[0]?.isIntersecting){
  //       setPagenumber(pageNumber+1)
  //       fetchBooks(serachText,pageNumber+1);
  //       // observer.unobserve(entries[0].target)
  //     }
  //   })

  //   if(results && results.length > 0){
  //     const booksArr = document.querySelectorAll('.book')
  //     observer.observe(booksArr[booksArr.length-1])
  //   }

  // },[results])

  const observer = useRef();

  const lastElementRef = useCallback(
    (node) => {
      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
        setPagenumber(pageNumber+1)
        fetchBooks(serachText,pageNumber+1);
        }
      });

      if (node) {
        observer.current.observe(node);
      }
    },
    [results.length]
  );

  return (
    <div id="container">
      <input
        id="search_box"
        placeholder="input"
        value={serachText}
        onChange={(e) => {
          setResults([]);
          setSearchText(e.target.value);
        }}
      />

      <div id="search_results_container">
        {results &&
          results?.length > 0 &&
          results.map((b, idx) => {
            if (idx + 1 === results.length) {
              return (
                <div key={b?.key} className="book" ref={lastElementRef}>
                  {b?.title}
                </div>
              );
            } else {
              return (
                <div key={b?.key} className="book">
                  {b?.title}
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default InfiniteScroll;
