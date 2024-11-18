import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "@/components/ui/provider";
import { BookingProvider } from "./contexts/BookingContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <BookingProvider>
        <App />
      </BookingProvider>
    </Provider>
  </StrictMode>
);
