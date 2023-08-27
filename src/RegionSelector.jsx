import React from 'react'

function RegionSelector({ selectedRegion, onRegionChange, regions }) {
  const handleRegionChange = (event) => {
    onRegionChange(event.target.value)
  }

  return (
    <div>
      <h2>Select a Region:</h2>
      <select value={selectedRegion} onChange={handleRegionChange}>
        <option value=''>Select a region</option>
        {regions.map((region) => (
          <option key={region.name} value={region.name}>
            {region.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default RegionSelector
