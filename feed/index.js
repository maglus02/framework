import { logoutFunctionality } from "../src/js/routes/logout.js";
import { searchHandling } from "../src/js/routes/searchHandling.js";
import { initializeGlobalErrorHandler } from "../src/js/utils/errorHandler.js";

initializeGlobalErrorHandler();

searchHandling();

logoutFunctionality();
