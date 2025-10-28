export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-6 text-blue-400">Học Ngôn Ngữ Ký Hiệu</h1>
      <p className="text-gray-300 text-lg max-w-2xl">
        Nền tảng học ngôn ngữ ký hiệu tương tác 3D — giúp bạn học nhanh hơn, dễ hiểu hơn và thú vị hơn!
      </p>

      <div className="flex gap-8 mt-12">
        <div className="flex flex-col items-center">
          <i className="fas fa-book text-4xl text-yellow-400"></i>
          <p className="mt-2">Học ký hiệu</p>
        </div>
        <div className="flex flex-col items-center">
          <i className="fas fa-hand-sparkles text-4xl text-green-400"></i>
          <p className="mt-2">3D mô phỏng tay</p>
        </div>
        <div className="flex flex-col items-center">
          <i className="fas fa-gamepad text-4xl text-pink-400"></i>
          <p className="mt-2">Minigame luyện tập</p>
        </div>
      </div>

      <button className="mt-12 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold">
        Bắt đầu học ngay
      </button>
    </section>
  )
}
