Click-A-Star
==============

About:
==============
Click-A-Star is a time attack game where the player tries to click on each star in a constellation before the timer runs out. Your final rating is dependant upon your accuracy, a number calculated by comparing your clicks on target(score) with the total amounts of clicks the player made. I hope you have fun. Multi-player functionality should be coming soon!

User Stories:
==============
i. Game loads and directions are displayed
ii. The round begins and you have a certain amount of time to click on the stars as they appear before you
iii. Clicking on a star leaves an indication that it has been clicked and the score increases
iv. Once all the stars have been clicked the round ends and you're given a readout of your stats for the round
v. You should be able to click a button to begin the next round, and your stats should be reset.
vi. Rounds continue until last round where your final average accuracy is presented

Design Approach and Challenges:
==============
This is a browser game that uses Javascript HTML CSS and jQuery to shuffle items on and off of the screen. When creating this game I wanted to focus on clean design and as few buttons as possible. As a result, the game only has 1 button at a time and as few things as screen as possible. In order to accomplish that I had to juggle different elements with event handlers. This was done mostly with the help of jQuery which allowed me to manipulate my HTML more easily. 

Unfortunately, Click-a-star suffers some short-comings that are still evident in the code. It was initially designed to be able to be played by any amount of players, with each player taking turns at a level, however, this cause problems in determining when the round was over for all of them, so the multi-player was abandoned as an option, but the code is still there waiting to be repaired. Also, there's a minor bug that will re-calculate your accuracy once you click anywhere outside of the final score display modal. 

URL
=======
 https://benjamingomez0.github.io/click-A-star/