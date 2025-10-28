import { useEffect, useState } from "react";
import axios from "axios";

function Lessons() {
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true);
  const [activeGroup, setActiveGroup] = useState("alphabet");

  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await axios.get("http://127.0.0.1:5001/api/images");
        setImages(res.data); // dữ liệu từ Flask
      } catch (err) {
        console.error("Lỗi tải ảnh:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, []);

  if (loading) return <p className="text-center mt-10">⏳ Đang tải dữ liệu...</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Bài học cơ bản</h1>
      <div className="flex gap-2 justify-center mb-6">
        <button
          onClick={() => setActiveGroup("alphabet")}
          className={`px-4 py-2 rounded ${
            activeGroup === "alphabet" ? "bg-blue-600" : "bg-gray-700"
          }`}
        >
          Chữ cái
        </button>
        <button
          onClick={() => setActiveGroup("numbers")}
          className={`px-4 py-2 rounded ${
            activeGroup === "numbers" ? "bg-blue-600" : "bg-gray-700"
          }`}
        >
          Số đếm
        </button>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
        {images?.data
          ? Object.entries(images.data).map(([key, value]) => (
              <div
                key={key}
                className="bg-gray-800 p-4 rounded-lg text-center shadow-md hover:scale-105 transition-transform"
              >
                <img
                  src={`data:image/png;base64,${value}`}
                  alt={key}
                  className="mx-auto mb-2 rounded-lg"
                />
                <p className="capitalize text-sm">{key.replace(".png", "")}</p>
              </div>
            ))
          : "Không có dữ liệu ảnh."}
      </div>
    </div>
  );
}

export default Lessons;

