import React from "react";

const Second = ({ item, name }) => {
  return (
    <div className="second">
      <h1 className="section-heading">About Venue</h1>
      <section className="venue">
        <h2>{name}</h2>
        <p>{item}</p>
      </section>
    </div>
  );
};

export default Second;
