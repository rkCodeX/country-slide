import './App.css'

function App() {

  return (
    <>
     <div className="relative w-[100%] flex items-center justify-center h-screen">
       <img className='absolute w-[100%] h-screen overflow-hidden' src="/finland.jpeg" alt="finland" />
       <div className="absolute w-[100%] h-screen flex flex-col items-center justify-center">
       <div className="border-2 w-[100%] h-[90%] flex flex-row items-center justify-center">
        <div className="w-[50%] h-[100%] flex items-center justify-center border-2">
         <div className="w-[70%] h-auto flex flex-col items-start gap-[0.5rem] justify-start">
          <h1 className="text-4xl font-bold select-none">FINLAND</h1>
          <p className="text-md t">Lorem ipsum, dolor sit amet consectetur dolor. Libero  nostrum id, Quibusdam.</p>
          <button>See More</button>
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
