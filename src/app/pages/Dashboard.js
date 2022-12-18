import React from 'react'
import { Doughnut, Line } from 'react-chartjs-2'
import { datadoughnut, optionsdoughnut } from '../components/dashboard/Doughnutchart'
import { datalinechart, Linechartjs, optionslinechart } from '../components/dashboard/linechart'
import ProductVideo from '../components/dashboard/productVideo'
import Profiledashboard from '../components/dashboard/profiledashboard'
import Tabledashboard from '../components/dashboard/Tabledashboard'

const Dashboard = () => {
  return (
    <div>
     <div className='d-flex justify-content-between align-items-center my-3'>
      <h6 className='ts-black '>Overview</h6>
      <button className='btn  bg-violet text-white'>Add Funds 
        <span className='ms-4 rounded-circle px-2 py-1 position-relative plusparent'>
        <svg style={{verticalAlign:'sub'}} xmlns="http://www.w3.org/2000/svg" className='position-absolute plus' width="17" height="17" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
        </svg>
        </span>
      
      </button>
     </div>
      

      {/* for dashboard chart and profile */}
      <div className='row reverse-column'>
        <div className='col-sm-12 col-md-8'>
          <div className='row'>
            <div className='col-sm-12 col-md-12 col-lg-6 h-100 mb-4'>
              {/* <DashboardLineChart/> */}
                <div className='bg-white w-100  p-1 h-320  rounded position-relative'>
                <div className='h-90'>
                <div className='d-flex justify-content-between align-items-center mb-4 mt-2 fs-13'>
                  <p className='mt-2 ms-2 text-secondary mb-0'>Statistics</p>
 
                   <select className='border-0 bg-transparent outlinenoneonfocus text-secondary'>
                    <option defaultValue='Last 6 months'>Last 6 months</option>
          
                   </select>
                  </div>
                <Line className='w-100' height='160'  options={optionslinechart} data={datalinechart} />
                </div>
                <div className=' h-10 fs-12'>
                     <div className='d-flex justify-content-center'>
                     <p className='position-relative me-4'><span className='position-absolute' style={{fontSize:'57px',left:'-16px',top:'-50px',color:'#A3A0FB'}}>.</span>  <span className='text-secondary'>Product Sold</span></p>
                      <p className='mb-1 position-relative'><span className='position-absolute' style={{fontSize:'57px',left:'-16px',top:'-50px',color:'#80E2FF'}}>.</span> <span className='text-secondary'>Total Views</span></p>
                    

                     </div>
                     </div>
                  </div>            
            </div>
            <div className='col-sm-12 col-md-12 col-lg-6 mb-4 '>
              <div className='bg-white w-100 p-1 h-320 rounded fs-13'>
                <p className='mt-2 ms-2 text-secondary mb-0'>Sales Distribution</p>
                <div className='d-flex justify-content-center position-relative pb-4'>
              <Doughnut height='240' width='200' className="doughnut" options={optionsdoughnut} data={datadoughnut} />
                <div className='position-absolute text-center doughnutcharttext text-secondary'>
                  <p className='mb-0 '>230,900</p>
                  <p className='mb-0'>sales</p>
                  </div>
                  <div className='position-absolute bottom-0 fs-12'>
                     <div className='d-flex justify-content-center'>
                      <p className='mb-1 me-4 position-relative '><span className='position-absolute' style={{fontSize:'57px',left:'-16px',top:'-50px',color:'#80E2FF'}}>.</span>France <span className='text-secondary'>4260 sales</span></p>
                      <p className='mb-1 position-relative'><span className='position-absolute' style={{fontSize:'57px',left:'-16px',top:'-50px',color:'#F49FA8'}}>.</span>Italy <span className='text-secondary'>3970 sales</span></p>
                    

                     </div>
                     <div className='d-flex justify-content-center'>
                     <p className='me-4 position-relative'><span className='position-absolute' style={{fontSize:'57px',left:'-16px',top:'-50px',color:'#FFDF94'}}>.</span>Japan <span className='text-secondary'>4260 sales</span></p>
                      <p className='position-relative'><span className='position-absolute' style={{fontSize:'57px',left:'-16px',top:'-50px',color:'#A3A0FB'}}>.</span>Canada  <span className='text-secondary'>3970 sales</span></p>
                     </div>
                 
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=' mb-3'>
            <div className='bg-white rounded p-1'>
            <p className='mt-2 ms-2 text-secondary mb-4 fs-13'>Referrer</p>

            <Tabledashboard/>
            

            </div>
          </div>
        </div>
        <div className='col-sm-12 col-md-4 '>
            <Profiledashboard/>
            <div className='desktop-Pvid'>
              <ProductVideo/>
            </div>
         </div>

      </div>
      <div className='d-none desktop-mvid mt-2'>
      <ProductVideo/>

      </div>
    </div>
  )
}

export default Dashboard