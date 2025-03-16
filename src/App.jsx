import Cursor from "./components/Cursor";
import skiingImage from "./assets/Skiing.jpg";
import Scrollspy from "react-scrollspy";

function App() {
    return (
        <div>
            <Cursor />
            <div className="min-h-screen max-w-screen-xl">
                <div className="flex w-screen justify-between bg-neutral-100">
                    <div className="sticky top-0 text-neutral-100 bg-neutral-950 pl-24 flex flex-col max-h-screen pt-24 min-w-[700px]">
                        <h2>Hi, I'm</h2>
                        <h1 className="hoverable">ETHAN LITTLE,</h1>
                        <h3>student at University of Notre Dame</h3>

                        <Scrollspy
                            items={["about", "experience", "projects"]}
                            currentClassName="active"
                            offset={-250}
                            className="flex flex-col gap-5 pt-20"
                        >
                            <a href="#about" className="hoverable nav-link">
                                ABOUT
                            </a>
                            <a
                                href="#experience"
                                className="hoverable nav-link"
                            >
                                EXPERIENCE
                            </a>
                            <a href="#projects" className="hoverable nav-link">
                                PROJECTS
                            </a>
                        </Scrollspy>
                    </div>

                    <div className="flex flex-col text-neutral-950 px-24">
                        <section
                            id="about"
                            className="flex flex-col gap-16 justify-center items-center h-[90vh]"
                        >
                            <img
                                src={skiingImage}
                                alt="Me skiing!"
                                className="w-[18vw] h-[18vw] rounded-full object-cover mx-auto"
                            />
                            <p className="text-xl">
                                I am currently a student at the University of
                                Notre Dame working towards my
                                <strong>
                                    {" "}
                                    Bachelor's in Computer Science & Applied
                                    Mathematics{" "}
                                </strong>{" "}
                                with a minor in Engineering Corporate Practice
                                with an expected graduation date of May 2027. I
                                am also{" "}
                                <strong>
                                    currently seeking a full-time internship for
                                    summer 2025
                                </strong>
                                .
                                <br />
                                <br />
                                Right now, I am interested in frontend
                                development and cybersecurity. I find
                                satisfaction in creating hight-quality, polished
                                products and never do anything halfway.
                                <br />
                                <br />
                                In my free time, I enjoy playing tennis, soccer,
                                and basketball, as well as video games. I also
                                have a passion for fishing, skiing and the
                                outdoors.
                            </p>
                        </section>

                        <section
                            id="experience"
                            className="flex flex-col gap-12"
                        >
                            <div className="flex flex-col gap-2 mt-24">
                                <h3>
                                    <strong>Video Game Developer</strong> |
                                    March 2018 - Present
                                </h3>
                                <p>
                                    At 13 years old, started developing video
                                    games on Roblox. Self-taught how to code
                                    with YouTube videos and tutorials utilizing
                                    Blender for 3D modeling, Affinity Designer
                                    for game icons and advertisements, and Lua
                                    for scripting. Games have grossed over
                                    $80,000 in revenue through in-game purchases
                                    with my{" "}
                                    <strong>
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="https://www.roblox.com/games/3596472165/SAVES-Slime-Tycoon"
                                            className="hoverable"
                                        >
                                            most popular game
                                        </a>
                                    </strong>{" "}
                                    recently achieving over 10 million total
                                    hours of gameplay. Continue to implement
                                    regular updates to enhance game quality and
                                    user experience, while using the revenue to
                                    help pay for my education.
                                </p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h3>
                                    <strong>Teaching Assistant</strong> | August
                                    2024 - December 2024
                                </h3>
                                <p>
                                    Selected by professor as 1 of
                                    4 undergraduate TAs for
                                    Fall 2024 Discrete Mathematics course.
                                    Conducted weekly office
                                    hours, facilitating constructive discussions
                                    on topics such as logic, set theory, graph
                                    theory, and algorithms. Graded all
                                    homework sets, quizzes, and exams in a
                                    timely manner. Maintained
                                    professional communication with both
                                    students and the professor, ensuring clear
                                    and respectful interactions.
                                </p>
                            </div>
                        </section>

                        <section
                            id="projects"
                            className="flex flex-col h-screen"
                        ></section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
