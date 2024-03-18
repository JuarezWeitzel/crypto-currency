import { TableContainer, TheadContainer, TrLabel, ThLabel, TbodyContainer, TdLabel, TdProfit} from './style'
import { Link } from 'react-router-dom'

export const TableCurrency = () => {
    return(
            <TableContainer>
                <TheadContainer>
                    <TrLabel>
                        <ThLabel>Currency</ThLabel>
                        <ThLabel>Market Cap</ThLabel>
                        <ThLabel>Price</ThLabel>
                        <ThLabel>Volume</ThLabel>
                    </TrLabel>
                </TheadContainer>    

                <TbodyContainer>
                    <TrLabel>
                        <TdLabel>
                            <Link to="/detail/#id">
                                BitCoin | BTC
                            </Link>
                        </TdLabel>
                        <TdLabel>
                            $ 290.00
                        </TdLabel>
                        <TdLabel>
                            $ 2645.00
                        </TdLabel>
                        <TdProfit>
                            +100
                        </TdProfit>
                    </TrLabel>
                </TbodyContainer>
            </TableContainer>           
    )
}