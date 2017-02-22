 $(document).ready(function() {
     var cloud, cloudHp, reaper, reaperHp, griffin, griffinHp, slime, slimeHp, selectedEnemy;

     cloud = { "name": "Cloud", "age": 20, "hp": 250, "attackPower": 15, "description": "Determined Soldier with a hazy background" };

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
     $("#cloudHp").text(cloudHp);

     reaperHp = reaper.hp;
     $("#reaperHp").text(reaperHp);

     griffinHp = griffin.hp;
     $("#griffinHp").text(griffinHp);

     slimeHp = slime.hp;
     $("#slimeHp").text(slimeHp);
     /* functionality for clicking reaper image
     $("#reaper, #slime, #griffin").click(function() {
         alert("im at all of yall head");
     });
     */
     /* Click functionality for attack button
     $("#attack").click(function() {
         alert("this might work");
     });
     */
     function doubleAtkPwr() {
         return cloud.attackPower += cloud.attackPower;
     }
     $("#start").click(function(event) {
         // display the arrows
         $(".arrow").css("display", "inherit");

         // hide the start button
         $("#start").css("display", "none");

         // display text for user to select enemy
         $("#selectionText").css("display", "inherit");

         // get the div element to log battle data
         var log = $('#log');
         // if any of the enemies are selected
         $(".enemy").click(function(event) {
             // if slime is the selectedEnemy
             if ($(this).is('#slime')) {
                 // log battle data if slime selected
                 log.html("You have selected battle with " + slime.name + ". His attack power is " + slime.attackPower);
             } else if ($(this).is('#reaper')) {
                 alert("The " + reaper.name + "was clicked.");
             } else if ($(this).is('#griffin')) {
                 alert("The " + griffin.name + " was clicked.");
             } else {
                 log.html('');
             }
         });


         // begin attack phase
     });
 });