import { useRef } from "react"
import Navbar from "../../Components/Layout/Navbar"



const User = () => {
    const fileRef = useRef()

    const handleChangeFile = (e) => {
        e.preventDefault()
        console.log("Selected files", e.target.files[0]);
       
    }

    const handleClickButton = (e) => {
        e.preventDefault()
        fileRef.current.click()
    
    }
    return (
        <div className="font-nunito">
            <Navbar />
            <div className="w-[85%] ml-56 font-semibold">
                <div className="w-full flex justify-center flex-col items-center h-screen gap-6">
                    <div className="flex gap-10 w-[85%]">
                        <h1 className="text-4xl"> Account</h1>
                    </div>
                    <div className="flex gap-5 w-full p-2 justify-center items-start">
                        <div className="shadow-xl p-5 rounded-lg  flex justify-center items-center flex-col w-[30%]">
                            <div className="border-b-2 w-full flex justify-center items-center flex-col ">
                                <div className="w-24 h-24 rounded-full flex justify-center items-center">
                                    <img src="https://th.bing.com/th/id/OIP.87rC-vQdkf1I5qv74_2LjwHaHp?rs=1&pid=ImgDetMain" alt="img" className="object-cover rounded-full " />
                                </div>
                                <div className="flex flex-col justify-center items-center gap-2 mt-10 mb-5">
                                    <h1>Profile</h1>
                                    <p>Los Angels</p>
                                    <p>GMT-7</p>

                                </div>

                                
                            </div>
                            <div className="flex justify-center items-center mt-5">
                                <button type="button" className="text-blue-500" onClick={handleClickButton}>Upload file</button>
                                <input type="file" name="image" id="image"  ref={fileRef} className="hidden" onChange={handleChangeFile}/>
                            </div>
                        </div>
                        <div className="shadow-xl p-5 rounded-lg w-[60%]">
                            <div className="ml-4">
                                <h1>Profile</h1>
                                <p>The information can be edited</p>
                            </div>
                            <div>
                                <div className="grid grid-cols-2 justify-center items-center gap-2 p-2">
                                    <div className="flex flex-col p-2 gap-2">
                                        <label htmlFor="" >First Name:</label>
                                        <input type="text" name="firstName" id="firstName" className="border-2 rounded p-2" />
                                    </div>
                                    <div className="flex flex-col p-2 gap-2">
                                        <label htmlFor="">Last Name:</label>
                                        <input type="text" name="lastName" id="lastName" className="border-2 rounded p-2" />
                                    </div>
                                    <div className="flex flex-col p-2 gap-2">
                                        <label htmlFor="">Gender:</label>
                                        <input type="text" name="gender" id="gender" className="border-2 rounded p-2" />
                                    </div>
                                    <div className="flex flex-col p-2 gap-2">
                                        <label htmlFor="">PAN Number:</label>
                                        <input type="text" name="panNumber" id="panNumber" className="border-2 rounded p-2" />
                                    </div>
                                    <div className="flex flex-col p-2 gap-2">
                                        <label htmlFor="">Credit card Details:</label>
                                        <input type="text" name="creditcard" id="credit card" className="border-2 rounded p-2" />
                                    </div>
                                    <div className="flex flex-col p-2 gap-2">
                                        <label htmlFor="">Cibil Score:</label>
                                        <input type="text" name="cibilScore" id="cibilScore" className="border-2 rounded p-2" />
                                    </div>

                                </div>
                                <div className="flex justify-end items-center mr-5 ">
                                    <button className="py-2 px-5 rounded-lg text-white outline-blue-500 bg-blue-500">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User