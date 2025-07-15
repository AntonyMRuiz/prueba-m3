import { guard, routes } from "./router.js"

const content = document.getElementById("app");

document.addEventListener("DOMContentLoaded", () => {
    guard();
})

document.addEventListener("click", (event) => {
    if (event.target.matches("a[data-link]")) {
        event.preventDefault();
        location.hash = event.target.getAttribute("href");
    }
})

window.addEventListener("hashchange", router)

function router() {
    let path = location.hash;
    path = routes[path] ? path : "#/404";

    content.innerHTML = routes[path].render();
    routes[path].service();
}