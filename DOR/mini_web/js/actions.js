// Reemplaza las miniaturas por las imágenes reales guardadas en data-*
        document.addEventListener('DOMContentLoaded', function () {
            // Primero, activar los <source> dentro de cada <picture>
            document.querySelectorAll('picture source[data-srcset]').forEach(function(src){
                src.setAttribute('srcset', src.getAttribute('data-srcset'));
            });

            // Luego, reemplazar los <img> que tienen data-src
            document.querySelectorAll('img[data-src]').forEach(function(img){
                // Pequeña demora para que el usuario vea la miniatura primero (opcional)
                setTimeout(function(){
                    var ds = img.getAttribute('data-src');
                    var dss = img.getAttribute('data-srcset');
                    if (dss) img.setAttribute('srcset', dss);
                    if (ds) img.setAttribute('src', ds);
                }, 200); // 200ms
            });
        });