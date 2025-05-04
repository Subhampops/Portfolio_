import React, { useEffect, useState } from 'react';

const PixelCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Hide the default cursor
    document.body.style.cursor = 'none';

    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'A' || 
          (e.target as HTMLElement).tagName === 'BUTTON' ||
          (e.target as HTMLElement).closest('a') || 
          (e.target as HTMLElement).closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Regular cursor */}
      <div 
        className={`fixed pointer-events-none z-50 transition-transform duration-100 ${isHovering ? 'scale-0' : 'scale-100'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="w-5 h-5 bg-transparent border-2 border-primary relative">
          <div className="absolute w-1 h-1 bg-primary top-0 left-0"></div>
          <div className="absolute w-1 h-1 bg-primary top-0 right-0"></div>
          <div className="absolute w-1 h-1 bg-primary bottom-0 left-0"></div>
          <div className="absolute w-1 h-1 bg-primary bottom-0 right-0"></div>
        </div>
      </div>

      {/* Hover cursor (for clickable elements) */}
      <div 
        className={`fixed pointer-events-none z-50 transition-transform duration-100 ${isHovering ? 'scale-100' : 'scale-0'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="w-7 h-7 bg-transparent border-2 border-primary relative">
          <div className="absolute w-1 h-1 bg-primary top-0 left-0"></div>
          <div className="absolute w-1 h-1 bg-primary top-0 right-0"></div>
          <div className="absolute w-1 h-1 bg-primary bottom-0 left-0"></div>
          <div className="absolute w-1 h-1 bg-primary bottom-0 right-0"></div>
          <div className="absolute w-1 h-1 bg-primary top-1/2 left-0 -translate-y-1/2"></div>
          <div className="absolute w-1 h-1 bg-primary top-1/2 right-0 -translate-y-1/2"></div>
          <div className="absolute w-1 h-1 bg-primary top-0 left-1/2 -translate-x-1/2"></div>
          <div className="absolute w-1 h-1 bg-primary bottom-0 left-1/2 -translate-x-1/2"></div>
        </div>
      </div>
    </>
  );
};

export default PixelCursor;