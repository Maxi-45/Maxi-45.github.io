let template = document.createElement("template");

const css = /*css*/ `
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: 1rem;
    }

    h2 {
        font-family: Mersad;
        font-size: 3rem;
        color: var(--fg-white);
        font-weight: lighter;
        margin: 0;
    }

    img {
        height: 1.5rem;
        aspect-ratio: 1/1;
    }
`

template.innerHTML = /*html*/`
    <style>
        ${css}
    </style>

    <div>
        <h2></h2>
        <img>
    </div>
`

class h2 extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: "open"});
        shadow.append(template.content.cloneNode(true));

        const h2 = shadow.querySelector("h2");
        const img = shadow.querySelector("img");

        const src = this.getAttribute("src");
        const text = this.innerHTML.trim();

        if (src) {
            img.setAttribute("src", src);
        }
        if (text) {
            h2.innerHTML = text;
        }
    }
}

customElements.define("maxi-h2", h2);