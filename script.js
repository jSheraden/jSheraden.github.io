const bgClasses = [
  'welcome-bg',
  'about-bg',
  'skills-bg',
  'services-bg',
  'contact-bg'
];

document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  let isDown = false;
  let startX;
  let scrollLeft;

  // Initialize the first background class
  let currentBackground = bgClasses[0];
  track.classList.add(currentBackground);

  const observerOptions = {
    root: track,          // Watch visibility relative to the carousel track
    threshold: 0.5        // Trigger when a child is at least 50% visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Only act when the child element becomes predominantly visible
      if (entry.isIntersecting) {
        // Find the index of this child element among all children
        const children = Array.from(track.children);
        const index = children.indexOf(entry.target);

        // Map the index safely to bgClasses array
        if (index !== -1 && bgClasses[index]) {
          // Remove old class, update state, add new class
          track.classList.remove(currentBackground);
          currentBackground = bgClasses[index];
          track.classList.add(currentBackground);
        }
      }
    });
  }, observerOptions);

  Array.from(track.children).forEach(child => observer.observe(child));

  // Triggers when user clicks down on the carousel track
  track.addEventListener('mousedown', (e) => {
    isDown = true;
    track.classList.add('is-dragging');
  
    // Calculate relative starting point coordinates
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });

  const stopDragging = () => {
    if (!isDown) return;

    isDown = false;
    track.classList.remove('is-dragging');

    // Force the browser to snap to the nearest slide upon release
    const currentScroll = track.scrollLeft;
    track.scrollLeft = currentScroll;
  };

  track.addEventListener('mouseleave', stopDragging);
  track.addEventListener('mouseup', stopDragging);

  // Tracks actual dragging motion across the x-axis
  track.addEventListener('mousemove', (e) => {
    if (!isDown) return; // Ignore movement if mouse button isn't held down

    e.preventDefault();  // Stops browser image-dragging or text-highlight bugs
    
    const x = e.pageX - track.offsetLeft;
    const walk = x - startX;
    
    track.scrollLeft = scrollLeft - walk;
  });
});
