import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
  const { pathname } = useLocation()

  const links = [
    { to: "/", label: "Trang chủ" },
    { to: "/lessons", label: "Bài học" },
    { to: "/dictionary", label: "Từ điển" },
    { to: "/practice", label: "Luyện tập" },
    { to: "/progress", label: "Tiến trình" },
  ]

  return (
    <nav className="bg-gray-800 px-8 py-4 flex justify-between items-center shadow-lg">
      <div className="flex items-center gap-2">
        <i className="fas fa-hands text-blue-400 text-2xl"></i>
        <h1 className="text-lg font-bold tracking-wide text-white">WIERA</h1>
      </div>

      <ul className="flex gap-6">
        {links.map(link => (
          <li key={link.to}>
            <Link
              to={link.to}
              className={`hover:text-blue-400 ${
                pathname === link.to ? "text-blue-400 font-semibold" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}


