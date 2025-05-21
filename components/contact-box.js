let template = document.createElement("template");

const css = /*css*/ `
    div {
        width: 50vw;
        aspect-ratio: 4/3;
        background-size: cover;
        display: flex;
        flex-direction: column;
        justify-content: end;
        padding: 2rem;
        gap: 2rem;
    }

    a, p {
        font-family: Mersad;
        color: var(--fg-white);
        margin: 0;
        text-decoration: none;
    }

    p {
        font-size: 3rem;
        font-weight: normal;
    }

    a {
        color: var(--bg-black);
        font-size: 1rem;
        padding: .5rem;
        background-color: var(--fg-white);
        border-radius: 1rem;
        width: fit-content;
    }
`

template.innerHTML = /*html*/`
    <style>
        ${css}
    </style>

    <div class="container">
        <p>Vous êtes artistes ?</p>
        <a>Nous contacter</a>
    </div>
`

class ContactBox extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: "open"});
        shadow.append(template.content.cloneNode(true));

        const bgAttr = this.getAttribute("bg");
        const hrefAttr = this.getAttribute("href");
        const buttonAttr = this.getAttribute("button");
        const descAttr = this.innerHTML.trim();

        let div = shadow.querySelector(".container");
        let p = shadow.querySelector("p");
        let a = shadow.querySelector("a");

        div.style.backgroundImage = `url(${bgAttr})`;
        p.innerHTML = descAttr;
        a.innerHTML = buttonAttr;
        a.setAttribute("href", hrefAttr);
    }
}

customElements.define("maxi-contact-box", ContactBox);