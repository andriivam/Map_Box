import mapboxgl from "mapbox-gl";
import * as dotenv from 'dotenv';

 const formAddress = document.getElementById("formAddress");
// adding event listener to our form
        formAddress.addEventListener("submit", (e) => {
        e.preventDefault();
        let location = document.getElementById("location").value;
        console.log(location);
// fetch link with geolocation from mapBox
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?proximity=ip&types=address&access_token=${process.env.MAPBOX_API_KEY}`)
        .then((response) => response.json())
        .then(data => {
            console.log(data.features[0].center)
// take part of code frm mapBox resources
        mapboxgl.accessToken =
        "pk.eyJ1IjoiYW5kcmlpdmFtIiwiYSI6ImNsYWZhYno0cjBlOXczb3FqeXF6bXkzMWYifQ.tdL3jabQ3Ig0DwFd0xNClw";
const map = new mapboxgl.Map({
        container: "map", // container ID 
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: data.features[0].center, // starting position [lng, lat]
        zoom: 18, // starting zoom
        projection: "globe", // display the map as a 3D globe
    });

    map.on("style.load", () => {
        map.setFog({}); // Set the default atmosphere style
    });
        })

});
