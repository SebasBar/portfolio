import "./ProjectCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faWeebly } from "@fortawesome/free-brands-svg-icons";

export default function ProjectCard(props) {
  const { data } = props;
  return (
    <div className="projects">
      <div className="container">
        <div className="card">
          <div className="front">
            <div className="ptitle">{data.name}</div>
            <img src={data.pictures[0].picture} className="logo" />
            <div className="desc1">
              {data.description}
              {/* {data.clients != "" && (
                <ul>
                  <h3>Clients:</h3>
                  {data.clients.map((client) => {
                    return <li className="client">{client.name}</li>;
                  })}
                </ul>
              )} */}
            </div>
          </div>
          <div className="back">
            <div className="ptitle">{data.name}</div>
            {/* <div className="ptitle">
              Helen Parker
              <span>
                design <i>&</i> photography
              </span>
            </div> */}

            {data.description2 != "" && (
              <div className="desc2">{data.description2}</div>
            )}
            <br />
            <div className="desc-plinks">
              {data.description3 != "" && (
                <div className="desc3">{data.description3}</div>
              )}
              <div className="plinks">
                <a
                  className="github"
                  href="https://github.com/SebasBar"
                  target="_blank"
                ></a>
                {data.github_link != "" && (
                  <a className="github" href={data.github_link} target="_blank">
                    <FontAwesomeIcon icon={faGithub} size="3x" />
                    <p>Github Link</p>
                  </a>
                )}
                {data.deployed_link != "" && (
                  <a
                    className="deployed"
                    href={data.deployed_link}
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faWeebly} size="3x" />
                    <p>Website (download file)</p>
                  </a>
                )}
              </div>
            </div>
            <div className="pul">
              {data.tech_lang.map((lang) => {
                return (
                  <>
                    <div title={lang.description} className="pli">
                      {lang.name}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="card">
        <span className="s1">{data.name}</span>
        <span className="s2">card</span>
        <div className="thumbnail">
          <img className="left" src={data.pictures[0].picture} />
        </div>
        <div className="right">
          <div className="project-desc">
            Why you Need More Magnesium in Your Daily Diet
          </div>
          <div className="author">
            <img src="https://randomuser.me/api/portraits/men/95.jpg" />
            <div className="name">Igor MARTY</div>
          </div>
          <div className="separator"></div>
          <div className="text">
            Magnesium is one of the six essential macro-minerals that is
            required by the body for energy production and synthesis of protein
            and enzymes. It contributes to the development of bones and most
            importantly it is responsible for synthesis of your DNA and RNA. A
            new report that has appeared in theBritish Journal of Cancer, gives
            you another reason to add more magnesium to your diet...
          </div>
        </div>
        <h5>12</h5>
        <h6>JANUARY</h6>
        <ul>
          <li>
            <i className="fa fa-eye fa-2x"></i>
          </li>
          <li>
            <i className="fa fa-heart-o fa-2x"></i>
          </li>
          <li>
            <i className="fa fa-envelope-o fa-2x"></i>
          </li>
          <li>
            <i className="fa fa-share-alt fa-2x"></i>
          </li>
        </ul>
        <div className="fab">
          <i className="fa fa-arrow-down fa-3x"></i>
        </div>
      </div> */}

      {/* <div className="projects">
        <div className="name">{data.name}</div>
        <div className="description">Description:</div>
        <div className="data-description">{data.description}</div>
        {data.description2 != "" && (
          <div className="data-description">{data.description2}</div>
        )}
        {data.description3 != "" && (
          <div className="data-description">{data.description3}</div>
        )}

        {data.github_link != "" && (
          <a href={data.github_link} target="_blank">
            link to Github repo
          </a>
        )}
        {data.deployed_link != "" && (
          <a href={data.deployed_link} target="_blank">
            link to the website (or download file)
          </a>
        )}
        {data.pictures != "" && (
          <img className="picture" src={data.pictures[0].picture} />
        )}
        <ul>
          <div className="title">Languages:</div>
          {data.tech_lang.map((lang) => {
            return (
              <li className="languages">{`${lang.name}: ${lang.description}`}</li>
            );
          })}
        </ul>
        {data.clients != "" && (
          <ul>
            <h3>Clients:</h3>
            {data.clients.map((client) => {
              return (
                <li className="clients">{`${client.name}, ${client.industry}, ${client.description}`}</li>
              );
            })}
          </ul>
        )}
        {data.teamates != "" && (
          <ul>
            <h3>Colaborators:</h3>
            {data.teamates.map((teamate) => {
              return (
                <>
                  <li>
                    {`${teamate.name}:`}
                    <a
                      href={teamate.github_link}
                    >{` link to ${teamate.name} Github repo`}</a>
                  </li>
                  <br />
                </>
              );
            })}
          </ul>
        )}
      </div> */}
    </div>
  );
}
