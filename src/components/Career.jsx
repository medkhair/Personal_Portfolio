import CompanyTasks from "./CompanyTasks";
import Inner from "./Inner";

function Career({person}) {


    return (

        <>

            <section id="career" className="career-section" style={{backgroundImage: `url(../src/images/${person.careers[0].background})`}}>
                <Inner className="section-header">
                    <div>
                        <h2 className="section-title">Career Highlights</h2>
                        <hr />
                    </div>
                </Inner>
                <Inner className="career-details">
                    <div className="career-content">
                        <div className="companies">
                            <button className="company active"> {person.careers[0].position} </button>
                            <button className="company"> {person.careers[1].position} </button>
                            <button className="company"> {person.careers[2].position} </button>
                        </div>
                        <div className="company-logo">
                            <img src={`../src/images/${person.careers[0].logo}`} alt={person.careers[0].company} />
                        </div>
                        <div className="companie-tasks">
                            <CompanyTasks company={person.careers[0]} />
                        </div>
                    </div>
                </Inner>
            </section>

        </>

    );

}

export default Career;