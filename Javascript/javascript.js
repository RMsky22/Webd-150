function showImageonclick() {
    // alert();
    var img = document.getElementById('pic');
    var span = document.getElementById('imageclick');
    if (img.style.visibility == ('hidden')) {
        
        img.style.visibility = ('visible');
        span.style.color = ('black');
    }
    else {
        img.style.visibility = ('hidden');
        span.style.color = ('white');
    }

}
function showImageonhover() {
    // alert();
    var img2 = document.getElementById('pic2');

    img2.style.visibility = ('visible');

}
function imgoldstyle() {
    //  alert();
    var img2 = document.getElementById('pic2');

    img2.style.visibility = ('hidden');
}

function doubleclick(){
var p = document.getElementById('doubleclickme')
p.style.fontOpticalSizing = ('30px');
p.style.color = ('green');
}

function unviel(){
    var as = document.getElementById('hide')
    as.style.visibility = 'visible';
}



     
    


function playFrequency(freq) {
    let btn = document.getElementById("myButton1");
    freq = (261.6256);
    let audioContext = window.AudioContext || window.webkitAudioContext;
    let context = new audioContext();
    let oscillator = context.createOscillator();
    
    oscillator.type = 'triangle';
    oscillator.connect(context.destination);
    oscillator.frequency.value = freq;
    oscillator.start();
   
    setTimeout(function() {
      oscillator.stop();
    }, 300);

    
}