// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchesStats} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchesStats

  return (
    <div className="latest-match-main-container">
      <h1 className="latest-match-heading">Latest Matches</h1>
      <div className="latest-match-main-card">
        <div className="competing-team-image-container">
          <div className="competing-container">
            <p className="competing-team">{competingTeam}</p>
            <p className="match-date">{date}</p>
            <p className="venue">{venue}</p>
            <p className="match-result-latest">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="competing-team-logo"
          />
        </div>
        <div className="matches-details-container">
          <h1 className="first-innings-heading">First Innings</h1>
          <p className="first-innings">{firstInnings}</p>
          <h1 className="second-innings-heading">Second Innings</h1>
          <p className="second-innings">{secondInnings}</p>
          <h1 className="man-of-heading">Man Of The Match</h1>
          <p className="man-of-match">{manOfTheMatch}</p>
          <h1 className="umpires-heading">Umpires</h1>
          <p className="umpires">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
