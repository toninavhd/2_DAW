
        document.addEventListener('DOMContentLoaded', function () {
            document.querySelectorAll('picture source[data-srcset]').forEach(function(src){
                src.setAttribute('srcset', src.getAttribute('data-srcset'));
            });

            document.querySelectorAll('img[data-src]').forEach(function(img){
                setTimeout(function(){
                    var ds = img.getAttribute('data-src');
                    var dss = img.getAttribute('data-srcset');
                    if (dss) img.setAttribute('srcset', dss);
                    if (ds) img.setAttribute('src', ds);
                }, 200); 
            });
        });