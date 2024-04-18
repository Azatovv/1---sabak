const tag = document.querySelector("button");
const btn = document.querySelector('h4');

tag.onclick=()=>{
    const random=Math.floor(Math.random()*100)
    btn.innerHTML=random
    if (random>30 && random<40){
        alert("вы угадали")
    }
}