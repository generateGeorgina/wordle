# Wordle
## Task
Make a start on your own version of the Wordle word game. Do not attempt to complete the game, just make a start on it.

Before you start:

- Find Wordle online.
- Break up every part of the game into a separate user story.
- On a new GitHub repo, create an issue for every user story.
- Decide which user story you are going to focus on for the take-home challenge.
- Attempt to complete the selected user story. Do not attempt to complete the whole game.

## User Story
I worked on the following user story. Check out my *issues* to find all user stories.

*As a player, I want to see a green tile so that I know that the letter is in the word and in the right place*

## Notable Challenges
I was working on the logic to update the background colour of the input element to green by adding and removing a class to the element. Initially, this did not work as intended. It only updated to green after hitting the submit button **and** manually typing in the letter in again. I fixed this issue (so that the input element turns green straight after clicking the submit button) by setting the value of the input element to and empty string and back to the original letter again.

## Deployed site
I created an AWS s3 bucket to deploy this site: https://wordle-two-bucket.s3.eu-west-2.amazonaws.com/wordle/index.html
