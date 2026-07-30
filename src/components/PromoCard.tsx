import Image from 'next/image'
import patterns from '../../public/Patterns.png'

const PromoCard = () => {
  return (
       <div className="xl:mt-auto mt-10">
          <div className="py-6 px-4 rounded-xl bg-gray-1">
            <div className="relative">
              <div className="absolute -right-3 -top-6"><Image src={patterns} alt="patternlogo" width={55} height={65} /></div>
              <div>
                <div className="flex flex-col xl:gap-3 gap-2">
                  <h5 className="font-bold xl:text-[24px] text-lg text-gray-3 leading-7">Loving <br className='xl:block hidden'/> ShipNow <br /> Free?</h5>
                  <p className="text-[12px] xl:block hidden text-gray-4 leading-4">Go Pro to access priority support, real-time tracking, and full analytics.</p>
                </div>
               <div className="flex items-center justify-center mt-3"> 
                <button className="xl:py-3 py-2 xl:px-[18px] px-[12px] text-[16px] rounded-lg bg-gray-3 text-gray-1">Go Pro Today</button>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default PromoCard
