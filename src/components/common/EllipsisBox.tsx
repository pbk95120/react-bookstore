import { useState } from "react";
import Button from "./Button";
import { FaAngleDown } from "react-icons/fa";

interface Props {
  children: React.ReactNode;
  linelimit: number;
}

const EllipsisBox = ({ children, linelimit }: Props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <p
        className={
          expanded
            ? `overflow-hidden truncate pt-5 m-0 line-clamp-${linelimit}`
            : `overflow-hidden truncate pt-5 m-0 line-clamp-none`
        }
      >
        {children}
      </p>
      <div className="flex justify-end">
        <Button
          size="small"
          color="black"
          onClick={() => setExpanded(!expanded)}
          className="flex items-center"
        >
          {expanded ? "접기" : "펼치기"}
          <FaAngleDown className={expanded ? "rotate-180" : "rotate-0"} />
        </Button>
      </div>
    </div>
  );
};

export default EllipsisBox;
