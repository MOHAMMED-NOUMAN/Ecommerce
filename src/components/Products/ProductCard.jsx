import React from 'react'

const ProductCard = ({data}) => {
  return (
    <div className='mb-10  ml-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
        {/*Card section*/}
        {
            data.map((data)=>(
                <div 
                data-aos="fade-up" data-aos-delay={data.aosDelay} 
                className='group' key={data.id}>
                    <div className='relative'>
                         <img src={data.img} alt="" className='[h-180px] w-[260px] object-cover rounded-md' />
                         {/*hover button*/}
                         <div className='absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-sm duration-200'>
                            <button
                             className='cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 bg-primary text-white'
                            >Add to Cart</button>
                        </div>
                    </div>
                    <div className='leading-7'>
                        <h2 className='font-semibold'>{data.title}</h2>
                        <h2 className='font-bold'>${data.price}</h2>
                    </div>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default ProductCard
