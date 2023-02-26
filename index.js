let names = ["Guadalupe", "Ollie", "Aki"];
function writeCards(names,event){
    const messages = [];
    for (let i=0; i<names.length; i++){
    const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    messages.push(message)
    }
    return messages
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"],"suprise"));

let num =10
function countDown(num){
    while (num>=0){
        console.log(num--)
    }
}