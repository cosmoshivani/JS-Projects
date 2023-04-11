const _rndm_color = () => "#" + Math.random().toString(16).slice(2, 8);

const _set_bg_color = () => {
    var bgColor = _rndm_color();
    document.body.style.background = bgColor;

}

_set_bg_color();


const discoLights = setInterval(_set_bg_color, 900);


function stopFunc() {
    clearInterval(discoLights);
}

