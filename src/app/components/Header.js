import { NavDropdown,Dropdown } from 'react-bootstrap';
import React, { useState } from 'react'

const Header = ({showsidebar,setshowsidebar}) => {
  // var [windowWidth,SetwindowWidth]=useState(window.innerWidth)
  let [mobilesearch,Setmobilesearch]=useState(false)
   
const togglesidebar=(e)=>{
    e.preventDefault();
    setshowsidebar(!showsidebar)

}
const beliconcustomtoggle=()=>{
  return(
    <div className='me-3 position-relative'>
    <i class="bi bi-bell fs-20 "></i>
    <span class="position-absolute  bellnotifybadge translate-middle p-1  border border-light rounded-circle">
  <span class="visually-hidden">New alerts</span>
  </span>
    </div>
  )

}
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <div
      ref={ref}
      onClick={e => {
        e.preventDefault();
        onClick(e);
      }}
    >
        <div className='me-3 position-relative'>
    <i class="bi bi-bell fs-20 ">{children}</i>
    <span class="position-absolute  bellnotifybadge translate-middle p-1  border border-light rounded-circle">
  <span class="visually-hidden">New alerts</span>
  </span>
    </div>
      
    </div>
  ));
const expandSearch=(e)=>{
  e.preventDefault()
  var windowwidth=window.innerWidth;
  if(windowwidth<=500){
    console.log(windowwidth)
    Setmobilesearch(!mobilesearch)

  }
}

  return (
    <div className={`pageheader bg-indico ${showsidebar && 'pageheaderwidth'}`}>
      <div className={`${showsidebar && 'br-1'}  bg-white w-100 p-2 fs-12 `}>
      <i onClick={(e)=>togglesidebar(e)} className="bi bi-justify-left fs-22 w-10 float-start cursor"></i>
     <div className='float-start w-50 mt-2 masterserchdiv'>
  {
    !mobilesearch&&
    <i className="bi bi-search ms-3 master-search-icon "onClick={(e)=>expandSearch(e)}></i>

  }
        <input onBlur={()=>Setmobilesearch(false)}  type='text' className={`border-0 search width-md-30 ms-1 align-baseline mastersearch ${mobilesearch ? 'mastersearchexpandmobile':'mastersearchmobile'} `} placeholder='Search transactions,invoices or help'/>
     </div>
      <div className='float-end d-flex'>
 
      <Dropdown  align="end" className="me-2 headerdropdown notify-dropdown">
        <Dropdown.Toggle className='removearrow customdropdowntoggle bg-transparent text-center px-2 py-0 border-0 rounded-circle'>
        <i class="bi bi-bell fs-20 z-index-1  text-gray"></i>
        <span class="position-absolute  bellnotifybadge translate-middle p-1  border border-light rounded-circle">
      <span class="visually-hidden">New alerts</span>
      </span>
        </Dropdown.Toggle>
        <Dropdown.Menu className="super-colors">
          <Dropdown.Item eventKey="1">
            <div className='row'>
              <div className='col-2'>
              <div className=' rounded-circle  overflow-hidden'>
                <img height='35' width='35' src='assets/images/profile-pic-02.jpg'/>
                </div>

              </div>
              <div className='col-10'>
                <div className='d-flex justify-content-between'>
                <h6 className='ts-black mb-1'>Bavid kames</h6>
                <span className='fs-13 text-muted'>2 min ago</span>

                </div>
                <p className='text-muted fs-13'>Assigned you on the call with Sara</p>

              </div>
            </div>
          </Dropdown.Item>
          <Dropdown.Item eventKey="2">
          <div className='row'>
              <div className='col-2'>
              <div className=' rounded-circle  overflow-hidden'>
                <img height='35' width='35' src='assets/images/profile-pic-06.jpg'/>
                </div>

              </div>
              <div className='col-10'>
                <div className='d-flex justify-content-between'>
                <h6 className='ts-black mb-1'>Alexa Marry</h6>
                <span className='fs-13 text-muted'>2 min ago</span>

                </div>
                <p className='text-muted fs-13'>
                Marked the task <span className='text-primaryBlue'>New UI</span> as done
                </p>

              </div>
            </div>
          </Dropdown.Item>
          <Dropdown.Item eventKey="3" >
          <div className='row'>
              <div className='col-2'>
              <div className=' rounded-circle  overflow-hidden'>
                <img height='35' width='35' src='assets/images/profile-pic-05.jpg'/>
                </div>

              </div>
              <div className='col-10'>
                <div className='d-flex justify-content-between'>
                <h6 className='ts-black mb-1'>Eva Maria</h6>
                <span className='fs-13 text-muted'>2 min ago</span>

                </div>
                <p className='text-muted fs-13'>Added a new comment on Sales task</p>

              </div>
            </div>        
              </Dropdown.Item>
          <Dropdown.Divider className='br-c-gray my-1' />
          <Dropdown.Item className='text-center text-primaryBlue fs-13' eventKey="4">Show more</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <NavDropdown className='mt-2 me-2 headerdropdown' title="John Doe" >
              <NavDropdown.Item className='text-gray' href="#"><i class="bi bi-person me-2 "></i> <span className='fs-0.9'>My Profile</span></NavDropdown.Item>
              <NavDropdown.Item className='text-gray' href="#">
              <i class="bi bi-receipt-cutoff me-2 text-gray"></i>  <span className='fs-0.9'>Billing</span>
              </NavDropdown.Item>
              <NavDropdown.Item className='text-gray' href="#">
              <i class="bi bi-box-arrow-right me-2 text-gray"></i>  <span className='fs-0.9'>Logout</span>
              </NavDropdown.Item>
            </NavDropdown>
           
            <span className=' rounded-circle ms-2  overflow-hidden'><img height='35' width='35' src='assets/images/profile-pic-04.jpg'/></span>
      </div>
      <span className='clear'></span>

      </div>
      
        </div>
  )
}

export default Header