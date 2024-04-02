import { useEffect, useState } from "react";

import * as S from "./style";
import { useLoading } from "../../context/loading/loadingContext";

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
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState<string | null>(null)
  const { setLoading } = useLoading();

  useEffect(() => {
    function getData() {
      setLoading(true);
      fetch("https://sujeitoprogramador.com/api-cripto/?key=3f7b6e5897e7211f")
        .then((response) => response.json())
        .then((data: DataProps) => {
          let coinsData = data.coins.slice(0, 20);

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
        }).finally(() => {
          setLoading(false);
        })
    }

    getData();
  }, []);

  if(error) {
    return <S.CatchError> Sorry! Request limit exhausted, try in an hour! </S.CatchError>
  }

  const itemsPerPage = 10;
  const totalPages = Math.ceil(coins.length / itemsPerPage);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
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
          {coins.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((coin) => (
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
      <S.Pages>
        <S.ButtonPage
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &larr;
        </S.ButtonPage>
        {Array.from(Array(totalPages).keys()).map((page) => (
          <S.ButtonPage
            key={page}
            onClick={() => goToPage(page + 1)}
            disabled={currentPage === page + 1}
            style={{
              color: currentPage === page + 1 ? "#FFF" : "",
              backgroundColor: currentPage === page + 1 ? "#30beff" : ""
            }}
          >
            {page + 1}
          </S.ButtonPage>
        ))}
        <S.ButtonPage
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &rarr;
        </S.ButtonPage>
      </S.Pages>
    </>
  );
};