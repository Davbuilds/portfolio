"use client";
import React from 'react';
import { Form, Input, Checkbox, Button } from 'antd';

const Page = () => {
  return (
    <section className="bg-[#6463621A] min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md border border-slate-800 rounded-lg shadow-sm p-8">
        <h1 className="text-2xl font-bold mb-6 text-[#1c1c1c] font-sen">Sign in to your account</h1>

        {/* Form section */}
        <Form
          name="login"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={(values) => console.log(values)} // Handle form submission
        >
          {/* Email Field */}
          <Form.Item
            label={<span className="text-sm text-[#1c1c1c] font-sen">Your Email</span>}
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input
              type="email"
              placeholder="name@company.com"
              className="bg-[#0516610F]  rounded-md p-2 border-none"
            />
          </Form.Item>

          {/* Password Field */}
          <Form.Item
            label={<span className="text-sm text-[#1c1c1c] font-sen outline-none">Password</span>}
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              placeholder="••••••••"
             className="bg-[#0516610F]  rounded-md p-2 border-none"
            />
          </Form.Item>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between mb-4">
            <Form.Item
              name="remember"
              valuePropName="checked"
              noStyle
              className='bg-black'
            >
              <Checkbox className="text-[#1c1c1c] font-sen">Remember me</Checkbox>
            </Form.Item>
            <a
              href="#"
              className="text-sm text-[#1c1c1c] hover:underline font-sen "
            >
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <Form.Item>
            <Button
              htmlType="submit"
              className="w-full text-center border-none outline-none text-white bg-[#051661] font-sen"
            >
              Sign in
            </Button>
          </Form.Item>

          {/* Sign Up Link */}
          <p className="text-sm text-gray-500 text-center font-sen">
            Don’t have an account yet?{' '}
            <a
              href="#"
              className=" font-sen text-primary-600 hover:underline dark:text-primary-500"
            >
              Sign up
            </a>
          </p>
        </Form>
        
      </div>
    </section>
  );
};

export default Page;
