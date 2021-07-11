const form = document.querySelector('.input');
const submit = document.querySelector('.arrow-div');
const inputBox = document.querySelector('.input-text');
let dispIp = document.querySelector('.disp-ip');
let dispLocation = document.querySelector('.disp-loc');
let dispTimeZone = document.querySelector('.disp-time');
let dispIsp = document.querySelector('.disp-isp');
const my_api = 'at_qaTjU1zdLe732mQQrtDJBtaW9HTU2';
const api_url = 'https://geo.ipify.org/api/v1';
let ip = '192.212.174.101';
const map = L.map('mapid');

map.setView([34.04915, -118.09462], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// L.tileLayer('mapbox://styles/shrishjais/ckqzj0a3l69m617rw3laexy75', {
//     // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18
//     // id: 'mapbox/streets-v11',
//     // tileSize: 512,
//     // zoomOffset: -1,
//     // accessToken: 'pk.eyJ1Ijoic2hyaXNoamFpcyIsImEiOiJja3E2eHJlaDkwMHFvMm9yejg4NXR4dHhoIn0.bvy0tHprM1LoMU0KBLZB3w'
// }).addTo(map);

L.marker([34.04915, -118.09462]).addTo(map)
    .openPopup();

const getData = async () => {
    try {
        const response = await axios.get(api_url, {
            params: {
                apiKey: my_api,
                ipAddress: inputBox.value
            }
        });
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    resp = await getData();
    console.log(resp);
    dispIp.innerText = resp.ip;
    let rloc = resp.location;
    dispLocation.innerText = `${rloc.city}, ${rloc.region} ${rloc.postalCode}`;
    dispTimeZone.innerText = rloc.timezone;
    dispIsp.innerText = resp.isp;
    map.setView([rloc.lat, rloc.lng], 13);
    L.marker([rloc.lat, rloc.lng]).addTo(map)
        .openPopup();
})



