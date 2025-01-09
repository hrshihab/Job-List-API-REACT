import MainLayout from "./components/layout/MainLayout";
import ProtectedRoute from "./components/layout/ProtectedRoute";
function App() {
  return (
    <ProtectedRoute user_id={undefined}>
      <MainLayout />
    </ProtectedRoute>
  );
}

export default App;
