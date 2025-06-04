import React, { useState, useRef, useEffect, useCallback } from 'react';

const facultyList = [
  {
    name: 'Prof.(Dr.) Dipak Kumar Sahoo',
    extraDesignation: 'Vice Chancellor',
    designation: 'President , Technical Society',
    email: 'vc@vssut.ac.in',
    image: '/faculties/dipakkumar.jpg' // Make sure these paths are correct relative to your public folder
  },
  {
    name: 'Dr. Sudhansu Ranjan Das',
    designation: 'Vice president , Technical Society',
    email: 'srdas_pe@vssut.ac.in',
    image: '/faculties/srdas.jpg'
  },
  {
    name: 'Dr. Debidasi Mohanty',
    designation: 'Faculty Advisor',
    email: 'ddmohanty_ee@vssut.ac.in',
    image: '/faculties/debidasi.jpg'
  },
  {
    name: 'Dr. Santosh Kumar Sahu',
    designation: 'Faculty Advisor',
    email: 'sksahu_me@vssut.ac.in',
    image: '/faculties/sksahu.jpg'
  },
];

const FacultyCarousel = () => {
  const scrollContainerRef = useRef(null);
  const facultyScrollRef = useRef(null); // Ref for the inner scrolling element

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const DRAG_SENSITIVITY = 1.5; // Adjust for faster/slower drag

  // --- Auto-scroll pause/resume logic ---
  const pauseAnimation = useCallback(() => {
    if (facultyScrollRef.current) {
      facultyScrollRef.current.style.animationPlayState = 'paused';
    }
  }, []);

  const resumeAnimation = useCallback(() => {
    if (facultyScrollRef.current && !isDragging && !isHovering) {
      facultyScrollRef.current.style.animationPlayState = 'running';
    }
  }, [isDragging, isHovering]);


  // --- Mouse Event Handlers ---
  const handleMouseDown = (e) => {
    if (!scrollContainerRef.current) return;
    e.preventDefault(); // Prevent text selection/image drag
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftStart(scrollContainerRef.current.scrollLeft);
    pauseAnimation();
    scrollContainerRef.current.classList.add('no-select'); // Prevent text selection
  };

  const handleMouseMove = useCallback((e) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * DRAG_SENSITIVITY;
    scrollContainerRef.current.scrollLeft = scrollLeftStart - walk;
  }, [isDragging, startX, scrollLeftStart, DRAG_SENSITIVITY]); // Added scrollContainerRef.current to dependencies implicitly via isDragging

  const stopDragging = useCallback(() => {
    if (!isDragging) return; // Prevent multiple calls
    setIsDragging(false);
    resumeAnimation();
    if (scrollContainerRef.current) {
      scrollContainerRef.current.classList.remove('no-select');
    }
  }, [isDragging, resumeAnimation]);


  // --- Touch Event Handlers ---
  const handleTouchStart = (e) => {
    if (!scrollContainerRef.current) return;
    // No e.preventDefault() here, to allow native scroll if not dragging horizontally
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftStart(scrollContainerRef.current.scrollLeft);
    pauseAnimation();
    scrollContainerRef.current.classList.add('no-select');
  };

  const handleTouchMove = useCallback((e) => {
    if (!isDragging || !scrollContainerRef.current) return;
    // e.preventDefault(); // Only prevent default if actually moving, to allow vertical scroll
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * DRAG_SENSITIVITY;
    // Ifsignificant horizontal movement, prevent default to stop vertical page scroll
    if (Math.abs(scrollLeftStart - (scrollLeftStart - walk)) > 5) { // Threshold
        e.preventDefault();
    }
    scrollContainerRef.current.scrollLeft = scrollLeftStart - walk;
  }, [isDragging, startX, scrollLeftStart, DRAG_SENSITIVITY]);

  // --- Hover pause/resume ---
  const handleMouseEnter = () => {
    setIsHovering(true);
    pauseAnimation();
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    resumeAnimation();
    // If mouse button was down and mouse leaves container, stop dragging
    if (isDragging) {
        stopDragging();
    }
  };

  // --- Effect for global event listeners ---
  useEffect(() => {
    // Add global listeners when dragging starts
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', stopDragging);
      document.addEventListener('touchmove', handleTouchMove, { passive: false }); // passive:false for preventDefault
      document.addEventListener('touchend', stopDragging);
    }

    // Cleanup: remove global listeners when component unmounts or dragging stops
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', stopDragging);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', stopDragging);
    };
  }, [isDragging, handleMouseMove, stopDragging, handleTouchMove]);


  return (
    <section className="faculty-section">
      <div className="container">
        <h2 className="section-title">Meet Our Faculty</h2>
        <div
          className="faculty-scroll-container"
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave} // Handles mouse leaving the container
          onTouchStart={handleTouchStart}
          // onTouchEnd is handled by the global listener
        >
          <div className="faculty-scroll" ref={facultyScrollRef}>
            {[...facultyList, ...facultyList].map((faculty, index) => (
              <div key={index} className="faculty-card">
                <div className="faculty-image">
                  <img src={faculty.image} alt={faculty.name} draggable="false" /> {/* draggable="false" on img */}
                </div>
                <div className="faculty-info">
                  <h3>{faculty.name}</h3>
                  {faculty.extraDesignation && <p className="extra-designation">{faculty.extraDesignation}</p>}
                  <p className="designation">{faculty.designation}</p>
                  <a href={`mailto:${faculty.email}`}>{faculty.email}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default FacultyCarousel;