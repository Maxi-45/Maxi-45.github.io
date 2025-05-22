let template = document.createElement("template");

const css = /*css*/ `
    footer {
        box-sizing: border-box;
        width: 100vw;
        background-color: var(--footer-black);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 2rem 6rem;

        & > img, nav {
            width: 12rem
        }
    }

    h3 {
        font-family: Mersad;
        font-size: 1.5rem;
        color: var(--fg-white);
        margin: 0;
    }

    nav {
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }

    a {
        font-family: Mersad;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        text-decoration: none;
        color: var(--fg-white);
        gap: .5rem;

        & > img {
            width: 2rem;
            height: 2rem;
        }

        & > p {
            margin: 0;
        }
    }
`

template.innerHTML = /*html*/`
    <style>
        ${css}
    </style>

    <footer>
        <img src="./assets/svg/maxi-45-logo.svg"/>
        <nav>
            <h3>Navigation</h3>
            <a href="">À propos</a>
            <a href="">Artistes</a>
            <a href="">Discographie</a>
            <a href="">Merch</a>
            <a href="">Contact</a>
        </nav>
        <nav>
            <h3>Réseaux</h3>
            <a href="">
                <img src="./assets/svg/instagram-logo.svg" alt="" />
                <p>Instagram</p>
            </a>
            <a href="">
                <img src="./assets/svg/tiktok-logo.svg" alt="" />
                <p>Tik Tok</p>
            </a>
            <a href="">
                <img src="./assets/svg/x-logo.svg" alt="" />
                <p>X</p>
            </a>
        </nav>
    </footer>
`

class Footer extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: "open"});
        shadow.append(template.content.cloneNode(true));
    }
}

customElements.define("maxi-footer", Footer)