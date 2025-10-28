import React from "react";

export default function LessonCard({ image, label, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer flex flex-col items-center p-2 hover:scale-105 transition"
    >
      <img src={image} alt={label} className="w-24 h-24 object-contain border rounded-xl shadow" />
      <p className="mt-2 font-semibold">{label}</p>
    </div>
  );
}
