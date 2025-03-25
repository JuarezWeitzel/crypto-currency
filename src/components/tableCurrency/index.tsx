import { useEffect, useState } from "react";
import * as S from "./style";
import { useLoading } from "../../context/loading/loadingContext";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();

  const getData = () => {
    setLoading(true);
    fetch("https://sujeitoprogramador.com/api-cripto/?key=3f7b6e5897e7211f")
      .then((response) => response.json())
      .then((data: DataProps) => {
        const coinsData = data.coins.slice(0, 20);

        const price = Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        });

        const formatResult = coinsData.map((item: CoinProps) => {
          const formated = {
            ...item,
            formatedPrice: price.format(Number(item.price)),
            formatedMarket: price.format(Number(item.market_cap)),
            numberDelta: parseFloat(String(item.delta_24h).replace(",", ".")),
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
          {t("requestAPIerror")}
        </S.CatchError>
      )}
      <S.ResponsiveTable>
        <thead>
          <S.TableRow>
            <S.TableHeader>{t("crypto")}</S.TableHeader>
            <S.TableHeader>{t("marketValue")}</S.TableHeader>
            <S.TableHeader>{t("price")}</S.TableHeader>
            <S.TableHeader>{t("volume")}</S.TableHeader>
          </S.TableRow>
        </thead>
        <tbody>
          {coins
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((coin) => (
              <S.TableRow key={coin.name}>
                <S.LabelTableCell data-label={t("crypto")}>
                  <S.Link to={`/detail/${coin.symbol}`}>
                    {coin.name} | {coin.symbol}
                  </S.Link>
                </S.LabelTableCell>
                <S.LabelTableCell data-label={t("marketValue")}>
                  {coin.formatedMarket}
                </S.LabelTableCell>
                <S.LabelTableCell data-label={t("price")}>
                  {coin.formatedPrice}
                </S.LabelTableCell>
                <S.LabelTableCell
                  data-label={t("volume")}
                  profit={coin.numberDelta ? coin.numberDelta >= 0 : false}
                  loss={coin.numberDelta ? coin.numberDelta < 0 : false}
                >
                  {coin.delta_24h}
                </S.LabelTableCell>
              </S.TableRow>
            ))}
        </tbody>
      </S.ResponsiveTable>
      {coins.length > 1 && (
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
      )}
    </>
  );
};
