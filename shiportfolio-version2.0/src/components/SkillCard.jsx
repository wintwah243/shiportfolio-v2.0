import React from 'react';

const SkillCard = ({ icon, skillName, progress }) => {
  return (
   <div className="bg-white rounded-md border p-2 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center">
        {/* Icon */}
        <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full text-lg mr-3">
          {icon}
        </div>

        {/* Skill info and progress bar */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-medium text-gray-800">{skillName}</p>
            <p className="text-xs text-gray-500">{progress}%</p>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-[6px] overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${progress}%`,
                background: '#facc15',
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
