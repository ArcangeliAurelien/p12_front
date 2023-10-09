import { users, usersActivities, usersAverage, usersPerformance } from '../mock/UsersData'

const mocked_data = true;
const url = `http://localhost:3000/user/`

/**
 * Get user Infos
 * 
 * @param {number} id User id
 * @returns {object} Response
 */

const getUserInfos = async (id) => {
    if (mocked_data) {
        try {
            const response = users.find(user => user.id === parseInt(id))
            return { data: response }
        } catch (error) {
            console.log(error);
        }
    } else {
        return fetch(url + id).then((response) => response.json())
    }
}

/**
 * Get user activity
 * 
 * @param {number} id User id
 * @returns {object} Response
 */

const getUserActivity = async (id) => {
    if (mocked_data) {
        try {
            const response = usersActivities.find(user => user.userId === parseInt(id))
            return { data: response }
        } catch (error) {
            console.log(error);
        }
    } else {
        return fetch(url + id + "/activity").then((response) => response.json())
    }
}

/**
 * Get user average session
 * 
 * @param {number} id User id
 * @returns {object} Response
 */

const getUserAverage = async (id) => {
    if (mocked_data) {
        try {
            const response = usersAverage.find(user => user.userId === parseInt(id))
            return { data: response }
        } catch (error) {
            console.log(error);
        }
    } else {
        return fetch(url + id + "/average-sessions").then((response) => response.json())
    }
}

/**
 * Get user performance
 * 
 * @param {number} id User id
 * @returns {object} Response
 */

const getUserPerformance = async (id) => {
    if (mocked_data) {
        try {
            const response = usersPerformance.find(user => user.userId === parseInt(id))
            return { data: response }
        } catch (error) {
            console.log(error);
        }
    } else {
        return fetch(url + id + "/performance").then((response) => response.json())
    }
}

export { getUserInfos, getUserActivity, getUserAverage, getUserPerformance }