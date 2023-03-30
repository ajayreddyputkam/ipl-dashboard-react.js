// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachObject} = props
  const {id, name, teamImageUrl} = eachObject

  return (
    <Link to={`/team-matches/${id}`} className="link-item">
      <li className="list-item">
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
