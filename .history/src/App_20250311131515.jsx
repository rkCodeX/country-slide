import './App.css'
import { TiMediaPause } from "react-icons/ti";
import { VscDebugStart } from "react-icons/vsc";
import { CgPlayTrackNext } from "react-icons/cg";
import { CgPlayTrackPrev } from "react-icons/cg";
import { useState } from 'react';

const country = [
  {
    name: 'Finland',
    flag: '/finland.jpeg',
    capital: 'Helsinki',
    population: 6.501e+7,
    languages: ['Finnish', 'Swedish', 'Norwegian'],
    borders: ['Russia', 'Estonia', 'Latvia', 'Lithuania', 'Poland', 'Slovakia', 'Slovenia', 'Ukraine']
  },{
    name: 'Iceland',
    flag: '/iceland.jpeg',
    capital: 'Reykjavik',
    population: 3.412e+6,
    languages: ['Icelandic'],
    borders: ['Denmark', 'Faroe Islands', 'Greenland', 'Iceland', 'Norway', 'Svalbard']
  },{
    name: 'Norway',
    flag: '/norway.jpeg',
    capital: 'Oslo',
    population: 5.387e+7,
    languages: ['Norwegian'],
    borders: ['Denmark', 'Finland', 'Iceland', 'Sweden']
  },{
    name: 'Sweden',
    flag: '/sweden.jpeg',
    capital: 'Stockholm',
    population: 1.019e+7,
    languages: ['Swedish'],
    borders: ['Finland', 'Norway', 'Denmark', 'Iceland']
  },{
    name: 'Russia',
    flag: '/russia.jpeg',
    capital: 'Moscow',
    population: 1.460e+8,
    languages: ['Russian'],
    borders: ['Belarus', 'Kazakhstan', 'North Korea', 'Ukraine', 'West Bank and Gaza Strip']
  },{
    name: 'Belarus',
    flag: '/belarus.jpeg',
    capital: 'Minsk',
    population: 9.546e+6,
    languages: ['Belarusian'],
    borders: ['Russia', 'Ukraine']
  },{
    name: 'Kazakhstan',
    flag: '/kazakhstan.jpeg',
    capital: 'Nur-Sultan',
    population: 1.877e+7,
    languages: ['Kazakh'],
    borders: ['Russia', 'North Korea', 'Uzbekistan']
  },{
    name: 'North Korea',
    flag: '/north-korea.jpeg',
    capital: 'Pyongyang',
    population: 2.566e+7,
    languages: ['Korean'],
    borders: ['South Korea', 'Russia', 'Kazakhstan']
  },{
    name: 'South Korea',
    flag: '/south-korea.jpeg',
    capital: 'Seoul',
    population: 5.192e+7,
    languages: ['Korean'],
    borders: ['North Korea', 'Japan', 'Korea, Democratic People\'s Republic of', 'Mongolia', 'Russia']
  },{
    name: 'Japan',
    flag: '/japan.jpeg',
    capital: 'Tokyo',
    population: 1.264e+8,
    languages: ['Japanese'],
    borders: ['China', 'Hong Kong SAR', 'Macau SAR', 'North Korea', 'South Korea', 'Taiwan', 'Mongolia']
  }
]

function Main(){
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCountries = 7; 
  return(
    <>
     <div className="relative w-[100%] flex items-center justify-center h-screen">
       <img className='absolute w-[100%] h-screen overflow-hidden' src={country[currentIndex].flag} alt={country[currentIndex].name} />
       <div className="absolute w-[100%] h-screen flex flex-col items-center justify-center">
       <div className=" w-[100%] h-[90%] flex flex-row items-center justify-center">
        <div className="w-[40%] h-[100%] flex items-center justify-center ">
         <div className="w-[65%] h-auto flex flex-col items-start gap-[0.8rem] justify-start">
          <h1 className="text-5xl font-bold select-none">{country[currentIndex].name}</h1>
          <p className="text-md font-semibold text-justify select-none">Lorem ipsum, dolor sit amet consectetur dolor. Libero  nostrum id, Quibusdam.</p>
          <button className="cursor-pointer rounded-sm w-[6rem] h-[2.5rem] font-semibold bg-[#0b9b43] hover:bg-[#0c6b4d] hover:transition delay-150 duration-300 ease-in-out">See More</button>
         </div>
        </div>
        <div className="w-[60%] h-[100%]">
          <div className="w-full h-full flex flex-row items-end justify-end overflow-hidden">
            { country.slice(currentIndex, currentIndex + visibleCountries).map((countryItem, index) => (
             <img key={countryItem.name} className={`-mr-[7rem] hover:-translate-y-30 hover:translate-x-15 hover:drop-shadow-[0_15px_15px_#0c6b4d] hover:scale-160 z-${visibleCountries - 1 - index} hover:transition-all hover:duration-700 border-2 border-[#083838] w-[12rem] h-[15rem] rounded-2xl`} src={countryItem.flag} alt={countryItem.name} />
          ))}
          </div>
        </div>
       </div>
       <div className="w-[100%] h-[15%] flex items-center justify-center">
        <div className="w-auto h-auto flex items-center justify-center flex-row gap-[2rem]">
          <CgPlayTrackPrev className="cursor-pointer bg-[#0c6b4d] hover:bg-[#0b9b43] hover:transition delay-150 duration-300 ease-in-out rounded-full w-[3rem] border-2 border-[#083838] hover:scale-180 shadow-emerald-950 shadow-xl h-[3rem]"/>
          <TiMediaPause className="cursor-pointer p-[0.2rem] bg-[#0c6b4d] hover:bg-[#0b9b43] hover:transition delay-150 duration-300 ease-in-out rounded-full w-[3rem] border-2 border-[#083838] hover:scale-180 shadow-emerald-950 shadow-xl h-[3rem]" />
          <VscDebugStart className="hidden cursor-pointer p-[0.3rem] bg-[#0c6b4d] hover:bg-[#0b9b43] hover:transition delay-150 duration-300 ease-in-out rounded-full w-[3rem] border-2 border-[#083838] hover:scale-180 shadow-emerald-950 shadow-xl h-[3rem]" />
          <CgPlayTrackNext className="cursor-pointer bg-[#0c6b4d] hover:bg-[#0b9b43] hover:transition delay-150 duration-300 ease-in-out rounded-full w-[3rem] border-2 border-[#083838] hover:scale-180 shadow-emerald-950 shadow-xl h-[3rem]"/>
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
