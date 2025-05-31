import React, { useState } from "react";
import SidebarLeft from "./components/SidebarLeft";
import SearchBar from "./components/SearchBar";
import WorkshopGrid from "./components/WorkshopGrid";
import SidebarRight from "./components/SidebarRight";

// Placeholder components for main content views (will create these files next)
const ProfileContentView = () => <div><h2>Profile Content</h2><p>Details about the user profile...</p></div>;
const TrendingContentView = () => <div><h2>Trending Topics Content</h2><p>List of trending topics...</p></div>;
const TagsContentView = () => <div><h2>Popular Tags Content</h2><p>List of popular tags...</p></div>;
const MessagesContentView = () => <div><h2>Messages Content</h2><p>User's messages...</p></div>;

// Main PlatformPage Component
export default function PlatformPage() {
  const [activeContent, setActiveContent] = useState(null); // State to track active content view

  const handleContentSelect = (contentId) => {
    setActiveContent(contentId);
  };

  const renderMainContent = () => {
    switch (activeContent) {
      case 'profile':
        return <ProfileContentView />;
      case 'trending':
        return <TrendingContentView />;
      case 'tags':
        return <TagsContentView />;
      case 'messages':
        return <MessagesContentView />;
      default:
        return (
          <div className="center-scroll-content">
            <WorkshopGrid />
            <div style={{ margin: '32px 0', color: '#bbb', textAlign: 'center', fontSize: '1.1rem' }}>
              <span role="img" aria-label="down">▼</span> Scroll down for more
            </div>
          </div>
        );
    }
  };

  return (
    <div className="app-layout">
      <div className="main-content-row">
        {/* Sidebar Left - Pass handler to update active content */}
        <SidebarLeft onContentSelect={handleContentSelect} activeContent={activeContent} />

        {/* Main Content Area - Render content based on activeContent state */}
        <main className="center-area">
          {/* Fixed Header for Search Bar (might need adjustment depending on final design) */}
          <div className="center-header">
            <SearchBar />
          </div>
          
          {renderMainContent()}

        </main>

        {/* Sidebar Right */}
        <SidebarRight />
      </div>
    </div>
  );
} 