

const Q3 = () => {
            //   Wrong Code
//       const buttons = [];
//   for (var i = 1; i <= 3; i++) {
//     buttons.push(
//       <button
//         key={i}
//         onClick={() => alert(i)}
//       >
//         Button {i}
//       </button>
//    );
           // Correct Code
            const buttons = [];

        for (let i = 1; i <= 3; i++) {
           buttons.push(
      <button
        key={i}
        onClick={() => alert(i)}
      >
        Button {i}
      </button>
    );
              
}
      return (
            <div>
                  {buttons}
            </div>
      );
};

export default Q3;
