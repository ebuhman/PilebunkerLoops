/*
    js/components/FilterPanel.js
    ----------------------------
    Builds a sidebar of checkboxes for filtering combos.
    Sits on the right side of ComboDetailPage.

    HINTS:
    - new Set(array) creates a collection of unique values from an array
    - array.map(item => item.property) pulls one property from every item
    - input elements with type="checkbox" fire a "change" event when clicked
    - checkbox.checked returns true or false
    - Array.every() returns true only if ALL items match a condition
    - Re-rendering means clearing the combo list and rebuilding it
*/

export class FilterPanel {

    constructor(combos, onFilterChange) {
        // TODO: store combos on this
        this.combos = combos;
        this.onFilterChange = onFilterChange;

        this.activeFilters = { // Object to filter by
            situation: [],
            meterCost: []
        };
    }

    render() {
       
        const filterPanel = document.createElement("div");
        filterPanel.classList.add("filter-panel");

        // Splits situations into a hashset to remove duplicates and spills them back into an array
        const situations = [...new Set(this.combos.map((combo) => combo.situation))].filter(s => s !== null);
        const meterCost = [...new Set(this.combos.map((combo) => combo.meterCost))].filter(m => m !== null);
        
        filterPanel.appendChild(this.buildCheckboxGroup("Situation", situations, "situation"));
        filterPanel.appendChild(this.buildCheckboxGroup("Meter Cost", meterCost, "meterCost"));

        return filterPanel
    }

    buildCheckboxGroup(label, options, filterKey) {
        // TODO: create a container div with class "filter-group"
        const filterGroup = document.createElement("div");
        filterGroup.classList.add("filter-group");
        // TODO: create a label heading showing the group name
        const labelHeading = document.createElement("h3");
        labelHeading.textContent = label;
        filterGroup.appendChild(labelHeading);

        options.forEach((option) => {
        const optionLabel = document.createElement("label");
        optionLabel.classList.add("filter-option");
        
        const checkboxInput = document.createElement("input");
        checkboxInput.type = "checkbox";
        
        const optionText = document.createElement("span");
        optionText.textContent = option;
        
        optionLabel.appendChild(checkboxInput);
        optionLabel.appendChild(optionText);
        filterGroup.appendChild(optionLabel);

        checkboxInput.addEventListener("change", () => {
            if (checkboxInput.checked) {
                this.activeFilters[filterKey].push(option);
            } else {
                this.activeFilters[filterKey] = this.activeFilters[filterKey].filter((item) => item !== option);
            }
            this.onFilterChange();
            });
        });
        return filterGroup;
    }

    getFilteredCombos() {
        if (this.activeFilters.situation.length === 0 && this.activeFilters.meterCost.length === 0) {
            return this.combos;
        }
        return this.combos.filter((combo) => {
            const situationMatch = this.activeFilters.situation.length === 0 
                || this.activeFilters.situation.includes(combo.situation);

            const meterMatch = this.activeFilters.meterCost.length === 0 
                || this.activeFilters.meterCost.includes(combo.meterCost);

            return situationMatch && meterMatch;
        });
    }
}