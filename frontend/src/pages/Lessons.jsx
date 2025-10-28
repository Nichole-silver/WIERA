import { useState, useEffect } from "react";
import axios from "axios";

function Lessons() {
  const [group, setGroup] = useState("alphabet");
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      setLoading(true);
      try {
        const res = await axios.get(`http://127.0.0.1:5001/api/images/${group}`);
        setImages(res.data.data || {});
      } catch (err) {
        console.error("❌ Lỗi tải ảnh:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, [group]);

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">📘 Bài học - {group}</h1>

      <div className="flex justify-center flex-wrap gap-2 mb-8">
        {["alphabet", "numbers", "greetings"].map((g) => (
          <button
            key={g}
            onClick={() => setGroup(g)}
            className={`px-4 py-2 rounded ${
              group === g ? "bg-blue-600" : "bg-gray-700"
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      {loading ? (
        <p>⏳ Đang tải...</p>
      ) : (
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
          {Object.entries(images).map(([name, base64]) => (
            <div key={name} className="bg-gray-800 p-3 rounded-lg shadow-md">
              <img
                src={`data:image/png;base64,${base64}`}
                alt={name}
                className="w-full rounded mb-2"
              />
              <p>{name.replace(".png", "")}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Lessons;
