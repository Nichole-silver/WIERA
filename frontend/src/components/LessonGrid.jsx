export default function LessonGrid({ data, onSelectLesson }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
      {Object.entries(data).map(([filename, base64]) => (
        <div
          key={filename}
          className="bg-gray-800 rounded-lg p-3 text-center hover:scale-105 transition cursor-pointer"
          onClick={() => onSelectLesson({ title: filename, image: base64 })}
        >
          <img
            src={`data:image/png;base64,${base64}`}
            alt={filename}
            className="w-24 h-24 mx-auto object-contain"
          />
          <h4 className="mt-2 text-sm">{filename.replace(".png", "")}</h4>
        </div>
      ))}
    </div>
  );
}
