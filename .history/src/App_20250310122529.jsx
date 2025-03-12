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
          <div className="relative w-full h-full flex items-end justify-end">
            <img className="border-2 border-[#083838] w-[12rem] h-[15rem] rounded-xl z-[4]" src="/Iceland.jpeg" alt="" />
            <img className="border-2 border-[#083838] w-[12rem] h-[15rem] rounded-xl ml-[-5rem] z-[3]" src="/Iceland.jpeg" alt="" />
            <img className="border-2 border-[#083838] w-[12rem] h-[15rem] rounded-xl ml-[-5rem] z-[2]" src="/Iceland.jpeg" alt="" />
            <img className="border-2 border-[#083838] w-[12rem] h-[15rem] rounded-xl ml-[-5rem] z-[1]" src="/Iceland.jpeg" alt="" />
          </div>
        </div>
       </div>
       <div className="w-[100%] h-[10%]"></div>
       </div>
     </div>
    </>
  )
}

export default App
