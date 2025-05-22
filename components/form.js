let template = document.createElement("template");

const css = /*css*/ `
    form {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        width: 100vw;
        padding: 2rem 6rem;
        gap: 1rem;
    }

    label {
        font-family: Mersad;
        color: var(--fg-white);
        margin: 0;
        text-decoration: none;
        font-size: 1rem;
    }

    input[type="text"] {
        background-color: transparent;
        border: solid var(--fg-white);
        border-width: 0 0 .1rem 0;
    }

    input[type="submit"] {
        border: transparent ;
        color: var(--bg-black);
        font-size: 1rem;
        padding: .5rem .75rem;
        background-color: var(--fg-white);
        border-radius: 1rem;
        width: fit-content;
    }

    #descriptif {
        height: 3rem;
    }
`

template.innerHTML = /*html*/`
    <style>
        ${css}
    </style>

    <form action="">
        <label for="email">Email</label>
        <input type="text" id="email">
        <label for="phone">Téléphone</label>
        <input type="text" id="phone">
        <label for="descriptif">Descriptif</label>
        <input type="text" id="descriptif">
        <input type="submit" value="Envoyer">
    </form>
`

class Form extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: "open"});
        shadow.append(template.content.cloneNode(true));
    }
}

customElements.define("maxi-form", Form);