{{
if(state.randomNum >= 50 && state.randomNum != 100){
state.randomNum =  Math.floor(Math.random() * (49 - 1) + 1);
return "greater than 50 not 100"
}
else if(state.randomNum <= 49 && state.randomNum != 100) {
state.randomNum =  Math.floor(Math.random() * (100 - 50) + 50);
return "less than than 50 not 100"
}
else{
state.randomNum =  Math.floor(Math.random() * (99 - 1) + 1);
return "was 100!"
}
}}