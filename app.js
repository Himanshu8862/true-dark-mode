const content = document.getElementsByTagName("div")[0];
let torchActive = false;

content.addEventListener('mousemove', (e) => {
    if (!torchActive) {
        torchActive = true;
        content.style.background = 'transparent';
    }

    const x = e.clientX;
    const y = e.clientY;

    const rect = content.getBoundingClientRect();
    const offsetX = x - rect.left;
    const offsetY = y - rect.top;

    const radius = 100;

    content.style.background = `
    radial-gradient(circle ${radius}px at ${offsetX}px ${offsetY}px, transparent, black)
`;
});

content.addEventListener("mouseout", () => {
    content.style.background = 'black';
    torchActive = false;
});

const lightsOn = (e) => {
    content.style.background = 'white';
}
