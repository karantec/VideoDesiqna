import HeartIcon  from '@heroicons/react/24/outline/HeartIcon'
import BoltIcon  from '@heroicons/react/24/outline/BoltIcon'
import { Link } from 'react-router-dom'


function PageStats({}){
    return(
        <div className="stats bg-base-100 shadow">
  
  <div className="stat">
    <div className="stat-figure invisible md:visible">
        <HeartIcon className='w-8 h-8'/>
    </div>
    <div className="stat-title">Recent Selection</div>
    <div className="stat-value"><a href="https://www.linkedin.com/posts/kumark1_coding-activity-7303039136121122816-H5l_?utm_source=share&utm_medium=member_desktop&rcm=ACoAADB1e44BA43UYjFx2BwtGFrtyTJFuENef5c">Check Who Got Selected</a></div>
    
  </div>
  
  
</div>
    )
}

export default PageStats