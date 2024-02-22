const Modal = document.querySelector(".modal")
const ExitBtn = document.querySelector(".exitBtn")
const Close = document.querySelector(".close")
ExitBtn .addEventListener("click", ()=>{
  Modal.classList = "login";})
  Close.addEventListener("click", ()=>{
  Modal.classList = "hidden";})


const Search = document.querySelector(".search")
const search_modal = document.querySelector(".form_modal")
const search_data = document.querySelector(".search_data")


Search.addEventListener("focus",(e)=>{
    search_modal.classList = "search_modal"
     search_data.classList = "search_form_data"
})

















  const buttons = document.querySelectorAll(".Btnheart");
  const Btnheartblack = document.querySelectorAll(".Btnheartblack");
  
  buttons.forEach(button => {
      const relatedButton = button.nextElementSibling; 
      button.addEventListener("click", () => {
          relatedButton.classList.toggle("hidden");
          button.classList.toggle("hidden"); 
      });
  });
  
  Btnheartblack.forEach(blackButton => {
      blackButton.addEventListener("click", () => {
          const relatedButton = blackButton.previousElementSibling; 
          relatedButton.classList.toggle("hidden");
          blackButton.classList.toggle("hidden");
      });
  });


