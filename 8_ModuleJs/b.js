// import { z, x } from "./a.js"; // import specific variable from exported object of a.js

import * as A from "./a.js"; // import exported object as whole

console.log(A);
console.log(A.z);
console.log(A.x);

const APP_NAME = "Google.com";

export const APP_VERSION = "2.3.4"; //named export

export default APP_NAME;
