import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ResponsiveTable,
  StyledLabelTd,
  StyledLink,
  StyledTable,
  StyledTh,
  StyledTr,
} from "./style";

interface CoinProps {
  name: string;
  delta_24h: string;
  price: string;
  symbol: string;
  volume_24h: string;
  market_cap: string;
  formatedPrice: string;
  formatedMarket: string;
  numberDelta?: number;
}

interface DataProps {
  coins: CoinProps[];
}

export const TableCurrency = () => {
  const [coins, setCoins] = useState<CoinProps[]>([]);
  const [inputValue, setInputValue] = useState("");
  const navegate = useNavigate();

  useEffect(() => {
    function getData() {
      fetch("https://sujeitoprogramador.com/api-cripto/?key=3f7b6e5897e7211f")
        .then((response) => response.json())
        .then((data: DataProps) => {
          let coinsData = data.coins.slice(0, 10);

          let price = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          });          

          const formatResult = coinsData.map((item) => {
            const formated = {
              ...item,
              formatedPrice: price.format(Number(item.price)),
              formatedMarket: price.format(Number(item.market_cap)),
              numberDelta: parseFloat(item.delta_24h.replace(",", ".")),
            };

            return formated;
          });

          setCoins(formatResult);
        });
    }

    getData();
  }, []);

  return (
    <ResponsiveTable>
  <StyledTable>
    <thead>
      <StyledTr>
        <StyledTh>Crypto</StyledTh>
        <StyledTh>Market Value</StyledTh>
        <StyledTh>Price</StyledTh>
        <StyledTh>Volume</StyledTh>
      </StyledTr>
    </thead>
    <tbody>
      {coins.map((coin) => (
        <StyledTr key={coin.name}>
          <StyledLabelTd data-label="Crypto">
            <StyledLink to={`/detail/${coin.symbol}`}>
              {coin.name} | {coin.symbol}
            </StyledLink>
          </StyledLabelTd>
          <StyledLabelTd data-label="Market Value">
            {coin.formatedMarket}
          </StyledLabelTd>
          <StyledLabelTd data-label="Price">
            {coin.formatedPrice}
          </StyledLabelTd>
          <StyledLabelTd
            data-label="Volume"
            profit={coin.numberDelta ? coin.numberDelta >= 0 : false}
            loss={coin.numberDelta ? coin.numberDelta < 0 : false}
          >
            {coin.delta_24h}
          </StyledLabelTd>
        </StyledTr>
      ))}
    </tbody>
  </StyledTable>
</ResponsiveTable>

  );
};
