import AppRoutes from "./routes";
import { MenuLateral } from "./shared/components/menu-lateral/MenuLateral";

function App() {
  return (
    <>
      <MenuLateral>
        <AppRoutes />
      </MenuLateral>
    </>
  );
}

export default App;
