import fetch from 'node-fetch';

export const handler = async (event) => {
  const { userID } = event.queryStringParameters;
  
  try {
    const response = await fetch(`https://api.webflow.com/collections/677be6a6067de99bde763cf7/items/${userID}?fields=added-licenses`, {
      headers: {
        'Authorization': `Bearer ${process.env.WEBFLOW_API_TOKEN}`,
        'accept-version': '1.0.0'
      }
    });
    
    const data = await response.json();
    
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': 'https://www.pescamap.com',
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return { 
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': 'https://www.pescamap.com',
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify({ error: 'Erro na requisição' }) 
    };
  }
};







