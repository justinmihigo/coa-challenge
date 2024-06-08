const images= document.querySelectorAll('.img-cont');
let scaled= false;
images.forEach((item)=>{
    item.addEventListener('click',()=>{
        scaled=!scaled;
        item.style.width= scaled? '80%': '25%';
        item.style.zIndex=1;
        item.style.transition='1.5s';
        console.log('clicked')
    })
})