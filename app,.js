const colors = ["green","red","rgba(133,122,200)","#f15025"];
 
const btn = document.getElementById('btn');
const color = document.querySelector('.color')
// console.log(color)
btn.addEventListener('click',function(){
     const colorRandom = randomNumber();
     console.log(colorRandom)
     document.body.style.backgroundColor = colors[colorRandom];
     color.textContent = colors[colorRandom]
})

function randomNumber(){
    return Math.floor(Math.random() * colors.length);
}