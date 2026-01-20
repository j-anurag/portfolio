import { motion } from 'framer-motion';

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-category"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3>{skill.Category}</h3>
              <div className="skill-tags">
                {skill.Skills.split(',').map((s, i) => (
                  <span key={i} className="skill-tag">{s.trim()}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .skill-category {
          background: var(--card-bg);
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .skill-category h3 {
          color: var(--accent-color);
          margin-bottom: 1.5rem;
          font-size: 1.25rem;
        }
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .skill-tag {
          background: rgba(255, 255, 255, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 25px;
          font-size: 0.9rem;
          color: var(--text-color);
          transition: all 0.3s ease;
        }
        .skill-tag:hover {
          background: var(--accent-color);
          color: white;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};

export default Skills;
