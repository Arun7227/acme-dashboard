import React from 'react'

const Profiledashboard = () => {
  return (
    <div className='bg-white mb-4 px-3 py-3 rounded'>
             <div>
                <div className='text-center'>
                    <img className='rounded-circle' height='100' width='100' src='assets/images/profile-pic-01.jpg'/>
                    <h6 className='ts-black mt-3 mb-1'>Nick Herasimenka</h6>
                    <p className='text-muted fs-14 mb-1'>United States</p>
                    <div><i className="bi bi-twitter me-3 text-gray social-icons"></i><i className="bi bi-facebook me-3 text-gray social-icons"></i><i className="bi bi-linkedin me-3 text-gray social-icons"></i><i className="bi bi-whatsapp me-3 text-gray social-icons"></i></div>
                </div>
                <div className='d-flex justify-content-between my-3'>
                    <p className='text-gray'>Our Users</p>
                    <i class="bi bi-three-dots-vertical text-gray"></i>
                </div>
                <div style={{color:'#4D4F5C'}}>
                <div className='row mb-3'>
              <div className='col-2 px-md-0 px-lg-1'>
              <div className='  overflow-hidden'>
                <img className='rounded-circle ' height='35' width='35' src='assets/images/profile-pic-03.jpg'/>
                </div>

              </div>
              <div className='col-10'>
             
             <h6 className='ts-black mb-1 text-start fs-14'>Drew James</h6>

           
            <div className='d-flex justify-content-between fs-12'>
            <p className='text-muted  mb-1'>United States</p>
            <span className=' text-muted'>Mobile: 6385844170</span>

            </div>
           </div>
            </div>  
            <div className='row mb-3'>
              <div className='col-2 px-md-0 px-lg-1'>
              <div className=' overflow-hidden'>
                <img className='rounded-circle ' height='35' width='35' src='assets/images/profile-pic-02.jpg'/>
                </div>

              </div>
              <div className='col-10'>
             
             <h6 className='ts-black mb-1 text-start fs-14'>Bavid Kames</h6>

           
            <div className='d-flex justify-content-between fs-12'>
            <p className='text-muted mb-1'>United States</p>
            <span className=' text-muted'>Mobile: 6385844170</span>

            </div>
           </div>
            </div>  
            <div className='row '>
              <div className='col-2 px-md-0 px-lg-1'>
              <div className='  overflow-hidden'>
                <img className='rounded-circle ' height='35' width='35' src='assets/images/profile-pic-04.jpg'/>
                </div>

              </div>
              <div className='col-10'>
             
                <h6 className='ts-black mb-1 text-start fs-14'>Lavid Emes</h6>

              
               <div className='d-flex justify-content-between fs-12'>
               <p className='text-muted  mb-1'>United States</p>
               <span className=' text-muted'>Mobile: 6385844170</span>

               </div>
              </div>
            </div>  
                </div>
             </div>
    </div>
  )
}

export default Profiledashboard