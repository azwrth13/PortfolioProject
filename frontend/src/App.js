// Import dependencies
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Components, styles, media
import Navigation from "./components/Navigation";
import "./App.css";

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages
import HomePage from "./pages/HomePage";
import TopicsPage from "./pages/TopicsPage";
import OptionsPage from "./pages/OptionsPage";
import GalleryPage from "./pages/GalleryPage";
// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design:

// If your schema requires SHORT data input, then use the TABLE design.
import EditOptionPageTable from "./pages/EditOptionPageTable";
import AddOptionPageTable from "./pages/AddOptionPageTable";

// Define the function that renders the content in Routes, using State.
function App() {
  const [option, setOptionToEdit] = useState([]);
  return (
    <>
      <BrowserRouter>
        <header>
          <img
            className="logo"
            src="android-chrome-192x192.png"
            alt="Logo for website, black rounded square with lilac cr in the center."
          />
          <h1>Christopher Reyes</h1>
        </header>

        <Navigation />

        <main>
          <section>
            <Routes>
              {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
              <Route path="/" element={<HomePage />} />
              <Route path="/TopicsPage" element={<TopicsPage />} />
              <Route path="/OptionsPage" element={<OptionsPage setOption={setOptionToEdit} />}/>
              <Route path="/GalleryPage" element={<GalleryPage />} />

              {/* Or these if your schema requires SHORT data input: */}
              <Route path="/create" element={<AddOptionPageTable />} />   
              <Route path="/update" element={<EditOptionPageTable optionToEdit={option} />} />
            </Routes>
          </section>
        </main>

        <footer>
          <p>&copy; 2023 Christopher Reyes</p>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
