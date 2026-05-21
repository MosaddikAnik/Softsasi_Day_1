import { useRef, useState } from "react";


const Q1 = () => {
       {/* Problematic Code  */}
       //const [count, setCount] = useState(0);
//         const showCount = () => {
//     setTimeout(() => {
//       alert(`Count: ${count}`);
//     }, 3000);
 // };
          //  Correct Solution
      const [count, setCount] = useState(0);
  const countRef = useRef(count);
  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    countRef.current = newCount;
  };
  const showCount = () => {
    setTimeout(() => {
      alert(`Count: ${countRef.current}`);
    }, 3000);
  };

      return (
            <div>
       {/* Problematic Code  */}
                 {/* <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={showCount}>
        Show Count After 3s
      </button> */}

      {/* Correct Solution */}
                  <h2>{count}</h2>

      <button onClick={increment}>
        Increment
      </button>

      <button onClick={showCount}>
        Show Count After 3s
      </button>
            </div>
      );
};

export default Q1;

                                        // note
// closure pitfall happens when an asynchronous function like setTimeout() captures an old state value instead of the updated one.

// Problem in the Wrong Code When showCount() is called, setTimeout() remembers the current value of count at that moment.