import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

interface CoinProp{
    symbol: string,
    name: string,
    price: string,
    market_cap: string,
    low_24h: string,
    high_24h: string,
    total_volume_24h: string,
    delta_24h: string,
    formatedPrice: string,
    formatedMarket: string,
    formatedLowPrice: string,
    formatedHighPrice: string,
    numberDelta?: number,
}

export const Detail = () => {
    const {cripto} = useParams();
    const [detail, setDetail] = useState<CoinProp>()
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {

        const getData = () => {
            fetch(`https://sujeitoprogramador.com/api-cripto/coin/?key=3f7b6e5897e7211f&symbol=${cripto}`)
            .then((response) => response.json())
            .then((data) => {
                
                let price = Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD"
                })

                const resultData = {
                    ...data,
                    formatedPrice: price.format(Number(data.price)),
                    formatedMarketCap: price.format(Number(data.market_cap)),
                    formatedLowPrice: price.format(Number(data.low_24h)),
                    formatedHighPrice: price.format(Number(data.high_24h)),
                }
                
                setDetail(resultData);
                setLoading(false);
            }).catch(error => {
                console.log(error)
                navigate("*")
            })
        }

        getData();

    },[cripto])

    if(loading) {
        <div>
            <h4>Carregando Informações...</h4>
        </div>
    }

    return(
        <div>
            Página Detail
        </div>
    )
}