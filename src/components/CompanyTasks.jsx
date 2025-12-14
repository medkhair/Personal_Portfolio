import { formatDateToFrench } from "../services/functions";


function CompanyTasks({company}) {

    console.log(company.startDate.getFullYear());

    return (

        <div className="company-tasks-details">

            <h3 className="company-position">{company.position}</h3>
            <p className="company-duration"> from {formatDateToFrench(company.startDate)}   { company.endDate ? "to" + formatDateToFrench(company.endDate) : "until now" }</p>
            <ul className="tasks-list">
                {company.tasks.map((task, index) => (
                    <li key={index} className="task-item">{task}</li>
                ))}
            </ul>
        
        </div>

    )
}

export default CompanyTasks;