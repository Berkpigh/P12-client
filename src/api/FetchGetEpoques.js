const FetchGetEpoques = async (url) => {
  //const fullUrl = '/api/v1/' + url
  const fullUrl = 'https://p12-server-335r.onrender.com/' + url
  //console.log(url)
  try {
    const res = await fetch(fullUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const resdata = await res.json()
    console.log('resdata : ', resdata)
    return resdata.body
  } catch {
    console.log('getepoques')
  }
  /*   } catch (error) {
    console.log('error', error)
  } */
}
export default FetchGetEpoques
