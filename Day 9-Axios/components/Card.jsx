import React from 'react'
import '../src/App.css'

const Card = (props) => {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    let bgColor = `rgb(${a}, ${b}, ${c})`;

    let d = Math.floor(Math.random() * 256);
    let e = Math.floor(Math.random() * 256);
    let f = Math.floor(Math.random() * 256);
    let textColor = `rgb(${d}, ${e}, ${f})`;
  return (
    <div style={{ backgroundColor: bgColor, color: textColor }} className="card">
        <h1>{props.elem.id}</h1>
        <img src={props.elem.download_url} alt="" />
    </div>
  )
}

export default Card
