import React from 'react'

const ProductVideo = () => {
  return (
    
    <div className='bg-white p-3 rounded '>
            <div className='d-flex justify-content-between mb-3 '>
                    <p className='text-gray mb-0'> Product Video</p>
                    <i class="bi bi-three-dots-vertical text-gray"></i>
                </div>
                <div>
                    <video controls autoPlay className='w-100'  height="220">
                       <source src="assets/video/mitsogo productVideo.mp4"/>
                    </video>
                    
                </div>
                {/* <div>
                
                <iframe className='w-100'  height="220"  src="https://www.youtube.com/embed/uB7iu-5Jlc4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div> */}

    </div>
  )
}

export default ProductVideo