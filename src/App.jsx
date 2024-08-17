import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Link } from "react-router-dom";
import { navItems, hiddenRoutes } from "./nav-items";
import { Heart } from "lucide-react";

const queryClient = new QueryClient();

const App = () => {
  return (
  <QueryClientProvider client={queryClient}>
    <Toaster />
      <div className="flex flex-col min-h-screen">
        <header className="bg-gray-900 text-white py-4">
          <nav className="container mx-auto px-4">
            <ul className="flex flex-wrap justify-center space-x-2 space-y-2 sm:space-y-0 sm:space-x-4">
              {navItems.map(({ title, to, icon }) => (
                <li key={to}>
                  <Link to={to} className="flex items-center hover:text-orange-500 transition-colors text-sm sm:text-base">
                    {icon}
                    <span className="ml-1 hidden sm:inline">{title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main className="flex-grow bg-gray-800 text-white">
          <Routes>
            {[...navItems, ...hiddenRoutes].map(({ to, page }) => (
              <Route key={to} path={to} element={page} />
            ))}
          </Routes>
        </main>
        <footer className="bg-gray-900 text-white py-4">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 EvenHorizon. All rights reserved.</p>
            <Link to="/acknowledgments" className="flex items-center justify-center mt-2 text-orange-500 hover:text-orange-400 transition-colors">
              <Heart className="h-4 w-4 mr-1" />
              Acknowledgments
            </Link>
          </div>
        </footer>
      </div>
    </QueryClientProvider>
  );
}

export default App;
