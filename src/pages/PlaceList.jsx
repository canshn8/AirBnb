import { useLocation } from "react-router-dom";
import Places from "../components/Places";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const PlaceList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]:value
    }) 
  } 

  return (
    <Container>
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Yer Filtreleme:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled >
              Yerler
            </Option>
            <Option>//Fİltreler</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Filtrele:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">En Yeni</Option>
            <Option value="asc">Fiyat (Artan)</Option>
            <Option value="desc">Fiyat (Azalan)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Places cat={cat} filters={filters} sort={sort}/>
    </Container>
  );
};

export default PlaceList;