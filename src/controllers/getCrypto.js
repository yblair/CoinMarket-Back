const axios = require('axios')
require('dotenv').config();
const url ='https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'


 const getCrypto = async() => {
  try{  const response = await axios.get(`${url}?CMC_PRO_API_KEY=${process.env.API_KEY}`
  ) 
  if(response){
    const data = response.data.data.slice(0 , 5)
    return data
  }
} catch(err) {
  return err
}
  }


module.exports = {getCrypto}