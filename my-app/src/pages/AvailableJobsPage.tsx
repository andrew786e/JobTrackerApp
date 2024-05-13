import { JobListTable } from "../components/JobListTable"
import "./AvailableJobsPage.css"
export const AvailableJobsPage = () =>{
    return (
        <div>
            <div className="selectedJobs"> Google </div>
            <div className="alignTable">
                <JobListTable/>
            </div>
        </div>
    )
}