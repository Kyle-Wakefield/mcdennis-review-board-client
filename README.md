# McDennis Review Board Client

## Links
Deployed App: https://kyle-wakefield.github.io/mcdennis-review-board-client/

## USER STORIES
As a signed-out user, I want to:\
-sign up\
-sign in\
-view all reviews\
-view reviews of specific items\
\
As a signed-in user, I want to:\
-sign out\
-change password\
-view all reviews\
-view reviews of specific items\
-view my reviews\
-edit my reviews\
-leave a review\
-delete my reviews\

## WIREFRAMES
![wireframe-signed-in-view](https://media.git.generalassemb.ly/user/35162/files/d78bf580-a296-11eb-8f3c-318d8b98c1bd)
![wireframe-modals](https://media.git.generalassemb.ly/user/35162/files/d9ee4f80-a296-11eb-88ca-8e9831f56653)

## DESCRIPTION
This is an app that allows users to view, create, edit, and delete reviews of a fictional fast food chain called "McDennis". It connects to an API also created by me and hosted at https://kyle-wakefield.github.io/mcdennis-review-board-client/\
Users who are not signed in can currently sign up with a new account, sign in with an existing account, view all reviews, and view all reviews of a specific item.\
Users who are signed in can currently sign out, change their password, view all reviews, view all reviews of a specific item, view all of their own reviews, leave their own reviews, edit their own reviews, and delete their own reviews.\

### NOTES
-Emails are not currently verified in any way
-Although the API does hash passwords, Security is not currently guaranteed, so it's highly recommended that you use a fake email and password while using the app.\
-There is currently no language filter implemented, and anyone can add a review, so you may encounter explicit language while using the app.\
-The app does not currently adapt well to small screens. This feature will likely be added in the future.\
