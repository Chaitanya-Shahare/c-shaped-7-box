let container = document.getElementById("container");
let boxes = document.querySelectorAll(".box");
let queue = [];

container.addEventListener("click", (e) => {
  let index = e.target.dataset.index;
  //   console.log(typeof boxes, boxes);
  console.log(e.target.dataset.animal);
  if (index === undefined) {
    return;
  }
  queue.push(index);
  boxes[index].classList.add("box--colored");

  if (queue.length === 7) {
    let count = 0;
    while (queue.length) {
      let toRemoveIndex = queue.shift();
      count++;
      setTimeout(() => {
        boxes[toRemoveIndex].classList.remove("box--colored");
      }, 1000 * count);
    }
  }
});
