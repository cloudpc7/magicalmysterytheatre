const generalAdmission = 20;
const discountTicket = 10;
const matineeDiscount = 3;
let cost;

function getBaseTicketCost(age) { // create the base ticket cost
    if(age < 12 || age > 65) { // return discount if age is appropriate
        return discountTicket;
    }

    return generalAdmission; // else return general admission
}

function applyMatineeDiscount(cost, isMatinee) { 
    if(isMatinee === "yes") { 
        cost = cost - matineeDiscount;
    }
    return cost;
}

function buyTicket() { 
    const age = prompt('What is your age'); // prompt needs to be inside function so it does not pop up when page loads
    const isMatinee = prompt("Are you atttending a matinee show?")
    cost = getBaseTicketCost(age); //cost needs to take the argument age in order to get the age and calculate the cost
    cost = applyMatineeDiscount(cost, isMatinee); // need to apply matinee discount after getting cost or there could be errors
    alert(`Your ticket will cost $${cost}.00`);
}