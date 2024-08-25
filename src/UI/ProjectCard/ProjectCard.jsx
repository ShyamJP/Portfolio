import './ProjectCard.css'
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

const ProjectCard = (props) => {
    const tech_stack = props.tech.split(",");
    console.log(tech_stack);
    return (
        <>
            <div>
                <div className="project-card">
                    <h2 className='project-icon'><i className={props.url}></i></h2>
                    <div className="card-desc">
                        <h3>{props.title}</h3>
                        <p>{props.description}</p>
                        {
                            <div id="Tech-stack">
                                <ul>{tech_stack.map((tech) =>

                                    <li>{tech}</li>

                                )}
                                </ul>
                            </div>
                            // : " "
                        }
                        <div className='card-btn'>
                            {props.githuUrl !== "" ?
                                (<Button style={{ color: "white" }} variant="outlined" target="_blank" href={props.githuUrl} startIcon={<GitHubIcon />}>Github</Button>)
                                : ""
                            }
                            {props.websiteUrl !== "" ?
                                (<Button style={{ color: "white" }} variant="outlined" target="_blank" href={props.websiteUrl} startIcon={<LanguageIcon />}>Visit Website</Button>)
                                : ""
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProjectCard;