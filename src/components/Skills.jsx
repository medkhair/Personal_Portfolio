import Inner from "./Inner";

function Skills({ person }) {
  // Group skills by category
  const skillsByCategory = person.skills.reduce((acc, skill) => {
    const categoryName = skill.category.name;
    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }
    acc[categoryName].push(skill);
    return acc;
  }, {});

  return (
    <>
      <section className="skills" id="skills">
        <Inner className="section-header">
          <div>
            <h2 className="section-title">Skills</h2>
            <hr />
            <p>Here are some of my technical skills and proficiencies:</p>
          </div>
        </Inner>
        <Inner className="skills-container">
          <div className="skills-grid">
            {Object.entries(skillsByCategory).map(
              ([category, categorySkills]) => (
                <div key={category} className="skill-category">
                  <h3 className="category-title">{category}</h3>
                  <div className="skills-list-items">
                    {categorySkills.map((skill, index) => (
                      <div key={index} className="skill-item">
                        <div className="skill-info">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage">
                            {skill.percentage}%
                          </span>
                        </div>
                        <div className="skill-bar">
                          <div
                            className="skill-progress"
                            style={{ width: `${skill.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </Inner>
      </section>
    </>
  );
}

export default Skills;