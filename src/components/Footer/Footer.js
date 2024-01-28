import React from 'react'
import logo from '../../assets/images/logo/neymanlogo.png';
import { SiMaildotru } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";




const Footer = () => {
  return (
    <>
      <footer className="lg:px-20 xl:px-180 2xl:px-180 md:px-20 sm:px-10 xs:px-10 xxs:px-10 pt-40">

        <div className="py-10 md:text-left">
          <div className="grid-1 grid gap-8 sm:grid-col-1 lg:grid-cols-4 xs:grid-col-1 xxs:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4">
            <div className="">
              <a href='#/'><img src={logo} alt='logo' className='h-100 ' /></a>
              <p className='text-18 text-dark-liver'>
                Xüsusilə biznes saytları üçün nəzərdə tutulmuş Eidan mövzusu ilə şirkətinizin onlayn çiçəklənməsini təmin edin.
              </p>
              <div className='flex text-22 gap-6 mt-7 transform duration-500'>
                  <FaTwitter className='hover:text-medium-blue cursor-pointer transform duration-500'/>
                  <FaFacebookF className='hover:text-medium-blue cursor-pointer transform duration-500'/>
                  <FaLinkedinIn className='hover:text-medium-blue cursor-pointer transform duration-500'/>
                  <FaInstagram className='hover:text-medium-blue cursor-pointer transform duration-500'/>
              </div>
            </div>
            <div className="">
              <h6 className="mb-4 font-bold text-24">Faydalı Linklər</h6>
              <p className="mb-4">
                <a href="#/" className="text-dark-liver text-18">Layihələrimiz</a>
              </p>
              <p className="mb-4">
                <a href="#/" className="text-dark-liver text-18">Qiymətlər</a>
              </p>
              <p className="mb-4">
                <a href="#/" className="text-dark-liver text-18">Faq</a>
              </p>
            </div>
            <div className="">
              <h6 className="mb-4 font-bold text-24">Əlaqələr</h6>
              <p className="mb-4 text-dark-liver text-18">Yalova , Termal yolu Akköy.</p>
              <p className="mb-4 text-dark-liver text-18"><a href='tel:+994 50 631 07 22'>+994 50 631 07 22</a></p>
              <p className="mb-4 text-dark-liver text-18"><a href='mailto:info.neyman.e.t@gmail.com'>info.neyman.e.t@gmail.com</a></p>
            </div>
            <div>
              <h6 className="mb-4 font-bold text-24">Abunə ol</h6>
              <div className='flex relative items-center mb-4'>
                <input type="text" id="first_name" class="border-0 border-black border-b-2 text-dark-liver focus:border-medium-blue outline-none block w-full pt-0 pb-10 transition-all duration-300" placeholder="Xəbərlər və Yeniliklər alın" required />
                <SiMaildotru className='absolute right-0'/>
              </div>
                <p className='text-dark-liver text-18'>Bizim təcrübəmiz, eləcə də veb dizayna olan həvəsimiz bizi digər agentliklərdən fərqləndirir.</p>
            </div>
          </div>
        </div>

      </footer>
        <div className="bg-black p-6">
          <div className='lg:px-20 xl:px-180 2xl:px-180 md:px-20 sm:px-10 xs:px-10 xxs:px-10 text-white sm:text-center xs:text-center xxs:text-center flex sm:flex-col xs:flex-col xxs:flex-col justify-between'>
            <p className='font-semibold leading-normal'>Sudan Digital Studio 2024 © Copyright by <a href='#/' className='hover:text-medium-blue cursor-pointer transform duration-500'>Delicate Themes</a></p>
            <div><a href='#/' className='font-semibold leading-normal hover:text-medium-blue cursor-pointer transform duration-500'>Terms of Use</a> | <a href='#/' className='font-semibold leading-normal hover:text-medium-blue cursor-pointer transform duration-500' >Privacy Policy</a></div>
          </div>
        </div>
    </>

  )
}

export default Footer