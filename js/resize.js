/*
Hay que crear una funcionalidad en Javascript, para cuando el usuario pulse encima de una imagen de la web, esta aumente de tamaño y
 al volver a pulsar disminuya.
* Solo es necesario que en la web vea una sola imagen. Me interesa ver el código de JS.

2020 @ Tibor Kopca
*/
'use strict'
var sizeBig = false;
var img = document.getElementById('img1')
img.addEventListener('click', function(){
    if(sizeBig == false){
    img.style.transform = 'scale(1.5)';
    img.style.transition = 'all 1s linear';
    sizeBig = true;
    }else{
    img.style.transform = 'scale(1)';
    sizeBig = false;
    }
})




// img.addEventListener('mouseover', function(){
//     img.style.transform = 'scale(1.5)';
//     img.style.transition = 'all 1s linear';
// })
// img.addEventListener('mouseout', function(){
//     img.style.transform = 'scale(1)';
// })

