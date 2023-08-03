import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// const SlotM = (props)=>{
//   // let x = '😄';
//   // let y = '😄';
//   // let z = '👎';

//   if(props.x===props.y && props.y===props.z){
//     return(
//       <>
//         <div className='sort_inner'>
//           <h1>
//               {props.x} {props.y} {props.z} 
//           </h1>
//           <h1>This is Matching. </h1>
//           <hr></hr>
//         </div>
//       </>
//     )
//   }
//   else{
//     return(
//       <>
//         <div className='sort_inner'>
//           <h1>
//               {props.x} {props.y} {props.z} 
//           </h1>
//           <h1>This is Not Matching. </h1>
//           <hr></hr>
//         </div>
//       </>
//     )
//   }
// }

// const App = ()=>{
//   return (
//     <>
//      <h1 className='heading_Style'> 🎰 Welcome to <span style={{fontWeight:'bold'}}>Slot Machine Game 🎰</span> </h1>
//      <SlotM x = '😄' y = '😄' z = '😄'></SlotM>
//      <SlotM x = '😄' y = '😄' z = '👍'></SlotM>
//      <SlotM x = '😄' y = '😄' z = '😄'></SlotM>
//     </>
//   )
// }



const App = () => {
  const state = useState();

  const [count, setCount] = useState(0  );

  const IncNum = () => {
    setCount(count+1);
    console.log("Clicked");
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={IncNum}>Click Me</button>
      <h1>{count}</h1>
    </>
  )
}

export default App;