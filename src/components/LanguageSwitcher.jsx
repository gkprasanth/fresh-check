// components/LanguageSwitcher.jsx
import React, { useState } from "react";

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState("English");

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    // Handle localization logic here
  };

  return (
    <div className="relative">
      <button className="text-blue-500 hover:underline">{language}</button>
      <div className="absolute bg-white border rounded shadow mt-2 w-32">
        <button
          onClick={() => handleLanguageChange("English")}
          className="block w-full text-left px-4 py-2 hover:bg-gray-200"
        >
          English
        </button>
        <button
          onClick={() => handleLanguageChange("Spanish")}
          className="block w-full text-left px-4 py-2 hover:bg-gray-200"
        >
          Spanish
        </button>
        <button
          onClick={() => handleLanguageChange("French")}
          className="block w-full text-left px-4 py-2 hover:bg-gray-200"
        >
          French
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
