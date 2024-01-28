import React, {useState} from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const Accordion = ({title, answer}) => {
    const [accordionOpen, setAccoordionOpen] = useState(false);
  return (
    <div className='py-10'>
        <button onClick={() => setAccoordionOpen(!accordionOpen)} className='flex items-center gap-5 w-full'>
            {accordionOpen ? <FaMinus className='text-medium-blue text-24'/> : <FaPlus className='text-medium-blue text-24'/>}
            {/* {accordionOpen ? <span className='text-pumpkin text-24 font-semibold'>Yüksək standartlar</span> : <span className='font-semibold text-pumpkin text-24'>Yüksək standartlar</span>} */}
            <span className='text-24 font-semibold'>{title}</span>
        </button>
        <div className={`grid overflow-hidden transition-all duration-500 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className='overflow-hidden text-18 xs:text-justify xxs:text-justify'>{answer}</div>
        </div>


    </div>
  )
}

export default Accordion 