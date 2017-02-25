 $(document).ready(function() {
     var cloud,
         cloudHp,
         cloudAtkPwr,
         reaper,
         reaperHp,
         reaperAtkPwr,
         griffin,
         griffinHp,
         griffinAtkPwr,
         slime,
         slimeHp,
         slimeAtkPwr,
         selectedEnemy,
         selectionText,
         log,
         p,
         batlog,
         classes;

     selectionText = $("#selectionText");

     cloud = { "name": "Cloud", "age": 20, "hp": 250, "attackPower": 7, "description": "Determined Soldier with a hazy background" };

     reaper = {
         "name": "Reaper",
         "attackPower": 9,
         "hp": 950
     };
     griffin = {
         "name": "Griffin",
         "attackPower": 10,
         "hp": 475
     };
     slime = {
         "name": "Slime",
         "attackPower": 6,
         "hp": 300
     };
     cloudHp = cloud.hp;
     cloudAtkPwr = cloud.attackPower;
     $("#cloudHp").text(cloudHp);
     $("#cloudAtkPwr").text(cloudAtkPwr);

     reaperHp = reaper.hp;
     reaperAtkPwr = reaper.attackPower;
     $("#reaperHp").text(reaperHp);
     $("#reaperAtkPwr").text(reaperAtkPwr);

     griffinHp = griffin.hp;
     griffinAtkPwr = griffin.attackPower;
     $("#griffinHp").text(griffinHp);
     $("#griffinAtkPwr").text(griffinAtkPwr);

     slimeHp = slime.hp;
     slimeAtkPwr = slime.attackPower;
     $("#slimeHp").text(slimeHp);
     $("#slimeAtkPwr").text(slimeAtkPwr);

     selectedEnemy = '';

     function atkReaper() {
         reaperHp -= cloudAtkPwr;
         doubleAtkPwr();
         batlog = "You have attacked " + reaper.name + ". " + reaper.name + ". 's hp is " + reaperHp + ". Your Attack Power has doubled. It is now " + cloudAtkPwr + ".";
         p.append(batlog + "<br>");
         $('#reaperHp').text(reaperHp);
         reaperHp = parseInt(reaperHp);
         return reaperHp;
     }

     function reaperAtk() {
         cloudHp -= reaper.attackPower;
         batlog = "You have been attacked by a " + reaper.name + ". Cloud's hp is " + cloudHp + ". Continue fighting!";
         p.append(batlog + "<br>");
         $("#cloudHp").text(cloudHp);
         cloudHp = parseInt(cloudHp);
         return cloudHp;
     }

     function atkGriffin() {
         griffinHp -= cloudAtkPwr;
         doubleAtkPwr();
         batlog = "You have attacked " + griffin.name + ". " + griffin.name + "'s hp is " + griffinHp + ". Your Attack Power has doubled. It is " + cloudAtkPwr;
         p.append(batlog + "<br>");
         $('#griffinHp').text(griffinHp);
         griffinHp = parseInt(griffinHp);
         return griffinHp;
     }

     function griffinAtk() {
         cloudHp -= griffin.attackPower;
         batlog = "You have been attacked by a " + griffin.name + ". Cloud's hp is " + cloudHp + ". Continue fighting!";
         p.append(batlog + "<br>");
         $("#cloudHp").text(cloudHp);
         cloudHp = parseInt(cloudHp);
         return cloudHp;
     }

     function atkSlime() {
         slimeHp -= cloudAtkPwr;
         doubleAtkPwr();
         batlog = "You have attacked " + slime.name + ". Slime's hp is " + slimeHp + ". Your Attack Power has doubled. It is " + cloudAtkPwr;
         p.append(batlog + "<br>");
         $('#slimeHp').text(slimeHp);
         slimeHp = parseInt(slimeHp);
         return slimeHp;
     }

     function slimeAtk() {
         cloudHp -= slime.attackPower;
         batlog = "You have been attacked by a " + slime.name + ". Cloud's hp is " + cloudHp + ". Continue fighting!";
         p.append(batlog + "<br>");
         $("#cloudHp").text(cloudHp);
         cloudHp = parseInt(cloudHp);
         return cloudHp;
     }

     function gameOver() {
         $("#cloud, #cloudHp, #cloudAtkPwr, .enemy, .arrow, .enemyAttr1, .enemyAttr0, #start, #attack").css("display", "none");
         selectionText.html("<p>YOU HAVE LOST!</p>");
         log.append("<p>YOU HAVE LOST!</p>");
     }

     function gameWin() {
         if (reaperHp <= 0 && slimeHp <= 0 && griffinHp <= 0) {
             selectionText.html("YOU HAVE WON!");

         }
     }


     // get the div element to log battle data
     log = $('#log');

     p = log.append("<p>");

     function doubleAtkPwr() {
         cloudAtkPwr = cloudAtkPwr + cloudAtkPwr;
         $("#cloudAtkPwr").text(cloudAtkPwr);
         return cloudAtkPwr;
     }

     $("#start").click(function(event) {
         // display the arrows
         $(".arrow").css("display", "inherit");

         // hide the start button
         $("#start").css("display", "none");

         // display text for user to select enemy
         $("#selectionText").css("display", "inherit");
         // add alive class to enemies
         $(".slime, .griffin, .reaper").addClass("alive");


         // if any of the enemies are selected
         $(".slime, .griffin, .reaper").click(function(event) {
             // if slime is the selectedEnemy
             if ($(this).is('#slime')) {
                 selectedEnemy = $(this);
                 // hide other enemies
                 $(".griffin, .reaper").addClass("dead");
                 // log battle data if slime selected
                 batlog = "You have selected battle with " + slime.name + ". His attack power is " + slime.attackPower + ".";
                 p.append(batlog + "<br>");
                 // prompt user to attack
                 selectionText.html("Press the Attack Button!");
                 // register attack button to attack selectedEnemy
                 $("#attack").click(function() {
                     atkSlime();
                     slimeAtk();
                     if (slimeHp <= 0) {
                         batlog = "You have defeated " + slime.name;
                         p.append(batlog + "<br>");
                         $(".slime").css("display", "none");
                         $(".slime, .reaper, .griffin").removeClass("dead");
                         selectionText.html("Select Another Enemy");
                         selectedEnemy = '';
                         gameWin();
                     } else if (cloudHp <= 0) {
                         gameOver();
                     }
                 });
             } else if ($(this).is('#reaper')) {
                 selectedEnemy = $(this);
                 // hide other enemies.
                 $(".slime, .griffin").addClass("dead");
                 batlog = "You have selected battle with " + slime.name + ". His attack power is " + slime.attackPower + ".";
                 p.append(batlog + "<br>");
                 // prompt user to attack
                 selectionText.html("Press the Attack Button!");
                 // register attack button to attack selectedEnemy
                 $("#attack").click(function() {
                     atkReaper();
                     reaperAtk();
                     if (reaperHp <= 0) {
                         batlog = "You have defeated " + reaper.name;
                         p.append(batlog + "<br>");
                         $(".reaper").css("display", "none");
                         $(".slime, .reaper, .griffin").removeClass("dead");
                         selectionText.html("Select Another Enemy");
                         selectedEnemy = '';
                         gameWin();
                     } else if (cloudHp <= 0) {
                         gameOver();
                     }
                 });
             } else if ($(this).is('#griffin')) {
                 selectedEnemy = $(this);
                 // hide other enemies
                 $(".slime, .reaper").addClass("dead");
                 batlog = "You have selected battle with " + griffin.name + ". His attack power is " + griffin.attackPower + ".";
                 p.append(batlog + "<br>");
                 // prompt user to attack
                 selectionText.html("Press the attack button!");
                 // register the attack button to attack selectedEnemy
                 $("#attack").click(function() {
                     atkGriffin();
                     griffinAtk();
                     if (griffinHp <= 0) {
                         batlog = "You have defeated " + griffin.name;
                         p.append(batlog + "<br>");
                         $(".griffin").css("display", "none");
                         $(".slime, .reaper, .griffin").removeClass("dead");
                         selectionText.html("Select Another Enemy");
                         selectedEnemy = '';
                         gameWin();
                     } else if (cloudHp <= 0) {
                         gameOver();
                     }
                 });
             } else {
                 log.html('');
             }
         });
     });
 });