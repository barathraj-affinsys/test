import "./style.css";
import { setupCounter } from "./counter.js";
import { isWebkit, UA } from "./ua.js";

document.querySelector("#app").innerHTML = `
  <h1>
    ${isWebkit ? "IOS: true" : "IOS: false"}
    ${UA}
  </h1>
`;

setupCounter(document.querySelector("#counter"));

console.log(isWebkit);
