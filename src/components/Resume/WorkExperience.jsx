import React from "react";

const WorkExperience = ({ id, startDate, endDate, company, desc }) => {
  return (
    <div className="text-white">
      <div className="flex flex-col">
        <div className="mx-auto text-2xl xl:text-3xl max-w-xs">
          <strong>{company}</strong>
          <p className="text-xl">
            {startDate} - {endDate}
          </p>
        </div>
      </div>
      <p className="text-xl xl:text-2xl mt-3 max-w-sm mx-auto">{desc}</p>
    </div>
  );
};
export default WorkExperience;
