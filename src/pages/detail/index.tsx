import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLoading } from "../../context/loading/loadingContext";
import * as S from "./style";
import { useTranslation } from "react-i18next";
import { Footer } from "../../components/footer";
import { Container } from "../../components/container";

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
  delta_24h?: string;
}

export const Detail = () => {
  const { cripto } = useParams();
  const [detail, setDetail] = useState<CoinProps | null>(null);
  const { setLoading } = useLoading();
  const navigate = useNavigate();

  const { t } = useTranslation();

  useEffect(() => {
    const getData = () => {
      setLoading(true);

      fetch(
        `https://rest.coincap.io/v3/assets/${cripto}?apiKey=771d5fa261496662fd225f84e0d0f2faae003b10126d95324a714e1549e0bf53`
      )
        .then((response) => response.json())
        .then((data) => {
          const item = data.data; // objeto único retornado pela API

          if (!item) {
            navigate("*");
            return;
          }

          const price = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          });

          const priceCompact = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            notation: "compact",
          });

          const formatted = {
            ...item,
            formatedPrice: price.format(Number(item.priceUsd)),
            formatedMarket: priceCompact.format(Number(item.marketCapUsd)),
            formatedVolume: priceCompact.format(Number(item.volumeUsd24Hr)),
            numberDelta: parseFloat(String(item.changePercent24Hr)),
            delta_24h: `${Number(item.changePercent24Hr).toFixed(2)}%`,
          };

          setDetail(formatted);
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
    <Container>
      <S.DetailDiv>
        <S.DetailName> {detail?.id.toUpperCase()} </S.DetailName>
        <S.DetailSymbol> {detail?.symbol} </S.DetailSymbol>

        <S.DetailSection>
          <p>
            <strong>{t("symbol")}: </strong>
            <span>
              <S.ImageLogo
                src={`https://assets.coincap.io/assets/icons/${detail?.symbol.toLowerCase()}@2x.png`}
                alt={detail?.name}
              />
            </span>
          </p>

          <p>
            <strong>{t("price")}: </strong>
            <span> {detail?.formatedPrice} </span>
          </p>

          <p>
            <strong>{t("marketValue")}: </strong>
            <span> {detail?.formatedMarket} </span>
          </p>

          <p>
            <strong>{t("volume")}: </strong>
            <span> {detail?.formatedVolume} </span>
          </p>

          <p>
            <strong>{t("change24h")}: </strong>
            <S.Color
              profit={detail?.numberDelta ? detail.numberDelta >= 0 : false}
              loss={detail?.numberDelta ? detail.numberDelta < 0 : false}
            >
              {detail?.delta_24h}
            </S.Color>
          </p>
        </S.DetailSection>

        <S.DetailDiv>
          <S.Link to="/">{t("listCoins")}</S.Link>
        </S.DetailDiv>
      </S.DetailDiv>

      <Footer />
    </Container>
  );
};
