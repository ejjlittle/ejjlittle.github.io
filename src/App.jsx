import Cursor from "./components/Cursor";
import skiingImage from "./assets/Skiing.jpg";

function App() {
  return (
    <div>
      <Cursor />
      <div className="min-h-screen max-w-screen-xl">
        <div className="flex w-screen justify-between bg-neutral-100 gap-12">
          <div className="sticky top-0 text-neutral-100 bg-neutral-950 pl-24 flex flex-col max-h-screen pt-24 min-w-[700px]">
            <h2>Hi, I'm</h2>
            <h1 className="hoverable">ETHAN LITTLE,</h1>
            <h3>student at University of Notre Dame</h3>

            <nav className="flex flex-col gap-5 pt-20">
              <a href="#about" className="hoverable hover:font-extrabold">
                ABOUT
              </a>
              <a href="#experience" className="hoverable hover:font-extrabold">
                EXPERIENCE
              </a>
              <a href="#projects" className="hoverable hover:font-extrabold">
                PROJECTS
              </a>
            </nav>
          </div>

          <div className="flex flex-col text-neutral-950 pr-24">
            <section id="about" className="flex flex-col gap-12 justify-center items-center h-screen">
            <img
                src={skiingImage}
                alt="Me skiing!"
                className="w-[18vw] h-[18vw] rounded-full object-cover mx-auto"
              />
              <p className="text-xl">
                I am currently a student at the University of Notre Dame working
                towards my
                <strong>
                  {" "}
                  Bachelor's in Computer Science & Applied Mathematics{" "}
                </strong>{" "}
                with a minor in
                <strong> Engineering Corporate Practice</strong> with an
                expected graduation date of May 2027. I am interested in
                software development, frontend, and cybersecurity. I am also{" "}
                <strong>
                  {" "}
                  currently seeking a full-time internship for summer 2025
                </strong>
                .
                <br />
                <br />
                In my free time, I enjoy playing tennis, soccer, and basketball,
                as well as video games. I also have a passion for fishing,
                skiing and the outdoors.
              </p>
            </section>

            <section id="experience" className="flex pt-24 flex-col h-screen">
              <p>
                I am currently a student at the University of Notre Dame working
                towards my
                <strong>
                  {" "}
                  Bachelor's in Computer Science & Applied Mathematics{" "}
                </strong>{" "}
                with a minor in
                <strong> Engineering Corporate Practice</strong> with an
                expected graduation date of May 2027. I am interested in
                software development, frontend, and cybersecurity. I am also{" "}
                <strong>
                  {" "}
                  currently seeking a full-time internship for summer 2025
                </strong>
                .
                <br />
                <br />
                In my free time, I enjoy playing tennis, soccer, and basketball,
                as well as video games. I also have a passion for fishing as
                skiing!
              </p>
              
            </section>

            <section
              id="projects"
              className="flex pt-24 flex-col mb-24 h-screen"
            >
              <p>
                I am currently a student at the University of Notre Dame working
                towards my
                <strong>
                  {" "}
                  Bachelor's in Computer Science & Applied Mathematics{" "}
                </strong>{" "}
                with a minor in
                <strong> Engineering Corporate Practice</strong> with an
                expected graduation date of May 2027. I am interested in
                software development, frontend, and cybersecurity. I am also{" "}
                <strong>
                  {" "}
                  currently seeking a full-time internship for summer 2025
                </strong>
                .
                <br />
                <br />
                In my free time, I enjoy playing tennis, soccer, and basketball,
                as well as video games. I also have a passion for fishing as
                skiing!
              </p>
              <img
                src={skiingImage}
                alt="Me skiing!"
                className="w-[20vw] h-[20vw] rounded-full object-cover mx-auto mt-15"
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
