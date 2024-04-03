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
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  const { setLoading } = useLoading();

  const getData = () => {
    setLoading(true);
    fetch("https://sujeitoprogramador.com/api-cripto/?key=3f7b6e5897e7211f")
      .then((response) => response.json())
      .then((data: DataProps) => {
        let coinsData = data.coins.slice(0, 30);

        let price = Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        });

        const formatResult = coinsData.map((item: any) => {
          const formated = {
            ...item,
            formatedPrice: price.format(Number(item.price)),
            formatedMarket: price.format(Number(item.market_cap)),
            numberDelta: parseFloat(item.delta_24h.replace(",", ".")),
          };

          return formated;
        });

        setCoins(formatResult);
        localStorage.setItem("cachedCoins", JSON.stringify(formatResult));
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    const cachedData = localStorage.getItem("cachedCoins");
    if (cachedData) {
      setCoins(JSON.parse(cachedData));
    }

    getData();
  }, []);

  useEffect(() => {
    if (error === null) {
      getData();
    }
  }, [error]);

  const itemsPerPage: number = 10;
  const totalPages: number = Math.ceil(coins.length / itemsPerPage);

  const goToPage = (page: number): void => {
    setCurrentPage(page);
  };

  return (
    <>
      {error && (
        <S.CatchError>
          Sorry! Request limit exhausted, try in an hour! In the meantime, the list will not be updated. <br/> The maximum number of requests per hour is 60.
        </S.CatchError>
      )}
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
        {Array.from(Array(totalPages).keys()).map((page, index) => (
          <S.ButtonPage
            key={index}
            onClick={() => goToPage(page + 1)}
            disabled={currentPage === page + 1}
            style={{
              color: currentPage === page + 1 ? "#FFF" : "",
              backgroundColor: currentPage === page + 1 ? "#30beff" : "",
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
