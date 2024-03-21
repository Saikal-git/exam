const inputName = document.querySelector(".inputName");
const inputEmail = document.querySelector(".inputEmail");
const inputUrl = document.querySelector(".inputUrl");
const cleat = document.querySelector(".cleat");
const read = document.querySelector(".read");
const cards = document.querySelector(".cards");
const del = document.querySelector(".del");

readCard();

function addCard() {
  let result = JSON.parse(localStorage.getItem("card")) || [];
  let newCard = {
    id: new Date(),
    name: inputName.value,
    email: inputEmail.value,
    url: inputUrl.value,
  };
  let res = [...result, newCard];
  localStorage.setItem("card", JSON.stringify(res));
  readCard();
  console.log(res);
}

function readCard() {
  cards.innerHTML = "";
  let result = JSON.parse(localStorage.getItem("card")) || [];
  result.map((el) => {
    cards.innerHTML += `
    <h1>Contacts</h1>
    <div class="card">
    <div>x</div>
        <div class="mainCard">
        <img src="${el.url}" alt="img" width=30 height=35>
        <div class="className">
        <h6>name: ${el.name}</h6>
        <h6>email: ${el.email}</h6>
        </div>
        <button class="del" onclick="delCard(${el.id})">Delete</button>
        </div>
        </div>
        `;
  });
}



function delCard(Id) {
  let result = JSON.parse(localStorage.getItem("card")) || [];
  let res = result.filter((el) => el.id !== Id);
  localStorage.setItem("card", JSON.stringify(res));
  readCard();
}

cleat.addEventListener("click", () => addCard());
