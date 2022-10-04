import React, {useState, useEffect} from "react";
import { CardInfo, CardTitle } from "./CardComponents";
import { BackButton, BackButtonText, BorderCountries, CountryFlag, DetailContainer, InfoContainer } from "./DetailComponents";
import { useParams, useNavigate, Link } from "react-router-dom";

function CountryDetail(){

  let params = useParams();
  const countryUrl = `https://restcountries.com/v3.1/alpha/${params.name}`;

  const navigate = useNavigate();
  const [countryData, setCountryData] = useState(false);  
  const [currencie, setCurrencie] = useState([]);
  const [language, setLanguage] = useState([]);
  
  let currencies = [];
  let languages = [];
  
  const getCountryData = async () => {
    const response = await fetch(countryUrl);
    const countryData = await response.json();
    setCountryData(countryData);
    currencies.push(Object.values(countryData[0].currencies))
    languages.push(Object.values(countryData[0].languages))
    setCurrencie(currencies[0])
    setLanguage(languages[0])
  };

  useEffect( () => {
    getCountryData()
    }, [countryUrl]);

    
  return (
    <>
      {countryData ? 
      <DetailContainer>
        <BackButton onClick={() => navigate(-1)}>
          <BackButtonText>Back</BackButtonText>
        </BackButton>
        <InfoContainer>
          <CountryFlag><img src={countryData[0].flags.png} alt={countryData[0].name.official}></img></CountryFlag>
          <div className="desktop">
            <CardTitle>{countryData[0].name.official}</CardTitle>
            <div className="seccion">
              <CardInfo><strong>Population: </strong>{countryData[0].population.toLocaleString()}</CardInfo>
              <CardInfo><strong>Region: </strong>{countryData[0].region}</CardInfo>
              <CardInfo><strong>Sub Region: </strong>{countryData[0].subregion}</CardInfo>
              <CardInfo><strong>Capital: </strong>{countryData[0].capital}</CardInfo>
            </div>
            <div className="seccion">
              <CardInfo><strong>Top Level Domain: </strong>{countryData[0].tld}</CardInfo>
              <CardInfo><strong>Currencies: </strong>{currencie.map(e => {return (<span key={e.name}> ({e.symbol})  {e.name} - </span>)})}</CardInfo>
              <CardInfo><strong>Languages: </strong>{language.map(e => {return (<span key={e}> {e}. </span>)})}</CardInfo>
            </div>
            <CardInfo><strong>Border Countries: </strong></CardInfo>
            <div className="border-countries">
              {countryData[0].borders ? countryData[0].borders.map(e => <Link to={`/countries/${e}`} key={e}><BorderCountries >{e}</BorderCountries></Link>) : null}
            </div>
          </div>
        </InfoContainer>
       
        
      </DetailContainer>
      : null}
    </>
  )
}

export default CountryDetail;