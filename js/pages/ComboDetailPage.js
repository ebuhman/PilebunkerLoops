/*
    js/pages/ComboDetailPage.js
    ---------------------------
    Displays all combos for a given starter.
    Finds the matching starter from the character data,
    then creates one ComboCard per combo.
*/

import { ComboCard } from "../components/ComboCard.js";

export class ComboDetailPage {

    constructor(character, starterId, router) {
        this.character = character;
        /* Search through character.starters and check if each one's id matches 
        the starterId that was passed into the constructor. Return the first one as this.starter */
        this.starter = character.starters.find((starter) => {
            return starter.id === starterId;
        })
        this.router = router;
    }

    render() {
        const page = document.createElement("div");
        page.classList.add("outer-page"); 

        if (!this.starter) // if this.starter is null send error message and return
        {
            const error = document.createElement("p");
            error.textContent = "Error | starter not found";
            error.classList.add("error-message");
            page.appendChild(error);
            return page;
        }

        const button = document.createElement("button");
        button.classList.add("back-button");
        button.addEventListener("click", () => {
            this.router.navigate("/ggst-combo-site")
        });
        button.textContent = "Back";
        page.appendChild(button);

        const heading = document.createElement("h1");
        heading.textContent = `${this.starter.input} Combos`; // e.g "5P Combos"
        page.appendChild(heading);

        if (this.starter.situation)
        {
            const paragraph = document.createElement("p");
            paragraph.textContent = `Situation: ${this.starter.situation}` // e.g "Situation: Standing"
            paragraph.classList.add("situation-label");
            page.appendChild(paragraph);
        }
       
        // Second div for combo list
        const comboList = document.createElement("div");
        comboList.classList.add("combo-list");

        // TODO: use filter() to separate optimal and non-optimal combos
        const optimal = this.starter.combos.filter((optimalCombo) => {
            return optimalCombo.isOptimal;
        });

        const other = this.starter.combos.filter((otherCombo) => {
            return !otherCombo.isOptimal;
        });

        const sortedCombos = [...optimal, ...other]; // Combined list with optimal combos first

        // Loop over each combo and create a card for ComboCard
        sortedCombos.forEach((combo) => {
            const card = new ComboCard(combo);
            comboList.appendChild(card.render())
        });
        
        page.appendChild(comboList);
        return page;
    }
}