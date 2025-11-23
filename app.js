let todo = [];

let req = prompt("Please enter your request");

while(true) {
    if(reu == "quit") {
        console.log("quitting app");
        break;
    } else if(req == "list") {
        console.log("---------");
        for(let i=0; i<todo.length; i++) {
            console.log(i, todo[i])
        }
        console.log("---------"); 
    } else if(req == "add") {
        let task = prompt("please enter the task you want to add");
        todo.push(task);
        console.log("task added");
    } else if(req == "delete") {
        let idx = prompt("please enter the task index");
        todo.splice(idx, 1);
        console.log("task deleted");
    } else {
        console.log("wrong requset"); 
    }
}









const max = prompt("enter the max number");
console.log(max);