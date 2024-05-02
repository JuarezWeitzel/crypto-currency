import { useEffect, useState,  } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLoading } from "../../context/loading/loadingContext";
import * as S from "./style";
import { useTranslation } from "react-i18next";

interface CoinProp {
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

export const Detail = () => {
  const { cripto } = useParams();
  const [detail, setDetail] = useState<CoinProp>();
  const { setLoading } = useLoading();
  const navigate = useNavigate();

  const { t } = useTranslation()

  useEffect(() => {
    const getData = () => {
      setLoading(true);
      fetch(
        `https://sujeitoprogramador.com/api-cripto/coin/?key=3f7b6e5897e7211f&symbol=${cripto}`
      )
        .then((response) => response.json())
        .then((data: CoinProp) => {
          let price = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          });

          const resultData = {
            ...data,
            formatedPrice: price.format(Number(data.price)),
            formatedMarketCap: price.format(Number(data.market_cap)),
            formatedLowPrice: price.format(Number(data.low_24h)),
            formatedHighPrice: price.format(Number(data.high_24h)),
            numberDelta: parseFloat(data.delta_24h.replace(",", ".")),
          };

          setDetail(resultData);
        })
        .catch((error) => {
          console.log(error);
          navigate("*");
        })
        .finally(() => {
          setLoading(false);
        });
    };

    getData();
  }, [cripto]);

  return (
    <S.Container>
      <S.DetailDiv>
        <S.DetailName> {detail?.name} </S.DetailName>
        <S.DetailSymbol> {detail?.symbol} </S.DetailSymbol>

        <S.DetailSection>
          <p>
            <strong>{t("marketValue")}: </strong>
            <span> {detail?.formatedMarketCap} </span>
          </p>
          <p>
            <strong>{t("price")}: </strong> <span> {detail?.formatedPrice} </span>
          </p>
          <p>
            <strong>{t("highPrice")}: </strong>
            <span> {detail?.formatedHighPrice} </span>
          </p>
          <p>
            <strong>{t("lowPrice")}: </strong>
            <span> {detail?.formatedLowPrice} </span>
          </p>
          <p>
            <strong>{t("volume")}: </strong> 
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
        {t("listCoins")}
      </S.Link>
    </S.Container>
  );
};
