let hamburger_menu = document.querySelector(".hamburger-menu");
let email = document.querySelector("#email");
let big_wrapper = document.querySelector(".big-wrapper");
hamburger_menu.addEventListener("click", ()=> {
    big_wrapper.classList.toggle("active");
});

async function joinWaitlist(e) {
    try {
        e.preventDefault();
        const response = await fetch("https://begg-dev-backend.onrender.com/waitlist/wait", {
            method: "POST",
            body: {
                "email": email
            }
        });
        const waitlist_response = await response.json();
        console.log(waitlist_response);
    } catch (error) {
        console.log('Error ', error);
    }
}

document.getElementById("cta").addEventListener("submit", joinWaitlist);
