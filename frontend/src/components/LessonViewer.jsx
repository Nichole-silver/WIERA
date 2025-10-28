import React from "react";

export default function LessonViewer({ isOpen, onClose, image, label }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 shadow-xl w-[400px] text-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-gray-600 hover:text-black"
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-4">{label}</h2>
        <img src={image} alt={label} className="mx-auto w-64 h-64 object-contain" />
      </div>
    </div>
  );
}
