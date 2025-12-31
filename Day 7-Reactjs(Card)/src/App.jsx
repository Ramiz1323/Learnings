import React from "react";
import Card from "./Components/Card.jsx";

const App = () => {
  const users = [
  {
    title: "Noah Thompson",
    desc: "Product Designer who focuses on simplicity & usability.",
    img1: "https://picsum.photos/400/200?random=1",
    img2: "https://i.pravatar.cc/150?img=1",
    stats: { likes: "72.9K", posts: "828", views: "342.9K" },
  },
  {
    title: "Emma Williams",
    desc: "UI/UX Designer with a passion for minimal interfaces.",
    img1: "https://picsum.photos/400/200?random=2",
    img2: "https://i.pravatar.cc/150?img=2",
    stats: { likes: "64.1K", posts: "512", views: "289.4K" },
  },
  {
    title: "Liam Carter",
    desc: "Frontend Developer crafting smooth web experiences.",
    img1: "https://picsum.photos/400/200?random=3",
    img2: "https://i.pravatar.cc/150?img=3",
    stats: { likes: "58.3K", posts: "402", views: "256.8K" },
  },
  {
    title: "Olivia Brown",
    desc: "Visual Designer specializing in brand identity.",
    img1: "https://picsum.photos/400/200?random=4",
    img2: "https://i.pravatar.cc/150?img=4",
    stats: { likes: "81.2K", posts: "910", views: "401.6K" },
  },
  {
    title: "Ethan Miller",
    desc: "Full-stack developer building scalable applications.",
    img1: "https://picsum.photos/400/200?random=5",
    img2: "https://i.pravatar.cc/150?img=5",
    stats: { likes: "47.9K", posts: "365", views: "198.7K" },
  },
  {
    title: "Sophia Martinez",
    desc: "Creative director with a love for storytelling.",
    img1: "https://picsum.photos/400/200?random=6",
    img2: "https://i.pravatar.cc/150?img=6",
    stats: { likes: "69.4K", posts: "744", views: "330.2K" },
  },
  {
    title: "James Anderson",
    desc: "Backend engineer focused on performance and security.",
    img1: "https://picsum.photos/400/200?random=7",
    img2: "https://i.pravatar.cc/150?img=7",
    stats: { likes: "52.6K", posts: "418", views: "241.9K" },
  },
  {
    title: "Ava Johnson",
    desc: "Mobile app designer crafting intuitive interfaces.",
    img1: "https://picsum.photos/400/200?random=8",
    img2: "https://i.pravatar.cc/150?img=8",
    stats: { likes: "75.8K", posts: "689", views: "359.4K" },
  },
  {
    title: "William Scott",
    desc: "Tech enthusiast sharing modern web trends.",
    img1: "https://picsum.photos/400/200?random=9",
    img2: "https://i.pravatar.cc/150?img=9",
    stats: { likes: "44.3K", posts: "297", views: "187.5K" },
  },
  {
    title: "Mia Robinson",
    desc: "Design mentor helping teams build better products.",
    img1: "https://picsum.photos/400/200?random=10",
    img2: "https://i.pravatar.cc/150?img=10",
    stats: { likes: "88.1K", posts: "1024", views: "459.8K" },
  },
  {
    title: "Daniel Lee",
    desc: "Product strategist bridging business and design.",
    img1: "https://picsum.photos/400/200?random=11",
    img2: "https://i.pravatar.cc/150?img=11",
    stats: { likes: "61.7K", posts: "556", views: "312.6K" },
  },
];


  return (
    <div className="flex flex-wrap">
      {users.map(function (elem) {
        return <Card users={elem} />;
      })}
    </div>
  );
};

export default App;
