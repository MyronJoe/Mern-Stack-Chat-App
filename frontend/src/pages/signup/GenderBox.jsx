import React from 'react'

const GenderBox = () => {
    return (
        <div>
            <div className='flex mt-2'>
                
                <div className='form-control'>
                    <label className={`label gap-2 cursor-pointer`}>
                        <span className='label-text text-gray-300'>Male</span>
                        <input type='checkbox' className='checkbox border-gray-300' />
                    </label>
                </div>

                <div className='form-control'>
                    <label className={`label gap-2 cursor-pointer`}>
                        <span className='label-text text-gray-300'>Female</span>
                        <input type='checkbox' className='checkbox border-gray-300' />
                    </label>
                </div>

            </div>
        </div>
    )
}

export default GenderBox

//Stater Code
// const GenderBox = () => {
//     return (
//         <div>
//             <div className='flex mt-2'>
                
//                 <div className='form-control'>
//                     <label className={`label gap-2 cursor-pointer`}>
//                         <span className='label-text text-gray-300'>Male</span>
//                         <input type='checkbox' className='checkbox border-gray-300' />
//                     </label>
//                 </div>

//                 <div className='form-control'>
//                     <label className={`label gap-2 cursor-pointer`}>
//                         <span className='label-text text-gray-300'>Female</span>
//                         <input type='checkbox' className='checkbox border-gray-300' />
//                     </label>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default GenderBox