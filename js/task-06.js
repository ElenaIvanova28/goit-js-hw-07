const input = document.querySelector('#validation-input');
const limitLength = parseInt(
    document.querySelector('#validation-input').dataset.length,
);
const getValue = () => {
    let value = input.value.length;
   if (value !== limitLength) {
    input.classList.add('invalid');
    input.classList.remove('valid');
    return;
}
input.classList.remove('invalid');
input.classList.add('valid');
};
//const clearInput = () => {
   // input.value = '';
   // input.classList.remove('valid', 'invalid');
//};
input.addEventListener('input', getValue);
//input.addEventListener('click', clearInput);
