import { Form } from "antd";
import SIGNINLOGO from "../../assets/icons/signinLogo.png";
import Lock from "../../assets/svgs/Lock";
import Input from "../../components/Auth/Input";
import Button from "../../components/ui/Button";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "../../services/api/auth";
import useAuthStore from "../../store/auth";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const { logIn } = useAuthStore();
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationKey: ["sign-in"],
    mutationFn: (Data) => signIn(Data),
    onSuccess: ({ data }) => {
      if ((data?.accessToken, data?._id)) {
        logIn(data.accessToken, data._id);
        navigate("/");
      }
    },
  });
  return (
    <section className="h-[100vh] grid grid-cols-2 w-full bg-[#EBF0FF] px-[35px] py-[25px]">
      <div className="col-span-1 flex justify-center gap-x-[30px] items-center">
        <img src={SIGNINLOGO} alt="" />
        <h1 className="text-[69.637px] inter-semibold leading-[140%] tracking-[-4.096px] ">
          <span className="text-[#A6CE3A]">ICG</span> Chemicals
        </h1>
      </div>
      <div className="col-span-1 bg-[#FFF] rounded-[12px] px-[44px] flex flex-col items-center justify-center">
        <Lock />
        <h1 className="text-[27.043px] text-[rgba(0, 0, 0, 0.87)]">Sign in</h1>
        <Form
          onFinish={(values) => {
            mutate(values);
          }}
          className="w-full mt-[30px]"
        >
          <Input
            placeholder={"Email Address*"}
            rules={[
              {
                required: true,
                message: "Please enter email",
              },
            ]}
            name="email"
          />
          <Input
            placeholder={"Password*"}
            rules={[
              {
                required: true,
                message: "Please enter password",
              },
            ]}
            type="password"
            name="password"
          />
          <Button
            style={{
              boxShadow:
                "0px 1.076px 5.378px 0px rgba(0, 0, 0, 0.12), 0px 2.151px 2.151px 0px rgba(0, 0, 0, 0.14), 0px 3.227px 1.076px -2.151px rgba(0, 0, 0, 0.20)",
            }}
            htmlType="submit"
            isLoading={isPending}
            defaultHover={"#A6CE38"}
            className="bg-[#A6CE38] !text-[#FFF] text-[15px] w-full text-center !h-[40px] mt-[50px]"
          >
            Sign In
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default Signin;
