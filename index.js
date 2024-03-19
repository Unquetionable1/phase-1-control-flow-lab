function scuberGreetingForFeet(my_distance){
  // Write your code here!
  //less than 400" cost free
  if(my_distance<400){
    return 'This one is on me!'
  }else
  //between 400 & 2000" cost=20
  if(my_distance>400 && my_distance<2000){
    return 'That will be twenty bucks.'
  }else
  //over 2000" cost=30
  if(2000<my_distance && my_distance<2500){
    return 'I will gladly take your thirty bucks.'
  }
  else if (my_distance>2500 ){
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  return city ==='NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return 'Thank you so much.'
      break;
    case 'not as generous':
      return 'Thank you.'
      break;
    default: 
      return 'Bye.'
      break;
  }
}