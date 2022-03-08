var randomNumber=function(min,max){
    var value = Math.floor (Math.random()*(max-min+1)+min);
    return value;
};



var fight = function(enemy) {
    //window.alert("Welcome to Robot Gladiators!");
    while (enemy.health>0 && playerInfo.health >0){
    var promptFight = window.prompt("Would you like to fight or skip this battle?");
    if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm ("Are you sure you'd like to quit?");

        if (confirmSkip){
            window.alert(playerInfo.name + " has chosen to skip the fight. Goodbye!");
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            console.log("playerInfo.money", playerInfo.money);
            break;
        }
        
    }
    var damage= randomNumber(playerInfo.attack-3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - playerInfo.attack);
        console.log(
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
        );

        if (enemy.health <= 0){
            window.alert(enemy.name + " has died!");
            playerInfo.money=playerInfo.money+20;
            break;
        } else{
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }
        
        var damage=randomNumber(enemy.attack-3,enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log (
            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
        );

        if (playerInfo.health <= 0){
            window.alert(playerInfo.name + " has died!");
            break;
        } else {
            window.alert (playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
    }
};

var startGame = function (){
 playerInfo.reset();
 for (var i = 0 ; i<enemyInfo.length; i++) {
      if(playerInfo.health>0){
          window.alert("Welcome to Robot Gladiators! Round " + (i+1));
          var pickedEnemyObj = enemyInfo[i];
          var damage = randomNumber(playerInfo.attack-3,playerInfo.attack);
          pickedEnemyObj.health=randomNumber(40,60);
          fight(pickedEnemyObj);

          if(i<enemyInfo.length-1 && playerInfo.health >0){
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
    if (playerInfo.health > 0){
        window.alert("great job! you've surviced the game! you now have score of "+ playerInfo.money +".");
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
        playerInfo.refillHealth();
        break;

        case "UPGRADE":
        case "upgrade":
        playerInfo.upgradeAttack();
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

var getPlayerName = function (){
    var name = "";

    while (name === "" || name === null){
        name=prompt("What is your robot's name?");
    }
    console.log ("Your robot's name is " + name);
    return name;
}
var playerInfo ={
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function(){
        this.health=100;
        this.money=10;
        this.attack=10;
    },
    refillHealth :function(){
        if (this.money >=7){
        window.alert("Refilling player's health by 20 for 7 dollars.");
        this.health += 20;
        this.money -=7;
        } else {
            window.alert ("You dont have enough money!");
        }
    },
    upgradeAttack: function(){
        if (this.money >= 7){
        window.alert("upgrading player's attack by 6 for 7 dollars.")
        this.attack += 6;
        this.money -=7;
        } else{
            window.alert("You dont have enough money.");
        }
    }
};

console.log(playerInfo.name, playerInfo.attack, playerInfo.health);

var enemyInfo = [
    {
        name:"Roborto",
        attack: randomNumber(10,14),
        shield: {
            type: "wood",
            strength: 10
        }
    },
    {
        name: "Amy Android",
        attack: randomNumber(10,14)
    },
    {
        name:"Robo Trumble",
        attack: randomNumber(10,14)
    }
];

startGame();