class Contestant {

    constructor(){

      this.index = null;
      this.name = null;
    }
  
    getCount(){

      var ContestantCountRef = database.ref('ConstantCount');
      contestantCountRef.on("value",(data)=>{

        contestantCount = data.val();

      })
    }
  
    updateCount(count){

      database.ref('/').update({

        contestantCount: count

      });
    }
  
    /*update(){

      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
  
    static getContestantInfo(){

      var contestantInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }*/
  }
  