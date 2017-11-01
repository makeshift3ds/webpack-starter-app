/* Import the css so it is run through webpack */
import "./assets/css/manifest.scss";

/* test some es2015 */
import TestModule from "./test_module";

/* just some test code */
let bat = new TestModule();
bat.bar();
