import Button from "@/shared/ui/button/button";
import Input from "@/shared/ui/input/input";
import { signIn } from "auth-astro/client";
import { useEffect, useRef, type FormEvent } from "react";

interface SignInFormProps {
  handleClick: () => void;
}

export default function SignInForm({ handleClick }: SignInFormProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", "wait@gmail.com");

    console.log("hello", formData);

    const a = await signIn("mailgun", {}, formData);

    console.log(a);
  };

  return (
    <div
      className="absolute top-0 w-[100vw] h-[100vh] z-10 backdrop-blur-xl"
      onClick={handleClick}
    >
      <div
        role="dialog"
        onClick={(e) => e.stopPropagation()}
        className="absolute p-8 w-100 bg-gray-200 z-50 top-[50%] left-[50%] -translate-[50%] rounded-3xl"
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 mb-3 items-center"
        >
          <Input ref={inputRef} label="Name" type="text" name="username" />
          <Input
            label="Email"
            type="text"
            name="email"
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          />
          <Button className="mt-6" type="submit">
            Sign in
          </Button>
        </form>
        <Button
          className="block mx-auto"
          variant="blue"
          onClick={() => signIn("google")}
        >
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}
