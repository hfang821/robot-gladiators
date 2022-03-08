var playerName = window.prompt ("What is your robot's name?");
var playerHealth = 100;
var playerAttack =10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    //window.alert("Welcome to Robot Gladiators!");
    while (enemyHealth>0 && playerHealth >0){
    var promptFight = window.prompt("Would you like to fight or skip this battle?");
    if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm ("Are you sure you'd like to quit?");

        if (confirmSkip){
            window.alert(playerName + " has chosen to skip the fight. Goodbye!");
            playerMoney = playerMoney -10;
            console.log("playerMoney", playerMoney);
            break;
        }
        
    }
    
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        if (enemyHealth <= 0){
            window.alert(enemyName + " has died!");
            playerMoney=playerMoney+20;
            break;
        } else{
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        playerHealth = playerHealth-enemyAttack;
        console.log (
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        if (playerHealth <= 0){
            window.alert(playerName + " has died!");
            break;
        } else {
            window.alert (playerName + " still has " + playerHealth + " health left.");
        }
    }
};

var startGame = function (){
    playerHealth=100;
    playerAttack =10;
    playerMoney =10;
 for (var i = 0 ; i<enemyNames.length; i++) {
      if(playerHealth>0){
          window.alert("Welcome to Robot Gladiators! Round " + (i+1));
          var pickedEnemyName = enemyNames[i];
          enemyHealth = 50;
          fight(pickedEnemyName);

          if(i<enemyNames.length-1 && playerHealth >0){
              var storeConfirm = window.confirm("the fight is over, vist the store before the next fight?");

              if(storeConfirm){
                shop();
              }  
          }

      } else{
          window.alert("You have lost your robot in battle! Game over!");
          break;
      }
    }
    endGame();
};

var endGame = function (){
    if (playerHealth > 0){
        window.alert("great job! you've surviced the game! you now have score of "+ playerMoney +".");
    }else{
    window.alert("The game has now endede. Let's see how you did!");
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        startGame();
    } else{
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var shop=function(){
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop?"
    );

  switch(shopOptionPrompt){
        case "refill":
        case "REFILL":
        if (playerMoney >=7){
        window.alert ("Refilling player's health by 20 for 7 dollars.");
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney-7 ;
        }
        else{
            window.alert("You don't have enough money.")
        }
        break;

        case "UPGRADE":
        case "upgrade":
        if(playerMoney >=7){
           window.alert("Upgrading player's attack by 6 for 7 dollars");
           playerAttack=playerAttack+20;
           playerMoney=playerMoney-7;
        } else{
            window.alert("you dont have enough money.")
        }
        break;
        
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");
        break;
        
        default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
        break;
  }
};

startGame();