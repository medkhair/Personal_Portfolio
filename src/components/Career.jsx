import CompanyTasks from "./CompanyTasks";
import Inner from "./Inner";
import { useState } from "react";

function Career({person}) {

    const [selectedCompany, setSelectedCompany] = useState(person.careers[0]);

    function handleCompanyClick(career) {
        setSelectedCompany(career);
    }

    return (

        <>

            <section id="career" className="career-section" style={{backgroundImage: `url(../src/images/${selectedCompany.background})`}}>
                <Inner className="section-header">
                    <div>
                        <h2 className="section-title">Career Highlights</h2>
                        <hr />
                    </div>
                </Inner>
                <Inner className="career-details">
                    <div className="career-content">
                        <div className="companies">
                            {
                                person.careers.map((career, index) => (
                                    <div >
                                        <button key={index} className={`company ${career.id === selectedCompany.id ? 'active' : ''}`} onClick={()=>{handleCompanyClick(career)}} > {career.position} </button>
                                    </div>
                                ))
                            }
                        </div>
                        <div className={`company-logo`}>
                            <div  className={`logo-container ${selectedCompany.id === 3 ? 'oriental' : ''}`} >
                                <img src={`../src/images/${selectedCompany.logo}`} alt={selectedCompany.company} />
                            </div>
                        </div>
                        <div className="companie-tasks">
                            <CompanyTasks company={selectedCompany} />
                        </div>
                    </div>
                </Inner>
            </section>

        </>

    );

}

export default Career;