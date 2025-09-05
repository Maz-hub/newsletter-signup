import { useState } from "react";

import NewsletterCard from "./components/NewsletterCard.jsx";
import SuccessCard from "./components/SuccessCard.jsx";

const App = () => {
  const [view, setView] = useState("main");
  const [email, setEmail] = useState("");
  return (
    <>
      {view === "main" && (
        <NewsletterCard setView={setView} email={email} setEmail={setEmail} />
      )}
      {view === "success" && (
        <SuccessCard setView={setView} email={email} setEmail={setEmail} />
      )}
    </>
  );
};

export default App;
