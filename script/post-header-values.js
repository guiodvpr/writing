const values = window.location.search;
const urlParams = new URLSearchParams(values);
var title= urlParams.get('title');
var date = urlParams.get('date');
var type = urlParams.get('type');
var hp = document.querySelector(".hp")
document.title = title;
hp.setAttribute("title",title);
hp.setAttribute("date",date);
hp.setAttribute("type",type);
