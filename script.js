
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90; 
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + ((mins / 60) * 30) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  if (secondsDegrees === 90) secondHand.style.transition = 'all 0s';
  else secondHand.style.transition = 'all 0.05s';

  if (minsDegrees === 90) minHand.style.transition = 'all 0s';
  else minHand.style.transition = 'all 0.1s';

  console.log('it\'s： ' + hours + ":" + mins + ":" + seconds);
}

setInterval(setDate, 1000);