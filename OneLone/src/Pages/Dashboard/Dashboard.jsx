import Navbar from "../../Components/Layout/Navbar"

import { FaUsers } from "react-icons/fa6";
import { IoBookSharp } from "react-icons/io5";
import { HiMiniNewspaper } from "react-icons/hi2";
import { PiVideoFill } from "react-icons/pi";


const Dashboard = () => {
  return (
    <div className="font-nunito h-screen">
      <Navbar />
      <div className="ml-56 mt-10 w-[85%] h-screen">
        <div className="grid grid-cols-4 py-2 px-5 gap-5 w-[100%] text-xl ">
          <div className="flex flex-col gap-5 justify-center items-start  rounded-lg shadow-lg bg-white">
            <p className="text-blue-600 ml-5 mt-3"><IoBookSharp /></p>
            <p className="ml-5 font-bold ">Total Customers</p>
            <p className="ml-5">$24k</p>
          </div>
          <div className="flex flex-col gap-5 justify-center items-start  p-2 rounded-lg shadow-lg bg-white">
            <p className="text-blue-600 ml-5 mt-3"><PiVideoFill /></p>
            <p className="ml-5 font-bold">Todays Customers</p>
            <p className="ml-5">1.6k</p>
          </div>
          <div className="flex flex-col gap-5 justify-center items-start  p-2 rounded-lg shadow-lg bg-white">
            <p className="text-blue-600 ml-5 mt-3"><HiMiniNewspaper /></p>
            <p className="ml-5 font-bold">Completed Loan</p>
            <p className="ml-5">15%</p>
          </div>
          <div className="flex flex-col gap-5 justify-center items-start  p-2 rounded-lg shadow-lg bg-white">
            <p className="text-blue-600 ml-5 mt-3"><FaUsers /></p>
            <p className="ml-5 font-bold">Total Loan</p>
            <p className="ml-5">$15k</p>
          </div>
        </div>
        <div>
          <div className="flex gap-5">
            <div className=" w-[25%] flex flex-col gap-2 shadow-xl rounded-lg p-5">
              <div className="ml-1 py-5">
                <h1 className="text-xl font-bold">Latest Customers</h1>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex gap-3">
                  <div className="w-[20%] flex justify-center items-center">
                    <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1708595524~exp=1708599124~hmac=372b0f480d233f3a998d6490fe4832cd7a53abd074b83247a9e70cb6352da7e6&w=1060" alt="" className="w-12 h-12 object-cover rounded-full" />
                  </div>
                  <div className="w-[80%] flex flex-col justify-start items-start overflow-hidden">
                    <h1 className="font-bold" >Full name</h1>
                    <p className="text-gray-500">Updated 2 seconds ago</p>
                  </div>
                </div>

               

                <div className="flex gap-3">
                  <div className="w-[20%] flex justify-center items-center">
                    <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1708595524~exp=1708599124~hmac=372b0f480d233f3a998d6490fe4832cd7a53abd074b83247a9e70cb6352da7e6&w=1060" alt="" className="w-12 h-12 object-cover rounded-full" />
                  </div>
                  <div className="w-[80%] flex flex-col justify-start items-start overflow-hidden">
                    <h1 className="font-bold" >Full name</h1>
                    <p className="text-gray-500">Updated 2 seconds ago</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-[20%] flex justify-center items-center">
                    <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1708595524~exp=1708599124~hmac=372b0f480d233f3a998d6490fe4832cd7a53abd074b83247a9e70cb6352da7e6&w=1060" alt="" className="w-12 h-12 object-cover rounded-full" />
                  </div>
                  <div className="w-[80%] flex flex-col justify-start items-start overflow-hidden">
                    <h1 className="font-bold">Full name</h1>
                    <p className="text-gray-500">Updated 2 seconds ago</p>
                  </div>
                </div>



              </div>
            </div>
            <div className="w-[75%] flex flex-col gap-5 shadow-xl p-5 rounded-lg">
              <div className="ml-1 py-5">
              <h1 className="text-xl font-bold">Latest Loan</h1>
              </div>
              <div className="w-full">
                <table className="w-full rounded-xl border-2">
                  <thead>
                    <tr className="text-center border-b text-sm ">
                      <th className="p-2 border-r cursor-pointer text-sm font-bold ">Orders</th>
                      <th className="p-2 border-r cursor-pointer text-sm font-bold ">Customers</th>
                      <th className="p-2 border-r cursor-pointer text-sm font-bold ">Date</th>
                      <th className="p-2 border-r cursor-pointer text-sm font-bold ">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-100 text-center border-b text-sm ">
                      <td className="p-2 border-r cursor-pointer text-sm  ">Dev 49</td>
                      <td className="p-2 border-r cursor-pointer text-sm  ">Ekertania Tankova</td>
                      <td className="p-2 border-r cursor-pointer text-sm  ">12/04/1999</td>
                      <td className="p-2 border-r cursor-pointer text-sm  ">Status</td>
                    </tr>

                    <tr className="bg-gray-100 text-center border-b text-sm ">
                      <td className="p-2 border-r cursor-pointer text-sm  ">Dev 49</td>
                      <td className="p-2 border-r cursor-pointer text-sm  ">Ekertania Tankova</td>
                      <td className="p-2 border-r cursor-pointer text-sm  ">12/04/1999</td>
                      <td className="p-2 border-r cursor-pointer text-sm  ">Status</td>
                    </tr>

                    <tr className="bg-gray-100 text-center border-b text-sm ">
                      <td className="p-2 border-r cursor-pointer text-sm  ">Dev 49</td>
                      <td className="p-2 border-r cursor-pointer text-sm  ">Ekertania Tankova</td>
                      <td className="p-2 border-r cursor-pointer text-sm  ">12/04/1999</td>
                      <td className="p-2 border-r cursor-pointer text-sm  ">Status</td>
                    </tr>

                    <tr className="bg-gray-100 text-center border-b text-sm ">
                    <td className="p-2 border-r cursor-pointer text-sm  ">Dev 49</td>
                    <td className="p-2 border-r cursor-pointer text-sm  ">Ekertania Tankova</td>
                    <td className="p-2 border-r cursor-pointer text-sm  ">12/04/1999</td>
                    <td className="p-2 border-r cursor-pointer text-sm  ">Status</td>
                    </tr>

                    <tr className="bg-gray-100 text-center border-b text-sm ">
                    <td className="p-2 border-r cursor-pointer text-sm  ">Dev 49</td>
                    <td className="p-2 border-r cursor-pointer text-sm  ">Ekertania Tankova</td>
                    <td className="p-2 border-r cursor-pointer text-sm  ">12/04/1999</td>
                    <td className="p-2 border-r cursor-pointer text-sm ">Status</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Dashboard