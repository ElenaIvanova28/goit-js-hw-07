const input = document.getElementById
('font-size-control');
const spanText = document.getElementById('text');
const fontSizeControl = () => {
    spanText.setAttribute('style', `font-size: ${input.value}px`);
};
input.addEventListener('input', fontSizeControl);