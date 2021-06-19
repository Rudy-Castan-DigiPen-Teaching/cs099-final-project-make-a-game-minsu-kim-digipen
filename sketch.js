// Name       : Minsu Kim
// Assignment : Make a Game
// Course     : CS099
// Spring 2021

// Initial Setting
let Canvas;

let CurrentScene = PLEASE_CLICK;

const CanvasWidth = 800;
const CanvasHeight = 600;
const IconSize = 50;

let Sound_Slider;
let describe_Sound_Slider;

let ResetSound = false;


// Go to MainMenu
let HomeButton = new Button( 30, 30, 50, 50 );

// MainMenu
let ShellButton = new Button( CanvasWidth / 2, 300, 200, 70 );
let ShopButton = new Button( CanvasWidth / 2, 400, 200, 70 );
let HowtoButton = new Button( CanvasWidth / 2, 500, 200, 70 );


// Shell Game
let PointInput;

// IS_INPUT_RIGHT
let Selected_Point;

let input_true = new Button( 300, 550, 100, 50 );
let input_false = new Button( 500, 550, 100, 50 );

// SELECT_SHELL
let Select_1stCup = new Button( 200, CanvasHeight / 2, 170, 170 );
let Select_2ndCup = new Button( 400, CanvasHeight / 2, 170, 170 );
let Select_3rdCup = new Button( 600, CanvasHeight / 2, 170, 170 );

let GoldCup = {
    x: 200
};
let SilverCup = {
    x: 400
};
let BronzeCup = {
    x: 600
};

let ShuffleEnd = false;

// CHOOSE_CUP (1ST, 2ND, 3RD)
let Confirm_Percent = new Button( CanvasWidth / 2, 500, 400, 70 );

// FINAL_CALCULATE
let Final_confirm = new Button( CanvasWidth / 2, 550, 100, 50 );


function setup()
{
    Canvas = createCanvas( 800, 600 );

    textAlign( CENTER );
    textSize( 30 );
    imageMode( CENTER );

    // Set Volume Slider
    describe_Sound_Slider = createP( 'Sound Volume' );
    Sound_Slider = createSlider( 0, 1, 0.5, 0.01 );
}


function draw()
{
    background( '#304859' );

    print( "Current Scene : " + CurrentScene );


    // Volume slider
    describe_Sound_Slider.position( Canvas.position().x + 330, Canvas.position().y + 585 ); // describe position
    Sound_Slider.position( Canvas.position().x + 320, Canvas.position().y + 620 ); // Sound slider position

    ChangeVolume(); // Set Volume


    // Home Button
    if((CurrentScene >= MAINMENU && CurrentScene <= IS_INPUT_RIGHT ) 
    || (CurrentScene >= ROOM && CurrentScene < SALVATION))
    {
        HomeButton.draw();
        image( HomeImage, 30, 30, IconSize, IconSize );
    }

    // Scene Change
    switch ( CurrentScene )
    {
    case PLEASE_CLICK:
    {

    }
    break;

    case MAINMENU:
    {
        ShellButton.draw( "GAME" );
        ShopButton.draw( "ROOM" );
        HowtoButton.draw( "How to Play" );
    }
    break;
    // Shall game Scene
    case SHELL_GAME:
    {
        push();

        fill( 255, 0, 0 );
        textSize( 40 );
        textStyle( BOLD );

        text( "Welcome to Shell Game!", width / 2, 100 );


        fill( '#6495ed' );
        text( "Before starting, Let's check point!", width / 2, 200 );

        fill( 'orange' )
        text( "How much point will you use?", width / 2, 400 );

        fill( 'gold' )
        text( "Please type greater than 10 points!", width / 2, 550 );


        translate( 40, 0 );

        fill( 0 );
        textSize( 20 );
        textStyle( NORMAL );

        pop();

        display_point( width / 2 - 10, 280, IconSize );


        PointInput.position( Canvas.position().x + 350, Canvas.position().y + 450 );
    }
    break;

    case IS_INPUT_RIGHT:
    {

        if ( isNaN( Selected_Point ) )
        {
            alert( "Please Type again! Please don't do strange thing..." );
            CurrentScene = SHELL_GAME;
        }

        push();

        fill( 255, 0, 0 );
        textSize( 40 );
        textStyle( BOLD );

        text( "Please Check \n It's same point as you want to use!", width / 2, 50 );

        fill( 'green' )
        text( "Current Point", width / 2, 170 );
        display_point( width / 2 - 10, 220, IconSize );

        fill( 'blue' );
        text( "Use this amount of Point", width / 2, 300 );
        display_point( width / 2 - 10, 350, IconSize, true );

        pop();

        input_true.draw( "YES~!", 'green', BOLD );
        input_false.draw( "NO!!!", 'red', BOLD );


        PointInput.position( Canvas.position().x + 350, Canvas.position().y + 450 );
    }
    break;

    case SELECT_SHELL:
    {
        // Image of cup
        push();

        rectMode( CENTER );
        noStroke();

        imageMode( CENTER );

        const SIZE = 170;

        const HEIGHT = height / 2;

        fill( 'gold' );
        square( GoldCup.x, HEIGHT, SIZE + 20 );
        image( GoldCup_Image, GoldCup.x, HEIGHT, SIZE, SIZE );

        fill( 'silver' );
        square( SilverCup.x, HEIGHT, SIZE + 20 );
        image( SilverCup_Image, SilverCup.x, HEIGHT, SIZE, SIZE );

        fill( '#f4a460' );
        square( BronzeCup.x, HEIGHT, SIZE + 20 );
        image( BronzeCup_Image, BronzeCup.x, HEIGHT, SIZE, SIZE );

        pop();

        // Text
        push();

        fill( 255, 0, 0 );
        textSize( 40 );
        textStyle( BOLD );

        text( "Choose the Cup!", width / 2, 100 );

        fill( 'blue' );
        text( "Use this amount of Point", width / 2, 450 );
        display_point( width / 2 - 10, 500, IconSize, true );

        pop();

    }
    break;

    case CHOOSE_1ST_CUP:
    {
        ShuffleEnd = false;

        background( Cup[ 0 ], 0, 0 );

        push();

        fill( 255 );

        textSize( 40 );
        textStyle( BOLD );

        text( "You Choose First Cup!\nIf it's near the red color,\nYou probably get money!", width / 2, 100 );

        text( "You'll get this Percent..." + Cup[ 0 ] + "%!!!", width / 2, 400 );

        pop();

        if ( Cup[ 0 ] <= 100 )
        {
            Confirm_Percent.draw( "Okay...Let's Check...", 'blue', ITALIC );
        }
        else
        {
            Confirm_Percent.draw( "OKAY!! LET'S CHECK!!!", 'orange', BOLD );
        }
    }
    break;

    case CHOOSE_2ND_CUP:
    {
        ShuffleEnd = false;

        background( 0, Cup[ 1 ], 0 );

        push();

        fill( 255 );

        textSize( 40 );
        textStyle( BOLD );

        text( "You Choose Second Cup!\nIf it's near the green color,\nYou probably get money!", width / 2, 100 );

        text( "You'll get this Percent..." + Cup[ 1 ] + "%!!!", width / 2, 400 );

        pop();

        if ( Cup[ 1 ] <= 100 )
        {
            Confirm_Percent.draw( "Okay...Let's Check...", 'blue', ITALIC );
        }
        else
        {
            Confirm_Percent.draw( "OKAY!! LET'S CHECK!!!", 'orange', BOLD );
        }
    }
    break;

    case CHOOSE_3RD_CUP:
    {
        ShuffleEnd = false;

        background( 0, 0, Cup[ 2 ] );

        push();

        fill( 255 );

        textSize( 40 );
        textStyle( BOLD );

        text( "You Choose Third Cup!\nIf it's near the blue color,\nYou probably get money!", width / 2, 100 );

        text( "You'll get this Percent..." + Cup[ 2 ] + "%!!!", width / 2, 400 );

        pop();

        if ( Cup[ 2 ] <= 100 )
        {
            Confirm_Percent.draw( "Okay...Let's Check...", 'blue', ITALIC );
        }
        else
        {
            Confirm_Percent.draw( "OKAY!! LET'S CHECK!!!", 'orange', BOLD );
        }
    }
    break;

    case FINAL_CALCULATE:
    {
        background( Cup[ 0 ], Cup[ 1 ], Cup[ 2 ] );

        push();

        fill( 255 );

        textSize( 40 );
        textStyle( BOLD );

        text( "This is all amount of Cups...\nBackground is rgb of that amount!", width / 2, 50 );
        text( "1st : " + Cup[ 0 ] + " / 2nd : " + Cup[ 1 ] + " / 3rd : " + Cup[ 2 ], width / 2, 200 );


        textSize( 40 );

        // First
        fill( 221, 250, 235 );
        text( "What point you use!", width / 2 - 150, 300 );

        // Second
        fill( 220, 242, 247 );
        text( "You will get this point!", width / 2 - 150, 400 );


        fill( 243, 238, 224 );
        text( "It's your FINAL POINT!", width / 2 - 150, 500 );

        pop();

        push();

        // First
        fill( 221, 250, 235 );
        display_point( width / 2 + 170, 290, IconSize, true );

        // Second
        fill( 220, 242, 247 );
        display_point( width / 2 + 170, 390, IconSize, false, true );

        // Third
        fill( 243, 238, 224 );
        display_point( width / 2 + 170, 490, IconSize );

        pop();

        Final_confirm.draw( "OKAY", 'red', BOLD );
    }


    // Room Scene
    case ROOM:
    {

    }
    break;

    // How to play
    case HOWTO:
    {

    }
    break;
    }


}


/////////////////////////////////////////////////////////////////////////////////////////////////////


function mousePressed()
{
    // Reset all Sound when Refresh
    if(!ResetSound)
    {
        ResetAllMusic();

        Background_Music.loop();

        ResetSound = true;
    }


    // HomeButton
    if((CurrentScene >= MAINMENU && CurrentScene <= IS_INPUT_RIGHT ) 
    || (CurrentScene >= ROOM && CurrentScene < SALVATION))
    {
        HomeButton.ChangeScene( MAINMENU );
        HomeButton.clearInput();
        HomeButton.ChangeSong(undefined, true);
    }

    // Switch by CurrentScene
    switch ( CurrentScene )
    {
    case PLEASE_CLICK:
    {
        CurrentScene = MAINMENU;
    }
    break;

    case MAINMENU:
    {
        if(Point > 10)
        {
            ShellButton.ChangeScene( SHELL_GAME );
            ShellButton.createInput( 100, 50 );
        }
        else
        {
            ShellButton.ChangeScene(SALVATION);
            ShellButton.ChangeSong(SPECIAL);
        }

        ShopButton.ChangeScene( ROOM );
        ShopButton.ChangeSong(Room_Music);

        HowtoButton.ChangeScene( HOWTO );
    }
    break;

    // Shall game Scene

    case IS_INPUT_RIGHT:
    {
        input_true.ChangeScene( SELECT_SHELL );
        input_true.clearInput();
        input_true.calculate();
        input_true.startShuffle();

        input_false.ChangeScene( SHELL_GAME );
        input_false.Alert( "OK, Please Type Again~" );

    }
    break;

    case SELECT_SHELL:
    {
        if ( ShuffleEnd )
        {
            Select_1stCup.ChangeScene( CHOOSE_1ST_CUP );
            Select_2ndCup.ChangeScene( CHOOSE_2ND_CUP );
            Select_3rdCup.ChangeScene( CHOOSE_3RD_CUP );
        }

    }
    break;

    case CHOOSE_1ST_CUP:
    {
        GetThisPoint = Calculate_Final_Point( Cup[ 0 ] );
        Point += GetThisPoint;
        Confirm_Percent.ChangeScene( FINAL_CALCULATE );
    }
    break;

    case CHOOSE_2ND_CUP:
    {
        GetThisPoint = Calculate_Final_Point( Cup[ 1 ] );
        Point += GetThisPoint;
        Confirm_Percent.ChangeScene( FINAL_CALCULATE );
    }
    break;

    case CHOOSE_3RD_CUP:
    {
        GetThisPoint = Calculate_Final_Point( Cup[ 2 ] );
        Point += GetThisPoint;
        Confirm_Percent.ChangeScene( FINAL_CALCULATE );
    }
    break;

    case FINAL_CALCULATE:
    {
        Final_confirm.Alert( "Thanks for Plying!\nGo to shop or play again!" );
        Final_confirm.ChangeScene( MAINMENU );
    }
    break;
    // Room Scene

    // How to play
    }
}

function keyPressed()
{
    if ( CurrentScene == SHELL_GAME && keyCode === 13 )
    {
        if ( PointInput.value() >= 10 && PointInput.value() <= Point )
        {
            PointInput.changed( getPoint );
            Selected_Point = int( PointInput.value() );
            CurrentScene = IS_INPUT_RIGHT;
        }
    }
}
