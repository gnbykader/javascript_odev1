

// let counter = 0
// let counterDom = document.querySelector('#counter')

// let increaseDom = document.querySelector('#increase')
// let decreaseDom = document.querySelector('#decrease')

// counterDom.innerHTML = counter

// increaseDom.addEventListener("click",clickEvent)
// decreaseDom.addEventListener("click",clickEvent)


// function clickEvent(){
//     console.log(this.id)
//     if(this.id == increase){
//         counterDom.innerHTML =counter+=1
//     }
//     else{
//         counterDom.innerHTML = counter-=1
//     }
// }


let userName = prompt("Adınızı giriniz:");


const nameElement = document.querySelector("#myName");
nameElement.innerHTML = userName


function showTime() {
  const now = new Date();

  
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  
  const days = [
    "Pazar", "Pazartesi", "Salı", "Çarşamba",
    "Perşembe", "Cuma", "Cumartesi"
  ];
  const day = days[now.getDay()];


  const timeString = `${hours}:${minutes}:${seconds}  ${day}`;

  
  const clockElement = document.querySelector("#myClock");
  clockElement.innerHTML = timeString;
}


setInterval(showTime, 1000);


showTime();