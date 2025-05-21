let template = document.createElement("template");

const css = /*css*/ `
    .container {
        box-sizing: border-box;
        width: 100vw;
        border: solid var(--fg-white);
        border-width: .1rem 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 2rem 6rem;
    }

    .container-left {
        width: 50%;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
    }

    p{
        font-family: Mersad;
        color: var(--fg-white);
        margin: 0;
        text-decoration: none;
        font-size: 1rem;
    }

    b {
        font-weight: normal;
    }

    .date {
        position: relative;
        width: 8rem;

        & > p {
            font-size: 3rem;
            font-weight: 900;
        }

        & > img {
            position: absolute;
            height: 3rem;
            aspect-ratio: 1/1;
            top: 0;
            right: 0;
        }
    }
    
    a {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 2rem;

        & > p {
            height: 1rem;
        }

        & > img {
            height: 1.5rem;
            aspect-ratio: 1/1;
        }
    }

    .country[color="pink"] {
        color: var(--accent-pink);
    }

    .country[color="blue"] {
        color: var(--accent-blue);
    }
`

template.innerHTML = /*html*/`
    <style>
        ${css}
    </style>

    <div class="container">
        <div class="container-left">
            <div class="date">
                <p class="day">Day</p>
                <p class="month">Month</p>
                <img class="star" src="./assets/svg/star-pink.svg"/>
            </div>
            <p class="place">Place</p>
            <p class="city">City <b class="country" color="pink">Coutry</b></p>
        </div>
        <a>
            <p>Billeterie</p>
            <img class="arrow" src="./assets/svg/arrow-pink.svg">
        </a>
    </div>
`

class Event extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: "open"});
        shadow.append(template.content.cloneNode(true));

        const svgPath = "./assets/svg/";

        const colorAttr = this.getAttribute("color");
        const cityAttr = this.getAttribute("city");
        const countryAttr = this.getAttribute("country");
        const placeAttr = this.getAttribute("place");
        const hrefAttr = this.getAttribute("href");
        const dateInner = this.innerHTML.trim();

        let place = shadow.querySelector(".place");
        let city = shadow.querySelector(".city");
        let day = shadow.querySelector(".day");
        let month = shadow.querySelector(".month");
        let star = shadow.querySelector(".star");
        let arrow = shadow.querySelector(".arrow");
        let a = shadow.querySelector("a");

        const textRegex = /(?:(\S*) )?(\S*)$/g;

        const textMatch = textRegex.exec(dateInner);
        
        if (textMatch) {
            day.innerHTML = textMatch[1] || "";
            month.innerHTML = textMatch[2] || "";
        }

        place.innerHTML = placeAttr;
        city.innerHTML = `${cityAttr} <b class="country" color="${colorAttr}">${countryAttr}</b>`;
        city.setAttribute("color", colorAttr);
        star.setAttribute("src", `${svgPath}star-${colorAttr}.svg`);
        arrow.setAttribute("src", `${svgPath}arrow-${colorAttr}.svg`);
        a.setAttribute("href", href);
    }
}

customElements.define("maxi-event", Event)