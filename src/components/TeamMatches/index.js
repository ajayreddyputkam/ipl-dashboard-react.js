// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    recentMatchStats: [],
    latestMatchesStats: {},
    teamImageUrl: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamStats()
  }

  getTeamStats = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const formattedObjects = {
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      teamBannerUrl: data.team_banner_url,
    }
    console.log(formattedObjects.latestMatchDetails)
    const formattingRecentMatches = formattedObjects.recentMatches.map(
      eachObject => ({
        competingTeam: eachObject.competing_team,
        competingTeamLogo: eachObject.competing_team_logo,
        date: eachObject.date,
        firstInnings: eachObject.first_innings,
        id: eachObject.id,
        manOfTheMatch: eachObject.man_of_the_match,
        matchStatus: eachObject.match_status,
        result: eachObject.result,
        secondInnings: eachObject.second_innings,
        umpires: eachObject.umpires,
        venue: eachObject.venue,
      }),
    )
    const formattingLatestMatch = {
      competingTeam: formattedObjects.latestMatchDetails.competing_team,
      competingTeamLogo:
        formattedObjects.latestMatchDetails.competing_team_logo,
      date: formattedObjects.latestMatchDetails.date,
      firstInnings: formattedObjects.latestMatchDetails.first_innings,
      id: formattedObjects.latestMatchDetails.id,
      manOfTheMatch: formattedObjects.latestMatchDetails.man_of_the_match,
      matchStatus: formattedObjects.latestMatchDetails.match_status,
      result: formattedObjects.latestMatchDetails.result,
      secondInnings: formattedObjects.latestMatchDetails.second_innings,
      umpires: formattedObjects.latestMatchDetails.umpires,
      venue: formattedObjects.latestMatchDetails.venue,
    }
    this.setState({
      recentMatchStats: formattingRecentMatches,
      latestMatchesStats: formattingLatestMatch,
      teamImageUrl: formattedObjects.teamBannerUrl,
      isLoading: false,
    })
  }

  getBackgroundColor = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    let backGroundColor
    if (id === 'RCB') {
      backGroundColor = 'rcb-bg'
    } else if (id === 'KKR') {
      backGroundColor = 'kkr-bg'
    } else if (id === 'KXP') {
      backGroundColor = 'pk-bg'
    } else if (id === 'CSK') {
      backGroundColor = 'csk-bg'
    } else if (id === 'RR') {
      backGroundColor = 'rr-bg'
    } else if (id === 'MI') {
      backGroundColor = 'mi-bg'
    } else if (id === 'SH') {
      backGroundColor = 'srh-bg'
    } else {
      backGroundColor = 'dc-bg'
    }

    return backGroundColor
  }

  renderingTeamMatches = () => {
    const {recentMatchStats, latestMatchesStats, teamImageUrl} = this.state

    return (
      <div className="match-stats-main-container">
        <img
          src={teamImageUrl}
          alt="team banner"
          className="team-banner-image"
        />
        <LatestMatch
          latestMatchesStats={latestMatchesStats}
          key={latestMatchesStats.id}
        />
        <ul className="recent-matches-list-container">
          {recentMatchStats.map(eachObject => (
            <MatchCard eachObject={eachObject} key={eachObject.id} />
          ))}
        </ul>
      </div>
    )
  }

  loaderBeforeData = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    const interfaceBackground = this.getBackgroundColor()

    return (
      <div className={`matches-bg-container ${interfaceBackground}`}>
        {isLoading ? this.loaderBeforeData() : this.renderingTeamMatches()}
      </div>
    )
  }
}

export default TeamMatches
