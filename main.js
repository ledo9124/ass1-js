var btnElement = document.querySelectorAll('.btn-form');
var overlayElement = document.querySelector('.overlay');
var hidenElement = document.querySelector('.hiden-form');
var lengthbtn = btnElement.length;
for (let i =0 ; i < lengthbtn ; ++i) {
    btnElement[i].addEventListener('click' , function (e) {
        overlayElement.style.display = 'block'; 
        hidenElement.style.display = 'block'; 
    });
}

document.querySelectorAll('li')[2].addEventListener('click' , function(e){
    overlayElement.style.display = 'block'; 
    hidenElement.style.display = 'block'; 
})

overlayElement.addEventListener('click' , function(e){
    overlayElement.style.display = 'none'; 
    hidenElement.style.display = 'none'; 
})

var btnForm = document.querySelector('.form-dk');
btnForm.addEventListener('click' , function (e) {
    alert('Đăng ký thành công!!!');
})