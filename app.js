const my_api = ''
const bypass_cors_url = 'https://cors-anywhere.herokuapp.com/'
const api_url = 'https://geo.ipify.org/api/'

const headers_option = {
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
}

const map = L.map('mapid').setView([51.505, -0.09], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2hyaXNoamFpcyIsImEiOiJja3E2eHVoZnAwMHJ1Mm90OGU1djFjaDJsIn0.Eqv60N3sTr6_CJDjkFBLaA'
}).addTo(mymap);