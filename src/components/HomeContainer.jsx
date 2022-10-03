import React, { useState, useEffect } from "react";
import { Card } from './Card';
import { CardInfo, CardTitle } from './CardComponents';
import { CardsContainer } from './CardsContainer';
import { DropDown } from './DropDown';
import { Home } from './Home';
import { Link } from "react-router-dom";

export function HomeContainer() {

  const [allCountries, setAllCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [dropDownActive, setDropDownActive] = useState(false);
  const [orderDropDownActive, setOrderDropDownActive] = useState(false);
  const [filterValue, setFilterValue] = useState();
  const [orderValue, setOrderValue] = useState();
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);
  const pageRender = 8;
  const [maxPage, setMaxPage] = useState(32);
  const value = {
    all: 'All',
    africa : 'Africa', 
    americas: 'Americas',
    asia: 'Asia',
    europe: 'Europe',
    oceania: 'Oceania',
    az: 'a-z',
    za: 'z-a',
    morePopulation: '+ population',
    lessPopulation: '- population',
  }
  
  const url = 'https://restcountries.com/v3.1/all';

  const getAllCountries = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setAllCountries(data);
    setCountries(data);
    setFilterValue(value.all);
    setLoaded(true);
  }

  //PAGINATION
  const previusPage = () => {
    if(page <= 1) setPage(1);
    else setPage(page - 1);
  }

  const nextPage = () => {
    if(page >= maxPage) setMaxPage(maxPage);
    else setPage(page + 1);
  }

  const lastPage = () => {
    setPage(maxPage);
  }

  const firstPage = () => {
    setPage(1)
  }

  //SEARCH
  const handleSearch = (e) => {
   setSearchValue(e.target.value)
  }

  //FILTER
  const filterAll = () => {
    const all = allCountries;
    setCountries(all);
    setFilterValue(value.all);
    setOrderValue(null);
    setPage(1);
    setMaxPage(all.length / pageRender);
  }
  const filterAfrica = () => {
    const africa = allCountries.filter(e => e.region === 'Africa');
    setCountries(africa);
    setFilterValue(value.africa);
    setOrderValue(null);
    setPage(1);
    setMaxPage(africa.length / pageRender);
  }
  const filterAmericas = () => {
    const americas = allCountries.filter(e => e.region === 'Americas');
    setCountries(americas);
    setFilterValue(value.americas);
    setOrderValue(null);
    setPage(1);
    setMaxPage(americas.length / pageRender);
  }
  const filterAsia = () => {
    const asia = allCountries.filter(e => e.region === 'Asia');
    setCountries(asia);
    setFilterValue(value.asia);
    setOrderValue(null);
    setPage(1);
    setMaxPage(asia.length / pageRender);
  }
  const filterEurope = () => {
    const europe = allCountries.filter(e => e.region === 'Europe');
    setCountries(europe);
    setFilterValue(value.europe);
    setOrderValue(null);
    setPage(1);
    setMaxPage(europe.length / pageRender);
  }
  const filterOceania = () => {
    const oceania = allCountries.filter(e => e.region === 'Oceania');
    setCountries(oceania);
    setFilterValue(value.oceania);
    setOrderValue(null);
    setPage(1);
    setMaxPage(oceania.length / pageRender);
  }

  // ORDER
  const azOrder = () => {
    const az = [...countries];
    az.sort((a,b) => {
      if (a.name.official < b.name.official) {return -1;}
      if (a.name.official > b.name.official) {return 1;}
      return 0;}
    );
    setCountries(az);
    setOrderValue(value.az);
  }
  const zaOrder = () => {
    const za = [...countries];
    za.sort((a,b) => {
      if (a.name.official < b.name.official) {return -1;}
      if (a.name.official > b.name.official) {return 1;}
      return 0;}
    );
    setCountries(za.reverse());
    setOrderValue(value.za);
  }
  const morePopulationOrder = () => {
    const morePopOrder = [...countries];
    morePopOrder.sort((a,b) => b.population - a.population);
    setCountries(morePopOrder);
    setOrderValue(value.morePopulation);
  }
  const lessPopulationOrder = () => {
    const lessPopOrder = [...countries];
    lessPopOrder.sort((a,b) => a.population - b.population);
    setCountries(lessPopOrder);
    setOrderValue(value.lessPopulation);
  }

  useEffect( () => {
    getAllCountries()
    }, []);


  return (
    <Home>
          <div className='inputs-container'> 
            <input 
              type='text' 
              className='search-input' 
              placeholder='Search by name...'
              onChange={handleSearch}></input>
            <div className='filter-input' onClick={()=> setOrderDropDownActive(!orderDropDownActive)} >
              <p>Order By</p>
              {orderDropDownActive ? 
            <DropDown>
              <button onClick={azOrder} className={orderValue === 'a-z'? 'active' : null }>A - Z</button>
              <button onClick={zaOrder} className={orderValue === 'z-a'? 'active' : null }>Z - A</button>
              <button onClick={morePopulationOrder} className={orderValue === '+ population'? 'active' : null }>+ Population</button>
              <button onClick={lessPopulationOrder} className={orderValue === '- population'? 'active' : null }>- Population</button>
            </DropDown>
            : null }
            </div>
            <div className='filter-input' onClick={()=> setDropDownActive(!dropDownActive)} >
              <p>Filter by Region</p>
              {dropDownActive ? 
            <DropDown>
              <button onClick={filterAll} className={filterValue === 'All'? 'active' : null }>All</button>
              <button onClick={filterAfrica} className={filterValue === 'Africa'? 'active' : null }>Africa</button>
              <button onClick={filterAmericas} className={filterValue === 'Americas'? 'active' : null }>America</button>
              <button onClick={filterAsia} className={filterValue === 'Asia'? 'active' : null }>Asia</button>
              <button onClick={filterEurope} className={filterValue === 'Europe'? 'active' : null }>Europe</button>
              <button onClick={filterOceania} className={filterValue === 'Oceania'? 'active' : null }>Oceania</button>
            </DropDown>
            : null }
            </div>
          </div>

          <CardsContainer>
          { loaded ? 
          countries
          .slice(
            (page - 1) * pageRender,
            (page - 1) * pageRender + pageRender
          )
          .map((e) => ( 
            e.name.official.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) || e.name.common.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())?
            <Link key={e.name.official} to={`/countries/${e.cioc ? e.cioc : e.cca3 }`}>
              <Card >
                <img src={e.flags.png} alt={e.name.official + ' flag'}></img>
                <CardTitle>{e.name.official}</CardTitle>
                <CardInfo><strong>Population:</strong> {e.population.toLocaleString()}</CardInfo>
                <CardInfo><strong>Region:</strong> {e.region}</CardInfo>
                <CardInfo><strong>Capital:</strong> {e.capital}</CardInfo>
              </Card>
            </Link>
            : null ))
            : <> <Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /> </>
          }
            
          </CardsContainer>
            <div className="pagination">
              <button onClick={() => firstPage()}>⇐</button>
              <button onClick={() => previusPage()} > ← </button>
              <span>{Math.ceil(page)}</span>
              <span>de</span>
              <span>{Math.ceil(maxPage)}</span>
              <button onClick={() => nextPage()}> → </button>
              <button onClick={() => lastPage()}>⇒</button>
            </div>
        </Home>
  )
}

// export HomeContainer;