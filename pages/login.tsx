import { useMutation } from "@/libs/client/useMutation";
import { FieldErrors, useForm, UseFormRegisterReturn } from "react-hook-form";

interface TLoginForm {
  email: string;
}

const Input = ({
  placeHolder,
  register,
}: {
  placeHolder: string;
  register: UseFormRegisterReturn;
}) => {
  return (
    <div className="w-full">
      <input
        className="bg-white focus:outline-sky-200 w-full px-4 py-2 rounded-md"
        {...register}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default function Login() {
  const { register, handleSubmit } = useForm<TLoginForm>();
  const { mutation } = useMutation("/api/users/enter");
  const onSubmit = (data: TLoginForm) => {
    mutation(data);
  };

  return (
    <div className="px-4">
      <div className="text-2xl font-bold text-center pt-8 pb-4">LOGIN</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2">
          <Input
            placeHolder="e-mail"
            register={register("email", { required: true })}
          />
        </div>
        <input
          className="px-2 py-4 bg-blue-400 w-full rounded-md mt-4"
          type="submit"
        />
      </form>
    </div>
  );
}
