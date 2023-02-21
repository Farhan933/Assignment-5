// Dane van Niekerk
document.getElementById('Dane-van-Niekerk').addEventListener('click', function(){
    let findFirstName         = getAllTheNameById('first-name');
    let findTheNameYouReplace = setTheValueById('first-item', findFirstName);
});

// Sana Mir
document.getElementById('Sana Mir').addEventListener('click', function(){
    let findSecondName        = getAllTheNameById('second-name');
    let findTheNameYouReplace = setTheValueById('second-item', findSecondName);
});

// Charlotte Edwards
document.getElementById('Charlotte Edwards').addEventListener('click', function(){
    let findThirdName         = getAllTheNameById('third-name');
    let findTheNameYouReplace = setTheValueById('third-item', findThirdName);
});

// Ellyse perry
document.getElementById('Ellyse perry').addEventListener('click', function(){
    let findFourthName        = getAllTheNameById('fourth-name');
    let findTheNameYouReplace = setTheValueById('fourth-item', findFourthName);
});

// Frederque Overdijk
document.getElementById('Frederque Overdijk').addEventListener('click', function(){
    let findFifthName         = getAllTheNameById('fifth-name');
    let findTheNameYouReplace = setTheValueById('fifth-item', findFifthName);
});

//                      ... Budget card... 

// Calculate Player Expenses
document.getElementById('selected-player-cost').addEventListener('click', function(){
    let getTheInputValue = getAllInputField('selected-input-field');
    let Expenses           = getTheInputValue * 5;
    let findTheExpense     = getAllTheNameById('expenses');
    let setTheExpenseValue = setTheValueById('expenses', Expenses);
});

// Calculate Total
document.getElementById('calculate-total').addEventListener('click', function(){
    let getTheInputValue = getAllInputField('selected-input-field');
    let Expenses           = getTheInputValue * 5;

    let findTheManagerCost =  getAllInputField('manager-cost');
    let findTheCoachCost   =  getAllInputField('coach-cost');

    ManagerAndCoachTotal   = findTheManagerCost + findTheCoachCost;
    TotalCost              = Expenses + ManagerAndCoachTotal ;

    let setTheTotalCost    = setTheValueById('total-expense', TotalCost);

});