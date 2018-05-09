import fetch from 'node-fetch'
import qs from 'querystring'

const api = 'http://13.56.163.57:9030/api'


export default async function(url, params) {
  return new Promise(async (resolve, reject) => {
    try {
      const query = params ? `?${qs.stringify(params)}` : ''
      const requestUrl = `${api}/${url}${query}`
  
      const rawResponse = await fetch(requestUrl, {
        method: 'GET',
      })
      const response = await rawResponse.json()
  
      if(response.success) {
        resolve(response)
      } else {
        reject(new Error(`Request did not complete successfully.`))
      }
    } catch(err) {
      reject(err)
    }
  }) 
}

