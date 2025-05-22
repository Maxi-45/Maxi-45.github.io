let template = document.createElement("template");

const css = /*css*/ `
    header {
        box-sizing: border-box;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        box-sizing: border-box;
        width: 100vw;
        height: 100vh;
        padding: 16rem;
        position: absolute;
        z-index: 3;
    }

    .img-box {
        position: relative;
        width: 40%;
        height: 40%;
        background-repeat: no-repeat;
        background-size: cover;
        transition: .5s ease-in-out;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }
    
    header:hover .img-box {
        width: 100%;
        height: 100%;
    }

    .img {
        position: absolute;
        width: 100vw;
        height: 100vh;
        background-image: url('./assets/img/bg/hero.png');
        background-repeat: no-repeat;
        background-size: cover;
    }
    `
    
template.innerHTML = /*html*/`
    <style>
        ${css}
    </style>

    <header>
        <img src="./assets/svg/maxi-45-logo-big.svg" alt="" />
        <div class="img-box">
            <div class="img"></div>
        </div>
    </header>
`

class Hero extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: "open"});
        shadow.append(template.content.cloneNode(true));
    }
}

customElements.define("maxi-hero", Hero)