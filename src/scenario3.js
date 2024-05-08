async function scenario3(scenarioUrl) {
	const url = scenarioUrl(3)
	const ctrl = new AbortController()
	const reqs = Array.from({length: 10000}).map(() => fetch(url, { signal: ctrl.signal }))
	const response = await Promise.race(reqs)
	ctrl.abort()
	return response.body
}