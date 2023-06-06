Project Purpose:
The purpose of our project is to help students gain computer science knowledge in a fun and engaging way. The main character (user) would have conversations with all students in the classroom -> battle with them and gain knowledge on each cb unit. After talking with all students, user would enter the final battle with Mr M... Would you succeed the battle?


Run Instructions:
start new game
control characters to go to csa classroom
talk to 3 characters (cb unit 1 2 3) to learn and enable access to final card game battle with Mr M
final battle with Mr M - 9 questions cb quiz card game
done!


Build Instructions:
Animation
- adding a new character
  - in OverworldMap.js, create a new class object and set up attributes (x y position, boolean values) and link to the page of the sprite sheet of the character
  - in Sprite.js, add to this.animations = config.animations || { //Configure Animation & Initial State, 
  - in Sprite.js, 
     else if(this.image.id === "Student3"){ //use the corresponding id that you set up in OverworldMap.js
      this.isShadowLoaded && ctx.drawImage(this.shadow, 
        0,0, 
        32,32, //set up desired image size in game
        x, y, 
        100,100, //image acutal size x, y
      );
    }

Dialogue
- make a copy of the dialogueUnit1.html
- change the character's name and image
- make a copy of dialogueUnit1.js
- change text within javascript nodes in the second half of the page to what you want your character to say

Card game
- adding more questions
  - in quiz.js, adding on to the array of questions "let questions = " 
  - change up max questions number to the number of questions you want "const MAX_QUESTIONS = 9;"
  - you could also change how many points awarded for each correct answer "const SCORE_POINTS = 100;"
