import './App.css'

function App() {

  return (
    <>
     <div className="relative w-[100%] flex items-center justify-center h-screen">
       <img className='absolute w-[100%] h-screen overflow-hidden' src="/finland.jpeg" alt="finland" />
       <div className="absolute w-[100%] h-screen flex flex-col ">
       <div className="bg-r w-[100%] h-[50%]"></div>
       <div className="bg-r w-[100%] h-[50%]"></div>
       </div>
     </div>
    </>
  )
}

export default App
