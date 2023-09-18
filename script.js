
 const select=document.getElementById('inputGroupSelect01');

 document.getElementById('play').addEventListener('click', function(){
  
   let scelta=select.selectedIndex;


  //  Fare un switch per creare le diverse opzioni del gioco, che sarebbero facile:100 box, medio:81box e difficile 64box.
  const container= document.querySelector('.container');
  switch (scelta) {

    default:
      container.innerHTML="";
      alert("Scegliere una difficoltà");
      break;

    case 1:
      container.innerHTML="";
      for (let cont = 0; cont < 100; cont++) {
        const element = document.createElement('div');
        element.classList.add("box1")
        container.append(element);
      }
      break;
    
    case 2:
      container.innerHTML="";
      for (let cont = 0; cont < 81; cont++) {
        const element = document.createElement('div');
        element.classList.add("box2")
        container.append(element);
      }

      break;  

    case 3:
      container.innerHTML="";
      for (let cont = 0; cont < 64; cont++) {
        const element = document.createElement('div');
        element.classList.add("box3")
        container.append(element);
      }

      break;
   
  
   }

 })