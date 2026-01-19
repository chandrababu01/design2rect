
import { FaReact } from "react-icons/fa"
import RippleLoader from "./components/lightswind/RippleLoader"
import Logo from './assets/logo-black-color.png';
// const FullScreenLoader = () => {
//   return (
//     <div
//       style={{
//         position: "fixed",
//         inset: 0,
//         zIndex: 9999,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         background: "#ffffff",
//       }}
//     >
//       <RippleLoader size={300} />
//     </div>
//   )
// }

// export default FullScreenLoader



const PreLoader = () => {
  return (
    <div id="pre-load" className="loader">
      <div className="loader-inner">
        <div className="loader-logo">
          {/* Replace with your logo */}
           <img src={Logo} alt="logo" className="loader-logo" />{" "}
        </div>

        {/* Ripple circles */}
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </div>
  )
}

export default PreLoader

