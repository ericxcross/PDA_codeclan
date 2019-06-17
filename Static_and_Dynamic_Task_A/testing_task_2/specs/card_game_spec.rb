require 'minitest/autorun'
require 'minitest/rg'
require_relative '../card'
require_relative '../card_game'

class CardGameTest < Minitest::Test

  def setup
    @ace_of_spades = Card.new "Spades", 1, "Ace"
    @ace_of_clubs = Card.new "Clubs", 1, "Ace"
    @six_of_diamonds = Card.new "Diamonds", 6, "Six"
    @cards = [@ace_of_spades, @six_of_diamonds]
  end

  def test_check_for_Ace_true
    result = CardGame.checkforAce(@ace_of_spades)
    assert_equal(true, result)
  end

  def test_check_for_Ace_false
    result = CardGame.checkforAce(@six_of_diamonds)
    assert_equal false, result
  end

  def test_highest_card
    result = CardGame.highestcard @ace_of_spades, @six_of_diamonds
    assert_equal "Six", result
  end

  def test_highest_card_same
    result = CardGame.highestcard @ace_of_spades, @ace_of_clubs
    assert_equal "Equal" , result
  end

  def test_cards_total
    result = CardGame.cardstotal @cards
    assert_equal "You have a total of 7", result
  end

end
