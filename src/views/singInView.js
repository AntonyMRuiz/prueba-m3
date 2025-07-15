import { config } from "../config.js";
import { getData } from "../services/requestJsonserver.js";

export function singInRender() {
    return `
        <div class="d-flex justify-content-center align-items-center vh-100 vw-100">
            <div class="card" style="width: 500px;">
                <form class="card-body ubuntu-medium">
                    <h2 class="card-title ubuntu-bold text-center">Login</h2>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input
                    required
                    type="email"
                    class="form-control"
                    id="email"
                    />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input
                    required
                    type="password"
                    class="form-control"
                    id="password"
                    />
                </div>
                <div class="d-grid mb-3">
                    <button type="submit" class="btn btn-purple">Login</button>
                </div>
                <p class="text-muted text-center">Don't have an account? <a href="#/singUp" class="text-decoration-none" data-link>Register</a></p>
                </form>
                </form>
            </div>
        </div>
    `
}

export function singInService() {
    const singInForm = document.querySelector("form");

    singInForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        
        const user = (await getData(config.userByEmail(email)))[0];

        if (!user) {
            alert("User not register");
            return;
        }

        if (!(user["password"] === password)) {
            alert("Credential invalid");
            return;
        }

        location.hash = "/home";
        sessionStorage.setItem("user",JSON.stringify(user));
    })
}