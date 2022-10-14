const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const myItem = input.value;
    // If there isn't anything entered we don't want to add it to the list
    if (myItem == ''){return;}
    input.value = '';
    
    const newLi = document.createElement('li');
    const newSpan = document.createElement('span');
    const newButton = document.createElement('button');
    
    newLi.appendChild(newSpan);
    newSpan.textContent = myItem;
    newLi.appendChild(newButton);
    newButton.innerHTML = '&#10060';
    list.appendChild(newLi);
    
    newButton.addEventListener('click', () => {
        list.removeChild(newLi);
    });
    input.focus();
});