import Chart from 'react-apexcharts'
import { useEffect, useState } from 'react'
import './App.css'
import { getMatches, IMatchesProps } from './services/matches';

function App() {
  const [teams, setTeams] = useState([])
  const [goals, setGoals] = useState([])

  const options = {
    chart: {
      id: 'apexchart-example',
    },
    title: {
      text: 'World Cup 2022: Goals per team'
    },
    xaxis: {
      categories: teams
    },
    series: [{
      name: 'series-1',
      data: goals
    }]
  }

  useEffect(() => {
    (
      () => {
        const data = getMatches()
        data.sort((a, b): any =>  a.goals-b.goals);
        const teams = data.map(item => item.team)
        const goals = data.map(item => item.goals)
        setTeams(teams)
        setGoals(goals)
      }
    )()
  }, [])


  return (
    <div className="App">
      <div className="card">
        <Chart options={options} series={options.series} type="bar" width={900} height={500} />
      </div>
    </div>
  )
}

export default App
