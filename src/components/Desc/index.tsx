import Side1 from '../Side1'
import Side2 from '../Side2'
import Side3 from '../Side3'
const index = () => {
  return (
    <div className='bg-gray-400 p-12 grid xl:grid-cols-3 gap-10 lg:grid-cols-2 max-lg:px-[7rem] max-sm:px-3 overflow-x-hidden overflow-y-hidden max-shrink:text-xs'>
        {/* <Side1/>
        <Side2/>
        <Side3/> */}

        <div>
        <Side1/>
        </div>

        <div>
        <Side2/>
        </div>

        <div>
        <Side3/>
        </div>
    </div>
  )
}

export default index