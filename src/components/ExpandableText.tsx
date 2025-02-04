import { Link, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
  maxChar?: number;
}

const ExpandableText = ({ children, maxChar }: Props) => {
  const summarisedText = children.substring(0, maxChar);
  const [isSummarised, setIsSummarised] = useState(true);
  return (
    <>
      {isSummarised ? `${summarisedText}......` : `${children}`}
      <Link
        color="gray.400"
        onClick={() => {
          setIsSummarised(!isSummarised);
        }}
        textDecoration="underline"
      >
        {isSummarised ? <Text>Read more</Text> : <Text>Less</Text>}
      </Link>
    </>
  );
};

export default ExpandableText;
