# FEC

## Phase 0: Build an app plan
- Pick an app 
    - 1 module for each team member to build
- Define your API, pick a DB and design your data
    - Host media assets on S3 or Cloudfront

## Phase 1: Build your service
- Generate 100 dummy records for your modules database
- Can't copy data into other team members database
- Build a server that can serve an index.html file which then loads the app and renders it to the page
    -  (using react and webpack-dev [development] and webpack [production]).
- Each member of the team must run their service on a different port number
    - The focus of this project is on Front-end deliverables. Your server and database design must be 
    the minimum design necessary to deliver content to your React Component. If your server has more 
    than 100 lines of code, you may be putting too much emphasis on your server.
- Build an API that the React component will use to fetch data based on an item's ID and/or name.
- Write tests to ensure your API works correctly and your component(s) render correctly
    - Jest will help you measure code coverage of your tests.
###### Required Tech:
- Express
- Database (MongoDB or MySQL)
- Webpack (production)
- Webpack-dev (development)
- React using Styled Components or CSS Modules
    - You must style your components use Style Components or CSS Modules
    - Do not use any jQuery UI components: instead opt for using React Libraries for subordinate UI components
- Enzyme (for React) + Jest
- Travis or Circle CI
##### Optional Tech
- CSS Preprocessor
- memcache and/or redis
- nginx

## Phase 2: Build your own proxy server
- Build a static version of the page
- You will need to have each of your teammate's services running in your development environment
- Integrate all four services onto one page by pulling individual components onto one page and render 
them into their respective DOM nodes, initially client side.
- Serve all your JS bundles and CSS files from S3/cloudfront. This will require a you to develop a build process. 
Consider using either Grunt (preferred) or Gulp.

##### Required Tech:
- Express
- React
##### Optional Tech:
- Grunt or Gulp
- memcache and/or redis
- nginx

