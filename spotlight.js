// taken from https://github.com/hackclub/athena/blob/main/components/Background.tsx (adapted to be not-React)
const spotlightOverlay = document.getElementById('spotlight-overlay');
const spotlight = document.getElementById('spotlight');

window.addEventListener('mousemove', (event) => {
const rect = spotlight.getBoundingClientRect();
const x = event.clientX - rect.left;
const y = event.clientY - rect.top;

spotlightOverlay.style.background = `
    radial-gradient(
    circle at ${x}px ${y}px,
    rgba(132, 146, 166, 0) 10px,
    rgba(249, 250, 252, 0.8) 125px
    )
`;
});
