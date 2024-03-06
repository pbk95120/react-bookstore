import { useEffect } from "react";
import Button from "@/components/common/Button";

interface Props {
  onCompleted: (address: string) => void;
}

const SCRIPT_URL =
  "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";

/**
 * 카카오 주소 검색 API를 사용한 주소 찾기 버튼
 */
const FindAddressButton = ({ onCompleted }: Props) => {
  const handleOpen = () => {
    new window.daum.Postcode({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      oncomplete: (data: any) => {
        onCompleted(data.address as string);
      },
    }).open();
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = SCRIPT_URL;
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Button type="button" size="medium" color="black" onClick={handleOpen}>
      주소 찾기
    </Button>
  );
};

export default FindAddressButton;
