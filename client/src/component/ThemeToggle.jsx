import { useTheme } from "../context/ThemeContext"
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
const ThemeToggle = () => {
    const { darkMode, toggleTheme } = useTheme();

    return (
         <div onClick={toggleTheme} className="cursor-pointer" >
            {darkMode ? (<MdOutlineLightMode size={30} />) : (<MdDarkMode size={30} />)}
        </div>
    );
}

export default ThemeToggle;