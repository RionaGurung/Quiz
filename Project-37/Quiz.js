class Quiz {

    constructor(){

    }

    getState(){

        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){

            gameState = data.val();

        })
    }

    updateState(state){

        database.ref('/').update({

            gameState : state
        });
    }

    async start(){

        if(gameState === 0){

            contestant = new Contestant();

            var contestantCountRef = await database.ref('contestantCount').once("value");

            if(contestantCountRef.exists()){

                contestantCount = contestantCountRef.val();
                contestant.getCount();

            }

            question = new Question();    
            question.display();
        }
    }

    play(){

        question.hide();
        
        Contestant.getContestantInfo();
        
        if(allPlayers !== undefined){
    
          background("black");
         
          for(var plr in allContestants){
           
           var correstAns = "2";
        
                if(correstAns === allContestants[plr].answer){
    
                    fill("green");
                }
                else{
    
                    fill("red");
                }
           
          }
    
       
        }
    
     }   
}



