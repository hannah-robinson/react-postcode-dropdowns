import React, { useState, useEffect } from 'react'
import RegionSelector from './RegionSelector'
import StoreSelector from './StoreSelector'
import './App.css'

function App() {
  const [selectedRegion, setSelectedRegion] = useState('')
  const [regions, setRegions] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('API_KEY')
        const data = await response.json()
        setRegions(data.regions)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  const handleRegionChange = (region) => {
    setSelectedRegion(region)
  }

  return (
    <div>
      <h1>Store Selection App</h1>
      <RegionSelector
        selectedRegion={selectedRegion}
        onRegionChange={handleRegionChange}
        regions={regions}
      />
      <StoreSelector selectedRegion={selectedRegion} regions={regions} />
    </div>
  )
}

export default App
