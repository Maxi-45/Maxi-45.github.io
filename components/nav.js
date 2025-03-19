const template = document.createElement("template");

const css = /*css*/ `     
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: fit-content;
        gap: .25rem;
        padding: .5rem;
        background-color: var(--bg-grey-d-66);
        border-radius: .5rem;
    }
    
    a {
        font-family: Mersad;
        text-decoration: none;
        color: var(--fg-white);
        padding: .75rem 1rem;
        transition: .125s
    }
    
    a:hover {
        text-shadow:
            0 0 1rem var(--fg-white-66),
            0 0 .5rem var(--fg-white);
        filter: drop-shadow(0px 0px 1rem var(--fg-white))
    }
    
    a:first-of-type {
        border-radius: .25rem;
        display: flex;
        flex-direction: row;
        gap: .25rem;
        background-color: var(--bg-grey-l-66);
    }

    img {
        height: 1rem;
    }

    p {
        margin: 0;
    }
`
template.innerHTML = /*html*/ `
    <style>
        ${css}
    </style>

    <div>
        <a href=".\test.html"><img src="./assets/svg/menu.svg"><p>menu</p></a>
        <a href="">à propos</a>
        <a href="">artistes</a>
        <a href="">discographie</a>
        <a href="">évènements</a>
        <a href="">contact</a>
    </div>
`

class Nav extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: "open"});
        shadow.append(template.content.cloneNode(true));
        this.title.innerHTML = this.innerText;
    }
}

customElements.define("maxi-nav", Nav)