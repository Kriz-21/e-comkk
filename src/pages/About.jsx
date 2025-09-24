import React from 'react'
import Title from '../components/Title'
import  {assets} from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2zl text-center pt-8 border-t'>
        <Title text1={'ABOUT'}  text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima totam saepe ab id. Fuga eum, culpa beatae recusandae non nihil. ipsum dolor, sit amet consectetur adipisicing elit. Voluptas consequuntur deserunt eum quam modi. Similique reprehenderit nemo quaerat blanditiis possimus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, labore!</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, ad! Lorem ipsum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id corporis tempora odio. dolor sit amet consectetur adipisicing elit. Aperiam velit sed tenetur.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, autem molestiae quia explicabo deserunt porro dolorum aliquid sed id. Assumenda fugit numquam dolorum officia aut!</p>
        </div>


      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flexflex-col gap-5 my-3 mx-2'>
            <p className='text-xl mb-5'>Quantity Assurance:</p>
            <p className='text-gray-600'> We must select and vet each produce Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad voluptatem natus, totam labore nesciunt at minus!</p>
          
          </div>

          <div className='border px-10 md:px-16 py-8 sm:py-20 flexflex-col gap-5 my-3 mx-2'>
            <p className='text-xl mb-5'>Convinence:</p>
            <p className='text-gray-600'> With our user-friendly interface and hassle Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad voluptatem natus, totam labore nesciunt at minus!</p>
          
          </div>

          <div className='border px-10 md:px-16 py-8 sm:py-20 flexflex-col gap-5 my-3 mx-2'>
            <p className='text-xl mb-5'>Exceptional Customer Serveices:</p>
            <p className='text-gray-600'> Our team of dedocated professeonals i shere to assist Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad voluptatem natus, totam labore nesciunt at minus!</p>
          
          </div>
      </div>
      <NewsLetterBox/>
      
      

      
    </div>
  )
}

export default About
