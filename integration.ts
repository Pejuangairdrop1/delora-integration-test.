const API_URL = 'https://api.delora.build/v1';
const getQuote = async (params: {
  originChainId: number;
  destinationChainId: number;
  amount: string;
  originCurrency: string;
  destinationCurrency: string;
  tradeType: 'EXACT_INPUT' | 'EXACT_OUTPUT';
  senderAddress?: string;
  receiverAddress?: string;
}) => {
  const query = new URLSearchParams();
  
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) {
      query.append(key, String(value));
    }
  }
  
  const url = ${API_URL}/quotes?${query.toString()};
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(Failed to get quote: ${response.status} ${response.statusText});
  }
  
  return response.json();
};
