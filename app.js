let rightBtn = document.querySelector('.right-btn');
let leftBtn = document.querySelector('.left-btn');
let images = document.querySelectorAll('.imageClass');
let imgPositon = 0;
rightBtn.addEventListener('click', ()=>{
    closeimg(images);
    imgPositon++;
    if(imgPositon === images.length){
        imgPositon = 0;
    }
    images[imgPositon].style.display = 'block';
});

leftBtn.addEventListener('click', ()=>{
    closeimg(images);
    imgPositon--;
    if(imgPositon === -1){
        imgPositon = images.length -1;
    };
    images[imgPositon].style.display = 'block';
});

const closeimg = ()=>{
    images.forEach((item)=>{
        item.style.display = 'none';
    });
};