import { FiSearch } from "react-icons/fi";
import { IoIosNotifications } from "react-icons/io";

const Header = () => {
  return (
    <div className="py-5 font-nunito">

      <div className="w-[85%] ml-56 p-2 shadow-xl flex justify-between items-center static">
        <div className="flex justify-center items-center p-2 border-2 w-[50%]  rounded-lg">
          <p className="text-4xl w-14 text-center"><FiSearch /></p>
          <input type="text" name="" id="" className="p-2 w-full" />
        </div>
        <div className="flex justify-center items-center gap-10 mr-5">
          <p className="text-4xl"><IoIosNotifications /></p>
          <div className="flex gap-5">
            <div>
              <img src="https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?t=st=1708604587~exp=1708608187~hmac=d51277fc3209bfd58a0fb7071616bb95943740f96aa788695201995359183042&w=1060" alt="img" className="w-12 h-12 object-cover rounded-full" />
            </div>
            <div>
              <p>john doe</p>
              <p>john@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header