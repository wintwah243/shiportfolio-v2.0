import { useEffect } from 'react';

const SprinkleCursor = () => {
  useEffect(() => {
    const colors = ['#f2e71bff', '#000d11ff', '#0fcfe8ff'];

    const createSparkle = (x, y) => {
      const sparkleCount = 9; 

      for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.position = 'fixed';
        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;
        sparkle.style.width = '8px'; 
        sparkle.style.height = '8px';
        sparkle.style.borderRadius = '50%';
        sparkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = 9999;

        // Animation
        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 60 + 20; // spread out
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;

        sparkle.style.transition = 'transform 0.8s ease-out, opacity 0.8s';
        document.body.appendChild(sparkle);

        requestAnimationFrame(() => {
          sparkle.style.transform = `translate(${dx}px, ${dy}px)`;
          sparkle.style.opacity = '0';
        });

        // Remove after animation
        setTimeout(() => {
          sparkle.remove();
        }, 800);
      }
    };

    const handleMouseMove = (e) => {
      createSparkle(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return null;
};

export default SprinkleCursor;
