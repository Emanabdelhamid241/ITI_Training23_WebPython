/* 3- Write a JavaScript function to get the month name from a particular date. */
var dt = new Date('2023-08-11');

function MonthName(dt) {
    months = [
        'January', 'February', 'March', 'April','May', 'June', 'July', 
        'August','September', 'October', 'November', 'December'
    ];

    console.log(months[dt.getMonth()]);
}
MonthName(dt);

    






