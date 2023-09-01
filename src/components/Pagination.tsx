import { Button } from "react-bootstrap";

type IProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  perPage: number;
  total: number;
};

const Pagination: React.FC<IProps> = ({ page, setPage, perPage, total }) => {
  return (
    <>
      <Button
        className="btn"
        disabled={page <= 1}
        onClick={() => setPage((prev) => prev - 1)}
      >
        Prev
      </Button>

      <Button
        className="btn"
        disabled={page >= total / perPage}
        onClick={() => setPage((prev) => prev + 1)}
      >
        Next
      </Button>
    </>
  );
};

export default Pagination;
