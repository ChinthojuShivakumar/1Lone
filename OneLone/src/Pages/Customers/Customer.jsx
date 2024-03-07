import { FiSearch } from "react-icons/fi"
import Navbar from "../../Components/Layout/Navbar"


const Customer = () => {
    return (
        <div className="font-nunito">
            <Navbar />
            <div className="ml-56 mt-10 w-[85%] h-screen">
                <div className="flex justify-between">
                    <div>
                        <h1 className="text-2xl font-bold ml-6">Customers</h1>
                        <div className="flex gap-5 p-2 ml-5 font-semibold">
                            <p>import</p>
                            <p>Export</p>
                        </div>
                    </div>
                    <div className="mr-10">
                        <button type="button" className="float-right px-5 py-2 rounded-lg bg-blue-600 text-white">Add</button>
                    </div>
                </div>
                <div className="flex justify-center items-center p-2 border-2 w-[50%]  rounded-lg ml-5">
                    <p className="text-4xl w-14 text-center"><FiSearch /></p>
                    <input type="text" name="" id="" className="p-2 w-full" />
                </div>

                <div className="mt-10 mx-5 rounded-lg shadow-xl">
                    <table className="w-[100%]">
                        <thead>
                            <tr className=" border-b">
                                <th className="border-r">
                                    <input type="checkbox" />
                                </th>
                                <th className="p-2 border-r cursor-pointer text-sm font-semibold text-gray-500">
                                    <h1 className="flex items-center justify-center">Name</h1>
                                </th>
                                <th className="p-2 border-r cursor-pointer text-sm font-semibold text-gray-500">
                                    <h1 className="flex items-center justify-center">Email</h1>
                                </th>

                                <th className="p-2 border-r cursor-pointer text-sm font-semibold text-gray-500">
                                    <h1 className="flex items-center justify-center">Mobile</h1>
                                </th>

                                <th className="p-2 border-r cursor-pointer text-sm font-semibold text-gray-500">
                                    <h1 className="flex items-center justify-center">Location</h1>
                                </th>
                                <th className="p-2 border-r cursor-pointer text-sm font-semibold text-gray-500">
                                    <h1 className="flex items-center justify-center">Signed Up</h1>
                                </th>


                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-gray-100 text-center border-b text-sm text-gray-600 ">
                                <td className="border-r">  <input type="checkbox" /></td>
                                <td className="p-2 border-r cursor-pointer text-sm font-semibold text-gray-500">
                                    <h1>Jhon Doe</h1>
                                </td>
                                <td className="p-2 border-r cursor-pointer text-sm font-semibold text-gray-500">
                                    <h1>jhondoe@gmail.com</h1>
                                </td>
                                <td className="p-2 border-r cursor-pointer text-sm font-semibold text-gray-500">
                                    <h1>America</h1>
                                </td>
                                <td className="p-2 border-r cursor-pointer text-sm font-semibold text-gray-500">
                                    <h1>9090-89798-78</h1>
                                </td>
                                <td className="p-2 border-r cursor-pointer text-sm font-semibold text-gray-500">
                                    <h1>14/02/1999</h1>
                                </td>
                            </tr>

                            <tr className="bg-gray-100 text-center border-b text-sm text-gray-600 ">
                                <td className="border-r">  <input type="checkbox" /></td>
                                <td className="p-2 border-r cursor-pointer text-sm font-semibold text-gray-500">
                                    <h1>Jhon Doe</h1>
                                </td>
                                <td className="p-2 border-r cursor-pointer text-sm font-semibold text-gray-500">
                                    <h1>jhondoe@gmail.com</h1>
                                </td>
                                <td className="p-2 border-r cursor-pointer text-sm font-semibold text-gray-500">
                                    <h1>America</h1>
                                </td>
                                <td className="p-2 border-r cursor-pointer text-sm font-semibold text-gray-500">
                                    <h1>9090-89798-78</h1>
                                </td>
                                <td className="p-2 border-r cursor-pointer text-sm font-semibold text-gray-500">
                                    <h1>14/02/1999</h1>
                                </td>
                            </tr>

                            <tr className="bg-gray-100 text-center border-b text-sm text-gray-600 ">
                                <td className="border-r">  <input type="checkbox" /></td>
                                <td className="p-2 border-r cursor-pointer text-sm font-semibold text-gray-500">
                                    <h1>Jhon Doe</h1>
                                </td>
                                <td className="p-2 border-r cursor-pointer text-sm font-semibold text-gray-500">
                                    <h1>jhondoe@gmail.com</h1>
                                </td>
                                <td className="p-2 border-r cursor-pointer text-sm font-semibold text-gray-500">
                                    <h1>America</h1>
                                </td>
                                <td className="p-2 border-r cursor-pointer text-sm font-semibold text-gray-500">
                                    <h1>9090-89798-78</h1>
                                </td>
                                <td className="p-2 border-r cursor-pointer text-sm font-semibold text-gray-500">
                                    <h1>14/02/1999</h1>
                                </td>
                            </tr>

                            <tr className="bg-gray-100 text-center border-b text-sm text-gray-600 ">
                                <td className="border-r">  <input type="checkbox" /></td>
                                <td className="p-2 border-r cursor-pointer text-sm font-semibold text-gray-500">
                                    <h1>Jhon Doe</h1>
                                </td>
                                <td className="p-2 border-r cursor-pointer text-sm font-semibold text-gray-500">
                                    <h1>jhondoe@gmail.com</h1>
                                </td>
                                <td className="p-2 border-r cursor-pointer text-sm font-semibold text-gray-500">
                                    <h1>America</h1>
                                </td>
                                <td className="p-2 border-r cursor-pointer text-sm font-semibold text-gray-500">
                                    <h1>9090-89798-78</h1>
                                </td>
                                <td className="p-2 border-r cursor-pointer text-sm font-semibold text-gray-500">
                                    <h1>14/02/1999</h1>
                                </td>
                            </tr>

                            <tr className="bg-gray-100 text-center border-b text-sm text-gray-600 ">
                                <td className="border-r">  <input type="checkbox" /></td>
                                <td className="p-2 border-r cursor-pointer text-sm font-semibold text-gray-500">
                                    <h1>Jhon Doe</h1>
                                </td>
                                <td className="p-2 border-r cursor-pointer text-sm font-semibold text-gray-500">
                                    <h1>jhondoe@gmail.com</h1>
                                </td>
                                <td className="p-2 border-r cursor-pointer text-sm font-semibold text-gray-500">
                                    <h1>America</h1>
                                </td>
                                <td className="p-2 border-r cursor-pointer text-sm font-semibold text-gray-500">
                                    <h1>9090-89798-78</h1>
                                </td>
                                <td className="p-2 border-r cursor-pointer text-sm font-semibold text-gray-500">
                                    <h1>14/02/1999</h1>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Customer