import { NavLink } from "react-router-dom"


const Sidebar = () => {
    return (
        <div className="font-nunito">
            <aside className="fixed w-[14%] h-full shadow-2xl bg-blend-lighten">
                <div className="mt-10 w-full px-3 py-5 text-2xl">
                    <h1 className="">1 Lone</h1>
                </div>
                <div className="mt-10 w-full p-2 flex flex-col gap-5">
                    <NavLink to="/">
                        <div className="w-full flex justify-start items-start p-2">
                            <h1 className="w-full">Dashboard</h1>
                        </div>
                    </NavLink>
                    <NavLink to="/users">
                        <div className="w-full flex justify-start items-start p-2">
                            <h1 className="w-full">User</h1>
                        </div>
                    </NavLink>
                    <NavLink to="/Customers">
                    <div className="w-full flex justify-start items-start p-2">
                        <h1 className="w-full">Customers</h1>
                    </div>
                    </NavLink>
                    <div className="w-full flex justify-start items-start p-2">
                        <h1 className="w-full">Loan Amount</h1>
                    </div>
                    <NavLink to="/Settings">
                        <div className="w-full flex justify-start items-start p-2">
                            <h1 className="w-full">Settings</h1>
                        </div>
                    </NavLink>
                </div>
            </aside>
        </div>
    )
}

export default Sidebar