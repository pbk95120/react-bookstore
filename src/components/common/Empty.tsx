import Title from "@/components/common/Title";

interface Props {
  icon?: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

/**
 * 공용 빈 페이지 컴포넌트
 */
const Empty = ({ icon, title, description }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 py-30">
      {icon && <div>{icon}</div>}
      <Title size="large" color="lightgray">
        {title}
      </Title>
      {description && <p>{description}</p>}
    </div>
  );
};

export default Empty;
