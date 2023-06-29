//Mouse Mover
var button = document.getElementById("movingButton");
document.addEventListener('mousemove', handleMouseMove);

function handleMouseMove(event) {
  var mouseX = event.clientX;
  var mouseY = event.clientY;

  var buttonRect = button.getBoundingClientRect();
  var buttonX = buttonRect.left + (buttonRect.width / 2);
  var buttonY = buttonRect.top + (buttonRect.height / 2);

  var dx = mouseX - buttonX;
  var dy = mouseY - buttonY;

  var distance = Math.sqrt(dx * dx + dy * dy);

  if (distance <= 300) { // Adjust the distance threshold as needed
    var avoidanceX = buttonX - (dx / distance) * 5;
    var avoidanceY = buttonY - (dy / distance) * 5;
    button.style.left = avoidanceX + "px";
    button.style.top = avoidanceY + "px";
  }
}


