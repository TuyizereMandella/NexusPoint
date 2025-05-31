import React from "react";
import { FaUser, FaCog, FaSun, FaMoon } from 'react-icons/fa';

function SidebarRight() {
  return (
    <aside className="sidebar-right">
      {/* Scrollable content wrapper */}
      <div className="sidebar-right-content-wrapper">
        {/* Popular Groups */}
        <div className="sidebar-section">
          <div className="sidebar-section-header">
            <h2 className="sidebar-section-title">Popular Groups</h2>
            <div className="sidebar-section-arrows">
              <button className="sidebar-section-arrow">◀️</button>
              <button className="sidebar-section-arrow">▶️</button>
            </div>
          </div>
          <div className="sidebar-section-list">
            {[1,2].map(i => (
              <div key={i} className="sidebar-section-card">
                <img src="https://placehold.co/40x40/png" alt="Group" className="sidebar-section-card-img" />
                <div className="sidebar-section-card-content">
                  <div className="sidebar-section-card-title">Group {i}</div>
                  <div className="sidebar-section-card-meta">Followers: 4.3M | Online: 45k</div>
                </div>
                <span className="sidebar-section-card-since">Since 20{20+i}</span>
              </div>
            ))}
          </div>
          <div className="sidebar-section-dots" style={{marginTop: 8, marginBottom: 4}}>
            <span className="sidebar-section-dot"></span>
            <span className="sidebar-section-dot active"></span>
            <span className="sidebar-section-dot"></span>
          </div>
          <button className="sidebar-section-more">more..</button>
        </div>
        {/* Workshops */}
        <div className="sidebar-section">
          <div className="sidebar-section-header">
            <h2 className="sidebar-section-title">Workshops</h2>
            <div className="sidebar-section-arrows">
              <button className="sidebar-section-arrow">◀️</button>
              <button className="sidebar-section-arrow">▶️</button>
            </div>
          </div>
          <div className="sidebar-section-list">
            {[1,2].map(i => (
              <div key={i} className="sidebar-section-card">
                <img src="https://placehold.co/40x40/png" alt="Workshop" className="sidebar-section-card-img" />
                <div className="sidebar-section-card-content">
                  <div className="sidebar-section-card-title">Workshop {i}</div>
                  <div className="sidebar-section-card-meta">Followers: 4.3M | Online: 2.3k</div>
                </div>
                <span className="sidebar-section-card-since">Since 202{2+i}</span>
              </div>
            ))}
          </div>
          <div className="sidebar-section-dots" style={{marginTop: 8, marginBottom: 4}}>
            <span className="sidebar-section-dot"></span>
            <span className="sidebar-section-dot active"></span>
            <span className="sidebar-section-dot"></span>
          </div>
          <button className="sidebar-section-more">more..</button>
        </div>
        {/* Explorer Accounts */}
        <div className="sidebar-section">
          <div className="sidebar-section-header">
            <h2 className="sidebar-section-title">Explorer Accounts</h2>
            <div className="sidebar-section-arrows">
              <button className="sidebar-section-arrow">◀️</button>
              <button className="sidebar-section-arrow">▶️</button>
            </div>
          </div>
          <div className="sidebar-explorer-list">
            {[1,2].map(i => (
              <div key={i} className="sidebar-explorer-card">
                <img src="https://randomuser.me/api/portraits/lego/6.jpg" alt="Explorer" className="sidebar-explorer-avatar" />
                <div className="sidebar-explorer-name">Explorer {i}</div>
                <div className="sidebar-explorer-role">Role</div>
              </div>
            ))}
          </div>
          <div className="sidebar-section-dots" style={{marginTop: 8, marginBottom: 4}}>
            <span className="sidebar-section-dot"></span>
            <span className="sidebar-section-dot active"></span>
            <span className="sidebar-section-dot"></span>
          </div>
          <button className="sidebar-section-more">more..</button>
        </div>
      </div>
    </aside>
  );
}

export default SidebarRight; 