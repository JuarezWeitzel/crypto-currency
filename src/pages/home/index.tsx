import { Search } from "../../components/search";
import { TableCurrency } from "../../components/tableCurrency";
import { Content } from "../../components/content";
import { Container } from "../../components/container";
import { Footer } from "../../components/footer";

export const Home = () => {
  return (
    <Container>

      <Content>
        <Search />
        <TableCurrency />
      </Content>

      <Footer />
       
    </Container>
  );
};
