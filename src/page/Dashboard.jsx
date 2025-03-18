import { CgLogOut } from "react-icons/cg";
import { FiUsers } from "react-icons/fi";
import { GiSkills } from "react-icons/gi";
import { LuLayoutDashboard, LuPackage } from "react-icons/lu";
import { RiMenu2Fill } from "react-icons/ri";

import { useState } from "react";
import { IoLogOutSharp, IoSettingsOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation } from "react-router-dom";
import { logout, selectCurrentUser } from "../../store/slices/authSlice";

export const Dashboard = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectCurrentUser);
  console.log("🚀 ~ Dashboard ~ user:", user)
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  let navigation = [
    { name: "Dashboard", href: "/dashboard", icon: LuLayoutDashboard },
    { name: "Projects", href: "/dashboard/projects", icon: LuPackage },
    { name: "Skills", href: "/dashboard/skills", icon: GiSkills },
    { name: "Feedbacks", href: "/dashboard/feedback", icon: FiUsers },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: IoSettingsOutline,
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white transition duration-300 ease-in-out lg:static lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col border-r border-gray-200">
          <div className="flex h-16 items-center justify-between px-4 border-b border-gray-200">
            <h1 className="text-xl font-bold text-green-500">Dashboard</h1>
            <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
              <span className="h-6 w-6">X</span>
            </button>
          </div>
          <nav className="flex-1 space-y-1 px-4 py-4 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? "text-green-50 bg-green-500"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <div className="border-t border-gray-200 p-4">
            <button className="flex w-full items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900">
              <CgLogOut className="mr-3 h-5 w-5" />
              <Link to="/">Back</Link>
            </button>
            <button className="flex w-full items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900">
              <IoLogOutSharp  className="mr-3 h-5 w-5" />
              <Link to="/" onClick={()=>dispatch(logout())}>Logout</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="bg-white border-b border-gray-200">
          <div className="flex h-16 items-center justify-between px-4">
            <button
              className="text-gray-500 focus:outline-none lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <RiMenu2Fill className="h-6 w-6" />
            </button>
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-700">
                {user?.email}
              </span>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto bg-gray-100 p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
