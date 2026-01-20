import { y, z } from "./a.js";
import Appname, { APP_VERSION } from "./b.js"; // default variable can be named anything but named export variable has to be the same name
// import * as BVar from "./b.js";

// console.log(BVar);
let p = "XYZ";
const q = [1, 2, 3];

console.log(y, z);

// console.log(BVar.default, BVar.APP_VERSION);
console.log(Appname, APP_VERSION);
