import React from 'react'
import heroimg from '../../assets/images/home-hero/hader-shap-1.png';
import heroimg2 from '../../assets/images/home-hero/hader-shap-2.png';
import sectionshap from '../../assets/images/svg/section-shap.svg';
import ourbenefits from '../../assets/images/home-page-img/our-benefits-img-shap.png';
import Accordion from '../../components/Accordion/Accordion';
import PortfolioSlider from '../../components/Slider/Portfoliocarousel';
import { FiArrowUpRight } from "react-icons/fi";
import blogimg_1 from '../../assets/images/home-page-img/blog-img-1.png';
import blogimg_2 from '../../assets/images/home-page-img/blog-img-2.png';
import blogimg_3 from '../../assets/images/home-page-img/blog-img-3.png';



const Home = () => {
  return (
    <>
      <div className='relative md:hidden sm:hidden xs:hidden xxs:hidden lg:hidden'>
        <div className='flex space-x-16 rotate-[-90deg] absolute -left-24  top-72'>
          <a href='#/' className='font-semibold shadow-lg hover:text-medium-blue transition-all duration-500'>INSTAGRAM</a>
          <a href='#/' className='font-semibold shadow-lg hover:text-medium-blue transition-all duration-500'>TWITTER</a>
          <a href='#/' className='font-semibold shadow-lg hover:text-medium-blue transition-all duration-500'>FACEBOOK</a>

        </div>
      </div>
      <section className='lg:px-20 xl:px-180 2xl:px-180 md:px-20 sm:px-10 xs:px-10 xxs:px-10'>

        <div className='grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 pt-30 md:gap-3'>
          <div className='space-y-6 sm:flex sm:justify-center xs:flex xs:justify-center xxs:flex xxs:justify-center'>
            <img src={heroimg} alt='heroimg' />
          </div>
          <div className='sm:pt-30 xs:pt-30 xxs:pt-30 flex items-center'>
            <p className='text-20 sm:text-center xs:text-center xs:text-17 xxs:text-center xxs:text-17'>Məqsədimiz ehtiyaclarınıza uyğun həll yolu ilə uzaqlaşmanızı mümkün qədər asanlaşdırmaqdır.</p>
          </div>

        </div>
        <h3 className='flex items-center justify-center text-105 sm:text-26 xs:text-26 xxs:text-26 md:text-73 text-center font-semibold pt-10'>Biz Unikal Vizual <br /> Həllərin Çatdırılması <br /> üzərində işləyirik</h3>
        <div className='grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 pt-10 hero md:gap-3'>
          <div className='sm:pt-10 xs:pt-10 xxs:pt-10 flex items-center sm:order-last xs:order-last xxs:order-last'>
            <p className='text-20 sm:text-center xs:text-center xs:text-17 xxs:text-center xxs:text-17 space-y-6 sm:pt-10 xs:pt-10 xxs:pt-10'>Müştərilərimizin hər biri ilə biz yaradıcı problemlərin həlli üçün dərin ehtiras yaradırıq - bunu çatdırırıq.</p>
          </div>
          <div className='sm:pt-10 xs:pt-10 xxs:pt-10 sm:flex sm:justify-center xs:flex xs:justify-center xxs:flex xxs:justify-center'>
            <img src={heroimg2} alt='heroimg'  />
          </div>

        </div>
        <div className='pt-40'>
          <img src={sectionshap} alt='section shap'/>
        </div>
      </section>
      <section className='lg:px-20 xl:px-180 2xl:px-180 md:px-20 sm:px-10 xs:px-10 xxs:px-10  pt-40'>
        <div className='grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 pt-30 md:gap-3'>

          <div className='sm:pt-30 xs:pt-30 xxs:pt-30 sm:text-center xs:text-center xxs:text-center'>
            <p className='text-18'>FAYDALARIMIZ</p>
            <h4 className='text-48 font-semibold leading-tight sm:text-24 xs:text-24 xxs:text-24'>Biznesiniz üçün gəlir artımının kilidini açın</h4>
            <div className='p-4'>
              <Accordion title='Yüksək standartlar' answer='Vitae aliquam in ultrices integer facilisi massa neque volutpat. Nam sollicitudin sagittis sollicitudin iaculis no feugiat nulla. Pellentesque bir pretium seçir.' />
              <Accordion title='İnsanlara diqqət yetirin' answer='Vitae aliquam in ultrices integer facilisi massa neque volutpat. Nam sollicitudin sagittis sollicitudin iaculis no feugiat nulla. Pellentesque bir pretium seçir.' />
              <Accordion title='Fərqli Düşüncə' answer='Vitae aliquam in ultrices integer facilisi massa neque volutpat. Nam sollicitudin sagittis sollicitudin iaculis no feugiat nulla. Pellentesque bir pretium seçir.' />
              <Accordion title='Biznes İnnovasiyası' answer='Vitae aliquam in ultrices integer facilisi massa neque volutpat. Nam sollicitudin sagittis sollicitudin iaculis no feugiat nulla. Pellentesque bir pretium seçir.' />
            </div>
          </div>
          <div className='space-y-6 md:pt-20 sm:pt-30 xs:pt-30 xxs:pt-30 md:flex md:justify-center sm:flex sm:justify-center xs:flex xs:justify-center xxs:flex xxs:justify-center'>
            <img src={ourbenefits} alt='heroimg' className='md:w-361 sm:w-361 xs:w-269 xxs:w-269' />
          </div>
        </div>
        <div className='pt-40'>
          <img src={sectionshap} alt='section shap' />
        </div>
      </section>
      <section className='lg:px-20 xl:px-180 2xl:px-180 md:px-20 sm:px-10 xs:px-10 xxs:px-10 pt-40'>
        <div className='text-center'>
          <h4 className='font-18'>SİZİN ÜÇÜN TƏKLİF EDİRİK</h4>
        </div>
        <div className='pt-20 flex flex-wrap items-center justify-center text-center text-48 font-semibold leading-tight gap-7 sm:text-24 xs:text-24 xxs:text-24 sm:gap-4 xs:gap-4 xxs:gap-4 sm:leading-10 xs:leading-10 xxs:leading-10 '>
          <a href='#/'><h4>Rəqəmsal Marketinq</h4></a> /
          <a href='#/'><h4>İstifadəçi təcrübəsi</h4></a> /
          <a href='#/'><h4>İnkişaf</h4></a> /
          <a href='#/'><h4>Brendləşmə</h4></a> /
          <a href='#/'><h4>Mobil Proqram</h4></a> /
          <a href='#/'><h4>İllüstrasiyalar</h4></a> /
          <a href='#/'><h4>Proqram Dizaynı</h4></a> /
          <a href='#/'><h4>Şəkil</h4></a>
        </div>
        <div className='pt-40'>
          <img src={sectionshap} alt='section shap' />
        </div>
      </section>
      <section id='portfolio'>
        <div className='lg:px-20 xl:px-180 2xl:px-180 md:px-20 sm:px-10 xs:px-10 xxs:px-10 pt-40'>
          <div className='sm:text-center xs:text-center xxs:text-center'>
            <h5 className='text-18'>SON LAYİHƏLƏRİMİZ</h5>
            <h3 className='text-48 leading-normal font-bold md:text-36 sm:text-22 xs:text-22 xxs:text-22'>Biz Sizin üçün Bərk Məhsullar və Xidmətlər Yaratmaq üçün Çalışırıq</h3>
          </div>
        </div>
        <div className='lg:pl-20 md:pl-20 xl:pl-250 2xl:pl-250 sm:px-20 xs:px-20 xxs:px-20'>
          <PortfolioSlider />
        </div>
        <div className='pt-40 flex justify-center'>
          <img src={sectionshap} alt='section shap' />
        </div>
      </section>
      <section className='lg:px-20 xl:px-180 2xl:px-180 md:px-20 sm:px-10 xs:px-10 xxs:px-10 pt-40 home-blog'>
        <div className='flex items-center justify-between sm:flex-col sm:items-start xs:flex-col xs:items-start xxs:flex-col xxs:items-start'>
          <div>
            <p className='text-18'>BLOQ</p>
            <h3 className='text-48 font-bold '>Ən Son Blogumuz Nədir</h3>
          </div>
          <div className='sm:pt-20 xs:pt-20 xxs:pt-20'>
            <a href='#/' className='border border-black py-18 px-58 flex items-center gap-3 text-16'>DAHA ÇOX BAXIN <FiArrowUpRight className='font-semibold text-24' /></a>
          </div>
        </div>
        <div className='flex justify-center pt-50'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-10'>
            <div className='blog-card '>
              <div className='border border-cultured p-30'>
                <p className='text-spanish-gray text-16 leading-4'>20 dekabr 2022-ci il | İNKİŞAF</p>
                <h3 className='text-24 font-bold leading-8 pt-10 cursor-pointer hover:text-medium-blue transition-all duration-500'>Siz hələ də rəqəmsal alətlərdən istifadə etmirsiniz?</h3>
              </div>
              <div>
                <img src={blogimg_1} alt='blogimg-1' className='cursor-pointer sm:w-full xs:w-full xxs:w-full' />
              </div>
              <div className='border border-cultured p-30 hover:text-medium-blue transition-all duration-500 blog-card-end'>
                <p className='flex items-center gap-2 cursor-pointer'>DAHA ÇOX OXU <FiArrowUpRight className='text-24  right-btn' /></p>
              </div>
            </div>

            <div className='blog-card '>
              <div className='border border-cultured p-30'>
                <p className='text-spanish-gray text-16 leading-4'>20 dekabr 2022-ci il | BİZNES</p>
                <h3 className='text-24 font-bold leading-8 pt-10 cursor-pointer hover:text-medium-blue transition-all duration-500'>Onlayn biznes üçün rəqəmsal marketinq</h3>
              </div>
              <div>
                <img src={blogimg_2} alt='blogimg-1' className='cursor-pointer sm:w-full xs:w-full xxs:w-full' />
              </div>
              <div className='border border-cultured p-30 hover:text-medium-blue transition-all duration-500 blog-card-end'>
                <p className='flex items-center gap-2 cursor-pointer'>DAHA ÇOX OXU <FiArrowUpRight className='text-24  right-btn' /></p>
              </div>
            </div>

            <div className='blog-card '>
              <div className='border border-cultured p-30'>
                <p className='text-spanish-gray text-16 leading-4'>20 dekabr 2022-ci il | DİZAYN</p>
                <h3 className='text-24 font-bold leading-8 pt-10 cursor-pointer hover:text-medium-blue transition-all duration-500'>Çətinlikləri Fürsətlərə çevirin</h3>
              </div>
              <div>
                <img src={blogimg_3} alt='blogimg-1' className='cursor-pointer sm:w-full xs:w-full xxs:w-full' />
              </div>
              <div className='border border-cultured p-30 hover:text-medium-blue transition-all duration-500 blog-card-end'>
                <p className='flex items-center gap-2 cursor-pointer'>DAHA ÇOX OXU <FiArrowUpRight className='text-24  right-btn' /></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-40 home-slide-section'>
        <div className='slide'>
          <ul className='flex gap-10 text-48 font-bold leading-normal home-slide'>
            <li><a href='mailto:info.neyman.e.t@gmail.com'>info.neyman.e.t@gmail.com</a></li>
            <li><a href='tel:+994 50 631 07 22'>+994 50 631 07 22</a></li>
            <li><a href='mailto:info.neyman.e.t@gmail.com'>info.neyman.e.t@gmail.com</a></li>
            <li><a href='tel:+994 50 631 07 22'>+994 50 631 07 22</a></li>
            <li><a href='mailto:info.neyman.e.t@gmail.com'>info.neyman.e.t@gmail.com</a></li>
            <li><a href='tel:+994 50 631 07 22'>+994 50 631 07 22</a></li>
          </ul>
        </div>

        <div className='slider pt-20'>
          <ul className='flex gap-10 text-48 font-bold leading-normal home-slider'>
            <li><a href='#/'>Rəqəmsal Marketinq</a></li>
            <li><a href='#/'>İstifadəçi Təcrübəsi Dizaynı</a></li>
            <li><a href='#/'>Yaradıcı Dizayn</a></li>
            <li><a href='#/'>İnkişaf</a></li>
            <li><a href='#/'>Rəqəmsal Marketinq</a></li>
            <li><a href='#/'>İstifadəçi Təcrübəsi Dizaynı</a></li>
            {/* <li><a href='#/'>Yaradıcı Dizayn</a></li>
            <li><a href='#/'>İnkişaf</a></li> */}
          </ul>
        </div>
        <hr/>
      </section>

    </>
  )
}

export default Home