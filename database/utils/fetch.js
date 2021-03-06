let { getDB, setDB } = require('../../database')

async function setLastFetch(type, date) {
	let general = await getDB('general')
	eval(`general.lastFetch.${type} = ${date}`)
	await setDB('general', general)
}

async function getLastFetch(type) {
	// eslint-disable-next-line no-unused-vars
	let general = await getDB('general')
	let fetch = eval(`general.lastFetch.${type}`)
	if (fetch == null) {
		return 0
	} else {
		return fetch
	}
}

module.exports = {
	setLastFetch,
	getLastFetch
}