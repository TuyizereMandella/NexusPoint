import React from "react";
import WorkshopCard from "./WorkshopCard";

function WorkshopGrid() {
  // Placeholder data for cards
  const cards = [
    {
      location: "KENYA, Nairobi - stadium",
      avatarUrl: "https://randomuser.me/api/portraits/lego/1.jpg",
      mediaUrl: "https://placehold.co/400x220/png",
      mediaType: "video",
      title: "Make a Drone",
      description: "Learn how to make a drone in 10 min, + free notes and explanations...",
      timeAgo: "16 min, Ago",
      level: "BEGINNER",
      category: "Robotics",
      views: "578k",
      likes: "56k",
      comments: "12k",
      shares: "1.2k",
    },
    {
      location: "RWANDA, Kigali",
      avatarUrl: "https://randomuser.me/api/portraits/lego/2.jpg",
      mediaUrl: "https://placehold.co/400x220/png",
      mediaType: "photo",
      title: "Learn Spanish",
      description: "Spanish is simple as drinking water, take our quiz after ...",
      timeAgo: "2 yrs, Ago",
      level: "INTERMEDIATE",
      category: "Languages",
      views: "12k",
      likes: "113",
      comments: "13k",
      shares: "13k",
    },
    {
      location: "USA, Miami",
      avatarUrl: "https://randomuser.me/api/portraits/lego/3.jpg",
      mediaUrl: "https://placehold.co/400x220/png",
      mediaType: "video",
      title: "Job Interview Practice",
      description: "You will 100% win, after watching take a course...",
      timeAgo: "9 mons, Ago",
      level: "BEGINNER",
      category: "Interviews",
      views: "2.8M",
      likes: "2.3M",
      comments: "67K",
      shares: "9K",
    },
    {
      location: "Argentina, Barcelona",
      avatarUrl: "https://randomuser.me/api/portraits/lego/4.jpg",
      mediaUrl: "https://placehold.co/400x220/png",
      mediaType: "video",
      title: "Learn Sound Engineering",
      description: "Become a self-taught producer and master, learn more by doing...",
      timeAgo: "5 hrs, Ago",
      level: "SENIOR",
      category: "Music",
      views: "9k",
      likes: "845",
      comments: "20",
      shares: "20",
    },
  ];
  return (
    <section className="workshop-grid">
      {cards.map((card, idx) => (
        <WorkshopCard key={idx} {...card} />
      ))}
    </section>
  );
}

export default WorkshopGrid; 