let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;


let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

function isEmpty(schedule) {
    for(let key in schedule) {
        return false;
    }
    return true;
}


