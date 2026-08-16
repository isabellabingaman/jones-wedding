document.addEventListener('DOMContentLoaded', function () {

  const nav = document.getElementById('site-navigation');

  if (!nav) {
    return;
  }

  nav.innerHTML = `
    <a href="index.html">Home</a>
    <a href="details.html">Details</a>
    <a href="travel.html">Travel</a>
    <a href="wedding-party.html">Wedding Party</a>
    <a href="gallery.html">Gallery</a>
    <a href="registry.html">Registry</a>
    <a href="rsvp.html">RSVP</a>
  `;

});
