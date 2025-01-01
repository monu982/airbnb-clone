const map = new maplibregl.Map({
  container: "map",
  style:
    "https://api.maptiler.com/maps/streets-v2/style.json?key=vn8NOqOj6g6wgjXMXMpB",
  center: listing.geometry.coordinates,
  zoom: 10,
});
console.log(listing.geometry.coordinates);

map.addControl(new maplibregl.AttributionControl(), "top-left");

const marker = new maplibregl.Marker({ color: "Red" })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new maplibregl.Popup({ closeOnClick: false }).setHTML(
      `<h4>${listing.title}</h4><p>Exact Location provided after booking</p>`
    )
  )
  .addTo(map);
