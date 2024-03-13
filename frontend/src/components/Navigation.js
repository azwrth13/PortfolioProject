import React from 'react';
import { Link } from 'react-router-dom';
import { MdHome, MdFormatListBulleted, MdOutlinePhotoSizeSelectActual  } from "react-icons/md";
import { HiDocumentChartBar } from "react-icons/hi2";

// Change the function names and links
// to fit your portfolio topic.

function Navigation() {
  return (
    <nav className="pages">
        {/* Add links to Home, Topics, Gallery, Contact, and Staff Pages  */}
        <Link to="/"><MdHome className="nvIcn"/>Home</Link>
        <Link to="/TopicsPage"><MdFormatListBulleted className="nvIcn"/>Topics</Link>
        <Link to="/OptionsPage"><HiDocumentChartBar className="nvIcn"/>Options List</Link>
        <Link to="/GalleryPage"><MdOutlinePhotoSizeSelectActual className="nvIcn"/>Gallery</Link>
    </nav>
  );
}

export default Navigation;
