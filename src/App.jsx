import React from 'react'


const App = () => {
  return (
    <div className='bg-gray-800 h-screen grid place-items-center'>
      <div className='bg-white w-96 p-4 rounded-md'>
        <input type='text' placeholder='Enter location' className='text-x border-b p-1 border-gray-200'/>
      </div>
    </div>
  );
};

export default App;