import { Link } from "react-router-dom"

function AmountStats({}){
    return(
        <div className="stats bg-base-100 shadow">
            <div className="stat">
                <div className="stat-title">Total Selection in TOP MNCs</div>
                <div className="stat-value">150+</div>
                <div className="stat-actions">
                    <Link to='/https://training.desiqna.in/achiver'><button className="btn btn-xs">View Users</button> </Link>
                </div>
            </div>
            
            <div className="stat">
                <div className="stat-title">Recent Month Selection</div>
                <div className="stat-value">12+</div>
                <div className="stat-actions">
                    <button className="btn btn-xs">View Members</button> 
                </div>
            </div>
        </div>
    )
}

export default AmountStats