import API from "./api.js";

const EnterSubmit = document.querySelector(".start")
const About = document.querySelector(".about_me")
let password
let Login



const data = {
  "phone_number": "+998911111111",
  "password": "parol123"
}

EnterSubmit.addEventListener("click", ()=>{
Login = document.querySelector(".login_input").value
password = document.querySelector(".pasword_input").value

  data.phone_number = Login
  data.password = password
  API.post("/accounts/login/", data).then(res=>{
    console.log(res)
    localStorage.setItem("access", res.access_token)
    localStorage.setItem("refresh", res.refresh_token)
  }
  ).catch(err=> console.log(err))
  API.get("/accounts/me/")
  .then(e => {
    console.log(e);
    const innerHTML = `
      <p class="text-sm">${e.id}</p>
      <p class="text-sm">${e.full_name}</p>
      <p class="text-sm">${e.phone_number}</p>
    `;
    About.innerHTML = innerHTML;
  })
  .catch(error => {
    console.error("Error fetching account data:", error);
  });


  console.log(data.password);
})




  




// API.get("/store/categories-with-childs/").then(e => console.log(e));





