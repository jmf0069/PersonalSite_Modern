import React from "react";

const Panel = ({ id, head, desc }) => {
  return (
    <div>
      <div className="mx-auto text-2xl xl:text-3xl max-w-xs border-b-2 border-black pb-2 mt-16">
        <strong>{head}</strong>
      </div>
      <img
        className="mx-auto mt-3 rounded-md"
        src={`images/panels/panel_${id}.jpg`}
        alt={head}
        width={300}
        height={300}
      />

      <p className="text-xl xl:text-2xl mt-3 max-w-sm mx-auto">{desc}</p>
    </div>
  );
};

export default Panel;
