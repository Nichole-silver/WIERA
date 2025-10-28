export default function LessonTabs({ selected, onSelect }) {
  const tabs = [
    { id: "alphabet", name: "Chữ cái" },
    { id: "numbers", name: "Số đếm" },
    { id: "greetings", name: "Chào hỏi" },
    { id: "people", name: "Con người" },
    { id: "emotions", name: "Cảm xúc" },
    { id: "colors", name: "Màu sắc" },
    { id: "places", name: "Địa điểm" },
    { id: "others", name: "Khác" },
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => onSelect(tab.id)}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
            selected === tab.id
              ? "bg-blue-500 text-white"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
}
