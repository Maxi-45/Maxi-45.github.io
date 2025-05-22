let template = document.createElement("template");

const css = /*css*/ `
    a {
        top: 0;
        left: 0;
        padding: 1rem;
    }

    img {
        position: relative;
        width: 4rem;
    }
`

template.innerHTML = /*html*/`
    <style>
        ${css}
    </style>

    <a href="">
        <img src="./assets/svg/maxi-45-logo.svg" alt="" />
    </a>
`

class Logo extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: "open"});
        shadow.append(template.content.cloneNode(true));
    }
}

customElements.define("maxi-logo", Logo);