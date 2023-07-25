// VARIABLES
let sp, btn_start, btn_stop, t, ms, s, mn, h;

// FONCTIONS
window.onload = function(){
    sp = document.getElementsByTagName('span');
    btn_start = document.getElementById('start');
    btn_stop = document.getElementById('stopbtn_stop');
    t;
    ms=0, s=0, mn=0, h=0;
}

// MISE EN PLACE DU CHRONO
function update_chrono(){
    ms+=1;
    if(ms == 10){
        ms=1
        s+=1
    }
    if(s == 60){
        s=0
        mn += 1
    }
    if(mn == 60){
        mn=0
        h+=1
    }
    // insertion des valeurs dans les spans 
    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = mn + "min";
    sp[2].innerHTML = s + "s";
    sp[3].innerHTML = ms + "ms";
}

// FUNCTION BTN START
function start(){
    t = setInterval(update_chrono, 100);
    btn_start.disabled = true;
}

// FONCTION BTN STOP
function stop(){
    clearInterval(t);
    btn_start.disabled = false;
}

// FONCTION BTN RESET
function reset(){
    clearInterval(t);
    btn_start.disabled = false ;
    ms = 0, s = 0, mn = 0, h = 0;
    // insertion des valeurs dans les spans 
    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = mn + "min";
    sp[2].innerHTML = s + "s";
    sp[3].innerHTML = ms + "ms";
}