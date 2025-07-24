// fetch("https://potterapi-fedeperin.vercel.app/en/houses")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("could not fetch resource");
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

const URLhouses = "https://potterapi-fedeperin.vercel.app/en/houses";
const URLchars = "https://potterapi-fedeperin.vercel.app/en/characters";
const URLspells = "https://potterapi-fedeperin.vercel.app/en/spells";

// Houses
async function housesApi() {
  const resp = await fetch(URLhouses);
  if (resp.status === 200) {
    const houses = await resp.json();
    renderizarHouses(houses);
  }
}

function renderizarHouses(houses) {
  const container = document.getElementById("housesContainer");
  let html = ``;
  houses.forEach((house) => {
    html += `<div class="house-cards">      
      <h3>${house.house}</h3>
      <p>Animal : ${house.animal}</p>
      <p>Emoji : ${house.emoji}</p>
      <p>Color : ${house.colors}</p>
      <p>Founder : ${house.founder}</p>     
      </div>
    `;
  });
  container.innerHTML = html;
}

// Characters
async function charApi() {
  const charResp = await fetch(URLchars);
  if (charResp.status === 200) {
    const chars = await charResp.json();
    renderizarChars(chars);
  }
}

function renderizarChars(chars) {
  const charsContainer = document.getElementById("charsContainer");
  let html = ``;
  chars.forEach((char) => {
    html += `
      <div class="chars-cards">
      <h3>${char.fullName}</h3>
      <p>Nickname : ${char.nickname}</p>
      <p>House : ${char.hogwartsHouse}</p>
      <p>Actor : ${char.interpretedBy || "Not in the movies"}</p>
      <img src="${char.image}" alt="${char.fullName}" class="imgs">
      </div>      
    `;
  });
  charsContainer.innerHTML = html;
}

// Spells
async function spellsApi() {
  const spellsResp = await fetch(URLspells);
  if (spellsResp.status === 200) {
    const spells = await spellsResp.json();
    renderizarSpells(spells);
  }
}

function renderizarSpells(spells) {
  const spellsContainer = document.getElementById("spellsContainer");
  let html = ``;
  spells.forEach((spell) => {
    html += `
    <div class="spells-cards">
      <h3>${spell.spell}</h3>
      <p>${spell.use}</p>
      </div>
    `;
  });
  spellsContainer.innerHTML = html;
}

// Chamar APIs
housesApi();
charApi();
spellsApi();
