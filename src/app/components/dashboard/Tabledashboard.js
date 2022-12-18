import React from 'react'

const Tabledashboard = () => {
  return (
    <div className='table-responsive px-md-3'>
        
        <table className='table  fs-13 tabledashboard '>
            <thead className='thead-gray'>
                <tr>
                    <td>
                    Location
                    </td>
                    <td>Views</td>
                    <td>Sales</td>
                    <td>Conversion</td>
                    <td>Total</td>

                </tr>
            </thead>
            <tbody>
                {
                    [
                        {
                            l:"google.com",
                            v:'3746',
                            s:'752',
                            C:'43%',
                            t:'$19,291'

                        },
                        {
                            l:"facebook.com",
                            v:'8126',
                            s:'728',
                            C:'32%',
                            t:'$17,638'

                        },
                        {
                            l:"twitter.com",
                            v:'8836',
                            s:'694',
                            C:'28%',
                            t:'$16,218'

                        },
                        {
                            l:"Direct, email, IM",
                            v:'1173',
                            s:'645',
                            C:'24%',
                            t:'$14,421'

                        },
                        {
                            l:"linkedin.com",
                            v:'2739',
                            s:'539',
                            C:'20%',
                            t:'$12,370'

                        },
                        {
                            l:"instagram.com",
                            v:'2739',
                            s:'539',
                            C:'20%',
                            t:'$12,370'

                        }
                    ].map(data=>{
                        return(
                        <tr>
                            <td>{data.l}</td>
                            <td>{data.v}</td>
                            <td>{data.s}</td>
                            <td>{data.C}</td>
                            <td>{data.t}</td>
                        </tr>
                        )


                    })
                }
              <tr>
                <td colSpan='5'>
                <span className='fw-bold text-primaryBlue fs-13' eventKey="4">Show more</span>

                </td>
              </tr>
                
            </tbody>
        </table>
    </div>
  )
}

export default Tabledashboard