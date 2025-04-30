let template = document.createElement("template");

const css = /*css*/ `
    #t-text {
        grid-row: 1 / 3;
        grid-column: 1;
    }

    #b-text {
        grid-row: -1 / -3;
        grid-column: 1;
    }

    .grid {
        width: auto;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 3em 1rem auto 2rem 2rem;
        align-items: center;
    }

    .img-container {
        display: flex;
        justify-content: center;
        align-items: center;
        grid-row: 2 / 5;
        grid-column: 1;
        z-index: 2;
    }
    
    p {
        color: var(--fg-white);
        margin: 0;
        font-size: 5rem;
        text-align: center;
        font-family: Mersad;
        font-weight: 800;
        position: relative;
        top: 1rem;
        z-index: 1;
        transition: .25s;
    }
    
    
    img {
        width: 16rem;
        border-radius: 100%;
        transform-origin: center;
        transition: .25s;
    }

    .grid:hover {
        & p {
            color: var(--bg-black);
            -webkit-text-stroke-width: .1rem;
            -webkit-text-stroke-color: var(--fg-white);

            &[color="pink"] {
                -webkit-text-stroke-color: var(--accent-pink);
            }

            &[color="blue"] {
                -webkit-text-stroke-color: var(--accent-blue);
            }
        }

        & img {
            transform: scale(1.05);
        }
    }
`

template.innerHTML = /*html*/`
    <style>
        ${css}
    </style>

    <div class="grid">
        <p id="t-text"></p>
        <div class="img-container">
            <img src="" alt=""/>
        </div>
        <p id="b-text"></p>
    </div>
`

class Artist extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: "open"});
        shadow.append(template.content.cloneNode(true));

        const color = this.getAttribute("color") || "white";
        const p = shadow.querySelectorAll("p");
        const img = shadow.querySelector("img");
        const src = this.getAttribute("src");
        const text = this.innerHTML.trim();
        const tText = shadow.querySelector("#t-text");
        const bText = shadow.querySelector("#b-text");
        const textRegex = /(?:(\S*) )?(\S*)$/g;

        const textMatch = textRegex.exec(text);
        
        if (textMatch) {
            tText.innerHTML = textMatch[1] || "";
            bText.innerHTML = textMatch[2] || "";
        }

        if (src) {
            img.setAttribute("src", src);
        }

        p.forEach(element => {
            element.setAttribute("color", color);
        });
    }
}

customElements.define("maxi-artist", Artist)