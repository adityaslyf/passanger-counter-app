let countEl = document.getElementById("count-el");

let count = 0;

function increment() {
  count +=1;
  countEl.innerText = count
}

// let SaveBtn = document.getElementById("save-btn");
// function save (){
//   count = count +1;
// SaveBtn.innerText =count;

// }

// function save (){
//   count +=1;
//   let Entries = "Previous Entries:";
//   let firstEntry = document.getElementByjId("save-btn")
//   firstEntry.innerText = Entries + count;
//   console.log(firstEntry)


// }

function save (){

let SaveEl = document.getElementById("entries");
let special = " " + count + " -\ ";
SaveEl.innerText += special;
console.log(count)
countEl.textContent = 0;
count = 0;
}

