import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";
import { signIn } from "auth-astro/client";
import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { credentialsSchema } from "@/widgets/auth/model/credentials";
import type { z } from "astro:schema";

type SignInFormFields = z.infer<typeof credentialsSchema>;
type SignInFormErrors = { [K in keyof SignInFormFields]?: string[] };

export default function SignInForm() {
  const [data, setData] = useState<SignInFormFields>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<SignInFormErrors>({});

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = credentialsSchema.safeParse(data);

    if (!result.success) {
      setErrors(result.error.formErrors.fieldErrors);

      return;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const result = credentialsSchema.safeParse(data);

    if (!result.success) {
      setErrors(result.error.formErrors.fieldErrors);
    } else {
      setErrors({});
    }

    setData({ ...data, [e.target.name]: e.target.value });
  };

  //handle blur

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 mb-3 items-center"
      >
        <Input
          onChange={handleChange}
          value={data.email}
          ref={inputRef}
          label="Email"
          type="email"
          name="email"
          required
          errors={errors.email}
        />
        <Input
          onChange={handleChange}
          value={data.password}
          label="Password"
          type="password"
          name="password"
          required
          errors={errors.password}
        />
        <Button className="mt-6" type="submit">
          sign up
        </Button>
      </form>
      {/* to a separate component */}
      <div className="flex flex-col gap-3">
        <Button
          leftIcon={<img src="sprite/google.svg" alt="" />}
          className="mx-auto"
          variant="dark"
          onClick={() => signIn("google")}
        >
          sign in with Google
        </Button>
        <Button
          leftIcon={<img src="sprite/yandex.svg" alt="" />}
          className="mx-auto"
          variant="accent-2"
          onClick={() => signIn("yandex")}
        >
          sign in with Yandex
        </Button>
      </div>
    </div>
  );
}
