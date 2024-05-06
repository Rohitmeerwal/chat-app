"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import instance from "@/axiosinstance";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Link from "next/link";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";

const formSchema = z.object({
  fullName: z.string().min(2).max(20),
  userName: z.string().min(2).max(10),
  password: z.string(),
  cpassword: z.string(),
  gender: z.string(),
  profilePic: z.any(),
});

const SigninForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      userName: "",
      password: "",
      cpassword: "",
      gender: "",
      profilePic: null,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const formData = new FormData();
      formData.append("fullName", values.fullName);
      formData.append("userName", values.userName);
      formData.append("password", values.password);
      formData.append("cpassword", values.cpassword);
      formData.append("gender", values.gender);
      formData.append("profilePic", values.profilePic); 
      const res = await instance.post("/users/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("register successfully");
      router.push("/main");
      form.reset();
    } catch (error) {
      toast.error("something wrong in register");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-2xl font-semibold text-center text-dark-300">
          Register Form
        </h1>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8"
              encType="multipart/form-data"
            >
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fullname</FormLabel>
                      <Input placeholder="Fullname" {...field} />
                      <FormMessage />
                    </FormItem>
                  )}
                />
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
              </div>
              <div className="grid grid-cols-2 gap-4">
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
                <FormField
                  control={form.control}
                  name="cpassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <Input
                        placeholder="Confirm Password"
                        type="password"
                        {...field}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      value={field.value}
                      onValueChange={(value) => {
                        field.onChange(value);
                      }}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup className="bg-blue-800 text-white">
                          <SelectItem value="male">male</SelectItem>
                          <SelectItem value="female">female</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="profilePic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>profilePic</FormLabel>
                    <Input placeholder="profilePic" type="file" onChange={(e) => field.onChange(e.target.files?.[0])}/>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col gap-5 justify-center">
                <Button
                  type="submit"
                  className="bg-blue-800 hover:bg-blue-300 text-white"
                >
                  Submit
                </Button>
                <Link href="/auth/login">Already have an account</Link>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
