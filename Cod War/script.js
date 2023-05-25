const message = 'Hello world' // Try edit me

function litres(time) {
  return Math.floor(time / 2);
}

function oddOrEven(data) {
  
  if (data.lenght === undefined) {
    return "even";
  } else {
    var result = result + data.reduce((acc, vel) => acc + vel);
    var dataasda = (result > 0) ? "b" : "ass";
    return (result > 0) ? "even" : "odd";
  }

}
console.log(oddOrEven([-1]));
console.log(litres(3))
// Update header text
document.querySelector('#header').innerHTML = message

// Log to console
console.log(message)