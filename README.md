# Dating Shouldn't Suck

![https://i.imgflip.com/ldmhi.jpg](https://i.imgflip.com/ldmhi.jpg)

## Overview

_**Dating Shouldn't Suck** is an app that helps singles add spice to their dating lives and avoid the monotonous dinner or drink at a bar. Dating Shouldn't Suck (DSS) is a full stack application where users have full CRUD capabilities to share their favorite date ideas along with personal reviews. Its the Yelp of Dating! Let's face it, dating in today's world is hard and overwhelming but, here at DSS, we believe it doesn't have to suck!_

<br>

## MVP

_The **Dating Shouldn't Suck** MVP will have a backend server built with Ruby on Rails exposing RESTful JSON endpoints. The server will include a database which consists of (3) tables, defined models, and full CRUD between non-user tables. In addition, the app will have a full CRUD functioning, interactive React front end. The front end will render data from back end APU and utilize client side routing through (8) components. Lastly, the front end will showcase impressive CSS styling, use of Flexbox, and responsive design on both desktop and mobile devices. The MVP will be delivered within the week timeframe alotted and deployed on Netlify (front end) and Heroku (back end).._

<br>

### Goals

- _Have a RESTful JSON API built on Ruby on Rails._
- _Build a database with at least 3 tables with defined models._
- _Full CRUD capability on both back end and front end._
- _Have an interactive React front end with (8) components._
- _Consume data from your Ruby on Rails API, and render that data in your components._
- _Utilize React Router, for client-side routing._
- _Front end polished with CSS that utilizes Flexbox._
- _Implemented on (2) media queries for responsive design on both mobile and desktop._

<br>

### Libraries and Dependencies

TBD

<br>

### Client (Front End)

#### Wireframes

https://wireframe.cc/vIthRu

- Desktop Landing

https://wireframe.cc/UMcJui

- Resource Show

https://wireframe.cc/S94X41

- Resource Create

https://wireframe.cc/zHNQ0H

- Resource Update/Delete

https://wireframe.cc/vIthRu

- Tablet Resource Index

https://wireframe.cc/jBSaVx

- Mobile Resource Index

<br>

#### Component Tree

```structure

src
|__ Components
      |__ Layout
            |__ Header
            |__ Nav
            |__ Footer
      |__Date_Idea
      |__ Createpage
      |__ Editpage
      |__ Search
|__ Screens
      |__ Homepage
      |__ Summary
      |__ Review
      |__ Create
      |__ Edit
|__ Services
      |__ Api-config
      |__ Auth
      |__ Sort
```

<br>

#### Component Breakdown

| Component  |    Type    | state | props |                                     Description                                      |
| :--------: | :--------: | :---: | :---: | :----------------------------------------------------------------------------------: |
|   Header   | functional |   n   |   y   |            _The header will contain the navigation, logo, and search. ._             |
| Navigation | functional |   n   |   y   |             _The navigation will provide a link to the Create pages. ._              |
|   Footer   | functional |   n   |   y   |            _The footer will render the logo and link to contact info. ._             |
|   Layout   | functional |   n   |   y   |  _The layout will render header,footer, and navigation the post info via props. ._   |
| Date_Idea  | functional |   y   |   n   | _The date idea will show info about the author and date review on the summary page._ |
|   Create   | functional |   n   |   n   |  _The create will show info on how to upload image and write a review for user. ._   |
|    Edit    | functional |   n   |   n   |         _The edit will will allow users to edit each review of date idea. ._         |
|   Search   | functional |   n   |   n   | _The search bar will display on Home page and in the header on subsequent pages. ._  |

<br>

#### Time Estimates

|               Task                | Priority | Estimated Time | Time Invested | Actual Time |
| :-------------------------------: | :------: | :------------: | :-----------: | :---------: |
|    Create Ruby file structure     |    H     |     4 hrs      |      TBD      |     TBD     |
|         Create Seed data          |    H     |     2 hrs      |      TBD      |     TBD     |
|          Migrate models           |    H     |     2 hrs      |      TBD      |     TBD     |
|     Code backend server files     |    H     |     5 hrs      |      TBD      |     TBD     |
|   Create Back End CRUD Actions    |    H     |     3 hrs      |      TBD      |     TBD     |
|      Create React Components      |    H     |     4 hrs      |      TBD      |     TBD     |
|   Create Front End CRUD Actions   |    H     |     6 hrs      |      TBD      |     TBD     |
|    Develop client side routing    |    H     |     3 hrs      |      TBD      |     TBD     |
|     CSS styling with flexbox      |    H     |     7 hrs      |      TBD      |     TBD     |
| Responsive design for media query |    H     |     4 hrs      |      TBD      |     TBD     |
| Deployment management and testing |    H     |     3 hrs      |      TBD      |     TBD     |
|               TOTAL               |          |     44 hrs     |      TBD      |     TBD     |

<br>

### Server (Back End)

#### ERD Model

![https://github.com/kaisha2004/Dating-Shouldnt-Suck/blob/master/Screen%20Shot%202020-09-15%20at%209.59.45%20AM.png](https://github.com/kaisha2004/Dating-Shouldnt-Suck/blob/master/Screen%20Shot%202020-09-15%20at%209.59.45%20AM.png)

<br>

---

## Post-MVP

- _Carousel of images on main page_
- _Incorporate grid styling on front end_
- _User Authentiation required for editing_
- _Map image accompanied of date idea_
- _Pop-up clickable buttons/images_
- _Tracking star rankings of total users for each date idea_
- _User first browse symbols for diff dating idea categories_
- _Make hamburger menu and overlapping nav bar for media queries_

---

<br>

## Code Showcase

TBD

<br>

## Code Issues & Resolutions

TBD
