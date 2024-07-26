import React from 'react'
import GenderBox from './GenderBox'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import useSignup from '../../hooks/useSignup'

const SignUp = () => {

  //function for add the signup values to the database
  //the function also monitors the actions on the input
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: ""
  });

  const { loading, signup } = useSignup()

  //select gender chekbox fn
  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender })
  }


  //submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };


  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>

      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>Sign Up
          <span className='text-blue-500'> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-gray-300'>Full Name</span>
            </label>
            <input type="text" placeholder='John Doe' value={inputs.fullName} className='w-full input input-bordered h-10'
              onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-gray-300'>Username</span>
            </label>
            <input type="text" placeholder='Enter Username' value={inputs.username} className='w-full input input-bordered h-10'
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-gray-300'>Password</span>
            </label>
            <input type="password" placeholder='Enter Password' value={inputs.password} className='w-full input input-bordered h-10'
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-gray-300'>Confirm Password</span>
            </label>
            <input type="password" placeholder='Confirm Password' value={inputs.confirmPassword} className='w-full input input-bordered h-10'
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
            />
          </div>

          {/* Gender Component */}
          <GenderBox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

          <Link to={"/login"} className='text-sm hover:underline hover:text-blue-600 p-2 inline-block'>Already have an account?</Link>

          <div>
            <button className='btn btn-block btn-sm mt-2'>Sign Up</button>
          </div>

        </form>

      </div>

    </div>
  )
}

export default SignUp


//Starter Code
// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>

//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//         <h1 className='text-3xl font-semibold text-center text-gray-300'>Sign Up
//           <span className='text-blue-500'> ChatApp</span>
//         </h1>

//         <form>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text text-gray-300'>Full Name</span>
//             </label>
//             <input type="text" placeholder='John Doe' className='w-full input input-bordered h-10' />
//           </div>

//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text text-gray-300'>Username</span>
//             </label>
//             <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10' />
//           </div>

//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text text-gray-300'>Password</span>
//             </label>
//             <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10' />
//           </div>

//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text text-gray-300'>Confirm Password</span>
//             </label>
//             <input type="password" placeholder='Confirm Password' className='w-full input input-bordered h-10' />
//           </div>

//           {/* Gender Component */}
//           <GenderBox />

//           <a href="#" className='text-sm hover:underline hover:text-blue-600 p-2 inline-block'>Already have an account?</a>

//           <div>
//             <button className='btn btn-block btn-sm mt-2'>Sign Up</button>
//           </div>

//         </form>

//       </div>

//     </div>
//   )
// }

// export default SignUp