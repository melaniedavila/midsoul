# midSoul
[midSoul live](http://www.midsoul.run/)

midSoul is a full-stack web application inspired by the web application version of MapMyRun. On the back end, it utilizes Ruby on Rails as well as a PostgreSQL database. The front end is based on React.js and Redux.

## Features and Implementation

### Mapping Routes
The heart of midSoul is the interactive map that allows users to create running routes and receive distance and elevation gain statistics in real-time. This feature relies heavily upon the Google Maps API.

![route_creation_img][route_creation]

The creation of routes is delegated to a single React Component that stores information regarding the route's origin, waypoints, and destination. The Google Maps Directions Service was used to render a line representing the user's route path after every click and allow users to drag their path as desired. Elevation gain of the route path was calculated using the Google Maps Elevation Service.

Prior to saving the route's path to the database, the series of latitude and longitude coordinates that comprise the route path are converted to a string via the encoded polyline algorithm. This algorithm uses base64 encoding to convert the initial coordinate value to a binary representation. The binary value is then converted to a series of ASCII character codes. The character codes are converted to their ASCII equivalents and added to the string comprising the encoded polyline.





### Runs


### Friends


[route_creation]: docs/screenshots/route_creation.png
