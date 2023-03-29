
const btnOne = document.querySelector('.btnOne');
const btnTwo = document.querySelector('.btnTwo');
const btnThree = document.querySelector('.btnThree');
const btnFour = document.querySelector('.btnFour');
const btnFive = document.querySelector('.btnFive');
const btnSubmit = document.querySelector('#btnSubmit');

let selRate = []


btnOne.addEventListener('click', function () {
    if (selRate.length === 0) {
        btnOne.classList.add('checked')
        selRate = [btnOne.textContent, btnOne]
    } else { 
        selRate[1].classList.remove('checked')
        btnOne.classList.add('checked')
        selRate = [btnOne.textContent, btnOne]
    }
  });

btnTwo.addEventListener('click', function () {
    if (selRate.length === 0) {
        btnTwo.classList.add('checked')
        selRate = [btnTwo.textContent, btnTwo]
    } else { 
        selRate[1].classList.remove('checked')
        btnTwo.classList.add('checked')
        selRate = [btnTwo.textContent, btnTwo]
    }
  });

btnThree.addEventListener('click', function () {
    if (selRate.length === 0) {
        btnThree.classList.add('checked')
        selRate = [btnThree.textContent, btnThree]
    } else { 
        selRate[1].classList.remove('checked')
        btnThree.classList.add('checked')
        selRate = [btnThree.textContent, btnThree]
    }
  });

btnFour.addEventListener('click', function () {
    if (selRate.length === 0) {
        btnFour.classList.add('checked')
        selRate = [btnFour.textContent, btnFour]
    } else { 
        selRate[1].classList.remove('checked')
        btnFour.classList.add('checked')
        selRate = [btnFour.textContent, btnFour]
    }
  });

btnFive.addEventListener('click', function () {
    if (selRate.length === 0) {
        btnFive.classList.add('checked')
        selRate = [btnFive.textContent, btnFive]
    } else { 
        selRate[1].classList.remove('checked')
        btnFive.classList.add('checked')
        selRate = [btnFive.textContent, btnFive]
    }
  });

btnSubmit.addEventListener('click', function () {
    if (selRate.length > 0) {
        document.getElementById("panelStart").style.visibility = "hidden";
        document.getElementById("panelEnd").style.visibility = "visible";
        document.querySelector('#selection').innerText = `You selected ${selRate[0]} out of 5`
    } else { 
        alert('You must select a rating button before submitting')    
    }
  });

