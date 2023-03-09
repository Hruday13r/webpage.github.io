import React from 'react'

export default function Sonnet() {
  return (
    <div>
        <div className='select-name'>
           <h4 className='std-board'>Add student</h4>
           <p className='date-time'>25/10/2023 22:23</p>
        </div>
        <div className='std-detail'>
            <input type='text' placeholder='firstName' className='fst-name'/>
            <input type='text' placeholder='middleName' className='fst-name'/>
            <input type='text' placeholder='LastName' className='fst-name'/>
        </div>
        <div className='std-detail'>
            <select className='class-name'>
                <option>class-1</option>
                <option>class-2</option>
                <option>class-3</option>
                <option>class-4</option>
                <option>class-5</option>
                <option>class-6</option>
                <option>class-7</option>
                <option>class-8</option>
                <option>class-9</option>
                <option>class-10</option>
                <option>class-11</option>
                <option>class-12</option>
            </select>
            <select className='class-name'>
                <option>division-A</option>
                <option>division-B</option>
                <option>division-C</option>
                <option>division-D</option>
                <option>division-E</option>
            </select >
            <input type='number' placeholder='Roll Number' max='99'  className='fst-name'/>
        </div>
        <div className='add-detail'>
            <input type='text' placeholder='AddressLine-1' className='address-1'/>
            <input type='text' placeholder='AddressLine-2'  className='address-2'/>
        </div>
        <div className='std-detail'>
            <input type='text' placeholder='Landmark' className='fst-name'/>
            <input type='text' placeholder='Pincode' className='fst-name'/>
            <input type='text' placeholder='City' className='fst-name'/>
        </div>
        <button className='Add-btn' >
            Add Student
        </button>
    </div>
  )
}
