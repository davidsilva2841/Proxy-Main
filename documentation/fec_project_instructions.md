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

## Phase 3A: Deploy both servers
- Deploy both servers (service + proxy server), connect your deployed proxy to your deployed service as 
well as your teammates' deployed services.
- Your service should not use webpack-dev in production mode
#### Required Tech:
- AWS EC2
- -OR-
- Docker + EC2 (may require the use of Docker Hub)

## Phase 3B: Front-end Optimization
- If not already done so: serve all your JS bundles and CSS files from S3/cloudfront. 
This will require a you to develop a build process. Consider using either Grunt (preferred) or Gulp.
- Cross-browser test your implementation to see how it performs on different browsers and screen sizes. 
Adjust your CSS to cover the main browsers: Chrome, FF, Safari, Edge for mobile (480) and Desktop (1280)


## Phase 4: Advanced Content
- Turn your Proxy Server into an App Server
    - A Proxy Server is a "dumb" server, meaning it does nothing except serve up content from another server.
    - An App Server has some smarts to it. Some things you might decide to do:
        - Create multiple page layouts and assign different items to different layouts. To do this, you will
         need to add a database and map item IDs to layouts.
        - Allow your user to interact with a fully dynamic view for any given widget, even if the page is
         rendered on the server. This will require you to render the React component on top of the already presented 
         HTML and the component must be smart enough to not reinitialize/re-render itself.
        - Combine all your webpack bundles into one bundle for faster page rendering.
        - Send all API (from the client) back to your app server instead of the individual services. 
        The App Server will then proxy the request back to the appropriate service's API Server.
    - Build more than one page/experience or build additional modules/widgets for your selected experience.
        - search results page
        - category page (for browse)
    - Modify your widgets to support the creation of new records or editing of existing records (via the UI). 
    You will need to create a POST or PUT route on your server too.
        - The app you are cloning may not support the creation/editing. In this case use your own creative judgement on
         how your widget will support this feature.
    - Add Open-Graph tags. This will require the proxy server to have its own database that stores page metadata for a 
    given content ID.