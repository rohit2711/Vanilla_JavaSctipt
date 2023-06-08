let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const x = e.currentTarget.classList;
        if(x.contains('decrease')){
            count -= 1;

        }else if(x.contains('increase')){
            count++;
        }else{
            count = 0;
        }
        if(count > 0){
            value.style.color = "green";
        }else if(count < 0){
            value.style.color = "red";
        }else{
            value.style.color = "black";
        }

        value.textContent = count;

    })
  
})