let items = document.getElementsByClassName("itemlink");
let wrapper = document.getElementById("wrapper");
items[2].style = `
    background-color : #0b025dff;
`;

for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
  items[i].addEventListener("click", (e) => {
    for (let j = 0; j < items.length; j++) {
      items[j].classList.remove("active");
      items[j].style = `
        background-color : #cccccc;
      `;
    }
    var clickLink = e.target;
    let pos = clickLink.getAttribute("data-pos");
    let translate = `translateX(${-pos * 33}%)`;
    wrapper.style.transform = translate;
    clickLink.classList.add("active");
    let active = document.getElementsByClassName("active");

    active[0].style = `
        background-color : #0b025dff;
    `;
  });
}
