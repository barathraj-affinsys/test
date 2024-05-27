import "./style.css";
import { setupCounter } from "./counter.js";
import { isWebkit } from "./ua.js";

document.querySelector("#app").innerHTML = `
  <h1>
    ${isWebkit ? "IOS: true" : "IOS: false"}
  </h1>
`;

setupCounter(document.querySelector("#counter"));

console.log(isWebkit);
