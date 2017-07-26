// Rock Paper Scissors Function
function rps (left, right) {
  // write code here
  if (left == right){
    return "it's a tie";
  } else if (left === 'rock'){
  if (right ==='scissors'){
    return "left wins";
  } else { if (left === 'rock')
  if ( right === 'paper'){
    return " Right Wins";
  } else if (left === 'paper')
  if(right ==='rock'){
    return "Left wins"
  } else if (left === 'paper')
  if (right === 'scissors'){
    return "Right Wins"
  }
}



// Don't edit below these lines
console.log(rps('rock', 'paper') );
console.log(rps('scissors', 'paper') );
console.log(rps('scissors', 'rock'));
console.log(rps('rock', 'rock'));
