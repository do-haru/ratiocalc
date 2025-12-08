import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";
import HelpGuide from "./components/HelpGuide";

import { Analytics } from "@vercel/analytics/react";

function App() {
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  return (
    <>
      <div className="App">
        <Header onOpenHelp={() => setIsHelpOpen(true)} />
        <Main />
      </div>
      <Footer />

      {isHelpOpen && (
        <HelpGuide
          onClose={() => setIsHelpOpen(false)}
          images={[
            "/help/help_01.png",
            "/help/help_02.png",
            "/help/help_03.png",
            "/help/help_04.png",
            "/help/help_05.png",
            "/help/help_06.png",
            "/help/help_07.png",
            "/help/help_08.png",
            "/help/help_09.png",
            "/help/help_10.png",
          ]}
        />
      )}
      <Analytics />
    </>
  );
}

export default App;
