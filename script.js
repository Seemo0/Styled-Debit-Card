var rotated = true
function turn(){
    document.getElementsByClassName('card')[0].style.transform = rotated ? 'rotateY(180deg)' : 'rotateY(0deg)'
    rotated = !rotated
}
function changeCardNumber(el){
    if(el.value == '####'){
        el.value = ''
    }
    el.addEventListener('focusout',()=>{
        if(el.value == ''){
            el.value = '####'
        }
    })
}
document.querySelectorAll('.card-number input').forEach(el => {
    el.addEventListener("focus",changeCardNumber.bind(null,el));
});
function changeDateExp(el){
    var element = el;
    var maskOptions = {
        mask: '00/00'
    };
    var mask = IMask(element, maskOptions);
    if(el.value == 'MM/YY'){
        el.value = ''
    }
    el.addEventListener('focusout',()=>{
        if(el.value == ''){
            el.value = 'MM/YY'
        }
    })
}
document.querySelectorAll('.date-exp input').forEach(el => {
    el.addEventListener("focus",changeDateExp.bind(null,el));
});
function changeCardName(el){
    if(el.value == 'Full Name'){
        el.value = ''
    }
    el.addEventListener('focusout',()=>{
        if(el.value == ''){
            el.value = 'Full Name'
        }
    })
}
function capitilize(el){
    var words = el.value.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i] !== "" ? words[i][0].toUpperCase() + words[i].substr(1, words[i].length) : "";
    }
    el.value = words.join(' ')
}
document.querySelectorAll('.card-name input').forEach(el => {
    el.addEventListener("focus",changeCardName.bind(null,el));
});
document.querySelectorAll('.card-name input').forEach(el => {
    el.addEventListener("input",capitilize.bind(null,el));
});