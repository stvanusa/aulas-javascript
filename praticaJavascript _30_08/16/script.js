let segundos = 10;
let intervalo = setTimeout(() => {
  segundos--;
  console.log(segundos)
  if(segundos == 0){
    clearInterval(intervalo)
  }

}, 1000);
