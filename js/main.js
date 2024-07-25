const items = document.querySelectorAll(".menu-item");
const item = document.querySelector(".menu-item");

const subs = document.querySelectorAll(".menu-item__item");

// for (let i = 0; i < items.length; i++) {
//     items[i].addEventListener("click", () => {
//         const isActive = subs[i].classList.contains("active");

//         for (let y = 0; y < items.length; y++) {
//             subs[y].classList.remove("active");
//         }

//         if (!isActive) {
//             subs[i].classList.add("active");
//         }
//     });
// }

console.log(items);