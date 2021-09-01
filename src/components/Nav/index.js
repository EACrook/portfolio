import React from 'react';

function Nav() {

    const projects = [
        {
            name: "Javascript",
            description: "Projects that use primarily Javascript."
        },
        {
            name: "React",
            description: "Projects using React."
        },
        {
            name: "Group Projects",
            description: "Projects completed as part of a group."
        }
    ];

    function projectSelected(name) {
        console.log(`${name} clicked`)
    }

    return (
        <header>
            <h2>
                <a href="/">
                    Emily Crook
                </a>
            </h2>
            <nav>
                <ul>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {projects.map((project) => (
                        <li
                            key={project.name}
                        >
                            <span onClick={() => projectSelected(project.name)} >
                                {project.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;