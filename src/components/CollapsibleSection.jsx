import React, { useState, useRef, useEffect } from 'react';

const CollapsibleSection = ({ 
  title, 
  icon: Icon, 
  children, 
  isOpen = false,
  onToggle,
  id
}) => {
  const [isExpanded, setIsExpanded] = useState(isOpen);
  const headerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (onToggle) {
      onToggle(isExpanded);
    }
  }, [isExpanded, onToggle]);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggle();
    }
  };

  return (
    <div 
      className="collapsible-section"
      aria-expanded={isExpanded}
      id={id}
    >
      <div
        ref={headerRef}
        className="collapsible-header"
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex="0"
        aria-controls={`${id}-content`}
        aria-expanded={isExpanded}
      >
        <h3>
          {Icon && <Icon className="icon" />}
          {title}
        </h3>
        <span className="icon" aria-hidden="true">
          ▼
        </span>
      </div>
      <div
        ref={contentRef}
        className="collapsible-content"
        id={`${id}-content`}
        role="region"
        aria-labelledby={id}
      >
        <div className="collapsible-content-inner">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CollapsibleSection; 