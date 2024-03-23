import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import * as S from "./style";

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
  const [error, setError] = useState<string | null>(null)

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
        })
        .catch((error) => {
          setError(error.message);
        })
    }

    getData();
  }, []);

  if(error) {
    return <S.CatchError> Sorry! Request limit exhausted, try in an hour! </S.CatchError>
  }

  return (
    <S.ResponsiveTable>
      <thead>
        <S.TableRow>
          <S.TableHeader>Crypto</S.TableHeader>
          <S.TableHeader>Market Value</S.TableHeader>
          <S.TableHeader>Price</S.TableHeader>
          <S.TableHeader>Volume</S.TableHeader>
        </S.TableRow>
      </thead>
      <tbody>
        {coins.map((coin) => (
          <S.TableRow key={coin.name}>
            <S.LabelTableCell data-label="Crypto">
              <S.Link to={`/detail/${coin.symbol}`}>
                {coin.name} | {coin.symbol}
              </S.Link>
            </S.LabelTableCell>
            <S.LabelTableCell data-label="Market Value">
              {coin.formatedMarket}
            </S.LabelTableCell>
            <S.LabelTableCell data-label="Price">
              {coin.formatedPrice}
            </S.LabelTableCell>
            <S.LabelTableCell
              data-label="Volume"
              profit={coin.numberDelta ? coin.numberDelta >= 0 : false}
              loss={coin.numberDelta ? coin.numberDelta < 0 : false}
            >
              {coin.delta_24h}
            </S.LabelTableCell>
          </S.TableRow>
        ))}
      </tbody>
    </S.ResponsiveTable>
  );
};
