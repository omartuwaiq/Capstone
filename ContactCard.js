import React from "react";

function ContactCard(props) {
  console.log(props);
  return (
    <div className="contact-card">
      <img src={props.image} />
      <h3>{props.name}</h3>
      <p>Phone: {props.phone}</p>
      <p>Email: {props.email}</p>
      <hr></hr>
    </div>
  );
}

export default ContactCard;
