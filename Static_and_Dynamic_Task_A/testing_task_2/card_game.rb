### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')

class CardGame


  def self.checkforAce(card)
    if card.value == 1
      return true
    else
      return false
    end
  end

  def self.highestcard(card1, card2)
    if (card1.value > card2.value)
      return card.name
    elsif (card1.value < card2.value)
      return card2.name
    else
      return "Equal"
    end
  end

  def self.cardstotal(cards)
    total = 0
    for card in cards
      total += card.value
    end
    return "You have a total of #{total}"
  end
end
