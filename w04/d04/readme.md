# Testing: Bank Software

We've been tasked with testing a new bank's software to make sure that it works. The bank's software is pretty basic right now, but so far it can:

- Create a new `Bank` object by calling `bank = Bank.new("Name of Bank")`
- Create an account at the bank by calling `bank.create_account("account name", 500)` (where 500 is the amount of money to start the account with).
- Deposit money in the account by calling `bank.deposit("account name", 200)` (where 200 is the amount to deposit).
- Withdraw money in the account by calling `bank.withdraw("account name", 200)` (where 200 is the amount to withdraw)
- Check the account balance by calling `bank.balance("account name")`.

We want to make sure each of these methods is working correctly, so we're going to use [rspec](https://relishapp.com/rspec/) to test these methods and make sure the output we're getting is expected.

You'll only need to work in the `spec/bank_spec.rb` file for this project. Fill in the tests (the things inside the `it "" do..end` blocks) with the rspec expectations to test if the methods work. You may need to refer to the [rspec matcher documentation](https://relishapp.com/rspec/rspec-expectations/v/3-4/docs/built-in-matchers) for a list of methods to compare results.

For some of the tests, you will need to do some "prep work" to set up the test. For example, to test if an account balance is correct, you first need to have created an account with money in it. Think about that as you're designing your tests.

## Bonus
- Write a test for a new method called `#list_accounts` that returns an array of the names of all the accounts in the bank. Then write the method in `bank.rb` that would implement this feature. Use the "red-green-refactor" pattern.
- Write a test for a new method called `#compute_interest` that computes 3% interest for each account's value and adds that amount to each account. Then write the method in `bank.rb` that would implement this feature. Use the "red-green-refactor" pattern.
- Read the [betterspecs.org](http://betterspecs.org) website to look up the `let` keyword and see if it can help you refactor your tests to be DRYer.
