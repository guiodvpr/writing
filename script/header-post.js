const template = document.createElement("template");
template.innerHTML = `

<link href="../css/header-post.css" rel="stylesheet" type="text/css" />
<div class="blog-post-header">
      <div class="content-wrapper">
        <div class="post-info-wrapper">
          <a href="../index.html" class="post-info when-link">← Inicio</a>
        </div>
        <h1 class="blog-page-title"> </h1>
        <div class="post-info-wrapper">
          <div id="date" class="post-info"></div>
          <div class="post-info">|</div>
          <a id="type" href="" class="post-info when-link"></a>
        </div>
      </div>
    </div>
`;


export class HeaderPost extends HTMLElement{

    constructor(){
        super();
    }

    connectedCallback(){
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector(".blog-page-title").innerHTML = this.getAttribute("title");
        this.shadowRoot.getElementById("date").innerHTML = this.getAttribute("date"); 
        this.shadowRoot.getElementById("type").innerHTML = this.getAttribute("type");
       

    }

    attributeChangedCallback(){

    }

    static get observedAttributes(){

    }
}

window.customElements.define("header-post", HeaderPost);

