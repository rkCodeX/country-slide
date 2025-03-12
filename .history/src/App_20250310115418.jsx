import './App.css'

function App() {

  return (
    <>
     <div className="relative w-[100%] flex items-center justify-center h-screen">
       <img className='absolute w-[100%] h-screen overflow-hidden' src="/finland.jpeg" alt="finland" />
       <div className="absolute w-[100%] h-screen flex flex-col items-center justify-center">
       <div className="border-2 w-[100%] h-[90%] flex flex-row items-center justify-center">
        <div className="w-[50%] h-[100%] flex items-center justify-center border-2">
         <div className="w-[70%] h-auto flex flex-col items-start gap-[0.8rem] justify-start">
          <h1 className="text-5xl font-bold select-none">FINLAND</h1>
          <p className="text-md font-semibold text-justify select-none">Lorem ipsum, dolor sit amet consectetur dolor. Libero  nostrum id, Quibusdam.</p>
            <button
              class="w-[10rem] z-30 h-[4rem] bg-[#0b9b43] text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#083838] after:left-5 overflow-hidden after:bottom-0 after:translate-y-full  after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#083838;] hover:[text-shadow:2px_2px_2px_#0b9b43] text-2xl">
            See More</button>
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
