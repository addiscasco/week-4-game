//when document is loaded it will be ready for this function
$(document).ready(function () {

    //function that starts game by setting userScore to 0 and calling the function getRandomNum which is the computer generated number
    function startGame () {
        userScore = 0;
        //random number generated for game between 19-120
        randomResult = getRandomNum(19, 120);
         //writes random number to div #num
        $("#num").text(randomResult);

        //also, calls the function populateCrystals which 
        populateCrystals();
    }
    //creates crystal images
    function populateCrystals (){
        var randomCrysNum;
        var crystal;
        var images = [
            "http://www.crystalclearintentions.co.nz/wp-content/uploads/crystals.jpg",
            "https://vignette.wikia.nocookie.net/finalfantasy/images/b/b1/FFIII_Model_-_Water_Crystal.png/revision/latest?cb=20150312024348",
            "https://www.rd.com/wp-content/uploads/2017/08/13_crystal_Reasons-Why-You-Should-Give-Crystals-a-Try_364248173_Abra-Cadabraaa-380x254.jpg",
            "https://data.whicdn.com/images/53412296/large.png",
        ];
        //empties crystal values for new values
        $(".cryBox").empty();

         //for loop that iterates 4x
        for (var i = 0; i < 4; i++) {

            //creates a random number between 1-12 for the 4 crystals
            //var randomCrysNum = (Math.floor(Math.random() * 12) + 1);
            randomCrysNum = getRandomNum(1,12);
            console.log(randomCrysNum);

            //creates 4 divs with class and data (randomCrysNum/random number assigned to each crystal)
            crystal = $("<div>");
            crystal.attr({
                "class": "crystal",
                "data": randomCrysNum
            });
            //inline css that creates inserts images to crystal divs and style image to be centered and fit into divs -- 
            crystal.css({
                "background-image":"url('" + images[i] +"')",
                "background-size":"contain",
                "background-repeat":"no-repeat",
                "background-position": "center center",
            });

            //appends to the div cryBox the four crystals
            $(".cryBox").append(crystal);
        }
    }
    //creates cpu random number
    function getRandomNum(min, max) {
        //random number generated for game between 19-120
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    //onclick data is given to the crystal and assigned to clickedNum
    $(".cryBox").on("click", ".crystal", function () {
        // data is a string and converted into a number with parseInt and set to variable clickedNum
        var clickedNum = parseInt($(this).attr("data"));

        //adds clickedNum to variable addedToPrev
        userScore += clickedNum;
        $("#bottomnum").text( userScore);
        console.log(userScore);

        //if added numbers are greater than randomResult then loss ++ 
        if (userScore > randomResult) {
            loss++;
            $("#loss").text("Losses: " + loss);
            console.log("loss" + loss);
            
            startGame();
        }
        //if added numbersare equal to randomResult then wins++
        else if (userScore === randomResult) {
            wins++;
            $("#wins").text("Wins: " + wins);
            console.log("wins" + wins);
            startGame();
        }
    });
    var randomResult; //undefined
    var wins = 0;
    var loss = 0;
    var userScore = 0;
    //initiates game
    //reads code top tp bottom and then makes it real
    //on the global level will go to the top then execute startGame()
    //if the
    startGame();
});