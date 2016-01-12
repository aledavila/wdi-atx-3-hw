orders = {}

# While the loop is true (in this case, until the user puts a different letter than y or Y)
while true
  # Gets the name for the Order
  puts "Name for order:"
  name = gets.chomp

  # Gets the items for the order
  puts "#{name} wants to order:"
  order = gets.chomp
  # Gets the order that is paired with the name and pushes that order to the paired name key
  orders[name] ||= [] # http://www.rubyinside.com/what-rubys-double-pipe-or-equals-really-does-5488.html
  orders[name].push(order)
  # Letting another person order or allowing a person to add to their order
  # Keep in mind that if you want to add another order to a specific person you must use the name that was used before
  puts "Add another item to the order? (y/n)"
  response = gets.chomp
  break if response.downcase != 'y'

end
# Puts the orders in the appropriate hash
puts "\nAll orders:"
#puts orders
puts orders


# BONUS
#For each of the orders do something to the key values in that order
orders.each_pair do |key, values|
  # If the person only has one item ordered take the "key(Name) wants a value(order)"
  if values.length == 1
    puts "#{key} wants a #{values[0]}"
  #If the person has multiple items ordered take the "key(name wants a value (order), & value(order)"
  elsif values.length > 1
    # get the last value
    last = values.pop
    #puts name wants a ______, & ______
    puts "#{key} wants a #{values.join(', ')} & #{last}"
  end
end