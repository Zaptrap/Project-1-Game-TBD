## User Stories
The Name of the Game is Pick-N-Choose

-As a player, I should be able to start the game that creates 5 cups. 
    - there should be a start button that initiates the game
    - once started, there will be a chance that each cup for given # for a the given round to generate a ball within it

-As a player, when the game starts, it should begin with round 1, and once I win the previous round, it momentarily progresses into the next.
    - There will be 3 rounds
    - round 1: three balls will spawn in within 3 of the 5 cups
    - round 2: once round 1 is completed, initiate round 2; decrease the numbe of balls by 1 to a total of 2 spawned
    - round 3: once round 2 is completed, initiate round 3; decrease the numbe of balls by 1 to a total of 1 spawned

-As a player, if Imanage to click on a cup with a ball inside, game must save the data.
    - once I click on a cup:
        - if cup had a ball inside = that data will be saves for cup with this condition is saved and reveal the ball under the cup
        - this continues on until the last ball is found for each round

-As a player, if Imanage to click on a cup with no ball inside at any point of any round, game must save the data, and the game is over, and will be given a restart option upon failure
 - once I click on a cup:
        - if cup had nothing inside = that data initinates a game over, a reveals that the cup is empty and a loss message, until a restart is initiated
        - this will remain constant throughout all rounds
        - a restart button will appear to reset the game from the begining

-As a player, if manage to find all number of balls within each round, all the way up to the final round, the game will be declared beaten and I won
    - once round 3 is beaten, declare the game is null and initiate a victory message
    - if game is null with a victory, initiate a restart button option to play again

## PseudoCode

User Story: As a player, I should be able to start the game that creates 5 cups. 

feature: inital page load

Requirements:
    - variable that stores a "cup" element (querySelector)
    - variable that stores a "ball" element (innerHTML or querySelector)
    - varibles that displays a message (querySelector)
    - function that initiates game 
    - function that randomly generates a X number of "ball" element within given number of "cup" element (X number of balls for X round: 3 for R1, 2 for R2, 1 for R3)

User Story: As a player, when the game starts, it should begin with round 1, and once I win the previous round, it momentarily progresses into the next.

feature: round initiation

Requirements:
    - variable that logs each round
        - the number of balls required to find 
        - the number of balls found each round
        - the number of empty cups 
        - the number of cups with a ball in them
    - function that changes the progressive state of each round
        - ex: if round 1 is completed, change status to round 2
        - decrease the number of balls in cups

User Story: As a player, if Imanage to click on a cup with a ball inside, game must save the data.

Feature: handling cup clicks and reset button clicks

Requirements:
    - eventlisntener to handle clicks and interactions with cup elements
    - evenlistener that handles with cups with ablls in them
        - eventlistener the listens for in cup has a ball in it that reveals the ball in the cup
        - variable the saves the revealed ball data
    - function that determines that all the balls in each round are found to intiate the next round

User Story: As a player, if Imanage to click on a cup with no ball inside at any point of any round, game must save the data, and the game is over, and will be given a restart option upon failure

Feature: loss condition

Requirements:
    - eventlistener that handles with cups with no ball within them
        - (if a cup with no ball is clicked on) function that determines a loss codition (Loss = true) and disables clicks on cup 
        - function that display a loss message
        - function to give the command to reset the game once loss = true with a button 
    - variable to reset the game (queryselector)


User story: As a player, if manage to find all number of balls within each round, all the way up to the final round, the game will be declared beaten and I won

Feature: Win Condition

Requirements: 
    - function that looks through each round to check each ball in cup found 
        - if last ball in the last round is found, determine win = true
        - disable the click function on cups and display a win message
        - function to give the command to reset the game once win = true with a button 
    - variable to reset the game (queryselector)
