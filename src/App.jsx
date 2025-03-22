import Cursor from "./components/Cursor";
import Scrollspy from "react-scrollspy";
import FadeInSection from "./components/FadeInSection";
import React, { useState } from "react";

function App() {
    return (
        <div>
            <Cursor />
            <div className="min-h-screen max-w-screen-xl">
                <div className="flex w-screen justify-between bg-white">
                    <div className="sticky top-0 text-white bg-black pl-24 flex flex-col max-h-screen pt-24 min-w-[42vw]">
                        <h2>Hi, I'm</h2>
                        <h1 className="hoverable">ETHAN LITTLE,</h1>
                        <h5>CS at the University of Notre Dame</h5>

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

                    <div className="flexflex-col text-black px-24">
                        <section
                            id="about"
                            className="flex flex-col px-12 justify-center h-[90vh]"
                        >
                            <h5 className="leading-relaxed">
                                I'm a sophomore at the University of Notre Dame
                                working towards my Bachelor's in Computer
                                Science and Applied Mathematics with a minor in
                                Engineering Corporate Practice.
                            </h5>

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
                                className="flex flex-col gap-12 pt-24 h-[90vh]"
                            >
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-row gap-2">
                                        <h3>Self-Employed</h3>
                                        <h3>&middot;</h3>
                                        <h4>March 2018 &ndash; Present</h4>
                                    </div>

                                    <h5>Independent Game Developer</h5>
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
                                    <div className="flex flex-row gap-2">
                                        <h3>University of Notre Dame</h3>
                                        <h3>&middot;</h3>
                                        <h4>
                                            August 2024 &ndash; December 2024
                                        </h4>
                                    </div>
                                    <h5>
                                        Discrete Mathematics Teaching Assistant
                                    </h5>
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

                        <FadeInSection>
                            <section
                                id="projects"
                                className="flex flex-col gap-12 pt-24 mb-24"
                            >
                                <div className="flex flex-col gap-2">
                                    <h3>
                                        <strong>
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href="https://github.com/ejjlittle/ev-betting-model"
                                                className="hoverable"
                                            >
                                                NBA Betting Model &#8594;
                                            </a>
                                        </strong>
                                    </h3>
                                    <p>
                                        Constructed a full-stack web app that
                                        scrapes NBA player bets, logs the bets,
                                        and tracks results. Implemented an
                                        effective positive expected value
                                        betting strategy based on outlier lines
                                        across major sportsbooks.
                                    </p>
                                    <img
                                        src="../../EV-Betting-Model.png"
                                        alt="EV-Betting-Model"
                                        class="w-full rounded-2xl grayscale h-auto"
                                    />
                                    <div className="flex flex-wrap gap-2">
                                        <span className="skill">
                                            AWS Lambda
                                        </span>
                                        <span className="skill">
                                            API Gateway
                                        </span>
                                        <span className="skill">S3</span>
                                        <span className="skill">
                                            CloudFront
                                        </span>
                                        <span className="skill">MongoDB</span>
                                        <span className="skill">Python</span>
                                        <span className="skill">
                                            TypeScript
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h3>
                                        <strong>
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href="https://github.com/ejjlittle/ejjlittle.github.io"
                                                className="hoverable"
                                            >
                                                Personal Website &#8594;
                                            </a>
                                        </strong>
                                    </h3>
                                    <p>
                                        Built platform for visitors to learn
                                        more about my journey in tech, my work,
                                        and my interests. Features include a
                                        responsive layout, interactive elements,
                                        and easy navigation.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="skill">HTML</span>
                                        <span className="skill">React</span>
                                        <span className="skill">CSS</span>
                                    </div>
                                </div>
                            </section>
                        </FadeInSection>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
