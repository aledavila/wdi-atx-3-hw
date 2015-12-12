$(function() {
    var checkingBalance = 0;
    var savingsBalance = 0;


    $('#depositChecking').on('click', function() {
        var amount = $('#amountChecking').val();
        updateBalance(amount);

    });

    $('#withdrawChecking').on('click', function() {
        var amount = $('#amountChecking').val();
        if (amount > checkingBalance) {
            alert('Not enough funds available');
        } else {
            updateBalance(-amount);
        }
    });

    $('#depositSavings').on('click', function() {
        var amount = $('#amountSavings').val();
        newSavings(amount);

    });

    $('#withdrawSavings').on('click', function() {
        var amount = $('#amountSavings').val();
        if (amount > savingsBalance) {
            alert('Not enough funds available');
        } else {
            newSavings(-amount);
        }
    });

    function updateBalance(input) {
        if (isNaN(input) || input === "") {
            alert("Invalid entry");
            return false;
        }
        checkingBalance += parseInt(input);
        $('#checkingBalance').html('$ ' + checkingBalance);
        if (checkingBalance === 0) {
            $('#checkingBalance').addClass('zero');
        } else {
            $('#checkingBalance').removeClass('zero');
        }
    }

    function newSavings(input) {
        if (isNaN(input) || input === "") {
            alert("Invalid entry");
            return false;
        }
        savingsBalance += parseInt(input);
        $('#savingsBalance').html('$ ' + savingsBalance);
        if (savingsBalance === 0) {
            $('#savingsBalance').addClass('zero');
        } else {
            $('#savingsBalance').removeClass('zero');
        }
    }


});







//Begin with the document ready function

//Begin work on the Checking Account

//Checking account deposit function

//Get value from the amountChecking input field

//On click of the depositChecking button

//Take that value and add it to the existing value in the checkingBalance div
//Checking account withdrawl funtion

//Get value from the amountChecking input field

//On click of the withdrawChecking button

// If that value is greater than the value in the account ignore that action
// In other words if this would put the account into a negative balance do not allow it

//Else subtract that value from the current amount in the checking account

//Begin work on the Savings account

//Savings account deposit function

//Get value from the amountSavings input field

//On click of the depositSavings button

//Take that value and add it to the existing value in the savingsBalance div

//Savings account withdraw funtion

//Get value from the amountSavings input field

//On click of the withdrawl button

//If that value is greater than the value in the account ignore that action
//In other words if this would put the account into a negative balance do not allow it

//Else subtract that value from the current amount in the savings account


// Bonus-- get the two accounts to work with each other and allow for overdraft protection

// Double Bonus-- This isnt very DRY.  Using the keyword "this" see if you can make the withdraw and deposit functions work for both accounts
