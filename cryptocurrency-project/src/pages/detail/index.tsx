import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLoading } from "../../context/loading/loadingContext";
import * as S from "./style";

interface CoinProps {
  symbol: string;
  name: string;
  price: string;
  market_cap: string;
  low_24h: string;
  high_24h: string;
  total_volume_24h: string;
  delta_24h: string;
  formatedPrice: string;
  formatedMarket: string;
  formatedLowPrice: string;
  formatedHighPrice: string;
  formatedMarketCap: string;
  numberDelta?: number;
}

interface DataProps {
  coins: CoinProps[];
}

export const Detail = () => {
  const { symbol } = useParams<{ symbol: string }>();
  const [detail, setDetail] = useState<CoinProps>();
  const { setLoading } = useLoading();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/src/db.json");
        const data: DataProps = await response.json();
        const coin = data.coins.find((coin) => coin.symbol === symbol);

        if (coin) {
          let price = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          });

          const resultData = {
            ...coin,
            formatedPrice: price.format(Number(coin.price)),
            formatedMarketCap: price.format(Number(coin.market_cap)),
            formatedLowPrice: price.format(Number(coin.low_24h)),
            formatedHighPrice: price.format(Number(coin.high_24h)),
            numberDelta: parseFloat(coin.delta_24h.replace(",", ".")),
          };

          setDetail(resultData);
        } else {
          navigate("*");
        }
      } catch (error) {
        console.error("Error fetching coin details:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [symbol]);

  return (
    <S.Container>
      <S.DetailDiv>
        <S.DetailName> {detail?.name} </S.DetailName>
        <S.DetailSymbol> {detail?.symbol} </S.DetailSymbol>

        <S.DetailSection>
          <p>
            <strong>Market Cap: </strong>
            <span> {detail?.formatedMarketCap} </span>
          </p>
          <p>
            <strong>Price: </strong> <span> {detail?.formatedPrice} </span>
          </p>
          <p>
            <strong>High Price: </strong>
            <span> {detail?.formatedHighPrice} </span>
          </p>
          <p>
            <strong>Low Price: </strong>
            <span> {detail?.formatedLowPrice} </span>
          </p>
          <p>
            <strong>Volume: </strong> 
            <S.Color
            profit={detail?.numberDelta ? detail.numberDelta >= 0 : false}
            loss={detail?.numberDelta ? detail.numberDelta < 0 : false}
            > 
            {detail?.delta_24h}
            </S.Color>
          </p>
        </S.DetailSection>
      </S.DetailDiv>

      <S.Link to="/">
        List Coins
      </S.Link>
    </S.Container>
  );
};
