const BASE_URL = 'https://fathomless-shelf-54969.herokuapp.com';
const solen = document.querySelector('.solen');
const merkurius = document.querySelector('.merkurius')
const venus = document.querySelector('.venus')
const jorden = document.querySelector('.jorden')
const mars = document.querySelector('.mars')
const jupiter = document.querySelector('.jupiter')
const saturnus = document.querySelector('.saturnus')
const uranus = document.querySelector('.uranus')
const neptunus = document.querySelector('.neptunus')
const article = document.querySelector('article')
const section = document.querySelector('section')
const h1 = document.querySelector('.name')
const latin = document.querySelector('.latin')
const p = document.querySelector('p')
const perimeter = document.querySelector('.omkrets')
const distance = document.querySelector('.avstånd')
const maxTemp = document.querySelector('.max-temp')
const minTemp = document.querySelector('.min-temp')
const moons = document.querySelector('.månar')
const btn = document.querySelector('button')



async function getPlanets() {
    const response = await fetch(`${BASE_URL}/keys`, { method: 'POST' });
    const data = await response.json();
    const rep = await fetch(`${BASE_URL}/bodies`, {

        headers: {
            'x-zocom': data.key
        }
    });
    dataPlanet = await rep.json();
}




async function planetInfo() { // hämta planeternas id 
    await getPlanets();
    console.log(dataPlanet)
    
    solInfo = dataPlanet.bodies[0]
    merkuriusInfo = dataPlanet.bodies[1]
    venusInfo = dataPlanet.bodies[2]
    jordenInfo = dataPlanet.bodies[3]
    marsInfo = dataPlanet.bodies[4]
    jupiterInfo = dataPlanet.bodies[5]
    saturnusInfo = dataPlanet.bodies[6]
    uranusInfo = dataPlanet.bodies[7]
    neptunusInfo = dataPlanet.bodies[8]
}

function showDatail(planetName, latinName, description,
    Perimeter, Distance, MinTemp, MaxTemp) {

    article.classList.toggle('hide')
    section.classList.toggle('hide')
    h1.innerText = planetName
    latin.innerText = latinName
    p.innerText = description
    perimeter.innerText = `${Perimeter} Km`
    distance.innerText = `${Distance} Km`
    minTemp.innerText = `${MinTemp} C`
    maxTemp.innerText = `${MaxTemp} C`
}

function moonInfo(planet) {
    let moonsName = []
    for (let i = 0; i < planet.moons.length; i++) {
        moonsName.push(`${planet.moons[i]}`)
    }
    moons.innerText = moonsName.toString()
}

planetInfo();

solen.addEventListener('click', () => {
    moonInfo(solInfo);
    showDatail(solInfo.name, solInfo.latinName, solInfo.desc, 
    solInfo.circumference, solInfo.distance, 
    solInfo.temp.day, solInfo.temp.night)
})

merkurius.addEventListener('click', () => {
    moonInfo(merkuriusInfo);
    showDatail(merkuriusInfo.name, merkuriusInfo.latinName, merkuriusInfo.desc, 
    merkuriusInfo.circumference, merkuriusInfo.distance, merkuriusInfo.temp.day, 
    merkuriusInfo.temp.night)
})
venus.addEventListener('click', () => {
    moonInfo(venusInfo);
    showDatail(venusInfo.name, venusInfo.latinName, venusInfo.desc, 
    venusInfo.circumference, venusInfo.distance, venusInfo.temp.day, 
    venusInfo.temp.night)
})
jorden.addEventListener('click', () => {
    moonInfo(jordenInfo);
    showDatail(jordenInfo.name, jordenInfo.latinName, jordenInfo.desc, 
    jordenInfo.circumference, jordenInfo.distance, jordenInfo.temp.day, 
    jordenInfo.temp.night)
})

mars.addEventListener('click', () => {
    moonInfo(marsInfo)
    showDatail(marsInfo.name, marsInfo.latinName, marsInfo.desc,
    marsInfo.circumference, marsInfo.distance, marsInfo.temp.day, 
    marsInfo.temp.night)
})
jupiter.addEventListener('click', () => {
    moonInfo(jupiterInfo)
    showDatail(jupiterInfo.name, jupiterInfo.latinName, jupiterInfo.desc,
    jupiterInfo.circumference, jupiterInfo.distance, jupiterInfo.temp.day, 
    jupiterInfo.temp.night)
})
saturnus.addEventListener('click', () => {
    moonInfo(saturnusInfo)
    showDatail(saturnusInfo.name, saturnusInfo.latinName, saturnusInfo.desc,
    saturnusInfo.circumference, saturnusInfo.distance, saturnusInfo.temp.day, 
    saturnusInfo.temp.night)
})
uranus.addEventListener('click', () => {
    moonInfo(uranusInfo)
    showDatail(uranusInfo.name, uranusInfo.latinName, uranusInfo.desc,
    uranusInfo.circumference, uranusInfo.distance, uranusInfo.temp.day, 
    uranusInfo.temp.night)

})
neptunus.addEventListener('click', () => {
    moonInfo(neptunusInfo)
    showDatail(neptunusInfo.name, neptunusInfo.latinName, neptunusInfo.desc,
    neptunusInfo.circumference, neptunusInfo.distance, neptunusInfo.temp.day, 
    neptunusInfo.temp.night)
})

btn.addEventListener('click', () => {
    article.classList.toggle('hide')
    section.classList.toggle('hide')
})