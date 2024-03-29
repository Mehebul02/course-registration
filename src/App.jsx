
import { useState } from 'react'
import './App.css'
import Cart from './Components/Cart/Cart'
import Courses from './Components/Courses/Courses'

function App() {
  const [select,setSelect] = useState([])
  const handleSelected =(p) =>{
    // const newSelect = [...select,p];
    // setSelect(newSelect)
    // console.log(p)
    const isExit =select.find((pd)=>pd.id==p.id)
        if(!isExit){
          setSelect([...select,p])
        }
        else{
          alert('asdasd')
        }
// const isExit = select.find(name => name.id ===p.id);
// if(!isExit){
//   setSelect([...select,p])
// }
// else{
//   alert("আর সিল্কেট করা যাবে না")
// }

  }
  const handleDelete= (id)=>{
    const isDelete =select.filter((item) => item.id !=id)
    setSelect(isDelete)

  }
  return (
    <>
      <div className='p-10'>
      
      <div className ='block text-center'><h1  className='text-4xl font-bold  mt-10 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>Course-Registration</h1></div>
      <hr />
     
      <div className='grid lg:grid-cols-12'>
        <div className='col-span-9 '>
        <Courses  handleSelected={handleSelected}></Courses>
        
          
        
        </div>
        
        <div className='col-span-3'><Cart select={select} handleDelete={handleDelete}></Cart></div>
      </div>
      </div>
      
      
    
      
      
    </>
  )
}

export default App
