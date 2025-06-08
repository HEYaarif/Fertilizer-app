export function getData(data, parent, child) {
  function findRepeated(parent, child, results) {
    if (child in results[parent]) {
      results[parent][child] += 1
    } else {
      results[parent][child] = 1
    }
    return results
  }

  function extractStatistics(data, objKey) {
    let statistics = {}

    for (let key in data) {
      statistics[key] = []
      for (let childkey in data[key]) {
        let tempdata = { [objKey]: childkey, value: data[key][childkey] }
        statistics[key].push(tempdata)
      }
    }
    return statistics
  }

  let states = {}

  for (let obj of data) {
    if (!states.hasOwnProperty(obj[parent])) {
      states[obj[parent]] = {}
      states = findRepeated(obj[parent], obj[child], states)
    } else {
      states = findRepeated(obj[parent], obj[child], states)
    }
  }

  let finaldata = extractStatistics(states, child)

  return finaldata
}

export function capitalizeWords(string) {
  return string.replace(/(?:^|\s)\S/g, function (a) {
    return a.toUpperCase()
  })
}

// Updated version of getPieData with sort direction
export function getPieData(data, valueKey, sortOrder = "desc") {
  const aggregated = {}

  data.forEach((item) => {
    const value = parseFloat(item[valueKey])
    if (!isNaN(value)) {
      if (!aggregated[item.product]) {
        aggregated[item.product] = 0
      }
      aggregated[item.product] += value
    }
  })

  const sorted = Object.entries(aggregated)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) =>
      sortOrder === "asc" ? a.value - b.value : b.value - a.value
    )
    .slice(0, 5)

  return sorted
}
