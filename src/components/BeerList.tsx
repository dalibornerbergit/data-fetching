import { IBeer } from "@/models/IBeer";
import Image from "next/image";

type IProps = {
  data: IBeer[];
};

const BeerList: React.FC<IProps> = ({ data }) => {
  return (
    <ul>
      {data?.map((item) => (
        <li key={item?.id}>
          <Image
            src={item.image_url}
            width={30}
            height={70}
            alt="Picture of the author"
          />
          {item?.name}
        </li>
      ))}
    </ul>
  );
};

export default BeerList;
