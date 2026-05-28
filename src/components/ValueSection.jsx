import Inner from "./Inner";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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

function ValueSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section id="value" className="value-section">
            <Inner className="section-header">
                <div>
                    <h2 className="section-title">How I Help Businesses</h2>
                    <hr />
                </div>
            </Inner>
            <Inner className="value-list" ref={ref}>
                {values.map((item, index) => (
                    <motion.div
                        key={index}
                        className="value-item"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                    >
                        <span className="value-check">✓</span>
                        <span>{item}</span>
                    </motion.div>
                ))}
            </Inner>
        </section>
    );
}

export default ValueSection;
