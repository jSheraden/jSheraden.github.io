document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  let isDown = false;
  let startX;
  let scrollLeft;

  // Triggers when user clicks down on the carousel track
  track.addEventListener('mousedown', (e) => {
    isDown = true;
    track.classList.add('is-dragging');
  
    // Calculate relative starting point coordinates
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });

  // Triggers when pointer moves away or leaves container bounds
  track.addEventListener('mouseleave', () => {
    if (!isDown) return;
    isDown = false;
    track.classList.remove('is-dragging');
  });
  
  // Triggers when click pressure is released
  track.addEventListener('mouseup', () => {
    if (!isDown) return;
    isDown = false;
    track.classList.remove('is-dragging');
  });
  
  // Tracks actual dragging motion across the X-axis
  track.addEventListener('mousemove', (e) => {
    if (!isDown) return; // Ignore movement if mouse button isn't held down
    e.preventDefault(); // Stops browser image-dragging or text-highlight bugs
    
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5; // Multiplier controls dragging sensitivity
    
    track.scrollLeft = scrollLeft - walk;
  });
});

