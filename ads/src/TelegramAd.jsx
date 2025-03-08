// import React from "react";

// const TelegramAd = () => {
//   const showAd = async () => {
//     try {
//       await window.Adsgram.init({ blockId: "int-123" }).show();
//     } catch (error) {
//       console.error("Ad error:", error);
//     }
//   };

//   return (
//     <div className="ad-container">
//       <button onClick={showAd} className="ad-button">
//         Show Ad
//       </button>
//     </div>
//   );
// };

// export default TelegramAd;

import React, { useEffect, useState } from "react";

const TelegramAd = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const tgUser = window.Telegram.WebApp.initDataUnsafe?.user;
      if (tgUser) {
        setUserId(tgUser.id);
      }
    }
  }, []);

  const showAd = async () => {
    try {
      await window.Adsgram.init({ blockId: "int-123" }).show();
    } catch (error) {
      console.error("Ad error:", error);
    }
  };

  return (
    <div className="ad-container">
      <h2>Telegram User ID: {userId ? userId : "Loading..."}</h2>
      <button onClick={showAd} className="ad-button">
        Show Ad
      </button>
    </div>
  );
};

export default TelegramAd;
