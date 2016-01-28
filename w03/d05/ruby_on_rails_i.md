# Ruby on Rails I

Learning Objectives:
- What is Ruby on Rails
- Convention over Configuration
- Environments 
- Routes/ Resources
- 
- 

## What is Ruby on Rails?

Rails was created in 2003 by David Heinemeier Hansson, while working on the code base for Basecamp, a project management tool by 37signals. David extracted Ruby on Rails and officially released it as open source code in July of 2004. Despite rapid iteration of the Rails code base throughout the years, it has stuck to three basic principles:

* Ruby Programming Language
* Model-View-Controller Architecture
* Programmer Happiness

Rails was created with the goal of increasing programmers' happiness and productivity levels. In short, with Rails you can get started with a full-stack web application by quickly creating pages, templates and even query functions. Rails heavily emphasizes "Convention over Configuration." This means that a programmer only needs to specify and code out the non-standard parts of a program. Even though Rails comes with its own set of tools and settings, you're certainly not limited to library of rails commands and configurations. Developers are free to configure their applications however they wish, though adopting conventions is certainly recommended.

Over the years, Rails has indeed made it easier for beginners to dive into web development and build large complex applications. Some popular websites built on Rails include Twitter (at one point), GitHub and, of course, 37signals' very own Basecamp. Although it has often been criticized for performance and bloat, Rails continues its iterations with an ever-growing developer community and a vibrant ecosystem.

#### What is a framework

Remember, Ruby on Rails is comprised of two parts: Ruby and Ruby on Rails.  Ruby as we know is a general programming language.  Ruby on Rails is web application framework.

A framework could be defined as: 
	-A set of code libraries and data structures that provide generic functionality which can be used, overridden, or further specialized.

A framework will do more for you than a library. It's going to provide more structure, dictate the flow control of the program, and have a lot of default behaviors built in. Libraries typically don't do anything, until you ask them to. The Rails framework is actually going to do a lot, on its own, as a default behavior.

#### Convention over Configuration

Rails follow a pattern called "convention over configuration" - this means that by default, a Rails app expects you to follow specific patterns and folder structures. This means you need to learn these conventions, but also means that once you learn them, you save time by not having to setup a lot of the configuration you'd otherwise need to set up manually.

Rails is built using sensible default choices for everything. Those default options are what we'll use, unless we override those defaults with our own choices. That means we only need to specify the unconventional aspects. The things that are different for our code that speeds up development a lot. Most of the time we can sort of ride on those defaults, to get most of the way there. And then we only have to write code for the things that are different.

Having default code that we can use, also gives us less code to maintain as well. We only have to maintain our customizations. The other benefit of these conventions and sensible defaults, is that they follow all of the best practices of web application development. We're going to have these best practices built in, and right there. Ready for us to use and take full advantage of. It's going to help our code to be better. And our end product to be better. Now the one thing you need to be aware of though, is that Rails is very opinionated about what those best practices are.

Probably 95% of the time, these are not controversial. And everyone agrees on what these best practices are. But there are some cases, where there might be two competing ideas for the best way to do something. Rails is going to take a stand. And say this is the way Rails is going to do it. It will make it a default. You can still configure your code to do things a different way. But by default, you'll get the Rails choice. So just be aware of that. The other great thing about these sensible defaults that are built into the framework, is that a lot of the time, we get extra features for free.

###### Naming Conventions:

[Check out this site for help with Rails naming conventions](https://github.com/bbatsov/ruby-style-guide#naming)

[Check out this site for help with Rails naming conventions](http://itsignals.cascadia.com.au/?p=7)

#### MVC

So we have M, V and C. The M, stands for model. The V stands for view. And the C stands for controller. The model refers to the data objects that we use. It's the object oriented approach to design.

Many things can be objects in our models, but the data in our database will be the most common type of object that we'll put there. The view is the Presentation layer. It's what the user sees and interacts with, essentially the web pages. The HTML, the CSS and the JavaScript. The controller processes and responds to user events, such as clicking on links and submitting forms. The controller will make decisions based on the request and then control what happens in response. It controls the interaction with our models and with our views. 


## Creating a New Rails Application

#### Installing rails

We have already been using gems with Ruby, and Rails is, in fact, a gem!  So to install it all we need to do it type the following command:
```bash
  gem install rails
```

#### New Rails App

Now that we are sure that we have Ruby on Rails installed we can start our new web app! First, lets change directories where we want our app reside.  Then we are going to run the command:

```bash
  rails new cookbook -d postgresql
```  
Great! We just created the initial folder structure for a Rails app, and because we added the option `-d postgresql`, this app will be initialized with PostgreSQL for the database engine – which we will use later on in the lesson.

> **Note:** By default, if you *do not* add any option for the database, Rails will create the app with SQLite3. While you are working in a local development environment (localhost), you won't notice much of a difference between SQLite3 and PostgreSQL.

> Once your app is in production on a remote server, you will *not* use SQLite, and they will often use PostgreSQL. A best practice in web development is to keep development and production environments as similar as possible, so we recommend using PostgreSQL from the start.

Once it has been created lets change into that directory, open it in sublime, and take a look at the files and folders that were created by the `rails new` command.

* 90% of the web app code will be inside the folder `app`, including all of our model, view, and controller logic.
* `config` contains all the credentials for the DB and other 3rd party services, all the deployment settings, and the specs about how to serve this app over HTTP.
* `db` will contain all of your migrations

We will describe the other folders in later lessons, and for the next couple of weeks, you will primarily write code inside the folders described above.

#### Environments

Lets take a look at our config/environments folder for a second.  You'll notice that there are three different files in there: development.rb, production.rb , and test.rb. These correspond with the environment that we are in.

Development is where you will be spending most of your time.  This is environment in which, you guessed it, we develop our app!  This is where we can let our creative juices flow and code all sorts of new features without affecting the product that may already be out there.

The production environment is when our application is actually out in the real-world ready for our users to utilize.  It is the live site that people can use.

A dedicated test database allows you to set up and interact with test data in isolation. Tests can mangle test data with confidence, that won't touch the data in the development or production databases.

## Generate a new controller

Two ways of generating contollers in rails is to either do it manually by creating all of the necessary files and directories and putting the the proper ruby code. Another way, which were going to look at right now, is to generate the controller.

Rails it can generate a lot of things for us. It has its set of default libraries for things that it knows how to generate to help us out. Put this in your shell:

```bash
rails generate
```

This shows us all of the things that we can generate.  Right now we are interested in generating a controller.  Now if we type:

```bash
rails generate controller
```

lets see what we get.  

This gives us a list of how we can utilize the generate command more effectively. Lets run the command properly now:

```bash
rails generate controller recipes index show
```
Lets take a look at what this created for us:

Generating a new controller has now placed the file `recipes_controller.rb` into our controller directory. Since we added the two action options at the end it also created two views with the corresponding actions in a new directory named recipes in our views directory. It also added a couple or routes for us in our routes file.

#### Routes

As you know, a "route" is a combination of **the path** that was requested and **the HTTP verb** that was used to request that path.

When we've used Sinatra, we were managing the routes and the code executed for a specific route in the same place:


```ruby
	get "/books" do
		# Here is the code that will be executed when the client requests /books
	end
```

This is handy for us as developers, because it allows us to keep everything in the same place - routing and controller logic - but if the app grows it can get unreadable. Imagine, for example, an app that has 20 or 30 different routes... your main routes file could contain a lot of complex code.

Rails has a "routing engine" that separates the routing logic from the controller logic (what we want to happen when routes are requested). The configuration for this routing engine is in the file `config/routes.rb`.

```ruby
Rails.application.routes.draw do

end
```

Everything between the `do` and the `end` will be code related to handling routes for the current application.

Lets take a look again at our folder and notice these two routes 

```ruby
Rails.application.routes.draw do

get 'recipes/index'

get 'recipes/show'

end
```

These were created when we generated our controller and are simple get or match routes.  They are written the shorthand way, but to illustrate what is going on we will show you the long way as well.

```ruby
Rails.application.routes.draw do

match 'recipes/index',
:to => 'recipes#index',
:via => :get

...

end
```

You can see why it is more common to see the short hand form.  

###### Practice:

Lets test this out with out routes being generated for us:

	1. Generate a new controller named home
	2. add this method to the controller home 
	```ruby
  class HomeController < ApplicationController

    ## This is a controller action called about_us
    def about_us
      render text: "hello from Rails! This is all about us..."
    end

  end
```
	3. Create the proper route to allow us to access the page.



#### Create methods for a RESTful controller

We've already defined what a RESTful resource is, let's see how to implement it in a rails app.

As a reminder, a RESTful resource will include 7 methods:

* Index
* Show
* New
* Create
* Edit
* Update
* Delete

Rails has a generator called `scaffold` that will create the whole MVC structure for a resource, let's say that inside the cookbook app, we want the `Recipe` resource to have a title and a content field, we would type:

```ruby

rails g scaffold recipes title content:text

```

Running this command will generate a lot of files, including the controller, the views, the model, and the migration. It will also update the routes file.

Take a look at the controller, it has all the RESTful methods, and these methods already contain the code to query the database through the model `Recipe`.

#### Resources

As we look at our routes file we notice that we now have a resources :recipes up at the top. This is essentially creating all of the routes needed that correspond with the RESTful resources.

This line hides some powerful rails magic - it's actually mapping the seven restful methods from the controller `posts` to the related http routes with the correct HTTP verbs and uris:



| REST Route type | HTTP Verb | URI | ruby method name|
|-----------------|-----------|-----|-----------------|
|index|    GET    |     /recipes(.:format)          |   recipes#index|
|create|    POST   |     /recipes(.:format)          |   recipes#create|
|new|    GET    |     /recipes/new(.:format)      |   recipes#new |
|edit|    GET    |     /recipes/:id/edit(.:format) |   recipes#edit|
|show|    GET    |     /recipes/:id(.:format)      |   recipes#show|
|update|    PUT    |     /recipes/:id(.:format)      |   recipes#update|
|destroy|    DELETE |     /recipes/:id(.:format)      |   recipes#destroy|

YES! These seven routes have been created just by adding `resources :recipes` in the file `routes.rb`

If we had to create these routes individually in ```routes.rb```, it would looks like this:

```ruby
get    "/recipes"          , to: "posts#index"
post   "/recipes"          , to: "recipes#create"
get    "/recipes/new"      , to: "recipes#new"
get    "/recipes/:id/edit" , to: "recipes#edit"
get    "/recipes/:id"      , to: "recipes#show"
put    "/recipes/:id"      , to: "recipes#update"
delete "/recipes/:id"      , to: "recipes#destroy"
```

#### Create Views

There is no specific generator that will create only a view file, but you can add them manually into the appropriate folder inside views.

For instance, if we want to add a view file `about` for the resource `Recipe`, we can create a file `about.html.erb` in `app/views/recipes`.

If a view is "static" - as in, it doesn't use any instance variables created in the controller - you can just create a route for this view and rails will render it in the browser even if there is no method in the controller:

In config/routes.rb

```ruby
get "/recipes/about", to: 'recipes#about'
```

If there is a file `about.html.erb` in `app/views/recipes`, this file will be automatically rendered when you call `localhost:3000/recipes/about`


#### Generate a model

Sometimes, you will need a model but not the related controller, in this case, you will use the model generator:

```
rails g model MODEL_NAME [fields]
```

This will generate the model by itself along with the migration containing all the fields and the data types if you wrote them when you typed the console.




