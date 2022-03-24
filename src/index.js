import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// const a= new Date().toLocaleDateString();
// const b= new Date().toLocaleTimeString();// this is called using templates mean inside html we are using javascript
// const c="https://picsum.photos/id/237/200/300";
// //here we are using inline css
// const h= {
//   // color:'red',
//   textAlign:'center', //camel case we are using because kebab case does not work in react
//   textTransform:'capitalize',
//   color:'blueviolet',
//   // fontWeight:'bold',
//   fontFamily:'Arial, Helvetica, sans-serif',
//   // fontFamily: 'fantasy',
//   };

let date= new Date();
date=date.getHours();
let greet=" ";
const design= {};
if(date>0 && date<12)
{
greet="GOOD MORNING";
design.color="brown";
}
else if(date>12 && date <=17)
{
  greet="GOOD AFTERNOON";
  design.color="orange";
  // design.bgcolor="pink";
}
else
{
greet="GOOD NIGHT";
design.color="blue";

}
ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <>
  {/* <h1> Netflix Series</h1>,
  <p>  Netflix list:</p>,
    <ol>
    <li>  ZNMD </li>
    <li>
      Guthhi
    </li>
    <li>
      Three idiots
    </li>
    <li>
     Dear Zindagi
     </li>

    <li>
    Talaash
    </li>
    </ol>
    <p>the calculation is {4+6} and {a}</p> */}
    {/* <h1 style={h} >Hi, I am Aditi</h1>
    <p>
     Current date is {a};
    </p>
    <p>
      Current time is {b};
    </p>
    <img src="https://picsum.photos/200/300"/>
    <img src={c}/> */}
   <div>
    <h1 >
      Hello!!, <span style={design}> {greet} </span> 
    </h1>
    </div>
  </>,
  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// 
ServiceWorker.unregister();
