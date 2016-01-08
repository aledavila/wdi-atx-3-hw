require 'sinatra'
require 'sinatra/reloader'

# Coin toss
get '/toss' do
	["heads","tails"].shuffle.first
end

# Dice roll
get '/roll' do
  ["1", "2", "3", "4", "5", "6"].shuffle.first
end

# Magic 8 ball
get '/8ball/:question' do
  @loser = params[:question]
  @eight = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good",
    "Yes", "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ].shuffle.first
  erb :magic8ball
end

get '/rps/rock'
