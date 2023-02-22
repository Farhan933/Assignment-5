// Dane van Niekerk
document.getElementById('Dane-van-Niekerk').addEventListener('click', function(){
    let parent      = document.getElementById('parent');
    let createChild = document.createElement('li');
        createChild.innerText = 'Dane-van-Niekerk';
    parent.appendChild(createChild).style.paddingBottom = '5px';

// For disable the button 
    let disableTheButton = document.getElementById('Dane-van-Niekerk');
    disableTheButton.setAttribute('disabled', true);
});

// Sana Mir
document.getElementById('Sana Mir').addEventListener('click', function(){
    let parent      = document.getElementById('parent');
    let createChild = document.createElement('li');
        createChild.innerText = 'Sana Mir';
    parent.appendChild(createChild).style.paddingBottom = '5px';

    // For disable the button 
    let disableTheButton = document.getElementById('Sana Mir');
    disableTheButton.setAttribute('disabled', true);
});

// Charlotte Edwards
document.getElementById('Charlotte Edwards').addEventListener('click', function(){
    let parent      = document.getElementById('parent');
    let createChild = document.createElement('li');
        createChild.innerText = 'Charlotte Edwards';
    parent.appendChild(createChild).style.paddingBottom = '5px';

    // For disable the button 
    let disableTheButton = document.getElementById('Charlotte Edwards');
    disableTheButton.setAttribute('disabled', true);
});

// Ellyse perry
document.getElementById('Ellyse perry').addEventListener('click', function(){
    let parent      = document.getElementById('parent');
    let createChild = document.createElement('li');
        createChild.innerText = 'Ellyse perry';
    parent.appendChild(createChild).style.paddingBottom = '5px';
    
    // For disable the button 
    let disableTheButton = document.getElementById('Ellyse perry');
    disableTheButton.setAttribute('disabled', true);
});

// Frederque Overdijk
document.getElementById('Frederque Overdijk').addEventListener('click', function(){
    let parent      = document.getElementById('parent');
    let createChild = document.createElement('li');
        createChild.innerText = 'Frederque Overdijk';
    parent.appendChild(createChild).style.paddingBottom = '5px';
    
    // For disable the button 
    let disableTheButton = document.getElementById('Frederque Overdijk');
    disableTheButton.setAttribute('disabled', true);
});

// Sarah Tailor
document.getElementById('Sarah Taylor').addEventListener('click', function(){
    let parent      = document.getElementById('parent');
    let createChild = document.createElement('li');
        createChild.innerText = 'Sarah Taylor';
    parent.appendChild(createChild).style.paddingBottom = '5px';
    
    // For disable the button 
    let disableTheButton = document.getElementById('Sarah Taylor');
    disableTheButton.setAttribute('disabled', true);
});

//                      ... Budget card... 

// Calculate Player Expenses
document.getElementById('selected-player-cost').addEventListener('click', function(){
    let getTheInputValue = getAllInputField('selected-input-field');

// if you provide anything without number it will alert you
    if(isNaN(getTheInputValue)){
        alert('please, provide a valid number')
        return;
    }
    let Expenses           = getTheInputValue * 5;
    let findTheExpense     = getAllTheNameById('expenses');
    let setTheExpenseValue = setTheValueById('expenses', Expenses);
});

// Calculate Total
document.getElementById('calculate-total').addEventListener('click', function(){
    let getTheInputValue = getAllInputField('selected-input-field');
    let Expenses           = getTheInputValue * 5;

    let findTheManagerCost =  getAllInputField('manager-cost');
    // if you provide anything without number it will alert you
    if(isNaN(findTheManagerCost)){
        alert('please, provide a valid number')
        return;
    }
    let findTheCoachCost   =  getAllInputField('coach-cost');
    // if you provide anything without number it will alert you
    if(isNaN(findTheCoachCost)){
        alert('please, provide a valid number')
        return;
    }
    ManagerAndCoachTotal   = findTheManagerCost + findTheCoachCost;
    TotalCost              = Expenses + ManagerAndCoachTotal ;

    let setTheTotalCost    = setTheValueById('total-expense', TotalCost);

});