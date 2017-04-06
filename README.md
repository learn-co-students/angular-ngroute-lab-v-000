# Integrate ngRoute

## Objectives

- Setup ng-view with our application
- Fetch data from the stubbed API
- Change view using ngRoute

## Instructions

Run `npm install` in your console to install dependencies, and then run `node server.js` to run the local web server. In another console, run `npm install -g stubby`, and then run `stubby -d config.yml` (this will run our mocked backend).

Our mocked backend has three URLs -

http://0.0.0.0:8882/rest/user/liam
http://0.0.0.0:8882/rest/user/jayden
http://0.0.0.0:8882/rest/user/mary

This will return data on the given user.

Add `ngRoute` to our app and then configure the route for `/user/:name`, using `views/user.html` for the view, and `UserController` for the user.

Use the resolve property to fetch data from the URLs above to receive data.

In our view, display the user's full name in a `<h2>` element (title, first name and last name). Display the email in a `<p>` tag.

Make sure you put the view directive in the HTML!
