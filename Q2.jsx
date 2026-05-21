import { useEffect, useState } from "react";


const Q2 = () => {
      // Problem code
//         const [count, setCount] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       console.log(count);
//     }, 1000))};

      //     correct code
       const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(count);
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

      return (
            <div>
                  {/* Problem code */}
                   {/* <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button> */}
                         {/* correct code */}

                  <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>        
            </div>
      );
};

export default Q2;


                                 // note
   
//   useEffect([]) only runs once When we use an empty dependency array [], the useEffect runs only one time when the component first renders.
//    So React creates the interval only once.                               