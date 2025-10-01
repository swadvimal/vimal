// import React from "react";

// // Loader with background split open effect synced with logo animation (one-time only)
// export default function Loader({ size = 150, duration = 2800 }) {
//   const styleString = `
//   .loader-wrap {
//     position: fixed;
//     inset: 0;
//     height: 100vh;
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background: white; /* Plain white background revealed when panels open */
//     overflow: hidden;
//     z-index: 9999;
//   }

//   .bg-left, .bg-right {
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     width: 50%;
//     background: #270000d3;
//     z-index: 2;
//     transition: transform 1s ease-in-out;
//   }

//   .bg-left { left: 0; transform: translateX(0); }
//   .bg-right { right: 0; transform: translateX(0); }

//   .open-left { transform: translateX(-100%); }
//   .open-right { transform: translateX(100%); }

//   .loader-stage {
//     position: relative;
//     height: 100%;
//     width: 100%;
//     overflow: hidden;
//     z-index: 3;
//   }

//   .logoloader {
//     position: absolute;
//     left: 50%;
//     top: 100%;
//     transform: translateX(-50%) rotateY(0deg);
//     transform-origin: center;
//     display: inline-flex;
//     align-items: center;
//     justify-content: center;
//     opacity: 0;
//     animation: loaderMoveFlip ${duration}ms ease-in-out forwards;
//   }

//   @keyframes loaderMoveFlip {
//     0% {
//       top: 110%;
//       transform: translateX(-50%) scale(0.9);
//       opacity: 0;
//     }
//     30% {
//       top: 50%;
//       transform: translateX(-50%) scale(1);
//       opacity: 1;
//     }
//     50% {
//       top: 50%;
//       transform: translateX(-50%) rotateY(180deg) scale(1.1);
//       opacity: 1;
//     }
//     70% {
//       top: 50%;
//       transform: translateX(-50%) rotateY(360deg) scale(1);
//       opacity: 1;
//     }
//     100% {
//       top: -10%;
//       transform: translateX(-50%) rotateY(360deg) scale(0.9);
//       opacity: 1;
//     }
//   }
//   `;

//   const [open, setOpen] = React.useState(false);

//   React.useEffect(() => {
//     let timer1 = setTimeout(() => setOpen(true), duration * 0.7); // open near end
//     return () => clearTimeout(timer1);
//   }, [duration]);

//   return (
//     <div className="loader-wrap" aria-hidden="true">
//       <style>{styleString}</style>
//       <div className={`bg-left ${open ? "open-left" : ""}`}></div>
//       <div className={`bg-right ${open ? "open-right" : ""}`}></div>
//       <div className="loader-stage">
//         <img
//           src={require("../assets/Images/logo_vimal_agro.png")} // Place your logo image inside public folder
//           alt="Logo"
//           className="logoloader"
//           style={{ width: size, height: "auto" }}
//         />
//       </div>
//     </div>
//   );
// }
import React from "react";

// Loader with background split open effect synced with logo animation (one-time only)
export default function Loader({ size = 150, duration = 2500 }) {
  const styleString = `
  .loader-wrap {
    position: fixed;
    inset: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent; /* Plain white background revealed when panels open */
    overflow: hidden;
    z-index: 9999;
  }

  .bg-left, .bg-right {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 50%;
    background: #270000ff;
    z-index: 2;
    transition: transform 1s ease-in-out;
  }

  .bg-left { left: 0; transform: translateX(0); }
  .bg-right { right: 0; transform: translateX(0); }

  .open-left { transform: translateX(-100%); }
  .open-right { transform: translateX(100%); }

  .loader-stage {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    z-index: 3;
  }

  .logoloader {
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translateX(-50%);
    transform-origin: center;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    animation: loaderMove ${duration}ms ease-in-out forwards;
  }

  @keyframes loaderMove {
    0% {
      top: 110%;
      transform: translateX(-50%) scale(0.9);
      opacity: 0;
    }
    40% {
      top: 50%;
      transform: translateX(-50%) scale(1);
      opacity: 1;
    }
    70% {
      top: 50%;
      transform: translateX(-50%) scale(1);
      opacity: 1;
    }
    100% {
      top: -10%;
      transform: translateX(-50%) scale(0.9);
      opacity: 1;
    }
  }
  `;

  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    let timer1 = setTimeout(() => setOpen(true), duration * 0.7); // open near end
    return () => clearTimeout(timer1);
  }, [duration]);

  return (
    <div className="loader-wrap" aria-hidden="true">
      <style>{styleString}</style>
      <div className={`bg-left ${open ? "open-left" : ""}`}></div>
      <div className={`bg-right ${open ? "open-right" : ""}`}></div>
      <div className="loader-stage">
        <img
          src={require("../assets/Images/logo_vimal_agro.png")}
          alt="Logo"
          className="logoloader"
          style={{ width: size, height: "auto" }}
        />
      </div>
    </div>
  );
}
