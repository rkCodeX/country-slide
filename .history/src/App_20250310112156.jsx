import './App.css'

function App() {

  return (
    <>
     <div className="relative w-[100%] flex items-center justify-center h-screen">
       <img className='absolute w-[100%] h-screen overflow-hidden' src="/finland.jpeg" alt="finland" />
       <div className="absolute w-[100%] h-screen flex flex-col items-center justify-center">
       <div className="border-2 w-[100%] h-[90%] flex flex-row items-center justify-center">
        <div className="flex flex-col w-[50%] h-[100%] items-start justify-center px-[10rem] border-2">
         <div>
          
         </div>
        </div>
        <div className="w-[50%] h-[100%]"></div>
       </div>
       <div className="border-2 w-[100%] h-[10%]"></div>
       </div>
     </div>
    </>
  )
}

export default App
