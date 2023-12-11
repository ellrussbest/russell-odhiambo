import { /*useEffect,*/ useState } from "react"
import { Link } from "react-router-dom"

import { styles } from "../styles"
// import { navLinks } from "../constants"
import logo from "../assets/logo.png"
// import menu from "../assets/menu.svg"
// import close from "../assets/close.svg"

const Navbar = () => {
  const [active, setActive] = useState("")

  console.log(active)

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() =>{ 
            setActive("")
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt="logo" className="max-w-none w-9 h-9 object-contain"/>
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Russell  &nbsp;
            <span className="sm:block hidden"> | Fullstack Developer</span> 
          </p>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar