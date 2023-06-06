document.getElementById('calculate').addEventListener('click', function () {
    let income = document.getElementById('income').value;
    let food = document.getElementById('food').value;
    let rent = document.getElementById('rent').value;
    let cloth = document.getElementById('cloth').value;
    if (income.length == 0 || food.length == 0 || rent.length == 0 || cloth.length == 0)
    {
        alert('Please fill all input field');
        return;
    }
    if (parseFloat(income < 0) || parseFloat(food) < 0 || parseFloat(rent) < 0 || parseFloat(cloth) < 0)
    {
        alert('Invalid Input !');
        return;
    }
    let expenses = parseFloat(food) + parseFloat(rent) + parseFloat(cloth);
    if (income < parseFloat(expenses))
    {
        alert('Cut your coat according to your cloth :) ');
        return;
    }
    document.getElementById('totalExpenses').innerHTML = expenses;
    document.getElementById('balance').innerHTML = parseFloat(income) - expenses;
})

document.getElementById('save').addEventListener('click', function () {
    let balance = parseFloat(document.getElementById('balance').innerText);
    if (balance == 0)
    {
        alert('Your balance is empty can not save.');
        return;
    }
    let percentage = document.getElementById('savePercentage').value;
    if (percentage.length==0 || parseFloat(percentage) < 0 || parseFloat(percentage) > 100)
    {
        alert('Enter a valid saving percentage.');
        return;
    }
    let amount = (balance * parseFloat(percentage)) / 100;
    document.getElementById('savingAmount').innerHTML = amount;
    document.getElementById('remainingBalance').innerHTML = balance - amount;
})