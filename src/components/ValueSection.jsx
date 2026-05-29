import Inner from "./Inner";

const values = [
    "Build scalable digital platforms",
    "Automate repetitive workflows",
    "Improve customer experience",
    "Create modern online presence",
    "Streamline internal operations",
    "Develop AI-powered business tools",
    "Increase operational efficiency",
    "Transform ideas into scalable products",
];

const COUNT = values.length;

function ValueSection() {
    return (
        <section id="value" className="value-section">
            <Inner className="section-header">
                <div>
                    <h2 className="section-title">How I Help Businesses</h2>
                    <hr />
                </div>
            </Inner>

            {/* Desktop — infinite circular orbit */}
            <div className="value-orbit-container">
                <div className="value-orbit-ring">
                    {values.map((item, index) => {
                        const angle = (index / COUNT) * 360;
                        return (
                            <div
                                key={index}
                                className="value-orbit-item"
                                style={{ '--item-angle': `${angle}deg` }}
                            >
                                <div className="value-orbit-item-inner">
                                    <span className="value-check">✓</span>
                                    <span className="value-text">{item}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Static center hub */}
                <div className="value-orbit-center">
                    <span className="value-orbit-center-label">How I<br />Help</span>
                </div>
            </div>

            {/* Mobile — simple stacked list */}
            <div className="value-list-mobile">
                {values.map((item, index) => (
                    <div key={index} className="value-item">
                        <span className="value-check">✓</span>
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ValueSection;
