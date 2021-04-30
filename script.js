const fetchUrl = 'http://rekrutacjartb.pl/developer/banner.json';

fetch(fetchUrl).then(function(response){
    return response.json()
  }).then(function(res){
      const nums = [0,1,2,3,4,5];
      const imgAmount = 4;
      let numItem = 0;
  
  while (nums.length > imgAmount) {
      numItem = Math.floor(Math.random() * (nums.length + 1));
      nums.splice(numItem,1);
  }

document.getElementById('1').innerHTML = `<img src=${res.offers[nums[0]].imgURL}> <p>${res.offers[nums[0]].price} zł</p>`
document.getElementById('2').innerHTML = `<img src=${res.offers[nums[1]].imgURL}><p>${res.offers[nums[1]].price} zł</p>`
document.getElementById('3').innerHTML = `<img src=${res.offers[nums[2]].imgURL}><p>${res.offers[nums[2]].price} zł</p>`
document.getElementById('4').innerHTML = `<img src=${res.offers[nums[3]].imgURL}><p>${res.offers[nums[3]].price} zł</p>`

  })

const border = document.querySelector('.banner-border');
function moveBorder() {
    setTimeout(function(){
        border.classList.add('first-step'); 
        border.classList.remove('third-step');
    },2000)
    setTimeout(function(){
        border.classList.add('second-step'); 
        border.classList.remove('first-step'); 
    },4000)
    setTimeout(function(){
        border.classList.add('third-step'); 
        border.classList.remove('second-step');
    },6000)
}
moveBorder()
setInterval(moveBorder,6000)