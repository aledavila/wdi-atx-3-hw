class
  attr_reader :original_word

  def initialize(original_word)
    @original_word = original_word
  end

  vowels = %w[a e i o u y]
  consonants = alpha - vowels

  def original_word
    return @original_word.downcase
  end

  if consonants.include?(@original_word[0]) && consonants.include?(@original_word[1]) && consonants.include?(@original_word[2])
       first = @original_word.slice!(0)
       second = @original_word.slice!(0)
       third = @original_word.slice!(0)
       @original_word + "-#{first}#{second}#{third}ay"
     elsif consonants.include?(@original_word[0]) && consonants.include?(@original_word[1])
       first = @original_word.slice!(0)
       second = @original_word.slice!(0)
       @original_word + "-#{first}#{second}ay"
     elsif consonants.include?(@original_word[0])
       character = @original_word.slice!(0)
       @original_word + "-#{character}ay"
     elsif vowels.include?(@original_word[0])
       @original_word + "-yay"
     if consonants.include?(original_word[0]) && consonants.include?(original_word[1]) && consonants.include?(original_word[2])
       first = original_word.slice!(0)
       second = original_word.slice!(0)
       third = original_word.slice!(0)
       original_word + "-#{first}#{second}#{third}ay"
     elsif consonants.include?(original_word[0]) && consonants.include?(original_word[1])
       first = original_word.slice!(0)
       second = original_word.slice!(0)
       original_word + "-#{first}#{second}ay"
     elsif consonants.include?(original_word[0])
       character = original_word.slice!(0)
       original_word + "-#{character}ay"
     elsif vowels.include?(original_word[0])
       original_word + "-yay"
      end
  end

end

word = Word.new('loser')
 +puts word.instance_variables
  puts word.translate
