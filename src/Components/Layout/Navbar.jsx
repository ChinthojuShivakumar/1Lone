import Header from "./Header"
import Sidebar from "./Sidebar"


const Navbar = () => {
  return (
    <div className="">
      <div className="font-semibold">
        <Header />
      </div>
      <div className="w-[20%] font-semibold">
        <Sidebar />
      </div>
    </div>
  )
}

export default Navbar