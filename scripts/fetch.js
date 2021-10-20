export function fetchPeople() {
  return fetch('https://swapi.dev/api/people')
    .then((res) => res.json())
    .catch((error) => console.log('catch - There was an error', error))
    .finally(console.log('API has been addressed'))
}

console.clear()
console.log('Start')
// Fetch works with Promise
// fetch is asynchronous

fetchPeople().then(onData)

function onData(data) {
  const people = data.results
  console.log(people)
}

function getName(person) {
  return person.name
}
