const signInButton = document.getElementById("signin");
const signUpButton = document.getElementById("signup");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
  console.log("dasdasd")
});

signInButton.addEventListener("click", ()=> {
  container.classList.remove("right-panel-active");
})