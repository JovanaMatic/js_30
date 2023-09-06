const checkBoxes = document.querySelectorAll("input");

console.log(checkBoxes);
let newArr = [];

Array.from(checkBoxes).map((item, index) => {
  item.addEventListener("click", (e) => {
    if (e.shiftKey) {
      item.nextElementSibling.classList.toggle("active");
      newArr.push(index);
      newArr.sort();
      
      for (let i = newArr[0]; i < newArr[newArr.length - 1]; i++) {
        console.log(i);
        document
          .getElementById(`checkbox${i + 1}`)
          .nextElementSibling.classList.add("active");
        document.getElementById(`checkbox${i + 1}`).checked = true;
      }
    } else {
      item.nextElementSibling.classList.toggle("active");
    }
  });
});
