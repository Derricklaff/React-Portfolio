import './ProjectWrapper.css'
import Project from '../Projects/project'

export default function ProjectWrapper() {
    let projectInfo = [
        {
            id: "reactPortfolio",
            href: "https://github.com/Toacin/Portfolio-React",
            projectInfo: "I hope you enjoyed browsing through this portfolio as much as I enjoyed making it! This was made mostly fromm vanilla CSS save a couple components from Bootstrap, and a contact me form inspired from Materialize CSS. Click this box to view repository and learn more!",
            projectTitle: "This Portfolio!"
        },
        {
            id: "onlyDevs",
            href: "https://github.com/Derricklaff/Olympus-Project",
            projectInfo: "A simple and fun game to help coders review subjects!",
            projectTitle: "Olympus Project"
        },
        {
            id: "assignment2",
            href: "https://github.com/Derricklaff/README-Generator",
            projectInfo: "A simple node project to create a well structured readme file in a simple 'fill in the blank' style layout!",
            projectTitle: "Readme Generator"
        },
        {
            id: "assignment3",
            href: "https://github.com/bmaggiano/Rankedify",
            projectInfo: "An app designed to rank your top 5 favorite games and check out other users' top 5 as well!",
            projectTitle: "Rankedify"
        },
        {
            id: "assignment6",
            href: "https://github.com/Derricklaff/Weather-Dashboard",
            projectInfo: "Don't you hate planning a trip, just for all that to be ruined by adverse weather conditions? This weather planning dashboard will solve all of that. Simply enter a city, and get instant weather data for that day, as well as a five day forecast. Searched cities will be saved in history, so you can quickly toggle through multiple cities and find the city right for you.",
            projectTitle: "Weather Dashboard"
        },
    ]

    return (
        <div className="row justify-content-around align-items-stretch py-5 project-wrapper">
            {projectInfo.map((element) => (
                <Project key={element.id} projectInfo={element} />
            ))}
        </div>
    )
}

