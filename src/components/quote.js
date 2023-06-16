/* disablelinter */
import { useState, useEffect } from 'react';

function Quote() {
  const [quotes, setQuotes] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const baseKey = 'ysOJVCvWWakNcGjgvSFw+A==yraJGImqMU9vIlTP';

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=love&limit=1',
          {
            method: 'GET',
            headers: { 'X-Api-Key': baseKey },
          },
        );

        const response = await res.json();
        setQuotes(response);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (hasError) return <div>Something went wrong!</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="quotes">
      <h1>Quote</h1>
      <ul>
        {quotes.map((quote) => (
          <li key={quote.author}>{quote.quote}</li>
        ))}
      </ul>
    </div>
  );
}

export default Quote;
