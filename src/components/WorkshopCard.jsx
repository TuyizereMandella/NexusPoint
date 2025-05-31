import React from "react";

// Mock functions for actions
const noop = () => alert("Action triggered (mock)");

const icon = (label, symbol) => <span role="img" aria-label={label}>{symbol}</span>;

const statItem = (iconLabel, iconSymbol, value) => (
  <div className="flex flex-col items-center mb-2">
    <span className="text-lg">{icon(iconLabel, iconSymbol)}</span>
    <span className="text-xs text-gray-500 font-medium">{value}</span>
  </div>
);

const actionItem = (iconLabel, iconSymbol, onClick, color) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center mb-2 focus:outline-none hover:scale-110 transition-transform ${color}`}
    type="button"
  >
    <span className="text-lg">{icon(iconLabel, iconSymbol)}</span>
  </button>
);

/**
 * WorkshopCard Component
 * Props:
 * - location, avatarUrl, mediaUrl, mediaType, title, description, timeAgo, level, category
 * - views, likes, comments, shares
 * - onLike, onComment, onShare, onBookmark (functions)
 */
const WorkshopCard = ({
  location = "KENYA, Nairobi - stadium",
  avatarUrl = "https://randomuser.me/api/portraits/lego/1.jpg",
  mediaUrl = "https://placehold.co/400x220/png",
  mediaType = "video",
  title = "Learn to make a drone",
  description = "Learn how to make a drone in 10 min, + free notes and explanations...",
  timeAgo = "16 min, Ago",
  level = "BEGINNER",
  category = "Robotics",
  views = "578k",
  likes = "56k",
  comments = "12k",
  shares = "1.2k",
  onLike = noop,
  onComment = noop,
  onShare = noop,
  onBookmark = noop,
}) => {
  return (
    <article className="workshop-card">
      {/* Header: Location, Avatar, Menu */}
      <div className="workshop-card-header">
        <div className="workshop-card-location">
          <span role="img" aria-label="Location">📍</span>
          <span>{location}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <img
            src={avatarUrl}
            alt="User avatar"
            className="workshop-card-avatar"
          />
          <button
            aria-label="More options"
            className="workshop-card-menu"
          >
            <span className="text-xl">⋮</span>
          </button>
        </div>
      </div>
      {/* Main Content Row */}
      <div className="workshop-card-main">
        {/* Media and Text Content */}
        <div className="workshop-card-content-wrapper">
          {/* Media Section */}
          <div className="workshop-card-media">
            <img
              src={mediaUrl}
              alt={title}
              className="workshop-card-image"
            />
          </div>
          {/* Text Content */}
          <div className="workshop-card-text-content">
            <div className="workshop-card-title">{title}</div>
            <div className="workshop-card-desc">{description}</div>
            <div className="workshop-card-meta">
              <span>{timeAgo}</span>
              <span style={{ fontWeight: 600 }}>{level}</span>
              <span>/ {category}</span>
            </div>
          </div>
        </div>
        {/* Stats & Actions Column */}
        <div className="workshop-card-right">
          <div className="workshop-card-stat">
            <span role="img" aria-label="Views">👁️</span>
            <span className="workshop-card-stat-value">{views}</span>
          </div>
          <div className="workshop-card-action">
            <button onClick={onLike} aria-label="Like">❤️</button>
            <span className="workshop-card-stat-value">{likes}</span>
          </div>
          <div className="workshop-card-stat">
            <span role="img" aria-label="Comments">💬</span>
            <span className="workshop-card-stat-value">{comments}</span>
          </div>
          <div className="workshop-card-action">
            <button onClick={onShare} aria-label="Share">🔗</button>
            <span className="workshop-card-stat-value">{shares}</span>
          </div>
          <div className="workshop-card-action">
            <button onClick={onBookmark} aria-label="Bookmark">🔖</button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default WorkshopCard; 