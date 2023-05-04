import { useNavigate } from "react-router";

export default function LoginComp() {

    const navigate = useNavigate();

    const login = function(){
        console.log("logging in.....");
        navigate('/selectAction');
    }

    return <div className="flex justify-center items-center h-screen bg-gray-800">
        <div className="w-96 p-6 shadow-lg bg-white rounded-md">
            <h1 className="text-3xl block text-center font-semibold"><i className="fa-solid fa-user mr-2"></i>Login</h1>
            <hr className="mt-3" />
            <div className="mt-3">
                <label htmlFor="username" className="block text-base mb-2">Username</label>
                <input type="text" id="username" className="border w-full text-base px-2 py-1
             focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Username ...." />
            </div>

            <div className="mt-3">
                <label htmlFor="password" className="block text-base mb-2">Password</label>
                <input type="password" id="password" className="border w-full text-base px-2 py-1
             focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Password ...." />
            </div>
            <div className="mt-3 flex justify-between items-center">
                <div>
                    <input className="mr-1" type="checkbox"/>
                    <label>Remember Me!</label>
                </div>

                <div>
                    <a href="#" className="text-blue-500 hover:text-blue-950">Forgot Password?</a>
                </div>
            </div>

            <div className="mt-5">
                <button type="submit" className="border-2 border-indigo-400 bg-indigo-400 text-white w-full rounded-md hover:bg-transparent
            font-semibold hover:text-indigo-400" onClick={login}>Login</button>
            </div>

        </div>

    </div>
}
