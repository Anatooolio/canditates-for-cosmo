candidates = [
	{ name: 'Василий Петров', age: 60, score: 98, serviceRecord: 36 },
	{ name: 'Екатерина Фёдорова', age: 35, score: 90, serviceRecord: 7 },
	{ name: 'Иван Иванов', age: 29, score: 67, serviceRecord: 2 },
	{ name: 'Зинаида Абрамова', age: 45, score: 78, serviceRecord: 14 },
	{ name: 'Виктор Олегов', age: 54, score: 85, serviceRecord: 21 },
]


const filterByAge = (candidates) => {
	const result = candidates.age < 50
	return result
}


const filterByScore = (candidates) => {
	const result = candidates.score > 75
  return result
}


const filterByServiceRecord = (candidates) => {
  const result = candidates.serviceRecord > 5
  return result
}

const sortByScore = (candidates) => {
  return candidates.toSorted((a, b) => b.score - a.score)
}

const getMeanAge = (candidates) => {
  let res = Number()
	candidates.forEach(elem => {
		res += elem.age
		return res
	})
	let MeanAge = res / candidates.length
  return MeanAge
}


const getMeanAgeReduce = (candidates) => {
	const initialValue = 0
  const result = candidates.reduce((accumulator, currentValue) => accumulator + currentValue.age, initialValue)
  return result / candidates.length
}

const getNameOnly = (candidates) => {
	return candidates.name
}

module.exports = {
	filterByAge,
	filterByScore,
	filterByServiceRecord,
	sortByScore,
	getMeanAge,
	getMeanAgeReduce,
	getNameOnly,
}
