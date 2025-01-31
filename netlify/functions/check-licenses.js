import axios from 'axios';

export const handler = async (event) => {
  const { userID } = event.queryStringParameters;
  
  try {
    const response = await axios.get(`https://api.webflow.com/collections/677be6a6067de99bde763cf7/items/${userID}`, {
      headers: {
        'Authorization': `Bearer ${process.env.WEBFLOW_API_TOKEN}`,
        'accept-version': '1.0.0'
      },
      params: {
        fields: 'added-licenses'
      }
    });

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        error: 'Erro na requisição',
        details: error.message 
      })
    };
  }
};





