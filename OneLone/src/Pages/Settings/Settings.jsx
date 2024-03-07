import Navbar from "../../Components/Layout/Navbar"


const Settings = () => {
    return (
        <div className="font-nunito">
            <Navbar />
            <div className="ml-56 mt-10 w-[85%] font-semibold flex flex-col gap-5 mb-10">
                <div className="text-4xl ml-10">
                    <h1 >Settings</h1>
                </div>

                <div className="shadow-xl p-5 rounded-lg flex flex-col gap-10 mx-10">
                    <div>
                        <h1 className="font-bold">Notification</h1>
                        <p className="text-gray-500 text-xs">Manage the notifications</p>
                    </div>

                    <div className="flex flex-col gap-10">
                        <div className="flex gap-40 justify-start items-start">
                            <div className="flex flex-col gap-2">
                                <h1 className="font-bold">Notifications</h1>

                                <div className="flex flex-col gap-3">
                                    <div className="flex gap-2 justify-start items-center">
                                        <input type="checkbox" name="" id="" className="blue-checkbox" />
                                        <p>Email</p>
                                    </div>

                                    <div className="flex gap-2 justify-start items-center">
                                        <input type="checkbox" name="" id="" />
                                        <p>Push Notification</p>
                                    </div>

                                    <div className="flex gap-2 justify-start items-center">
                                        <input type="checkbox" name="" id="" />
                                        <p>Text Messages</p>
                                    </div>

                                    <div className="flex gap-2 justify-start items-center">
                                        <input type="checkbox" name="" id="" />
                                        <p>Phone Calls</p>
                                    </div>

                                </div>

                            </div>
                            <div className="flex flex-col gap-2">
                                <h1 className="font-bold">Messages</h1>
                                <div className="flex flex-col gap-3">
                                    <div className="flex gap-2 justify-start items-center">
                                        <input type="checkbox" name="" id="" />
                                        <p>Push Notification</p>
                                    </div>

                                    <div className="flex gap-2 justify-start items-center">
                                        <input type="checkbox" name="" id="" />
                                        <p>Text Messages</p>
                                    </div>

                                    <div className="flex gap-2 justify-start items-center">
                                        <input type="checkbox" name="" id="" />
                                        <p>Phone Calls</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className=" w-full">
                            <button type="button" className="float-right px-5 py-2 rounded-lg bg-blue-600 text-white">Save</button>
                        </div>
                    </div>
                </div>
                <div className="mx-10 shadow-xl p-5 rounded-lg">
                    <div>
                        <h1>Password</h1>
                        <p className="text-xs text-gray-500">Update password</p>
                    </div>

                    <form action="" className="flex gap-5 flex-col">
                        <div className="mt-10 flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="">Password</label>
                                <input type="text" name="password" id="password" className="border-2 p-2 rounded-lg w-72" placeholder="password" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="">Confirm Password</label>
                                <input type="text" name="confirmPassword" id="confirmPassword" className="border-2 p-2 rounded-lg w-72" placeholder="confirm password" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="float-right px-5 py-2 rounded-lg bg-blue-600 text-white">Update</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Settings