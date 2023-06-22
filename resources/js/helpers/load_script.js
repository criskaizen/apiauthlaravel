// PROJECT/src/assets/external.js

//cargar script en la cabezera
function headScript(src) {
    if(document.querySelector("script[src='" + src + "']")){ return; }
    let script = document.createElement('script');
    script.setAttribute('src', src);
    script.setAttribute('type', 'text/javascript');
    document.head.appendChild(script)
}

//cargar script en el cuerpo
function bodyScript(src) {
    delScript(src);
    if(document.querySelector("script[src='" + src + "']")){ return; }
    let script = document.createElement('script');
    script.setAttribute('src', src);
    script.setAttribute('type', 'text/javascript');
    document.body.appendChild(script)
}

//eliminar un script
function delScript(src) {
    let el = document.querySelector("script[src='" + src + "']");
    if(el){ el.remove(); }
}


//cargar script de CSS en la cabezera
function headLink(href) {
    if(document.querySelector("link[href='" + href + "']")){ return; }
    let link = document.createElement('link');
    link.setAttribute('href', href);
    link.setAttribute('rel', "stylesheet");
    link.setAttribute('type', "text/css");
    document.head.appendChild(link)
}

//cargar script de CSS en la cuerpo
function bodyLink(href) {
    if(document.querySelector("link[href='" + href + "']")){ return; }
    let link = document.createElement('link');
    link.setAttribute('href', href);
    link.setAttribute('rel', "stylesheet");
    link.setAttribute('type', "text/css");
    document.body.appendChild(link)
}

//eliminar un script CSS
function delLink(href) {
    let el = document.querySelector("link[href='" + href + "']");
    if(el){ el.remove(); }
}

export {
    headScript,
    bodyScript,
    delScript,
    headLink,
    bodyLink,
    delLink,
}
