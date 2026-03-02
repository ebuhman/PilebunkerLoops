/*
    js/components/ComboCard.js
    --------------------------
    Displays one combo: its notation row, stats, video, and notes.
    Created once per combo by ComboDetailPage.
*/

import { NotationParser } from "./NotationParser.js";
import { VideoPlayer } from "./VideoPlayer.js";

export class ComboCard {

    constructor(combo) {
        // TODO: store combo on this
        // TODO: create a new NotationParser instance and store it on this
        this.combo = combo;
        this.notationParser = new NotationParser();
    }

    render() {
        const comboCard = document.createElement("div");
        comboCard.classList.add("combo-card");
        if (this.combo.isOptimal)
        {
            comboCard.classList.add("combo-card--optimal")
        }
        
        const notationRow = this.notationParser.render(this.combo.notationString); // Creates notation row
        comboCard.appendChild(notationRow);
    
        const statsRow = this.buildStatsRow(); // Creates stats row
        comboCard.appendChild(statsRow);
        
        if (this.combo.videoUrl) // Creates video player with two arguments
        {
            const player = new VideoPlayer(this.combo.videoUrl, this.combo.videoFallbackImage);
            comboCard.appendChild(player.render());
        }

        if (this.combo.notes) // Creates paragraph element if combo has a note
        {
            const notes = document.createElement("p");
            notes.classList.add("combo-notes");
            notes.textContent = this.combo.notes;
            comboCard.appendChild(notes);
        }

        return comboCard;
    }

    buildStatsRow() {
        // TODO: create a container div with class "combo-stats"
        const comboStats = document.createElement("div");
        comboStats.classList.add("combo-stats");

        function spanCreator(label, value) { // Helper function to display a label and value
            const spanStat = document.createElement("span");
            spanStat.classList.add("combo-stat");
            spanStat.textContent = `${label} : ${value} `
            return spanStat;
        }

        // Create spans for damage, meter cost, and combo difficulty
        const damage = spanCreator("Damage", this.combo.damage);
        comboStats.appendChild(damage);
        const meterCost = spanCreator("Meter Cost", this.combo.meterCost);
        comboStats.appendChild(meterCost);
        const difficulty = spanCreator("Difficulty", this.combo.difficulty);
        comboStats.appendChild(difficulty);
        if (this.combo.situation) 
            {
                comboStats.appendChild(spanCreator("Situation", this.combo.situation));
            }


        // If combo is optimal, create new span and append under optimal
        if (this.combo.isOptimal)
        {
            const optimalSpan = document.createElement("span");
            optimalSpan.classList.add("optimal-badge");
            optimalSpan.textContent = "Optimal";
            comboStats.appendChild(optimalSpan);
        }

        return comboStats;
    }
}