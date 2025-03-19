import Cursor from "./components/Cursor";
import Scrollspy from "react-scrollspy";
import FadeInSection from "./components/FadeInSection";
import React, { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function App() {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div>
            <Cursor />
            <div className="min-h-screen max-w-screen-xl">
                <div className="flex w-screen justify-between bg-white">
                    <div className="sticky top-0 text-white bg-black pl-24 flex flex-col max-h-screen pt-24 min-w-[35vw]">
                        <h2>Hi, I'm</h2>
                        <h1 className="hoverable">ETHAN LITTLE,</h1>
                        <h3>CS at the University of Notre Dame</h3>

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
                    <div className="sticky top-0 overflow-hidden flex w-[30vw] h-screen justify-center items-center">
                        <DotLottieReact
                            src="https://lottie.host/54e1902b-f93f-4c29-8366-a50835f7ab81/u12nYXu8P3.lottie"
                            loop
                            autoplay
                            speed={1}
                            className="absolute w-[100vh] h-[100vh] grayscale rotate-270"
                        />
                    </div>

                    <div className="flex flex-col text-black px-24">
                        <section
                            id="about"
                            className="flex flex-col justify-center h-[90vh]"
                        >
                            <h3 className="leading-relaxed">
                                I'm a sophomore at the University of Notre Dame
                                working towards my Bachelor's in Computer
                                Science and Applied Mathematics with a minor in
                                Engineering Corporate Practice.
                            </h3>

                            <a
                                href="/path-to-your-file.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                 className="pt-8 hoverable hover:font-extrabold"
                            >
                                VIEW RÉSUMÉ &#8594;
                            </a>
                        </section>
                        <FadeInSection>
                            <section
                                id="experience"
                                className="flex flex-col gap-12"
                            >
                                <div className="flex flex-col gap-2 mt-24">
                                    <h3>
                                        <strong>Self-Employed</strong> &middot;
                                        March 2018 &ndash; Present
                                    </h3>
                                    <h4>
                                        <strong>
                                            Independent Game Developer
                                        </strong>
                                    </h4>
                                    <p>
                                        Developed and maintained multiple games,
                                        generating over $80,000 in revenue
                                        through in-game purchases with my{" "}
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
                                        surpassing over 10 million hours of
                                        gameplay.
                                        <br />
                                        <br />
                                        Utilized Lua for scripting, Blender for
                                        3D modeling, and Affinity Designer for
                                        UI/UX assets. Continuously implement
                                        updates to enhance user experience,
                                        optimize game performance, and drive
                                        engagement.
                                    </p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h3>
                                        <strong>
                                            University of Notre Dame
                                        </strong>{" "}
                                        &middot; August 2024 &ndash; December
                                        2024
                                    </h3>
                                    <h4>
                                        <strong>
                                            Discrete Mathematics Teaching
                                            Assistant
                                        </strong>
                                    </h4>
                                    <p>
                                        Conducted weekly office hours,
                                        facilitating constructive discussions on
                                        topics such as logic, set theory, graph
                                        theory, and algorithms. Graded all
                                        homework sets, quizzes, and exams in a
                                        timely manner. Maintained professional
                                        communication with both students and the
                                        professor, ensuring clear and respectful
                                        interactions.
                                    </p>
                                </div>
                            </section>
                        </FadeInSection>

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
