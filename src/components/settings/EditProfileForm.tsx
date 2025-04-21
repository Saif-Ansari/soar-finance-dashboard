import React from "react";
import { Form, Input, Button, DatePicker, Avatar } from "antd";
import { EditOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

const EditProfileForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Submitted values:", {
      ...values,
      dateOfBirth: values.dateOfBirth?.format("YYYY-MM-DD"),
    });
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        fullName: "Charlene Reed",
        username: "Charlene Reed",
        email: "charlenereed@gmail.com",
        password: "********",
        dateOfBirth: dayjs("1990-01-25"),
        presentAddress: "San Jose, California, USA",
        permanentAddress: "San Jose, California, USA",
        city: "San Jose",
        postalCode: "45962",
        country: "USA",
      }}
      className="flex flex-col md:flex-row gap-6 py-2"
    >
      <div className="flex justify-center md:w-1/6">
        <div className="relative mx-auto md:mx-0 w-24 h-24">
          <Avatar
            size={96}
            src="https://randomuser.me/api/portraits/women/44.jpg"
            className="w-full h-full"
          />
          <div className="absolute -bottom-1 -right-1 bg-black rounded-full w-6 h-6 flex items-center justify-center cursor-pointer shadow-md">
            <EditOutlined className="text-white text-xs" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
        <Form.Item
          name="fullName"
          label="Your Name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input placeholder="Your name" />
        </Form.Item>

        <Form.Item
          name="username"
          label="User Name"
          rules={[{ required: true, message: "Please enter your username" }]}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Enter a valid email" },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item
          name="dateOfBirth"
          label="Date of Birth"
          rules={[{ required: true, message: "Please select your birth date" }]}
        >
          <DatePicker className="w-full" format="DD MMMM YYYY" />
        </Form.Item>

        <Form.Item
          name="presentAddress"
          label="Present Address"
          rules={[{ required: true, message: "Please enter present address" }]}
        >
          <Input placeholder="Present address" />
        </Form.Item>

        <Form.Item
          name="permanentAddress"
          label="Permanent Address"
          rules={[
            { required: true, message: "Please enter permanent address" },
          ]}
        >
          <Input placeholder="Permanent address" />
        </Form.Item>

        <Form.Item
          name="city"
          label="City"
          rules={[{ required: true, message: "Please enter city" }]}
        >
          <Input placeholder="City" />
        </Form.Item>

        <Form.Item
          name="postalCode"
          label="Postal Code"
          rules={[{ required: true, message: "Please enter postal code" }]}
        >
          <Input placeholder="Postal Code" />
        </Form.Item>

        <Form.Item
          name="country"
          label="Country"
          rules={[{ required: true, message: "Please enter country" }]}
        >
          <Input placeholder="Country" />
        </Form.Item>

        <div className="col-span-1 md:col-span-2 flex justify-center md:justify-end mt-2">
          <Button
            type="primary"
            htmlType="submit"
            className="bg-black hover:bg-gray-800 px-6 py-2 text-white rounded-xl"
          >
            Save
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default EditProfileForm;
