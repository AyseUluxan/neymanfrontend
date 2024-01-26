import React from 'react'
import heroimg from '../../assets/images/home-hero/hader-shap-1.png'
import heroimg2 from '../../assets/images/home-hero/hader-shap-2.png'
import sectionshap from '../../assets/images/svg/section-shap.svg'
import ourbenefits from '../../assets/images/home-page-img/our-benefits-img-shap.png'
import Accordion from '../../components/Accordion/Accordion'



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
      <section className='lg:px-50 xl:px-200 2xl:px-200 md:px-50 sm:px-20 xs:px-20 xxs:px-20'>

        <div className='grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 pt-30 md:gap-3'>
          <div className='space-y-6'>
            <img src={heroimg} alt='heroimg' />
          </div>
          <div className='sm:pt-30 xs:pt-30 xxs:pt-30 flex items-center'>
            <p className='text-20 sm:text-center xs:text-center xs:text-17 xxs:text-center xxs:text-17'>Məqsədimiz ehtiyaclarınıza uyğun həll yolu ilə uzaqlaşmanızı mümkün qədər asanlaşdırmaqdır.</p>
          </div>

        </div>
        <h3 className='flex items-center justify-center text-105 sm:text-40 xs:text-40 xxs:text-40 md:text-73 text-center font-semibold pt-10'>Biz Unikal Vizual <br /> Həllərin Çatdırılması <br /> üzərində işləyirik</h3>
        <div className='grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 pt-30 hero md:gap-3'>
          <div className='sm:pt-30 xs:pt-30 xxs:pt-30 flex items-center'>
            <p className='text-20 sm:text-center xs:text-center xs:text-17 xxs:text-center xxs:text-17 space-y-6'>Müştərilərimizin hər biri ilə biz yaradıcı problemlərin həlli üçün dərin ehtiras yaradırıq - bunu çatdırırıq.</p>
          </div>
          <div className=''>
            <img src={heroimg2} alt='heroimg' />
          </div>

        </div>
        <div className='pt-40'>
          <img src={sectionshap} alt='section shap' />
        </div>
      </section>
      <section className='lg:px-50 xl:px-200 2xl:px-200 md:px-50 sm:px-20 xs:px-20 xxs:px-20 pt-40'>
        <div className='grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 pt-30 md:gap-3'>

          <div className='sm:pt-30 xs:pt-30 xxs:pt-30 sm:text-center xs:text-center xxs:text-center'>
            <p className='text-18'>FAYDALARIMIZ</p>
            <h4 className='text-48 font-semibold leading-tight sm:text-24 xs:text-24 xxs:text-24'>Biznesiniz üçün gəlir artımının kilidini açın</h4>
            <div className='p-4'>
              <Accordion />
            </div>
          </div>
          <div className='space-y-6'>
            <img src={ourbenefits} alt='heroimg' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home