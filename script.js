document.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia('(pointer: coarse)').matches) {
    return;
  }

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

  // Reusable function to wrap up the dragging state
  const stopDragging = () => {
    if (!isDown) return;

    isDown = false;
    track.classList.remove('is-dragging');

    // Force the browser to snap to the nearest slide upon release
    const currentScroll = track.scrollLeft;
    track.scrollLeft = currentScroll;
  }

  track.addEventListener('mouseleave', stopDragging);
  track.addEventListener('mouseup', stopDragging);

  // Tracks actual dragging motion across the X-axis
  track.addEventListener('mousemove', (e) => {
    if (!isDown) return; // Ignore movement if mouse button isn't held down

    e.preventDefault(); // Stops browser image-dragging or text-highlight bugs
    
    const x = e.pageX - track.offsetLeft;
    const walk = x - startX;
    
    track.scrollLeft = scrollLeft - walk;
  });
});

