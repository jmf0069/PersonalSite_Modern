import React from "react";
import "./Panel.css";

const Panel = ({ id, head, desc }) => {
  return (
    <div className="panel">
      <img
        className="image mx-auto mt-3 rounded-md"
        src={`images/panels/panel_${id}.jpg`}
        alt={head}
        width={300}
        height={300}
      />
      <div className="words">
        <div className="header">
          <strong>{head}</strong>
        </div>

        <p className="description text-xl xl:text-2xl mt-3 max-w-sm mx-auto">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Panel;
