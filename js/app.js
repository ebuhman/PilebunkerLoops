/*
    js/app.js
    ---------
    This is the entry point — the first JS file the browser runs.
    Its job is to wire everything together:
        - Import all the pieces
        - Set up the router with its routes
        - Render the current page
*/

import { Router } from "./router.js";
import { characterData } from "./data.js";
import { StarterSelectPage } from "./pages/StarterSelectPage.js";
import { ComboDetailPage } from "./pages/ComboDetailPage.js";
import { ResourcePage } from "./pages/ResourcesPage.js";

const BASE_URL = "/PilebunkerLoops"; // Created base url to pull from when loading videos
const BASE = document.querySelector("base")?.href || "/PilebunkerLoops/";

function init() {
    const router = new Router();
    const appContainer = document.getElementById("app");

    const header = document.createElement("header");
    header.classList.add("site-header");

    const title = document.createElement("h1");
    title.textContent = "Jack-A-Dandy";
    header.appendChild(title);

    const resourcesButton = document.createElement("button");
    resourcesButton.classList.add("resource-button");
    resourcesButton.textContent = "Resources";
    resourcesButton.addEventListener("click", () => {
        router.navigate("/resources");
    });
    header.appendChild(resourcesButton);

    appContainer.appendChild(header);

    const pageContainer = document.createElement("div");
    pageContainer.classList.add("page-container");
    appContainer.appendChild(pageContainer);

    function setPage(pageElement) {
        pageContainer.innerHTML = "";
        pageContainer.appendChild(pageElement);
    }

    router.registerRoute("/", () => {
        resourcesButton.style.display = "";
        // Create a wrapper so we can show both the description AND the selection list
        const homeWrapper = document.createElement("div");

        const portrait = document.createElement("img");
        portrait.src = "images/Slayer_Guilty_Gear_Strive.webp";
        portrait.classList.add("character-portrait");
        

        const description = document.createElement("p");
        description.classList.add("description");
        description.textContent = "Slayer is the true embodiment of a one-shot character. With high-damage confirms and high-attack-level normals, he can effectively win games off a single exchange. This is most apparent in his famous pilebunker loops, which allow Slayer to continue combos by pushing the opponent behind him during a tumble state. This turns one of the character's biggest weaknesses, pilebunker's auto wall stick, into a strength, enabling nearly any starter to convert into meaningful damage. Add in Hand of Doom's wall bounce, and Slayer can effectively combo from anywhere on the screen for 200+ damage.";
        const page = new StarterSelectPage(characterData, router);
        
        homeWrapper.appendChild(portrait);
        homeWrapper.appendChild(description);
        homeWrapper.appendChild(page.render());
        
        setPage(homeWrapper);
    });

    router.registerRoute("/combos/:id", (starterId) => {
        resourcesButton.style.display = "";
        const page = new ComboDetailPage(characterData, starterId, router);
        setPage(page.render());
    });

    router.registerRoute("/resources", () => {
    resourcesButton.style.display = "none";
    const page = new ResourcePage(router);
    setPage(page.render());
    });

    router.handleRoute(window.location.pathname);
}

init();