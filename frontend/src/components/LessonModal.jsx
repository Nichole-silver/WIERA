export default function LessonModal({ lesson, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 rounded-xl w-[90%] sm:w-[400px] relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-400 hover:text-white text-xl"
        >
          ✖
        </button>
        <h2 className="text-xl font-bold mb-4">{lesson.title}</h2>
        <img
          src={`data:image/png;base64,${lesson.image}`}
          alt={lesson.title}
          className="w-64 h-64 mx-auto rounded-lg object-contain mb-4"
        />
        <button
          onClick={() => new Audio(`/audio/${lesson.title}.mp3`).play()}
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md"
        >
          🔊 Nghe mô tả
        </button>
      </div>
    </div>
  );
}
