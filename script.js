const start = document.querySelector('.stats');

const btnStart = document.querySelector('button[name=start]')

const btnClick =  document.querySelector('button[name=click]')


const winScore = 10;

let count = 0

btnStart.addEventListener('click',()=>{
    starts();
})

btnClick.addEventListener('click', ()=>{
    count++
    start.textContent= count
})


const starts = ()=>{
    count = 0;
    start.textContent = count 
    btnClick.removeAttribute('disabled')
    startCounting()
}


const startCounting = ()=>{
    setTimeout(()=>{
        if(isWin()){
            start.textContent = 'You Won!'

        }else{
            start.textContent = 'You Lost'
        }

        btnClick.setAttribute('disabled',true)
    }, 2000)
}

const isWin = ()=>{
    if(count< winScore){
        return false
    }else{
        return true
    }
}