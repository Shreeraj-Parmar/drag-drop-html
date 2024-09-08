let lists = document.querySelectorAll(".list"); // select all list class element
let boxs = document.querySelectorAll(".box"); // select all list class element
let rightBox = document.querySelector(".right"); // select right box
let leftBox = document.querySelector(".left"); // select left box

let selected;
// apply for of loop into lists
for (list of lists) {
  // we write drag & drop code inside the list element
  list.addEventListener("dragstart", (e) => {
    // the element must be draggable="true" attribute
    // This event is triggered when the user starts dragging an element. It defines what data should be transferred when dragging begins.
    console.log("drag started of :", e.target);

    selected = e.target; // select the element

    // method:1
    // rightBox.addEventListener("dragover", (e) => {
    //   // we can drap inside it
    //   e.preventDefault(); // check readme.md file
    // });
    // rightBox.addEventListener("drop", (e) => {
    //   // we can drop inside here
    //   rightBox.appendChild(selected);
    //   selected = null;
    // });
    // leftBox.addEventListener("dragover", (e) => {
    //   e.preventDefault();
    // });
    // leftBox.addEventListener("drop", (e) => {
    //   leftBox.appendChild(selected);
    //   selected = null;
    // });
  });
  // drag end event
  list.addEventListener("dragend", (e) => {
    // it occure when we draag karelu chodi dai te
    console.log("drag end of :", e.target);
  });
}

// we can also write like this to reduce code
// method 2
for (box of boxs) {
  box.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  box.addEventListener("drop", (e) => {
    e.target.append(selected);
    selected = null;
  });
}
