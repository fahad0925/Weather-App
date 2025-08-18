import React from "react";
export default function GlobeCircle() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex justify-center items-center">
        <div
          className="
          relative w-40 h-40 
          rounded-full 
          border border-gray-700
          bg-[url('https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/274abf89-1fbb-4f0b-979d-48c9a7c449e7.png')]
          bg-cover bg-center
          brightness-50 contrast-125
        "
        >
          {/* Optional inner light effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-radial from-gray-600/20 via-transparent to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
