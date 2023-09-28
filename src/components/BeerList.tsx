import { IBeer } from "@/models/IBeer";
import CustomCard from "./CustomCard";
import { Col, Container, Row } from "react-bootstrap";

type IProps = {
  data: IBeer[];
};

const BeerList: React.FC<IProps> = ({ data }) => {
  return (
    <Container>
      <Row>
        {data?.map((item) => (
          <Col key={item.id} className="mb-3">
            <CustomCard
              imgUrl={item.image_url}
              title={item.name}
              description={item.description}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BeerList;
