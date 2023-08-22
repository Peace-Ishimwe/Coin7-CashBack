import logo from '../../assets/logo 1.png'
import brand1 from '../../assets/image 4.png'
import brand2 from '../../assets/image 6.png'
import brand3 from '../../assets/image 9.png'
import brand4 from '../../assets/image 21.png'
import brand5 from '../../assets/image 10.png'
import searchIcon from '../../assets/ri_search-2-line.png'
import group from '../../assets/Group 98.png'

const index = () => {
  return (
    <div className='flex flex-col gap-4 items-center relative'>
        <div className='w-full h-[300px] bg-gray-700/90 relative'>
           <img className='w-full h-full object-cover mix-blend-overlay img' src={group} alt="" />
        </div>
        

        <div className='absolute top-16 flex flex-col gap-2 items-center max-lg:top-2'>
        <div className='max-w-[1240px] mx-2 items-center flex gap-[10rem]' data-aos='fade-up'>
           <input type="text" name="seach" id="search" placeholder='search' className='py-4 px-7 max-res:w-[20rem] rounded-full w-[40rem] outline-none max-sm:w-[30rem]'/>
           <img src={searchIcon} alt="" className='absolute left-[90%] max-res:left-[77%]'/>
        </div>
        <div className='grid grid-cols-5 gap-8 max-md:grid-cols-4 max-res:gap-3 max-res:grid-cols-3' data-aos='fade-up'>
            <a href='https://www.aliexpress.com/' target="_blank" className='bg-white h-[100%] p-2 rounded-xl flex flex-col justify-center items-center hover:scale-x-110 hover:scale-y-125 hover:transition ease-in-out delay-150'>
               <img src={brand1} alt="" className='h-7'/>
               <p className=' text-sm'>Ali Express</p>
            </a>

            <a href='https://www.ebay.com/' target="_blank" className='bg-white h-[100%] p-2 rounded-xl flex flex-col justify-center items-center hover:scale-x-110 hover:scale-y-125 hover:transition ease-in-out delay-150'>
               <img src={brand2} alt="" className='h-7'/>
               <p className=' text-sm'>Ebay</p>
            </a>

            <a href='https://www.apple.com/' target="_blank" className='bg-white h-[100%] p-2 rounded-xl flex flex-col justify-center items-center px-6 hover:scale-x-110 hover:scale-y-125 hover:transition ease-in-out delay-150'>
               <img src={brand3} alt="" className='h-7'/>
               <p className=' text-sm'>Apple</p>
            </a>

            <a href='https://www.adidas.com/us' target="_blank" className='bg-white h-[100%] rounded-xl flex flex-col justify-center items-center py-2 px-4 hover:scale-x-110 hover:scale-y-125 hover:transition ease-in-out delay-150'>
               <img src={brand4} alt="" className='h-7'/>
               <p className=' text-sm'>Adidas</p>
            </a>

            <a href='https://www.alibaba.com/' target="_blank" className='bg-white h-[100%] p-2 rounded-xl flex flex-col justify-center items-center hover:scale-x-110 hover:scale-y-125 hover:transition ease-in-out delay-150'>
               <img src={brand5} alt="" className='h-7'/>
               <p className=' text-sm'>Alibaba</p>
            </a>
        </div>
        </div>

        <div className='absolute right-32 top-36 max-res:right-21 max-res:top-40' data-aos='fade-up'>
            <a href="/home">
               <img src={logo} alt="" className='select '/>
            </a>
        </div>
    </div>
  )
}

export default index