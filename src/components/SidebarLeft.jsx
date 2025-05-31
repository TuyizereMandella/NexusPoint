import React, { useState } from 'react';
import { FaHashtag, FaFire, FaUser, FaCog, FaEnvelope, FaBell, FaAward, FaUsers, FaComments, FaSun, FaMoon } from 'react-icons/fa';
import CollapsibleSection from './CollapsibleSection';
import Footer from './Footer';

const SidebarLeft = ({ onContentSelect, activeContent }) => {
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionToggle = (sectionId, isExpanded) => {
    if (isExpanded) {
      setActiveSection(sectionId);
    } else if (activeSection === sectionId) {
      setActiveSection(null);
    }
    if (isExpanded && onContentSelect) {
      onContentSelect(sectionId);
    } else if (!isExpanded && activeSection === sectionId && onContentSelect) {
      onContentSelect(null);
    }
  };

  const handleProfileItemClick = (contentType) => {
    if (onContentSelect) {
      onContentSelect(contentType);
    }
  };

  return (
    <div className="sidebar-left">
      <h1 className="sidebar-title">NexusPoint</h1>

      <CollapsibleSection
        id="profile-section"
        title={
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcihwfDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Profile"
              className="sidebar-profile-avatar"
              style={{ width: '32px', height: '32px' }}
            />
            <div>
              <h3 className="sidebar-profile-name">John Doe</h3>
              <p className="sidebar-profile-role">UI/UX Designer</p>
            </div>
          </div>
        }
        icon={null}
        isOpen={activeSection === 'profile-section'}
        onToggle={(isExpanded) => handleSectionToggle('profile-section', isExpanded)}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }} onClick={() => handleProfileItemClick('messages')}>
            <FaEnvelope className="icon" /> Messages
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }} onClick={() => handleProfileItemClick('notifications')}>
            <FaBell className="icon" /> Notifications
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }} onClick={() => handleProfileItemClick('badges')}>
            <FaAward className="icon" /> Badges
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }} onClick={() => handleProfileItemClick('rooms')}>
            <FaComments className="icon" /> Rooms
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }} onClick={() => handleProfileItemClick('groups')}>
            <FaUsers className="icon" /> Groups
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', padding: '8px 0' }}>
            <button className="sidebar-icon-btn" onClick={() => handleProfileItemClick('light-mode')}>
              <FaSun className="icon" />
              <span className="sr-only">Toggle Light Mode</span>
            </button>
            <button className="sidebar-icon-btn" onClick={() => handleProfileItemClick('dark-mode')}>
              <FaMoon className="icon" />
              <span className="sr-only">Toggle Dark Mode</span>
            </button>
            <button className="sidebar-icon-btn" onClick={() => handleProfileItemClick('settings')}>
              <FaCog className="icon" />
              <span className="sr-only">Settings</span>
            </button>
          </div>
        </div>
      </CollapsibleSection>

      <CollapsibleSection
        id="trending-section"
        title="Trending Topics"
        icon={FaFire}
        isOpen={activeSection === 'trending-section'}
        onToggle={(isExpanded) => handleSectionToggle('trending-section', isExpanded)}
      >
        <div className="trend-tags-container">
          <div className="sidebar-tag">#Design</div>
          <div className="sidebar-tag">#Development</div>
          <div className="sidebar-tag">#Marketing</div>
          <div className="sidebar-tag">#Business</div>
        </div>
      </CollapsibleSection>

      <CollapsibleSection
        id="tags-section"
        title="Popular Tags"
        icon={FaHashtag}
        isOpen={activeSection === 'tags-section'}
        onToggle={(isExpanded) => handleSectionToggle('tags-section', isExpanded)}
      >
        <div className="trend-tags-container">
          <div className="sidebar-tag">#React</div>
          <div className="sidebar-tag">#JavaScript</div>
          <div className="sidebar-tag">#CSS</div>
          <div className="sidebar-tag">#WebDev</div>
        </div>
      </CollapsibleSection>

      <Footer />
    </div>
  );
};

export default SidebarLeft; 