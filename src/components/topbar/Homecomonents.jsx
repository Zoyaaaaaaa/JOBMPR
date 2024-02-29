import React from 'react'



import "bootstrap/dist/css/bootstrap.min.css" 
import NavTop from './NavTop'
import Search from './SearchBar'
import JobCard from '../../jobcard/jobcard'
// import JobDescription from './jobDetails'
function HomeComponent() {
  return (
    <div>
      {/* <Topbar/> */}
      <NavTop/>
      <Search></Search>
       <JobCard/>
       {/* <div className='home-component'>
           <PostStatus />
       </div> */}
       {/* <JobDescription/> */}
    </div>
  )
}

export default HomeComponent
