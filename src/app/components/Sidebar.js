import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = ({showsidebar}) => {
  return (
    <div className={` bg-indico h-100 sidebar hide ${showsidebar ?'show' : 'hide'}`}>
    <div className='pt-3 bg-indico-100 pb-2'>
     <h6 className='text-white fw-bold px-3 fs-20 letter-s-3'>ACME</h6>
    </div>
     <div className=" py-3  fw-normal">
            <NavLink className={`text-white text-decoration-none px-3 py-3 d-block sidebarlink`}    to={'acme-dashboard/home'}>
                <i className="bi bi-house me-3"></i><span className='align-middle fs-12'>Home</span>
           </NavLink>
           <NavLink className="text-white text-decoration-none px-3 py-3 d-block sidebarlink"   to={'acme-dashboard/'}>
                <i className="bi  bi-file-bar-graph me-3"></i><span className='align-middle fs-12'>Dashboard</span>
           </NavLink>
           <NavLink className="text-white text-decoration-none px-3 py-3 d-block sidebarlink"    to={'acme-dashboard/inbox'}>
                <i className="bi bi-envelope me-3"></i><span className='align-middle fs-12'>Inbox</span>
           </NavLink>
           <NavLink className="text-white text-decoration-none px-3 py-3 d-block sidebarlink"   to={'acme-dashboard/products'}>
                <i className="bi  bi-file-text me-3"></i><span className='align-middle fs-12'>Products</span>
           </NavLink>
           <NavLink className="text-white text-decoration-none px-3 py-3 d-block sidebarlink"   to={'acme-dashboard/admin'}>
                <i className="bi bi-gear me-3"></i><span className='align-middle fs-12'>Admin</span>
           </NavLink>
       </div>
    </div>
  )
}

export default Sidebar