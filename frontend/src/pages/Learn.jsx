import React, { useState, useEffect } from "react";
import useLessonStore from "../store/useLessonStore";
import LessonCard from "../components/LessonCard";
import LessonViewer from "../components/LessonViewer";

const categories = [
  { key: "alphabet", label: "Chữ cái" },
  { key: "numbers", label: "Số đếm" },    // ✅ đổi lại
  { key: "greeting", label: "Chào hỏi" }, // ✅ khớp DB
  { key: "feelings", label: "Cảm xúc" },
  { key: "colours", label: "Màu sắc" },
];

export default function Learn() {
  const [active, setActive] = useState("alphabet");
  const [selected, setSelected] = useState(null);
  const { lessons, fetchLessons, loading, error } = useLessonStore();

  useEffect(() => {
    fetchLessons(active);
  }, [active]);

  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-2">Bài học cơ bản</h2>
      <p className="text-gray-600 mb-4">
        Học từng bước các kỹ năng ngôn ngữ ký hiệu cơ bản
      </p>

      {/* Tabs */}
      <div className="flex gap-2 flex-wrap mb-6">
        {categories.map((c) => (
          <button
            key={c.key}
            onClick={() => setActive(c.key)}
            className={`px-4 py-2 rounded-lg transition ${
              active === c.key
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Nội dung */}
      {loading ? (
        <p>Đang tải dữ liệu...</p>
      ) : error ? (
        <p className="text-red-500">Lỗi: {error}</p>
      ) : lessons.length === 0 ? (
        <p>Chưa có dữ liệu cho nhóm này.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {lessons.map((l, i) => (
            <LessonCard
              key={`${l.category}-${i}`}
              image={l.url}
              label={l.label}
              onClick={() => setSelected(l)}
            />
          ))}
        </div>
      )}

      <LessonViewer
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        image={selected?.url}
        label={selected?.label}
      />
    </section>
  );
}
