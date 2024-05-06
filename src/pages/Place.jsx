import {  publicRequest} from "../requestMethods";
import { useHistory, useLocation, useNavigate} from "react-router-dom";
import { useState ,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;


const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
font-weight: ${(props) => props.type === "total" && "130"};
font-size: ${(props) => props.type === "total" && "24px"};
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid #3586ff;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;

const Place = () => {

  const [quantity, setQuantity] = useState(1);
  const [place, setPlace] = useState({});
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    const getPlace = async () => {
      try {
        const res = await publicRequest.get("/places/find/" + id);
        setPlace(res.data);
      } catch {}
    };
    getPlace();
  }, [id]);



  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={place.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{place.title}</Title>
          <Desc>{place.desc}</Desc>
          <Price> {place.price} TL</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Renk</FilterTitle>
              {place.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Beden</FilterTitle>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <Button >Favorilere Ekle</Button>
            <Button >Karta Ekle</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Place;