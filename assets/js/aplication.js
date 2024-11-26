document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const items = track.innerHTML;

    track.innerHTML += items;
});
