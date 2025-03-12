import './App.css'
import { TiMediaPause } from "react-icons/ti";
import { VscDebugStart } from "react-icons/vsc";
import { CgPlayTrackNext } from "react-icons/cg";
import { CgPlayTrackPrev } from "react-icons/cg";
import { useState, useEffect } from 'react';

function Main(){
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCountries = 7; 
  const [countriesData, setCountriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [click, setClick] = useState(false);

  useEffect(() => {
  const fetchCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,capital,population,languages,borders');
      const data = await response.json();

      const formattedData = data.map(country => ({
        name: country.name.common,
        flag: country.flags.png,
        capital: country.capital?.[0] || 'N/A',
        population: country.population,
        languages: Object.values(country.languages || {}),
        borders: country.borders || []
      }));

      setCountriesData(formattedData);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching countries:', error);
      setIsLoading(false);
    }
  };

  fetchCountries();
}, []);

if (isLoading) {
  return (
    <div className="w-full h-screen flex items-center justify-center text-2xl font-bold">
      Loading countries...
    </div>
  );
}
 
function show(){
  if(click){
    setClick(false)
  }else{
    setClick(true)
  }
  console.log(click)

}

  return(
    <>
     <div className="relative w-[100%] flex items-center justify-center h-screen">
       <img className='absolute w-[100%] h-screen overflow-hidden' src={countriesData[currentIndex]?.flag} alt={countriesData[currentIndex]?.name} />
       <div className="absolute w-[100%] h-screen flex flex-col items-center justify-center">
       <div className=" w-[100%] h-[90%] flex flex-row items-center justify-center">
        <div className="w-[40%] h-[100%] flex items-center justify-center ">
         <div className="w-[65%] h-auto flex flex-col items-start gap-[0.8rem] justify-start">
          <h1 className="text-5xl font-bold select-none drop-shadow-[1px_5px_5px_#0c6b4d] hover:text-[#0c6b4d]">{countriesData[currentIndex]?.name}</h1>
          <div className="w-auto h-auto">
          <p className="text-md font-semibold text-justify select-none hover:text-[#0c6b4d] drop-shadow-[1px_5px_5px_#0c6b4d]">Capital: {countriesData[currentIndex]?.capital}</p>
          <p className="text-md font-semibold text-justify select-none hover:text-[#0c6b4d] drop-shadow-[1px_5px_5px_#0c6b4d]">Population: {countriesData[currentIndex]?.population?.toLocaleString()}</p>
          <p className="text-md font-semibold text-justify select-none hover:text-[#0c6b4d] drop-shadow-[1px_5px_5px_#0c6b4d]">Languages: {countriesData[currentIndex]?.languages?.join(', ')}</p>
          </div>
          <button className="cursor-pointer rounded-sm w-[6rem] h-[2.5rem] font-semibold bg-[#0b9b43] hover:bg-[#0c6b4d] hover:transition delay-150 duration-300 ease-in-out">See More</button></div>
        </div>
        <div className="w-[60%] h-[100%]">
          <div className="w-full h-full flex flex-row items-end justify-end overflow-hidden">
            { countriesData.slice(currentIndex + 1, currentIndex + 1 + visibleCountries).map((countryItem, index) => (
             <img key={countryItem.name} className={`-mr-[7rem] hover:-translate-y-35 hover:translate-x-15 hover:drop-shadow-[0_15px_15px_#0c6b4d] hover:scale-160 z-[${visibleCountries - 1 - index}] hover:transition-all hover:duration-700 border-2 border-[#083838] w-[12rem] h-[15rem] rounded-2xl`} src={countryItem.flag} alt={countryItem.name} />
          ))}
          </div>
        </div>
       </div>
       <div className="w-[100%] h-[15%] flex items-center justify-center">
        <div className="w-auto h-auto flex items-center justify-center flex-row gap-[2rem]">
          <CgPlayTrackPrev onClick={
            ()=>{ 
             setCurrentIndex(prev => (prev - 1 + countriesData.length) % countriesData.length);
            }} 
          className="cursor-pointer bg-[#0c6b4d] hover:bg-[#0b9b43] hover:transition delay-150 duration-300 ease-in-out rounded-full w-[3rem] border-2 border-[#083838] hover:scale-180 shadow-emerald-950 shadow-xl h-[3rem]"/>
          
          {click ? <TiMediaPause onClick={() => show()} className="cursor-pointer p-[0.2rem] bg-[#0c6b4d] hover:bg-[#0b9b43] hover:transition delay-150 duration-300 ease-in-out rounded-full w-[3rem] border-2 border-[#083838] hover:scale-180 shadow-emerald-950 shadow-xl h-[3rem]"/> : <VscDebugStart onClick={() => show()} className={`${click? 'block' : 'hidden'} cursor-pointer p-[0.3rem] bg-[#0c6b4d] hover:bg-[#0b9b43] hover:transition delay-150 duration-300 ease-in-out rounded-full w-[3rem] border-2 border-[#083838] hover:scale-180 shadow-emerald-950 shadow-xl h-[3rem]`}/>}
          <CgPlayTrackNext onClick={
            () => {
              setCurrentIndex(prev => (prev + 1) % countriesData.length);
            }}
            className="cursor-pointer bg-[#0c6b4d] hover:bg-[#0b9b43] hover:transition delay-150 duration-300 ease-in-out rounded-full w-[3rem] border-2 border-[#083838] hover:scale-180 shadow-emerald-950 shadow-xl h-[3rem]"/>
        </div>
       </div>
       </div>
     </div>
    </>
  )
}

function App() {

  return (
    <>
     <Main/>
    </>
  )
}

export default App
