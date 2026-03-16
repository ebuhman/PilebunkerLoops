export class AboutPage {

    constructor(router)
    {
        this.router = router;
    }

    render()
    {
        const page = document.createElement("div");
        page.classList.add("about-page");

        const button = document.createElement("button");
        button.classList.add("back-button");
        button.addEventListener("click", () =>{
            this.router.navigate("/PilebunkerLoops/");
        });
        button.textContent = "Back";
        page.appendChild(button);

        const heading = document.createElement("h1");
        heading.textContent = "About";
        page.appendChild(heading);

        const image = document.createElement("img");
        image.src = "/PilebunkerLoops/images/Elucid.jpg";
        image.classList.add("character-portrait");
        page.appendChild(image);

        const description = document.createElement("p");
        description.classList.add("description");
        description.textContent = "Hey y'all! My name is Elucid, a current Computer Science student, and I have been working on learning full stack development. I absolutely love Guilty Gear Strive, especially Slayer. I chose to work on this in the hope that I could learn through something I was passionate about. I hope that this can be a great resource for all those that want to learn Slayer for his in depth combo routing, one of the most enjoyable aspects of the character. If there are any bugs or even just small additions to combos you want added, feel free to reach out to me on discord, where my username is elucidvt. I don't use Twitter much, but if you enjoy Slayer clips, me reposting a bunch of art and/or the awesome mods my fiancé makes, drop me a follow! I will try my best to have this updated as regularly as Slayer himself is updated with new patches to the game. However, I will most likely not push this further than it has become. I am happy with the purpose behind it, and don't want to turn this website into another Dustloop. My goal was to make an interactive combo guide, where you can filter based on situations, so you as a player aren't struggling to build your combo toolbox. Love you all, stay dandy."
        page.appendChild(description);

        const twitter = document.createElement("a");
        twitter.href = "https://x.com/Elucidvt";
        twitter.textContent = "My Twitter";
        twitter.target = "_blank";

        const linksContainer = document.createElement("div");
        linksContainer.classList.add("resource-links");
        linksContainer.appendChild(twitter);
        page.appendChild(linksContainer);

        return page;
    }
}