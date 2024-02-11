import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";
import { verifyToken } from "../utils/verifyToken";

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "A-0001",
      password: "admin123",
    },
  });

  const [login, { error }] = useLoginMutation();

  console.log("error =>", error);

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("User logging in...");

    try {
      const res = await login(data).unwrap();

      const user = verifyToken(res.data.accessToken) as TUser;

      // use redux to store user data
      dispatch(setUser({ user: user, token: res.data.accessToken }));

      toast.success("User logged in successfully", {
        id: toastId,
        duration: 2000,
      });
      // navigate home
      navigate(`/${user?.role}/dashboard`);
    } catch (err) {
      toast.error("something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <PHForm onSubmit={onSubmit}>
      <div>
        <label htmlFor="id">Id:</label>
        <input type="text" id="id" {...register("id")} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" {...register("password")} />
      </div>

      <Button htmlType="submit">Login</Button>
    </PHForm>
  );
};

export default Login;
