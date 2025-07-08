import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";
import { signIn } from "auth-astro/client";
import { useEffect, useRef, type FormEvent } from "react";
import { credentialsSchema } from "@/widgets/auth/model/credentials";

interface SignInFormProps {}

export default function SignInForm() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const result = credentialsSchema.safeParse();

    if (!result.success) {
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 mb-3 items-center"
      >
        <Input
          ref={inputRef}
          label="Email"
          type="email"
          name="email"
          required
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
        />
        <Input
          label="Password"
          type="password"
          name="password"
          required
          minLength={8}
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
