import Image from "next/image";
import Card from "react-bootstrap/Card";

type IProps = {
  imgUrl: string;
  title: string;
  description: string;
};

const CustomCard: React.FC<IProps> = ({ imgUrl, title, description }) => {
  return (
    <Card style={{ width: "14rem", minHeight: "22rem" }}>
      <div className="mx-auto pt-2">
        <Image
          src={imgUrl}
          width={50}
          height={110}
          alt="Picture of the author"
        />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description.slice(0, 100)}..</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
