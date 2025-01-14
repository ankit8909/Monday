// for clone
const myid = document.getElementById("cl");
// const cn = myid.cloneNode(true);
const cn = myid.cloneNode(true);
cn.id = "myid";
cn.className = "myclass";
document.body.appendChild(cn);

console.log(cn);

// for replace

const parent = document.getElementById("cl");
const newelement3 = document.createElement("li");
newelement3.textContent = "Replace item";
//select position which on replace
const pos = parent.firstElementChild.nextElementSibling;
parent.replaceChild(newelement3, pos);

// ================InsertAdacentHTML()=============================
const elrr = document.getElementById("insrt");
const myworld = "<h1> hello worlffffd </h1>";
elrr.insertAdjacentHTML("beforebegin", myworld)