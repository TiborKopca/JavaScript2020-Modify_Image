/*
Hay que crear una funcionalidad en Javascript, para cuando el usuario pulse encima de una imagen de la web, esta aumente de tamaño y
 al volver a pulsar disminuya.
* Solo es necesario que en la web vea una sola imagen. Me interesa ver el código de JS.

2020 @ Tibor Kopca
*/
'use strict'

var img = document.getElementById('img1')
img.addEventListener('mouseover', function(){
    // img.style.width = '70vh';
    // img.style.marginTop = '-30px';
    img.style.transform = 'scale(1.5)';
    img.style.transition = 'all 1s linear';
})
img.addEventListener('mouseout', function(){
    // img.style.width = '50vh';
    // img.style.marginTop = '0px';
    img.style.transform = 'scale(1)';
})