# CS Tutor Simulator

CS Tutor Simulator is a new incremental game that will simulate what it's like to be a high school kid who tutors CS. The game will trick people into learning regex.

# Overview

  - Addictive game that will cause dopamine to release when players see large numbers.
  - The game will reward completion of tasks in a flashcard structure.
    * Flashcards will be stored in a hierarchical structure, so completing low-level flashcards will unlock more difficult ones.
    * Every regex subtopic will have a practice section and a testing section, where the practice is simple transcoding of rules, and the testing offers larger rewards.
    * A program will generate regex questions demanding that the players find strings within text.

                                                               
# Data Model                          

- The game will exist in JS, and will store information on completed information.
- Flashcards will exist on a database, and will receive completed card information.
- Every gated card will be referred to by several simpler cards, and the gated card will have a "lock value" and an "unlock value." When a simple card is completed, it will add to the "unlock value" to gated cards. 

# Estimated Schedule

| Time | Task |
| ------ | ------ |
| Five Days | Write and design the game in JS. |
| Five Days | Work on the database so that it stores flashcards and they can be unlocked. |
| Five Days | Work on automated regex tests. |

# Functionality Beyond Your MVP      
- Make the game more elaborate.
- Also teach CSS, vim, and tmux.
- Save game and load game.
- Export to text file, and import from text file.
- Allow login and password to save game data.

