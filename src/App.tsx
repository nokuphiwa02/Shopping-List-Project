
import { Route, Routes } from "react-router";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { Register } from "./components/pages/Register";
import { Home } from "./components/pages/Home";
import { Profile } from "./components/pages/Profile";
import { ShoppingItemsPage } from "./components/pages/ShoppingItemPage";
import LandingPage from "./components/pages/LandingPage";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";

export const App = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<Register />} />

      {/* Protected routes */}
      <Route path="/homepage" element={<ProtectedRoute>
           <Home />
          </ProtectedRoute>}/>

      <Route path="/profilepage" element={ <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/ShoppingItemPage"
        element={
          <ProtectedRoute>
            <ShoppingItemsPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
