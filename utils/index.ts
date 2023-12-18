
export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'fcacf29d42mshd2713384ca374e4p19e3c6jsnb1db951ad614',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }
      const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera&limit=30', {headers: headers, });

      const results = await response.json();

      return results;
}
