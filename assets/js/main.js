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
                 batlog;

             selectionText = $("#selectionText");

             cloud = { "name": "Cloud", "age": 20, "hp": 250, "attackPower": 10, "description": "Determined Soldier with a hazy background" };

             reaper = {
                 "name": "Reaper",
                 "attackPower": 9,
                 "hp": 150
             };
             griffin = {
                 "name": "Griffin",
                 "attackPower": 10,
                 "hp": 175
             };
             slime = {
                 "name": "Slime",
                 "attackPower": 6,
                 "hp": 100
             };
             cloudHp = cloud.hp;
             cloudAtkPwr = cloud.attackPower;
             $("#cloudHp").text(cloudHp);
             $("#cloudAtkPwr").text(cloudAtkPwr);
             $("#cloudAtkPwr, #cloudHp, #cloud").attr({ "data-test-1": cloudAtkPwr });

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
                 batlog = "You have attacked " + reaper.name + reaper.name + ". 's hp is " + reaperHp + ". Your Attack Power has doubled. It is " + cloudAtkPwr;
                 p.append(batlog + "<br>");
                 $('#reaperHp').text(reaperHp);
                 return reaperHp;
             }

             function reaperAtk() {
                 cloudHp -= reaper.attackPower;
                 batlog = "You have been attacked by a " + reaper.name + ". Cloud's hp is " + cloudHp + ". Continue fighting!";
                 p.append(batlog + "<br>");
                 $("#cloudHp").text(cloudHp);
                 return cloudHp;
             }

             function atkGriffin() {
                 griffinHp -= cloudAtkPwr;
                 doubleAtkPwr();
                 batlog = "You have attacked " + griffin.name + griffin.name + ". 's hp is " + griffinHp + ". Your Attack Power has doubled. It is " + cloudAtkPwr;
                 p.append(batlog + "<br>");
                 $('#griffinHp').text(griffinHp);
                 return griffinHp;
             }

             function griffinAtk() {
                 cloudHp -= griffin.attackPower;
                 batlog = "You have been attacked by a " + griffin.name + ". Cloud's hp is " + cloudHp + ". Continue fighting!";
                 p.append(batlog + "<br>");
                 $("#cloudHp").text(cloudHp);
                 return cloudHp;
             }

             function atkSlime() {
                 slimeHp -= cloudAtkPwr;
                 doubleAtkPwr();
                 batlog = "You have attacked " + slime.name + ". Slime's hp is " + slimeHp + ". Your Attack Power has doubled. It is " + cloudAtkPwr;
                 p.append(batlog + "<br>");
                 $('#slimeHp').text(slimeHp);
                 return slimeHp;
             }

             function slimeAtk() {
                 cloudHp -= slime.attackPower;
                 batlog = "You have been attacked by a " + slime.name + ". Cloud's hp is " + cloudHp + ". Continue fighting!";
                 p.append(batlog + "<br>");
                 $("#cloudHp").text(cloudHp);
                 return cloudHp;
             }

             function gameOver() {
                 $("#cloud, #cloudHp, #cloudAtkPwr, .enemy, .arrow, .enemyAttr1, .enemyAttr0, #start, #attack").css("display", "none");
                 selectionText.html("<p>YOU HAVE LOST!</p>");
                 log.append("<p>YOU HAVE LOST!</p>");
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



                         // if any of the enemies are selected
                         $(".enemy").click(function(event) {
                                     // if slime is the selectedEnemy
                                     if ($(this).is('#slime')) {
                                         selectedEnemy = $(this);
                                         // hide other enemies
                                         $("#reaper, #griffin, #d_arrow1, #d_arrow3, #griffinHp, #reaperHp, #griffinAtkPwr, #reaperAtkPwr").css("display", "none");
                                         // log battle data if slime selected
                                         p.html("You have selected battle with " + slime.name + ". His attack power is " + slime.attackPower + ". \n");
                                         // prompt user to attack
                                         selectionText.html("Press the Attack Button!");
                                         // register attack button to attack selectedEnemy
                                         $("#attack").click(function() {
                                             atkSlime();
                                             slimeAtk();
                                             if (slimeHp <= 0) {
                                                 p.html("You have defeated " + slime.name);
                                                 $("#slime, #d_arrow2, #slimeHp, #slimeAtkPwr").css("display", "none");
                                                 $("#reaper, #griffin, #d_arrow1, #d_arrow3, #griffinHp, #reaperHp, #griffinAtkPwr, #reaperAtkPwr").css("display", "inherit");
                                             } else if (cloudHp <= 0) {
                                                 gameOver();
                                             }
                                         });
                                     } else if ($(this).is('#reaper')) {
                                         selectedEnemy = $(this);
                                         // hide other enemies.
                                         $("#slime, #griffin, #d_arrow2, #d_arrow3, #griffinHp, #slimeHp, #griffinAtkPwr, #slimeAtkPwr").css("display", "none");
                                         // if enemy has dead class display is set to none
                                         // if ($("#").hasClass(dead){

                                         //})
                                         /*
                 $("#attack").click(function() {
                     atkReaper();
                     reaperAtk();
                     if (reaperHp <= 0) {
                         p.html("You have defeated " + reaper.name);
                         $("#reaper, #d_arrow1, #reaperHp, #reaperAtkPwr").css("display", "none");
                         $("#reaper, #griffin, #d_arrow1, #d_arrow3, #griffinHp, #reaperHp, #griffinAtkPwr, #reaperAtkPwr").css("display", "inherit");
                     } else if (cloudHp <= 0) {
                         gameOver();
                     }
                 });
             } else if ($(this).is('#griffin')) {
                 alert("The " + griffin.name + " was clicked.");
             } else {
                 log.html('');
             }
         });


         // begin attack phase
     });
 });