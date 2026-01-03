import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="Card border-2 border-white w-75 p-5 flex flex-col gap-3 justify-center items-center">
        <img
          src={props.user.imageURL}
          alt=""
          className=" h-60 object-cover object-center max-h-50 w-50 rounded-full"
        />
        <h2 className="text-3xl font-bold ">{props.user.usrname}</h2>
        <p>{props.user.desc}</p>
        <div className="role underline font-bold">{props.user.role}</div>
        <button
          onClick={() => 
            props.deleteUser(props.index)
        }
          className="bg-red-500 text-white py-2 px-4 rounded active:scale-98"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Card;
