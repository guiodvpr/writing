const template = document.createElement("template");
template.innerHTML = `


<link href="css/post-wrapper.css" rel="stylesheet" type="text/css" />

<div class="post-wrapper" >
   <div class="content-post-su-img" style="display: inline-block";>
      <a  class="blog-title-link w-inline-block">
         <h1  id="title" class="blog-title" >
            <slot id="sd" name="title"></slot>
         </h1>
      </a>
   <div class="post-info-wrapper">
      <div class="post-info">
         <div  class="icon-info-calendar" > </div>
         <span id="date" class= "post-info-txt"></span> 
      </div>
      <div class="post-info">
         <div  class="icon-info-clock" > </div>
         <span id="time" class= "post-info-txt"></span> 
      </div>
      <div class="post-info" >
         <div  class="icon-info" > </div>
         <span id="type" class= "post-info-txt"></span> 
      </div>
   </div>
      <div>
         <slot name="summary" class="post-summary">
         </slot>
      </div>
   </div>
   
   <div class="img-post">
   <img class="image-i" />
  </div>
  
  <div id="bottom-post" style=" display:inline-block; vertical-align:middle; width:100%">
   <a class="button-round w-button"  >Continuar leyendo →</a>
   <div class="so-icon">
      <ul  class="so-icon-ul" >
         <li class="so-icon-ul-li"><img src="../img/fac.svg" title="facebook"></li>
         <li class="so-icon-ul-li"><img src="../img/twit.svg" title="twitter"></li>
      </ul>
   </div>
</div>
</div>



`;

export class Prueba extends HTMLElement {
  constructor() {
    super();

    this.attrHref = "";
    this.title = this.getAttribute("titlep");
    this.date = this.getAttribute("datep");
    this.time = this.getAttribute("timep");
    this.type = this.getAttribute("typep");
    this.attachShadow({ mode: "open" });
   
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.getElementById("title").innerHTML = this.title;
    this.shadowRoot.getElementById("date").innerHTML = this.date;
    this.shadowRoot.getElementById("time").innerHTML = this.time;
    this.shadowRoot.getElementById("type").innerHTML = this.type;
    this.shadowRoot.querySelector(".image-i").setAttribute("src",this.getAttribute("src"));
  }

  render() {
   this.attrHref = this.attrHref +   "?" + "title=" + this.title   + "&date=" + this.date +  "&type=" + this.type ; 
    this.shadowRoot.querySelector(".button-round").setAttribute("href", this.attrHref);
    this.shadowRoot.querySelector(".blog-title-link").setAttribute("href", this.attrHref);
  }

  connectedCallback() {
  
  
  }

  attributeChangedCallback(attr, oldval, newval) {
    if (attr == "href") {
      this.attrHref = newval ;

      this.render();
    }



  }

  static get observedAttributes() {
    return ["href","title"];
    
  }


}

window.customElements.define("post-wrapper", Prueba);
