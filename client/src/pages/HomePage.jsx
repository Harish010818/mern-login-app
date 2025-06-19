import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ThemeToggle from "../component/ThemeToggle";

const HomePage = () => {
    const [user, setUser] = useState(null);

    // to fetch and show all jobs
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/user/`, {
                     withCredentials : true
                })
                if (res) {
                    setUser(res.data?.username);
                }
            } catch (err) {
                console.log(err);
            }
        }

       fetchUser();
    }, [])

    return (
        <div className="flex flex-col items-center justify-center gap-6 min-h-screen text-center bg-[var(--homepage-white)] dark:bg-gray-900 dark:text-white  text-black  relative">
            <div className="absolute  top-8 right-8">
                <ThemeToggle />
            </div>
            {user !== null ? (
                <h1 className="md:text-6xl text-2xl">{`Welcome! ${user}`}</h1>
            )

                : (

                    <>
                        <h1 className="text-2xl">Please! login first to access the dashboard</h1>
                        <button
                            className="bg-black dark:bg-[var(--homepage-white)] dark:text-black text-[var(--homepage-white)] text-xl font-medium px-6 py-2 rounded-md shadow-md transition-all duration-300  hover:scale-110 hover:shadow-lg"
                        >
                            <Link to="/login">Login</Link>
                        </button>
                    </>

                )
            }
        </div>
    )
}

export default HomePage;

