class Question {

    constructor() {

      this.input = createInput("Name");
      this.input2 = createInput("Answer");
      this.button = createButton('Submit');
      this.title = createElement('h2');
      this.reset = createButton('Reset');

    }

    hide(){

      this.input.hide();  
      this.input2.hide();
      this.button.hide();
      this.title.hide();
    }
  
    display(){

      this.title.html("Quiz");
      this.title.position(displayWidth/2 - 50, 0);
  
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
      this.reset.position(displayWidth-100,20);

      this.question.html("apple");
      this.question.position(displayWidth/2, 50);

      this.option1.html("A");
      this.option1.position(displayWidth/2 , 50);

      this.option1.html("P");
      this.option1.position(displayWidth/2 , 50);

      this.option1.html("L");
      this.option1.position(displayWidth/2 , 50);

      this.option1.html("E");
      this.option1.position(displayWidth/2 , 50);

      this.button.mousePressed(()=>{

        this.input.hide();
        this.button.hide();

        contestant.name = this.input.value();

        contestantCount+=1;
        contestat.index = playerCount;

        contestantCount.update();
        contestat.updateCount(contestantCount);

        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);

      });
  
      this.reset.mousePressed(()=>{

        player.updateCount(0);
        game.update(0);
      });
  
    }
  }
  