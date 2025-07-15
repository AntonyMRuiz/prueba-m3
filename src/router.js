import { dashboardRender, dashboardSevice } from "./views/dashboardView.js";
import { notFoundRender, notFoundService } from "./views/notFoundView.js";
import { singInRender, singInService } from "./views/singInView.js";
import { singUpRender, singUpService } from "./views/singUpView.js";

const content = document.getElementById("app");
const aside = document.getElementById("aside");

export const routes = {
    "#/" : {
        "render": singInRender,
        "service": singInService
    },
    "#/singIn" : {
        "render": singInRender,
        "service": singInService
    },
    "#/singUp" : {
        "render": singUpRender,
        "service": singUpService
    },
    "#/dashboard" : {
        "render": dashboardRender,
        "service": dashboardSevice
    },
    "#/404" : {
        "render": notFoundRender,
        "service": notFoundService
    }
}

export function guard() {
    const userLogin = sessionStorage.getItem("user");
    
    if (!userLogin) {
        content.innerHTML = routes["#/singIn"].render();
        routes["#/singIn"].service();

        aside.innerHTML = "";
        location.hash = "/singIn"
    } else {
        content.innerHTML = routes["#/dashboard"].render();
        routes["#/dashboard"].service();
    }
}