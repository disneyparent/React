# Disney Parent - Stroller Share 
( a React app; no copyright infringment intended )

-- Renting strollers at theme parks gets expensive -- especially if you only need it for a short time. This app allows parents to 
share their strollers when they're done with it and borrow a free one when they need it.



- This repo contains a development branch to which React I and React II have pushed the following:

-  A <b>DisneyLogin</b> page with allows a user to sign up with a new username and password or log in with an existing account.
    -( Form created by React I, POST request created by React II)
    - Both options lead to...

-  A <b>Welcome</b> page where users can choose whether they want to borrow a stroller or share their stroller.

-  Selection of <b>'borrow'</b> reveals a form asking what size stroller the user needs, a submit button, 
     which redirects the user to the list of strollers (<b>buggielist</b>), and a cancel button which hides the borrow form.
     - ( Form and GET request created by React I)

-  Selection of <b>'share'</b> reveals a form asking what size stroller the user is offering and where it will be located. 'Submit'
     adds the stroller to the list of strollers and 'Cancel' hides the share form.
     - (Form and POST request created by React II)
     - A sharing user can then close the app or select 'Borrow' to view the list of strollers, including the one they just shared.

-  On the list of strollers, each stroller shows its size, availability status, and location.
     - Each stroller has a 'Borrow' button and 'Delete' button.
     - ( List component created by GET request by React I, button function PUT and DELETE created by React II)
     - Selecting <b>'Borrow'</b> will change the availability status of the stroller and add the stroller to the list of taken strollers.
     - Selecting <b>'Delete'</b> will, you know, delete the stroller from the list.

-  Every user object contains an id integer, username string, and password string. 

-  Every stroller object contains an id integer, location string, availability boolean, and size boolean.

-  Styling was done inline by React I.


