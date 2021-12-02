let add = document.getElementById('increment');
let remove = document.getElementById('decrement');

let int=document.getElementById('number');
let integer = 0;

add.addEventListener('click',function(){
    integer +=10;
    int.innerHTML = integer;
})

remove.addEventListener('click',function(){
    integer -=5;
    int.innerHTML = integer;
})
