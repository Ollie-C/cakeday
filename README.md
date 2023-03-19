# cakeday manager

Live: https://cakeday-manager.vercel.app/

Github: https://github.com/Ollie-C/cakeday

## Introduction

cakeday manager is an app for use at work that keeps track of an employee's birthday and calculates their cake day. Cakes are brought into work the next working day after their birthday (which they get as a day off!)

Really fun project that is simple at first glance but emphasises your ability to solve problems creatively. Every problem I solved gave rise to a new problem I hadn't intially considered. For example: the number of cakes might simply be calculated as 1 per person. But obviously (I say this retrospectively), if you share a cake day, the large cake is going be shared. An assumption had to be made that 1 large cake accounted for 2 people on a shared cake day in case we started getting 20 people sharing a single cake...!

### Screenshots

[Coming soon]

### Get started

Either visit the deployed version above, or to run locally: 
1. In your terminal: ``git clone https://github.com/Ollie-C/cakeday.git`` 
2. Install dependencies: ``npm i / npm install / yarn install``
3. Give it a whirl: ``npm run``


### Using the app

Try adding your own birthday to find out which day you'll (in theory) be receiving a cake at work this year! (If your birthday has already passed, I'll be adding a feature that allows you to search following years as well.)

Some hacks to type in the name input:
1. `reset` - will reset all the employee data
2. `seed` - seeds the database with mock data

Employee data structure is console logged for a reference point
 
## Details

### Features

1. Form allows user to enter employee name and date of birth using a UK date format
2. A cake day is calculated for the employee based on their date of birth
3. If the employee shares a cake day with someone this year, their cake size as well as the person they are sharing with, is updated to large
4. A pie chart shows the split of small and large cakes for the current year
5. The table is paginated to display 5 employees per page
6. Users have the ability to filter the list by same cake day
7. The app is built for use across multiple screen sizes

### Testing

Multiple basic unit tests have been built in Jest and RTL. Type ``npm run test`` to run them locally from your terminal

### Lighthouse report

[Coming soon]


### Unresolved bugs

1. The app allows you to enter a date in the future despite restricting the input (which has now been removed)

### Limitations

- Localstorage is a temporary solution for a databse. The project has been set up so that it would be easy to introduce one
- There are no page numbers so for companies with over a certain number of employees, the pagination is limited
- No search filter
- No delete functionality aside from the reset hack mentioned above
- UK bank holidays are not included
- Cannot display by year

### Future of the project

1. Address all bugs
2. Currently the employee's name is truncated to a set length. I'd like this to be adjusted based on screen size
3. Previously I tried using the goverment bank holiday API to retrieve bank holiday dates. It got a bit complicated and so I've shelved it for future development
4. Add delete functionality
5. Dropdown box allowing you to change the year


### Notes

Most linting and webpack configurations were left untouched from running create-react-app


Ollie
