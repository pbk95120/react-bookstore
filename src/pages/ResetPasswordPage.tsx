import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import InputText from "../components/common/InputText";
import Title from "../components/common/Title";
import Button from "../components/common/Button";
import { SignupProps } from "@/types/type";
import { resetPassword, resetRequsest } from "../api/auth.api";
import { useAlert } from "../hooks/useAlert";

const ResetPassWordPage = () => {
  const navigate = useNavigate();
  const { showAlert } = useAlert();
  const [resetRequested, setResetRequested] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupProps>();

  const onSubmit = (data: SignupProps) => {
    if (resetRequested) {
      resetPassword(data).then(() => {
        showAlert("비밀번호가 초기화되었습니다.");
        navigate("/login");
      });
    } else {
      resetRequsest(data).then(() => {
        showAlert("초기화 요청이 완료되었습니다.");
        setResetRequested(true);
      });
    }
  };

  return (
    <>
      <Title size="large">비밀번호 초기화</Title>
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
          {resetRequested && (
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
          )}
          <fieldset className="border-none pb-2">
            <Button
              type="submit"
              size="medium"
              color="white"
              className="w-full"
            >
              {resetRequested ? "비밀번호 초기화" : "초기화 요청"}
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

export default ResetPassWordPage;
