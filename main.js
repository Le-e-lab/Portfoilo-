let hue = 0;
function changeBackgroundHue() {
    hue = (hue + 20) % 360;
    document.body.style.background = `linear-gradient(to bottom, hsl(${hue}, 10%, 50%), hsl(${hue}, 10%, 30%))`;
}
setInterval(changeBackgroundHue, 3000);