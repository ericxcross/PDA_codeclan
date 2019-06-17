### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

require_relative('card.rb')
class CardGame

  #no initialization so non class level functions can't be called

  def checkforAce(card)
    if card.value = 1
      return true
    else
      return false
    end
  end

  #define function using "def", arguments should be separated by " , "
  dif highest_card(card1 card2)
  if card1.value > card2.value
     #card.name method is undefined and card variable is undefined
    return card.name
  else
    #will return card two even if both cards have equal value
    card2
  end
end
end

#function is excluded from the class because end statement is above it
def self.cards_total(cards)
  total #undefined variable
  for card in cards
    total += card.value
    #total would be an integer not a string. Requires string concatenation. Also return statement should be outside of the for loop
    return "You have a total of" + total 
  end
end


```
