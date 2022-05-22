# rn-code-interview-test

Your task is to develop this ReactNative application so that it fetches a list of StackOverflow users and displays it in a list on the screen.

## Requirements

- Please spend no more than 2 hours in total on this, and submit your solution by the deadline given in the email instructions
- When the app is launched, the user should be able to see a list of the top 20 StackOverflow users
- Each list item should contain user's profile image, name and reputation
- If the server is unavailable (e.g. offline), the user should see a list empty state with an error message
- Have cells be expandable (upon tapping the cell), with additional options to 'follow' and 'block' a user
- Follow/block functionality should just be locally simulated, i.e. no actual API call should be made. The meaning of following and blocking is explained in the points below
- Users that are followed should show an indicator in the main part of the list item
- Users that are blocked should show in a disabled greyed-out list item; tapping on the item should not open the details view
- Include the 'unfollow' option in the view when a user is followed
- Write unit tests wherever you see fit
- Emphasise testing and architecture
- Written in either Javascript or Typescript (preferred)
- It should be designed such that the code can bridge to Native
- Explain in a few sentences the design decisions you took developing the above app, and describe anything that you were unable to do due to the time constraint

### GET Users Request

`GET http://api.stackexchange.com/2.2/users?pagesize=20&order=desc&sort=reputation&site=stackoverflow`

<br/>

---

<br/>

# Lee's comments

### Design decisions:

#### Features

- Similar to [bulletproof-react](https://github.com/alan2207/bulletproof-react)
- I like to organise react-native source code in to features.
- Each features should contain it's relevant components / stores / hooks / api functions / utils, etc.

#### react-query

- Probably overkill for one api request but it's a great library to use with RESTful endpoints.
- If I had more time I would have extended the query to use useInfiniteQuery to load the next page of users when the user reaches the ~bottom of the scroll view.

#### Zustand

- Zustand, combined with immer, is probably the cleanest and easiest state management solution I've used.
- I considered just using Context for the followed / blocked. Zustand doesn't require the use of Provider thus composition of App root, for a larger application, is much cleaner.
- Given more time I would have added the persist middleware allowing the follows / blocks to be persisted through app restarts.

#### FlatList

- Arguably a ScrollView could have been used here due to there only being 20 list items.
- FlatList is better sutited for lists of items as it supports virtualization.

<br/>

### Missing due to time time constraints

- As per above I would have liked to add infiniscroll.
- As per above I would have liked to have persisted the followed/blocked state via AsyncStorage.
- I would have liked to add "pull to refresh" functionality to the flatlist.
- I would have liked to add animations. I started adding react-native-reanimated but didn't have time to implement anything.
- I would have liked to add a loading skeleton for the list items.
- I would have liked to split the UserCard in to more separate components to make the render logic more readable / testable.
- I would have liked to add some tests for the Elements, eg Column, Row, Buttons, Paragraph, Heading, etc.
- I wrote the app on iOS. Given more time I would go back and validate the android version.
- I would usually add an Error boundary

<br/>

### Final thoughs:

Over all I really enjoyed this test.
I felt it was a nice balance of practical code that you might actually write in a real app.

I felt the provided time was a little tight - I like to pay a lot of attention to detail and felt that I had to cut corners in certain repects, especially with the UX, to stay within the provided time limit.

Thanks for oppertunity to take this test and thank you in advance for your time to review it.

Kind regards,

Lee
