// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachObject} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = eachObject

  const statusColor = matchStatus === 'Won' ? 'win-color' : 'lost-color'

  return (
    <li className="list-item-match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="team-logo-match-card"
      />
      <p className="competing-team-name">{competingTeam}</p>
      <p className="match-result">{result}</p>
      <p className={`match-status ${statusColor}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
