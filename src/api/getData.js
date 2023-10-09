import { getUserInfos, getUserActivity, getUserAverage, getUserPerformance } from '../api/CallApi'

/**
 * @param {string} type
 * @param {number} id
 * @return {Array}
 */

const getData = async (type, id) => {
    let data = []

    switch (type) {
        case "users":
            data = await getUserInfos(id)
            break
        case "usersActivities":
            data = await getUserActivity(id)
            break
        case "usersAverage":
            data = await getUserAverage(id)
            break
        case "usersPerformance":
            data = await getUserPerformance(id)
            break
        default:
    }
    return data
}

export default getData