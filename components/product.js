let template = document.createElement("template");

const css = /*css*/ `
    a {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;
        width: 16rem;
    }
    
    img {
        width: inherit;
        aspect-ratio: 1/1;
        transition: .125s;
    }

    p{
        font-family: Mersad;
        color: var(--fg-white);
        margin: 0;
        text-decoration: none;
        font-size: 1rem;
    }

    .price {
        color: var(--fg-white-66);
    }

    a:hover img {
        filter: drop-shadow(0 0 .5rem  var(--fg-white));
    }
`

template.innerHTML = /*html*/`
    <style>
        ${css}
    </style>

    <a>
        <img/>
        <p class="desc">Desc</p>
        <p class="price">Price</p>
    </a>
`

class Product extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: "open"});
        shadow.append(template.content.cloneNode(true));

        const priceAttr = this.getAttribute("price");
        const srcAttr = this.getAttribute("src");
        const hrefAttr = this.getAttribute("href");
        const descAttr = this.innerHTML.trim();

        let img = shadow.querySelector("img");
        let desc = shadow.querySelector(".desc");
        let price = shadow.querySelector(".price");
        let a = shadow.querySelector("a");

        if (descAttr) {
            desc.innerHTML = descAttr;
        }
        if (priceAttr) {
            price.innerHTML = priceAttr;
        }

        img.setAttribute("src", srcAttr);
        a.setAttribute("href", hrefAttr);
    }
}

customElements.define("maxi-product", Product);