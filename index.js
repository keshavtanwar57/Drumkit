$('h1').css("color","red");


$('button').click(function(event){
    
    playSound($(this).text()); 
});

$('body').keypress(function(k){
    console.log(k.key);
    playSound(k.key);
    
})

function playSound(letter){
    let Letter = letter;
    let Audiotrack = '';
    switch (Letter){
        case 'w':
            Audiotrack = 'sounds/crash.mp3';
            break;
        case 'a':
            Audiotrack = 'sounds/kick-bass.mp3';
            break;
        case 's':
            Audiotrack = 'sounds/snare.mp3';
            break;
        case 'd':
            Audiotrack = 'sounds/tom-1.mp3';
            break;
        case 'j':
            Audiotrack = 'sounds/tom-2.mp3';
            break;
        case 'k':
            Audiotrack = 'sounds/tom-3.mp3';
            break;
        case 'l':
            Audiotrack = 'sounds/tom-4.mp3';
            break;
        default:
            console.log("wrong key");

    }
    let audio = new Audio(Audiotrack);
    audio.play();

}