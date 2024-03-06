import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { SignupProps } from "@/types/type";
import { useAuth } from "@/hooks/useAuth";
import InputText from "@/components/common/InputText";
import Title from "@/components/common/Title";
import Button from "@/components/common/Button";

const SignUpPage = () => {
  const { userSignup } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupProps>();

  const onSubmit = (data: SignupProps) => {
    userSignup(data);
  };

  return (
    <>
      <Title size="large">회원가입</Title>
      <div className="max-w-xs my-24 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="border-none pb-2">
            <InputText
              placeholder="이메일"
              className="w-full"
              inputType="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-500">이메일을 입력해주세요.</p>
            )}
          </fieldset>
          <fieldset className="border-none pb-2">
            <InputText
              placeholder="비밀번호"
              className="w-full"
              inputType="password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-red-500">비밀번호를 입력해주세요.</p>
            )}
          </fieldset>
          <fieldset className="border-none pb-2">
            <Button
              type="submit"
              size="medium"
              color="white"
              className="w-full"
            >
              회원가입
            </Button>
          </fieldset>
          <div className="text-center pt-4">
            <Link to="/reset" className="underline">
              비밀번호 초기화
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUpPage;
