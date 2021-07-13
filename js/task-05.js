const inputName = document.getElementById('name-input');
const outputName = document.getElementById('name-output');
const hiddenText = document.querySelector('h1');
//hiddenText.hidden = true;
//
const addUserName = () => {
    let name = inputName.value.trim();
  //  hiddenText.hidden = false;
    outputName.textContent = name.length > 0 ? name : 'незнакомец';
};
inputName.addEventListener('input', addUserName);
//inputName.addEventListener('blur', addUserName);
//console.log(name);