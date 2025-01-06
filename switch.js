let text;
let day=8;
switch (day) {
    case 1:
        text= "Sunday"      
        break;
    case 2:
        text= "Monday"      
        break;
    case 3:
        text= "Tuesday"      
        break;
    case 4:
        text= "Wednesday"      
        break;
    case 5:
        text= "Thursday"      
        break;
    case 6:
        text= "Friday"      
        break;
    case 7:
        text= "Saturday"      
        break;
    default:
        console.log("Enter a valid number")
        break;
}
console.log("The day is",text);