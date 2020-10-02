(function() {
  var box = document.getElementById('mydiv'),
      top = 0,
      left = 0,
      angle = 30 * Math.PI / 180, // 30 degrees
      speed = 5,
      deltaX = Math.cos(angle) * speed,
      deltaY = Math.sin(angle) * speed;
  setInterval(function() {
    box.style.top = (top += deltaY) + 'px';
    box.style.left = (left += deltaX) + 'px';
  }, 60);
})();