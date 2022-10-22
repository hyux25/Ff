import AppRouter from "Router";
import { useState } from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <AppRouter isLoggedIn={isLoggedIn} />
    </div>
  );
}
