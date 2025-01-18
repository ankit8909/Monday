const trackId = document.getElementById("pract");
trackId.style.cssText = "border:2px solid red";

const cln = trackId.cloneNode(true);
document.body.appendChild(cln);

trackId.id="myid";
trackId.className="myclass";


// ===========Window.open()=======================
const btn = document.getElementById("btn");
const url = "https://facebook.com";
const features = "height=500, width=500";
btn.addEventListener("click", ()=>{
    window.open(url, "Google", features)
})
//================== inner height  & outer height==============

console.log(window.innerHeight)
console.log(window.outerHeight)
console.log(location.url);
console.log(location.pathname);
console.log(location.href);
console.log(location.protocol);

const track = document.getElementById("pract");
const newElm = document.createElement("h2");
const addtext = document.createTextNode("heading 2");
newElm.appendChild(addtext);
const posi = track.firstElementChild;
track.insertAdjacentElement("afterend", newElm);

// redirect to anysite with function
function fun(){
// window.location = "https://www.google.com";    method-1
// method-2
// in this method include back button
// location.assign("https://www.google.com");
// method-3
// in this method don't have an back button
// location.replace("https://www.google.com")
// method 4
location.reload();
}


