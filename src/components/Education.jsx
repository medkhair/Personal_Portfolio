import Inner from "./Inner";

function Education({ person }) {


  return (
    <>
      <section className="education" id="education">
        <Inner className="section-header">
          <div>
            <h2 className="section-title">My Learning Journey</h2>
            <hr />
            <p>
                Here is a summary of my educational background and qualifications:
            </p>
          </div>
        </Inner>
        <Inner className="education-container">
          <div className="education-timeline">
            {person.education.map((edu, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-year">
                    {edu.startDate} - {edu.endDate}
                  </div>
                  <h3 className="timeline-title">{edu.degree}</h3>
                  <p className="timeline-institution">{edu.schoolName}</p>
                </div>
              </div>
            ))}
          </div>
        </Inner>
      </section>
    </>
  );
}

export default Education;