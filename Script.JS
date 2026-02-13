let level = 1;
let score = 0;
let treasureLocation;
let enemyHP;
let maxHP;

function startLevel(){
  document.getElementById("result").innerHTML="";

  if(level === 1){
    document.getElementById("levelTitle").innerText="Level 1: Find Treasure";
    document.getElementById("locations").style.display="block";
    document.getElementById("battleArea").style.display="none";
    treasureLocation=Math.floor(Math.random()*3)+1;
  }

  if(level === 2){
    startBattle("Dragon 🐉",3,
    "https://i.imgur.com/6X12F4F.png");
  }

  if(level === 3){
    startBattle("Dark Wizard 🧙‍♂️",4,
    "https://i.imgur.com/1Xq9BiP.png");
  }

  if(level === 4){
    startBattle("Giant Troll 👹",5,
    "https://i.imgur.com/KgK8N2A.png");
  }

  if(level === 5){
    startBattle("Shadow King 👑",6,
    "https://i.imgur.com/8Q1Z7sL.png");
  }

  document.getElementById("score").innerText="Score: "+score;
}

function checkLocation(choice){
  if(choice===treasureLocation){
    score++;
    level=2;
    setTimeout(startLevel,1000);
  }else{
    document.getElementById("result").innerHTML="Trap! Try Again!";
  }
}

function startBattle(name,hp,img){
  document.getElementById("locations").style.display="none";
  document.getElementById("battleArea").style.display="block";
  document.getElementById("levelTitle").innerText="Level "+level;
  document.getElementById("enemyName").innerText=name;
  document.getElementById("enemyImage").src=img;

  enemyHP=hp;
  maxHP=hp;
  updateHealth();
}

function attack(){
  enemyHP--;
  updateHealth();

  if(enemyHP<=0){
    score++;
    level++;

    if(level>5){
      document.getElementById("battleArea").style.display="none";
      document.getElementById("levelTitle").innerText="🏆 YOU WON THE GAME!";
      document.getElementById("result").innerHTML="🔥 Mythical Champion 🔥";
    }else{
      setTimeout(startLevel,1000);
    }
  }
}

function updateHealth(){
  let percent=(enemyHP/maxHP)*100;
  document.getElementById("healthFill").style.width=percent+"%";
}

function restartGame(){
  level=1;
  score=0;
  startLevel();
}

startLevel();
