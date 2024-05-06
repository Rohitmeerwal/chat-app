"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import instance from "@/axiosinstance";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Link from "next/link";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const formSchema = z.object({
  userName: z.string().min(2).max(10),
  password: z.string(),
});
const LoginForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      password: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const res = await instance.post("/users/login", values);
      toast.success("Login  successfully");
      router.push("/main");
      form.reset();
    } catch (error) {
      toast.error("something went wrong ");

    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <h1 className="text-3xl font-semibold text-center text-gray-300">
            Login form
          </h1>
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="userName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <Input placeholder="Username" {...field} />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* </div>
              <div className="grid grid-cols-2 gap-4"> */}
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <Input
                          placeholder="Password"
                          type="password"
                          {...field}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-5 justify-center">
                  <Button
                    type="submit"
                    className="bg-blue-800 hover:bg-blue-300 text-white"
                  >
                    Submit
                  </Button>
                  <Link href="/auth/signin">Create an account</Link>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
