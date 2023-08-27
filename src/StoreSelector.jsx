import React from 'react'

function StoreSelector({ selectedRegion, regions }) {
  const selectedRegionData = regions.find(
    (region) => region.name === selectedRegion
  )
  const storeOptions = selectedRegionData
    ? selectedRegionData.stores.map((store) => store.name)
    : []

  return (
    <div>
      <h2>Select a Store:</h2>
      <select>
        <option value=''>Select a store</option>
        {storeOptions.map((store) => (
          <option key={store} value={store}>
            {store}
          </option>
        ))}
      </select>
    </div>
  )
}

export default StoreSelector
