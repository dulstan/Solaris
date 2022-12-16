
const BASE_URL = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/solaris-api/";

const planetInfo = document.querySelector(".planetSection");
const planets = document.querySelectorAll(".planets");
const allPlanets = document.querySelectorAll("article");
let solaris;
const getBack = document.querySelector(".backBtn ");


async function getKey() {
  const response = await fetch(`${BASE_URL}/keys`);

  const data = await response.json();
  // console.log(data);
  return data.key;
}

function displayPlanets(solaris) {
  planetInfo.innerHTML = ``;

  let wrapper = `
<article class="pageTwo">
<h1 class="pageName">${solaris.name}</h1>
<h3 class="pageLatin">${solaris.latinName}</h3>
<p class="description">${solaris.desc}</p>
<hr/>
<section id="section">
<section class="sectionOne">
<h4 class="omkrets">Omkrets</h4>
<p>${solaris.circumference}km</p>
<h4>Max Temperator</h4>
<p>${solaris.temp.day}C</p>
</section>

<section class="sectionTwo">
<h4>Min Temperator</h4>
<p>${solaris.temp.night} C</p>
<h4>KM Från Solen</h4>
<p>${solaris.distance} </p>
</section>



</section>
<hr/>

<h5 class="moons">MOONS</h5>
<p class="moon"> ${solaris.moons.join(`,`)} </p>


<button class="backBtn"><img src="/img/Zocom-logo-white 1.png"></button>


<figure class="side">
<li class="firstSide"></li>
<li class="secSide"></li>
<li class="theSide"></li>
</figure>
</article>`;

  planetInfo.insertAdjacentHTML("beforeend", wrapper)

}

async function getPlanets() {
  const key = await getKey();
  const response = await fetch(`${BASE_URL}/bodies`, {
    method: "GET",
    headers: {
      "x-zocom": key,
    }
  });

  solaris = await response.json();

  //onsole.log("####", solaris);

  allPlanets.forEach((planets, index) => {
    planets.addEventListener("click", function () {
      const planetClicked = solaris[index];
      displayPlanets(planetClicked);
      if (
      planetInfo.style.display = 'flex'
      ) {
      planets.style.display = 'none';
        
      } else {
      planets.style.display = 'flex';
      }
    });
  });
}
function goBack(){
  planetInfo.addEventListener('click', ()=>{
    if (
      planetInfo.style.display = 'flex'
    ) {
      planetInfo.style.display = 'none'
      
    } else {
      allPlanets.style.display='flex'
    }
  })
}

goBack()

getPlanets();