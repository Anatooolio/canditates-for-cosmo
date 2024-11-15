candidates = [
	{ name: 'Василий Петров', age: 60, score: 98, serviceRecord: 36 },
	{ name: 'Екатерина Фёдорова', age: 35, score: 90, serviceRecord: 7 },
	{ name: 'Иван Иванов', age: 29, score: 67, serviceRecord: 2 },
	{ name: 'Зинаида Абрамова', age: 45, score: 78, serviceRecord: 14 },
	{ name: 'Виктор Олегов', age: 54, score: 85, serviceRecord: 21 },
]
// const a = candidates
// console.log(a);
// console.log(candidates);



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
  const cosmo = candidates
  const result = cosmo.sort((a, b) => a.age > b.age && a.score > b.score && a.serviceRecord > b.serviceRecord)
  return result
}

const getMeanAge = (candidates) => {
  const sortedCandidates = candidates
  const result = sortedCandidates.sort((a, b) => b.score - a.score)
  return result
}

// console.log(sortByScore(candidates));
const getMeanAgeReduce = () => {
	// посмотри, где используется эта функция и как
	// можно менять параметры и тело функции
}

const getNameOnly = () => {
	// посмотри, где используется эта функция и как
	// можно менять параметры и тело функции
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
