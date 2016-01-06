story = [
  'Fry is born without a delta brainwave',
  'As a result, Fry is cryogenically frozen until 2999',
  'In the future, Fry works on a spaceship',
  'The spaceship hits a wormhole and crashes in 1941 Roswell, NM',
  'Fry encounters his grandmother, then inadvertently sires his father'
]


story.each do |sentence|
  puts sentence
  puts "Do we continue? (y or n)"
  user_answer = gets.chomp

  if user_answer == "y"
    story.push(sentence)
  elsif user_answer == "n"
    puts "Goodbye then!"
    break
  end
end
