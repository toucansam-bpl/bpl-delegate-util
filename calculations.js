import fetch from 'node-fetch'
import qs from 'querystring'

const api = 'http://13.56.163.57:9030/api'

async function getDelegates() {
  return new Promise(async (resolve, reject) => {
    try {
      //const requestUrl = `${api}/delegates`
      //const requestUrl = `${api}/transactions?recipientId=BPcXVsd6aMf3CtZEFMVKPkw3tzWoYFiVyK` //&limit=50&offset=0`
      const requestUrl = `${api}/blocks?limit=100&offset=500`
  
      const rawDelegateInfo = await fetch(requestUrl, {
        method: 'GET',
      })
      console.log(rawDelegateInfo)
      const delegateInfo = await rawDelegateInfo.json()
  
      if(delegateInfo.success) {
        // resolve(delegateInfo)
        resolve(delegateInfo.blocks.filter(b => b.totalFee > 0))
      } else {
        console.log(delegateInfo)
        reject(new Error(`Delegate request did not complete successfully.`))
      }
    } catch(err) {
      reject(err)
    }
  })
}

async function run() {
  const delegates = await getDelegates()
  console.log(delegates)
}
run()
