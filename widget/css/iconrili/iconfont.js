(function(window){var svgSprite='<svg><symbol id="icon-rili" viewBox="0 0 1024 1024"><path d="M811.21 163.79h-0.41a34.74 34.74 0 0 0 0 69.48h0.41a47.37 47.37 0 0 1 47.31 47.32v513.32a47.37 47.37 0 0 1-47.31 47.32H216.8a47.37 47.37 0 0 1-47.32-47.32V280.59a47.37 47.37 0 0 1 47.32-47.32v-0.06a34.73 34.73 0 0 0 0-69.36h-1.93c-0.78 0-1.55 0-2.32 0.08A116.93 116.93 0 0 0 100 280.59v513.33a116.92 116.92 0 0 0 116.79 116.79h594.42A116.92 116.92 0 0 0 928 793.92V280.59A116.91 116.91 0 0 0 811.22 163.8z m0 0"  ></path><path d="M328.79 280.76A34.73 34.73 0 0 0 363.52 246v-95a34.74 34.74 0 1 0-69.47 0v95a34.74 34.74 0 0 0 34.74 34.74z m375.56 0A34.73 34.73 0 0 0 739.08 246v-95a34.74 34.74 0 1 0-69.47 0v95a34.74 34.74 0 0 0 34.74 34.74z m-464.21 189a34.73 34.73 0 0 0 34.74 34.73h86.85a34.74 34.74 0 1 0 0-69.47h-86.85a34.74 34.74 0 0 0-34.74 34.74zM559.68 435h-86.85a34.74 34.74 0 0 0 0 69.47h86.85a34.74 34.74 0 1 0 0-69.47z m111.11 69.47h86.85a34.74 34.74 0 1 0 0-69.47h-86.85a34.74 34.74 0 1 0 0 69.47z m-309.06 46.09h-86.85a34.74 34.74 0 0 0 0 69.48h86.85a34.74 34.74 0 0 0 0-69.48z m197.95 0h-86.85a34.74 34.74 0 0 0 0 69.48h86.85a34.74 34.74 0 1 0 0-69.48z m198 0h-86.89a34.74 34.74 0 0 0 0 69.48h86.85a34.74 34.74 0 1 0 0-69.48z m-395.95 115.6h-86.85a34.74 34.74 0 1 0 0 69.47h86.85a34.74 34.74 0 1 0 0-69.47z m197.95 0h-86.85a34.74 34.74 0 0 0 0 69.47h86.85a34.74 34.74 0 1 0 0-69.47z m198 0h-86.89a34.74 34.74 0 1 0 0 69.47h86.85a34.74 34.74 0 1 0 0-69.47zM443 233.27h147.18a34.74 34.74 0 0 0 0-69.48H443a34.74 34.74 0 1 0 0 69.48z m0 0"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)