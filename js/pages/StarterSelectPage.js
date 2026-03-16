/*
    js/pages/StarterSelectPage.js
    -----------------------------
    Builds the landing page — a grid of buttons, one per combo starter.
    Clicking a button navigates to that starter's combo page.
*/

export class StarterSelectPage {

    constructor(character, router) {
        this.character = character;
        this.router = router;
    }

    render() {
        // Creates <div class = "starter select page"> for css elements.
        const page = document.createElement("div");
        page.classList.add("starter-select-page");

        const heading = document.createElement("h1");
        heading.textContent = "Choose a starter"; // Sets the content in the heading
        page.appendChild(heading); // Places heading in div file

        const grid = document.createElement("div");
        grid.classList.add("starter-grid");

        // Itterates through each starter and makes a button for each one
        this.character.starters.forEach((starter) => {
            const button = this.buildStarterButton(starter);
            grid.appendChild(button);
        })

        page.appendChild(grid);
        
        return page;
    }

    buildResourcesButton() {
        const button = document.createElement("button");
        button.classList.add("resource-button");

        const buttonSpan = document.createElement("span");
        buttonSpan.textContent = "Resources";
        buttonSpan.classList.add("resource-text");
        
        button.appendChild(buttonSpan);

        button.addEventListener("click", () => {
            this.router.navigate("/resources")
        });
        return button;
    }

    buildStarterButton(starter) {
        const button = document.createElement("button"); 
        button.classList.add("starter-button");

        const inputSpan = document.createElement("span"); // Basic text wrapper
        inputSpan.textContent = starter.input; // e.g "5P"
        inputSpan.classList.add("starter-input");

        const labelSpan = document.createElement("span"); 
        labelSpan.textContent = starter.label; // e.g "5P starter"
        labelSpan.classList.add("starter-label");

        button.appendChild(inputSpan);
        button.appendChild(labelSpan);

        // When button is clicked, navigate to the combos starter page path
        button.addEventListener("click", () => {
            this.router.navigate(`/combos/${starter.id}`)
        }); 
        return button;
    }
}