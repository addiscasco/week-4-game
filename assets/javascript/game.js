
var randomResult; //undefined
var userScore=0;
var wins=0;
var loss=0;
var addedToPrev = 0;



   $(document).ready(function startGame () 
   { 

        //random number generated for game between 19-120
        randomResult = Math.floor(Math.random()*(120-19+1)+19);
    
        //writes random number to div #num
        $("#num").text(randomResult);
       
    
            //for loop that iterates 4x
        for(var i=0; i<4; i++) 
            {
            
            //creates a random number between 1-12 for the 4 crystals
            var randomCrysNum =(Math.floor(Math.random()*12)+1);
            console.log(randomCrysNum);

            
           
        
            //creates 4 divs with class and data (randomCrysNum/random number assigned to each crystal)
            var crystal= $("<div>");
                crystal.attr({
                    "class": "crystal",
                    "data": randomCrysNum});
            
            //appends to the div cryBox the four crystals
            $(".cryBox").append(crystal);
        
            };

        //onclick data is given to the crystal and assigned to clickedNum
        $(".crystal").on("click", function () 
        {
            // data is a string and converted into a number with parseInt and set to variable clickedNum
            var clickedNum = parseInt($(this).attr("data"));
            
            //adds clickedNum to variable addedToPrev
            addedToPrev += clickedNum;
            $("#bottomnum").text("score " + addedToPrev);
            console.log(addedToPrev);

            //if added numbers are greater than randomResult then loss ++ 
            if (addedToPrev > randomResult)
            {
                loss++;
                $("#loss").text("Losses: "  + loss);
                console.log("loss" + loss);
                addedToPrev = 0;

                
                
                
            }

            //if added numbersare equal to randomResult then wins++
            else if (addedToPrev === randomResult)
            {
                wins++;
                $("#wins").text("Wins: " + wins);
                console.log("wins" + wins);
                
                addedToPrev = 0;

                
            }
        });




    });

     
       
       

   


















   /* function randomGenerator(max, min) 
    {
        return Math.floor(Math.random()*(120-19+1)+19);

        //return randomNum;

        //consoles computer answer
        //console.log("randomnum");
        //console.log(randomNum);
    }

    $("#num").text(randomGenerator());
    //randomGenerator ();
    console.log(randomGenerator());

    //saphire random number generator
   /* $("#c1").on("click", function ()
    {
        function saphire (max, min)
        {
            return Math.floor(Math.random()*(12-1+1)+1);
            
        };

        console.log(saphire ());

    });  */

