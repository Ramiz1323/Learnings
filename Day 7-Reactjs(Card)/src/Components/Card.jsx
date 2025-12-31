import React from "react";

const Card = (props) => {
  return (
    <div className="card bg-white text-black w-70 m-5! p-2! rounded-2xl">
      <div className="img1">
        <img
          src={props.users.img1}
          alt=""
          className="rounded-2xl max-h-40 w-full"
        />
      </div>
      <div className="img2 bg-white relative -top-15 left-20 rounded-full w-fit h-fit">
        <img
          src={props.users.img2}
          alt=""
          className="rounded-full h-25"
        />
      </div>
      <div className="details flex flex-col gap-2 justify-center items-center relative -top-11">
        <div className="title w-fit text-2xl font-bold">{props.users.title}</div>
        <div className="desc text-gray-500 text-[12px] max-w-50 text-center">{props.users.desc}</div>
        <div className="socials border flex flex-row gap-10 justify-center items-center rounded-xl px-3! py-3! mt-2!">
          <div className="likes flex flex-col justify-center items-center font-bold">{props.users.stats.likes}<span className="text-gray-500 font-medium!">Likes</span></div>
          <div className="posts flex flex-col justify-center items-center font-bold">{props.users.stats.posts} <span className="text-gray-500 font-medium!">Posts</span></div>
          <div className="views flex flex-col justify-center items-center font-bold">{props.users.stats.views} <span className="text-gray-500 font-medium!">Views</span></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
