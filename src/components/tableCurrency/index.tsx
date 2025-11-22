import { useEffect, useState } from "react";
import * as S from "./style";
import { useLoading } from "../../context/loading/loadingContext";
import { useTranslation } from "react-i18next";

interface CoinProps {
  id: string;
  name: string;
  symbol: string;
  priceUsd: string;
  vwap24Hr: string;
  changePercent24Hr: string;
  rank: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: number;
  volumeUsd24Hr: number;
  explorer: string;
  formatedPrice?: string;
  formatedMarket?: string;
  formatedVolume?: string;
  numberDelta?: number;
  delta_24h: string;
}

interface DataProps {
  data: CoinProps[];
}

export const TableCurrency = () => {
  const [coins, setCoins] = useState<CoinProps[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  const { setLoading } = useLoading();

  const { t } = useTranslation();

  const getData = () => {
    setLoading(true);
    fetch(
      "https://rest.coincap.io/v3/assets?limit=100&offset=0&apiKey=771d5fa261496662fd225f84e0d0f2faae003b10126d95324a714e1549e0bf53"
    )
      .then((response) => response.json())
      .then((data: DataProps) => {
        const coinsData = data.data;

        const price = Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        });

        const priceCompact = Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          notation: "compact",
        });

        const formatResult = coinsData.map((item: CoinProps) => {
          const formated = {
            ...item,
            formatedPrice: price.format(Number(item.priceUsd)),
            formatedMarket: priceCompact.format(Number(item.marketCapUsd)),
            formatedVolume: priceCompact.format(Number(item.volumeUsd24Hr)),
            numberDelta: parseFloat(
              String(item.changePercent24Hr).replace(",", ".")
            ),
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

  const itemsPerPage: number = 7;
  const totalPages: number = Math.ceil(coins.length / itemsPerPage);

  const goToPage = (page: number): void => {
    setCurrentPage(page);
  };

  return (
    <>
      {error && <S.CatchError>{t("requestAPIerror")}</S.CatchError>}
      <S.ResponsiveTable>
        <thead>
          <S.TableRow>
            <S.TableHeader>{t("symbol")}</S.TableHeader>
            <S.TableHeader>{t("crypto")}</S.TableHeader>
            <S.TableHeader>{t("marketValue")}</S.TableHeader>
            <S.TableHeader>{t("price")}</S.TableHeader>
            <S.TableHeader>{t("volume")}</S.TableHeader>
            <S.TableHeader>{t("change24h")}</S.TableHeader>
          </S.TableRow>
        </thead>
        <tbody>
          {coins
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((coin) => (
              <S.TableRow key={coin.id}>
                <S.LabelTableCell data-label={t("symbol")}>
                  <S.Link to={`/detail/${coin.id}`}>
                    <S.ImageLogo
                      src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
                      alt={coin.name}
                    />
                  </S.Link>
                </S.LabelTableCell>
                <S.LabelTableCell data-label={t("crypto")}>
                  <S.Link to={`/detail/${coin.id}`}>
                    {coin.name} | {coin.symbol}
                  </S.Link>
                </S.LabelTableCell>
                <S.LabelTableCell data-label={t("marketValue")}>
                  {coin.formatedMarket}
                </S.LabelTableCell>
                <S.LabelTableCell data-label={t("price")}>
                  {coin.formatedPrice}
                </S.LabelTableCell>
                <S.LabelTableCell data-label={t("volume")}>
                  {coin.formatedVolume}
                </S.LabelTableCell>
                <S.LabelTableCell
                  data-label={t("change24h")}
                  profit={coin.numberDelta ? coin.numberDelta >= 0 : false}
                  loss={coin.numberDelta ? coin.numberDelta < 0 : false}
                >
                  {coin.numberDelta ? coin.numberDelta.toFixed(2) : ""}
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
