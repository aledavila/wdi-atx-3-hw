## Monty Python and the Holy Rails

We're going to build an app to keep track of our favorite movies, and look at photos of characters in that movie.

A Movie has:

* title
* year
* poster_url

A Character has:

* name
* photo_url



### Part 1 - Database
* Start by setting up your database schema and creating your database.

### Part 2 - Models & ActiveRecord
* Set up your models using ActiveRecord. Test them to make sure they work and they are associated correctly.
 * [Setting up your model](http://guides.rubyonrails.org/active_record_basics.html)
 * [More information on migrations](http://guides.rubyonrails.org/active_record_migrations.html)

* Create AT LEAST 3 movies with 2 characters each so you have a good amount of data to start with. You can / should do this using your seeds file.
 * [Information on how to seed your database](http://edgeguides.rubyonrails.org/active_record_migrations.html#migrations-and-seed-data)

### Part 3 - Routes, Controllers & Views
* Build out your Rails app one route at a time. You should have controller actions for index, show, and destroy.
 * [Resource for the Action View](http://guides.rubyonrails.org/action_view_overview.html)
 * [Resource for the Action Contoller](http://guides.rubyonrails.org/action_controller_overview.html)
 * [Rails Routing Resource](http://guides.rubyonrails.org/routing.html)

## Bonus
* Add CSS to make your app look nice
* Add a way that we can watch trailers that came out for that movie.

A Trailer has:

* title
* embed_url

NOTE: Check out [how to embed a youtube video](https://developers.google.com/youtube/player_parameters#Embedding_a_Player)

Here's what the url looks like:
![youtube_url](youtube_url.png)

Here's here you find the video_id:
![video_id](youtube_id.png)
