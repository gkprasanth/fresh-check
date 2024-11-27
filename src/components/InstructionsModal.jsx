import React from "react";

const InstructionsModal = ({ item, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">{item.name} Tips</h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        {item.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ul>
      <button
        onClick={onClose}
        className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition"
      >
        Close
      </button>
    </div>
  </div>
);

export default InstructionsModal;
