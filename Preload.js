// Image
let GameImage;
let RoomImage;


let HomeImage;
let PointImage;

let GoldCup_Image;
let SilverCup_Image;
let BronzeCup_Image;

let ShopImage;

let Shop_Background;

// Sound
let Background_Music;
let Room_Music;
let SPECIAL;

let Next_Howto_SFX;
let Select_SFX;
let Alert_SFX;
let Input_SFX;

function preload()
{
    // Load Image
    GameImage = loadImage('assets/Image/game-controller.png');
    RoomImage = loadImage('assets/Image/room.png');

    HomeImage = loadImage( 'assets/Image/home.png' );
    PointImage = loadImage( 'assets/Image/point.png' );

    GoldCup_Image = loadImage('assets/Image/Gold_Cup.png');
    SilverCup_Image = loadImage('assets/Image/Silver_Cup.png');
    BronzeCup_Image = loadImage('assets/Image/Bronze_Cup.png');

    ShopImage = loadImage('assets/Image/shop.png');

    Shop_Background = loadImage('assets/Image/background/Shop_Background.jpg')

    // Load Sound
    Background_Music = loadSound('assets/Sound/BGM/bensound-allthat.mp3');    // Basic BGM
    Room_Music = loadSound('assets/Sound/BGM/Our Leaves in the Breeze.mp3');        // Room BGM
    SPECIAL = loadSound('assets/Sound/BGM/Universe.mp3');                           // SALVATION BGM

    Next_Howto_SFX = loadSound('assets/Sound/SFX/Next-howto.wav');                      // How to SFX
    Select_SFX = loadSound('assets/Sound/SFX/Select 50.wav');
    Alert_SFX = loadSound('assets/Sound/SFX/Warning 06.wav');
    Input_SFX = loadSound('assets/Sound/SFX/Confirm 42.wav')
}

// Before Change Music, Please put this inside
function ResetAllMusic()
{
    Background_Music.stop();
    Room_Music.stop();
    SPECIAL.stop();
}

function ChangeVolume()
{
    Background_Music.setVolume(Sound_Slider.value());
    Room_Music.setVolume(Sound_Slider.value());
    SPECIAL.setVolume(Sound_Slider.value());

    Next_Howto_SFX.setVolume(Sound_Slider.value() + 0.1);
    Select_SFX.setVolume(Sound_Slider.value() + 0.1);
    Alert_SFX.setVolume(Sound_Slider.value() + 0.1);
    Input_SFX.setVolume(Sound_Slider.value() + 0.1);
}

