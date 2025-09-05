import { useState } from "react";

import NewsletterCard from "./components/NewsletterCard.jsx";
import SuccessCard from "./components/SuccessCard.jsx";

const App = () => {
  const [view, setView] = useState("main");
  return (
    <>
      {view === "main" && <NewsletterCard setView={setView} />}
      {view === "success" && <SuccessCard setView={setView} />}
    </>
  );
};

export default App;
