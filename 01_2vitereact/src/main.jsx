import React from "react";
import { createRoot } from "react-dom/client";


// const reactElement ={
//   type:'a',
//   props:{
//       href:"https://www.google.com",
//       target:'_blank',
//   },
//   children:"Click me to visit google"

// }

const anotherUser = "chai or code";
const name = 34;

const reactElement = React.createElement(              //bydefault automatically inject ho jata hai isko babel inject krta hai
  "a", //tag                                               //ise tarah se react m behind secence m kaam hota hai
  { href: "https://www.google.com", target: "_blank" }, //object
  "click me", //direct text
  anotherUser,
  name // we cant not write if and other condn in this block because it is evaluate expression
);

const anotherElement = (
  <a href="https://google.com" target="_blank">
    visit google
  </a>
);

createRoot(document.getElementById("root")).render(reactElement);
