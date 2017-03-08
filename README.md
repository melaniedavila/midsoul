# midSoul
[midSoul live](http://www.midsoul.run/)
![splash_img][splash]

midSoul is a full-stack web application inspired by the web application version of MapMyRun. On the back end, it utilizes Ruby on Rails as well as a PostgreSQL database. The front end is based on React.js and Redux.

## Features and Implementation

### Running Routes
The heart of midSoul is the interactive map that allows users to create running routes and receive distance and elevation gain statistics in real-time. This feature integrates with the Google Maps API.

![route_creation_img][route_creation]

The creation of routes is delegated to a single React Component that stores information regarding the route's origin, waypoints, and destination. The Google Maps Directions Service was used to render a line representing the user's route path after every click and allow users to drag their path as desired. Elevation gain of the route path was calculated using the Google Maps Elevation Service.

Prior to saving the route's path to the database, the series of latitude and longitude coordinates that comprise the route path are converted to a string via the encoded polyline algorithm. This algorithm uses base64 encoding to convert the initial coordinate value to a binary representation. The binary value is then converted to a series of ASCII character codes. The character codes are converted to their ASCII equivalents and added to the string comprising the encoded polyline.

### Friends
Users may search for and friend other users by name or email address.

![friend_search_img][friend_search]

### Activity Feed
Upon logging in, the user is brought to a feed of their friends' activities. Activities include creation of routes as well as logging of runs. Users may comment on friends' activities.

![activity_feed_img][activity_feed]

Upon clicking the comment icon, the activity feed item's comments are revealed:
![comments_img][comments]


On the back end, the FeedItem model represents the polymorphic nature of feed. Upon creation of a route of logging of a run, a feed item record is created in the database. This allows for straightforward fetching of feed items from the database and will also allow for effortless integration of other feed activities in the future.

```ruby
class FeedItem < ActiveRecord::Base
  belongs_to :feedable, polymorphic: true
  validates :feedable, :user, presence: true
  #...
end
```

## Future Directions for the Project

### Monthly Workout Stats
In an effort to provide users with more detailed workout information and a monthly dose of inspiration, I plan to generate monthly workout statistics.

### Route Genius
I plan to collect data on user's run history in order to recommend routes the user may enjoy and are within close proximity to the user's navigator geolocation.

### Integration with Polar API
In order to give users a way to keep track of runs without needing to fill out a form, I plan to integration Polar API with my application.


[splash]: docs/screenshots/splash.png
[route_creation]: docs/screenshots/route_creation.png
[friend_search]: docs/screenshots/friend_search.png
[activity_feed]: docs/screenshots/activity_feed.png
[comments]: docs/screenshots/comments.png
