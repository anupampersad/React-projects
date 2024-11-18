import React, { useEffect } from "react";

const Timeout = () => {
  //   useEffect(() => {
  //     for (var i = 0; i < 4; i++) {
  //       setTimeout(() => {
  //         console.log("^^^^^ i", { i });
  //       }, [i * 1000]);
  //     }
  //   }, []);

  //   useEffect(() => {
  //     for (let i = 0; i < 10; i++) {
  //       setTimeout(() => {
  //         console.log("^^^^^ i", {i});
  //       }, [i * 1000]);
  //     }
  //   }, []);

//   useEffect(() => {
//     function time(i) {
//       setTimeout(() => {
//         console.log("^^^^^ i", { i });
//       }, [i * 1000]);
//     }

//     for (var i = 0; i < 4; i++) {
//       time(i);
//     }
//   }, []);

  return <div>Timeout</div>;
};

export default Timeout;
