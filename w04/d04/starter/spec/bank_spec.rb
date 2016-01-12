require_relative 'spec_helper'
require_relative '../bank'
p "hello"
describe Bank do
p "hello"
  describe ".new" do
    it "creates a Bank object" do
      # When Bank.new is called, it should create a bank object

    end
    it "has no accounts" do
      # A newly created bank should have 0 accounts

    end
  end

  describe "#name" do
    it "has a name" do
      # Calling bank.name should give us the bank's name

    end
  end

  describe "#create_account" do
    it "create an account" do
      bank = Bank.new("Chase")
      bank.create_account("Tom", 200)
      toms_account = accounts["Tom"]
      expect (toms_account).to eq(200)
    end
  end

  describe "#deposit" do
    it "deposits money from a client" do
      # Calling bank.deposit with the correct parameters should result in an account's value going up by the same amount as the deposit

    end
  end

  describe "#balance" do
    it "returns the balance for the client" do
      # Calling bank.balance should return the balance of the specified account

    end
  end

  describe "#withdraw" do
    it "subtracts money from the account" do
      # Calling bank.withdraw with the correct parameters should result in an account's value going down by the same amount as the withdrawal

    end

    it "ignores requests for withdrawals greater than account balance" do
      # Calling bank.withdraw with an amount greater than the balance ignores the withdrawal/does nothing

    end
  end

end
