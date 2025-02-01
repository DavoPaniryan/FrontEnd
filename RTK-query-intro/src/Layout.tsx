import { NavLink, Outlet } from "react-router-dom"

export const Layout = () => {
  const navLinks = [
    { path: "/", label: "Users" },
    { path: "/add", label: "Add User" },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100">
      {/* Navbar */}
      <nav className="bg-slate-800 p-4 shadow-xl shadow-black/10">
        <div className="max-w-6xl mx-auto flex gap-6">
          {navLinks.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "bg-violet-600 text-white shadow-lg shadow-violet-900/50"
                    : "text-slate-300 hover:bg-blue-600/30 hover:text-blue-200"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-4">
        <div className="max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 py-6 mt-auto">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400 text-sm">
            © 2024 Your Company Name. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
