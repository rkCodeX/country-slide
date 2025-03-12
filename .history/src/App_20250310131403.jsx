import './App.css'

function App() {

  return (
    <>
     <div className="relative w-[100%] flex items-center justify-center h-screen">
       <img className='absolute w-[100%] h-screen overflow-hidden' src="/finland.jpeg" alt="finland" />
       <div className="absolute w-[100%] h-screen flex flex-col items-center justify-center">
       <div className=" w-[100%] h-[90%] flex flex-row items-center justify-center">
        <div className="w-[40%] h-[100%] flex items-center justify-center ">
         <div className="w-[70%] h-auto flex flex-col items-start gap-[0.8rem] justify-start">
          <h1 className="text-5xl font-bold select-none">FINLAND</h1>
          <p className="text-md font-semibold text-justify select-none">Lorem ipsum, dolor sit amet consectetur dolor. Libero  nostrum id, Quibusdam.</p>
          <button className="cursor-pointer rounded-sm w-[6rem] h-[2.5rem] font-semibold bg-[#0b9b43] hover:bg-[#0c6b4d] transition delay-150 duration-300 ease-in-out">See More</button>
         </div>
        </div>
        <div className="w-[60%] h-[100%]">
          <div className="w-full h-full flex flex-row items-end justify-end overflow-hidden">
            <img className="-mr-[7rem] hover:-translate-y-50 hover:drop-shadow-[0_15px_15px_#0c6b4d] z-[8] hover:transition-all hover:duration-700 border-2 border-[#083838] w-[12rem] h-[15rem] rounded-2xl" src="/Iceland.jpeg" alt="" />
            <img className="-mr-[7rem] hover:-translate-y-50 hover:drop-shadow-[0_15px_15px_#0c6b4d] z-[7] hover:transition-all hover:duration-700 border-2 border-[#083838] w-[12rem] h-[15rem] rounded-2xl" src="/norway.jpeg" alt="" />
            <img className="-mr-[7rem] hover:-translate-y-50 hover:drop-shadow-[0_15px_15px_#0c6b4d] z-[6] hover:transition-all hover:duration-700 border-2 border-[#083838] w-[12rem] h-[15rem] rounded-2xl" src="/sweden.jpeg" alt="" />
            <img className="-mr-[7rem] hover:-translate-y-50 hover:drop-shadow-[0_15px_15px_#0c6b4d] z-[5] hover:transition-all hover:duration-700 border-2 border-[#083838] w-[12rem] h-[15rem] rounded-2xl" src="/finland.jpeg" alt="" />
            <img className="-mr-[7rem] hover:-translate-y-50 hover:drop-shadow-[0_15px_15px_#0c6b4d] z-[4] hover:transition-all hover:duration-700 border-2 border-[#083838] w-[12rem] h-[15rem] rounded-2xl" src="/Iceland.jpeg" alt="" />
            <img className="-mr-[7rem] hover:-translate-y-50 hover:drop-shadow-[0_15px_15px_#0c6b4d] z-[3] hover:transition-all hover:duration-700 border-2 border-[#083838] w-[12rem] h-[15rem] rounded-2xl" src="/norway.jpeg" alt="" />
            <img className="-mr-[7rem] hover:-translate-y-50 hover:drop-shadow-[0_15px_15px_#0c6b4d] z-[2] hover:transition-all hover:duration-700 border-2 border-[#083838] w-[12rem] h-[15rem] rounded-2xl" src="/sweden.jpeg" alt="" />
            <img className="-mr-[7rem] hover:-translate-y-50 hover:drop-shadow-[0_15px_15px_#0c6b4d] z-[1] hover:transition-all hover:duration-700 border-2 border-[#083838] w-[12rem] h-[15rem] rounded-2xl" src="/finland.jpeg" alt="" />
          </div>
        </div>
       </div>
       <div className="w-[100%] h-[10%] flex items-center justify-center">
        <div className="w-auto h-auto flex items-center justify-center flex-row gap-[2rem]">
          <button className>next</button>
          <button className>S/S</button>
          <button className>prev</button>
        </div>
       </div>
       </div>
     </div>
    </>
  )
}

export default App
