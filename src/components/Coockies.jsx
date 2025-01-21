import { useState, useEffect } from "react";
import Cookies from "js-cookie";
// import Button from "../components/ui/button

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    // Registro specifico per diversi tipi di cookie
    Cookies.set("cookie_consent", "accepted", { expires: 365 });
    Cookies.set("analytics_cookies", "true", { expires: 365 });
    Cookies.set("marketing_cookies", "true", { expires: 365 });
    setShowBanner(false);
  };

  const handleRejectCookies = () => {
    Cookies.set("cookie_consent", "rejected", { expires: 365 });
    Cookies.set("marketing_cookies", "false", { expires: 365 });
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed m-0 bottom-0 left-0 right-0 bg-black w-full text-center text-white p-4 flex-col  flex justify-between items-center z-50">
      <p>
        Questo sito utilizza cookie per migliorare l'esperienza utente.
        Continuando la navigazione o cliccando "Accetta", confermi di aver letto
        e accettato la nostra privacy policy
        e l'utilizzo dei cookie.
      </p>
      <div className="space-x-4 mt-5 w-full lg:w-auto lg:block flex justify-center items-center ">
        <button className="border-r-2 border-l-2 border-white py-1 px-2 rounded-lg" onClick={handleAcceptCookies}>
          Accetta
        </button>
        <button className="border-r-2 border-l-2 border-white rounded-lg py-1 px-2" onClick={handleRejectCookies}>
          Rifiuta
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;