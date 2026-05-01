import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My journey <span>&</span>
          <br /> milestones
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BCA — Year 3</h4>
                <h5>Allenhouse Group of Institution</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Diving deep into Data Science and NLP — building models, exploring
              datasets, and understanding how machines learn from language.
              Turning academic curiosity into real, working projects.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Building Projects</h4>
                <h5>Self-built · Personal</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Started building real projects from scratch — web apps, mini tools,
              and experiments that pushed me beyond tutorials. Broke things,
              fixed them, and learned more from failure than any course could teach.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Started Learning to Code</h4>
                <h5>From free resources</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Picked up HTML, CSS, JavaScript, and Python using free resources —
              YouTube, docs, and sheer curiosity. Wrote my first lines of code
              and never looked back.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>12th · Maths/Science</h4>
                <h5>G.P.M.S.V.M Inter College</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed higher secondary education and discovered a passion for
              computers and technology — the foundation that led me toward a
              career in software development.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;