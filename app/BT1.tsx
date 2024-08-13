import React from "react";

export default function BT1() {
  return (
    <div className="p-4 border rounded-md max-w-md">
      <label className="block text-blue-600 mb-1">Label</label>
      <div className="relative">
        <input
          placeholder="Placeholder"
          className="w-full p-2 pr-10 border border-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
        />
        <i className="fa-regular fa-eye absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-700 cursor-pointer"></i>
      </div>
      <p className="text-gray-600 mt-1">Helper Text</p>
    </div>
  );
}
