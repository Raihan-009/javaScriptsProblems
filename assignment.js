//first probelem: kilometerToMeter

function kilometerToMeter (num)
{
    if (num >= 0) //input number should be a positive number
    {
        return num*1000;
    }
    else // Bonus Section : if anyone try to input a negative or irrelavant value
    {
        return "Invalid Input";
    }
}

/* var converter = kilometerToMeter(5.3);
console.log(converter); */


// Second Proble: budgetCalculator

function budgetCalculator(clock,mobile,laptop)
{
    if (clock>=0 && mobile>=0 && laptop>=0)
    {
        var priceOfClock = clock*50;
        var priceOfMobile = mobile*100;
        var priceOfLaptop = laptop*500;

        var totalCost = priceOfClock+priceOfMobile+priceOfLaptop;

        return totalCost;
    }

    else //Bonus Section : if anyone try to input a negative or irrelavant value
    {
        return "Invalid Input";
    }
}

/* var cashMamo = budgetCalculator(1, 9 , 7);
console.log(cashMamo); */

// Third Problem: hotelCost

function hotelCost (days)
{
    if (days>=0 && days <=10)
    {
        var price = days*100;
        return price;
    }
    else if (days>10 && days<=20)
    {
        var price = (10*100) + ((days-10)*80);
        return price;
    }
    else if (days > 20)
    {
        var price = (10*100)+(10*80)+((days-20)*50);
        return price;
    }

    else //Bonus Section : if anyone try to input a negative or irrelavant value
    {
        return "Invalid Input";
    }
}

/* var managementCost = hotelCost(71);
console.log(managementCost); */

// Fourth Problem: megaFriend

function megaFriend(array)
{
    var position = 0;
    var largestString;

    for (var i=0;i< array.length; i++)
    {
        if (array[i].length>position)
        {
            position = array[i].length;
            largestString = array[i];
        }
    }

    return largestString;
}

/* var nameOfMyFriend = megaFriend(["Raihan", "Islam", "Nishat"]);
console.log(nameOfMyFriend); */


//Test Cases
/* console.log(kilometerToMeter(1));
console.log(budgetCalculator(2,3,4));
console.log(hotelCost(55));
console.log(megaFriend(["Raihan", "Islam", "Nishat"])); */