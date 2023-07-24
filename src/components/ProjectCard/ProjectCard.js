import "./ProjectCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faWeebly } from "@fortawesome/free-brands-svg-icons";

export default function ProjectCard(props) {
  const { data } = props;
  return (
    <div className="projects">
      <div className="container">
        <div className="card">
          {/* Card Front*/}
          <div className="front">
            {/* Title front */}
            <div className="ptitle">{data.name}</div>
            <div className="line1" />
            <div className="space1" />
            {/* Pictures */}
            {/* {console.log(typeof data.pictures[0].picture)} */}
            {data.pictures[0] !== undefined ? (
              <img alt="pic" src={data.pictures[0].picture} className="logo" />
            ) : (
              <p className="logo"> Not Found </p>
            )}
            <div className="space1" />
            <div className="line1" />

            {/*Front Description  */}
            <div className="desc1">{data.description}</div>
          </div>

          {/* Card Back */}
          <div className="back">
            {/* Title Back */}
            <div className="ptitleb">{data.name}</div>

            <div className="line2" />
            {/* Description Back 1 (desc2) */}
            {data.description2 && data.description2 !== "" && (
              <div className="desc2">{data.description2}</div>
            )}
            <br />

            {/* Description Back 2 (desc3) */}
            {data.description3 && data.description3 !== "" && (
              <div className="desc3">{data.description3}</div>
            )}

            <div className="space1" />

            <div className="line1" />

            <div className="plinks-clients">
              {/* Links  and clients */}
              <div className="plinks">
                <div className="link-client">Links:</div>

                {/* Github Link */}
                <div className="icons">
                  <a
                    className="github"
                    href="https://github.com/SebasBar"
                    target="_blank"
                  ></a>
                  {data.github_link && data.github_link != "" && (
                    <a
                      className="github"
                      href={data.github_link}
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        title="Website (or download file)"
                        icon={faGithub}
                        size="3x"
                      />
                    </a>
                  )}

                  {/* Deployed link */}
                  {data.deployed_link && data.deployed_link != "" && (
                    <a
                      className="deployed"
                      href={data.deployed_link}
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        title="Website (or download file)"
                        icon={faWeebly}
                        size="3x"
                      />
                      {/* <p>Website (or download file)</p> */}
                    </a>
                  )}
                </div>
              </div>
              {/* Clients */}
              {data.clients && data.clients != "" && (
                <ul>
                  <div className="link-client">Clients:</div>
                  {data.clients.map((client) => {
                    return <li className="client">{client.name}</li>;
                  })}
                </ul>
              )}
            </div>

            {/* teamates */}
            {data.teamates && data.teamates != "" && (
              <>
                <div className="line2" />
                <ul>
                  <div className="teamates">
                    <div className="col-title">Teamates:</div>
                    <div className="tnames">
                      {data.teamates.map((teamate) => {
                        return (
                          <>
                            <li className="team-git">
                              <a
                                className="team-name"
                                style={{ textDecoration: "none" }}
                                href={teamate.github_link}
                                target="_blank"
                              >
                                {`${teamate.name}:`}

                                <FontAwesomeIcon
                                  className="icon"
                                  title="Website (or download file)"
                                  icon={faGithub}
                                  size="1x"
                                />
                              </a>
                            </li>
                            <br />
                          </>
                        );
                      })}
                    </div>
                  </div>
                </ul>
              </>
            )}

            <div className="line1" />
            <div className="space1" />

            {/* Programing Languaes and Technologies used */}
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
