import { Button, Calendar, DatePicker, Form, Input, Select, theme } from "antd";
import Item from "antd/es/list/Item";
import React, { useEffect, useState } from "react";
import api from "../../config/axios";
import { useDispatch, useSelector } from "react-redux";
import { updateInformation } from "../../redux/features/bookingSlice";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";

export const FillInformation = ({ form, setCurrent, current }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [dateError, setDateError] = useState("");
  const [schedule, setSchedule] = useState([]);
  const dispatch = useDispatch();
  const { token } = theme.useToken();
  const info = useSelector((store) => store.booking.information);
  const params = useParams();
  const fetchSchedule = async () => {
    const response = await api.get(`/schedule/getSchduleByHost/${params.id}`);
    setSchedule(
      response.data.map((item) => {
        return {
          label: item.time,
          value: item.id,
        };
      })
    );
  };

  // useEffect(() => {
  //   fetchSchedule();
  //   if (info && typeof info.date === "string") {
  //     info.date = info.date ? dayjs(info.date) : null;
  //   }
  //   form.setFieldsValue(info);
  // }, [info]);

  useEffect(() => {
    fetchSchedule();
    if (info && typeof info.date === "string") {
      const updatedInfo = { ...info, date: info.date ? dayjs(info.date) : null };
      form.setFieldsValue(updatedInfo);
    }
  }, [info]);

  const onFinish = (values) => {
    console.log(schedule.filter((item) => item.value === values.scheduleId)[0]?.label);
    values.time = schedule.filter((item) => item.value === values.scheduleId)[0]?.label;
    console.log("Received values of form:", values);
    dispatch(updateInformation(values));
    setCurrent(current + 1);
  };

  return (
    <>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item
          label="User Name"
          name="username"
          rules={[{ required: true, message: "Please input your user name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Email" name="email" rules={[{ required: true, message: "Please input your Email!" }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          name="phoneNumber"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Venue" name="venue" rules={[{ required: true, message: "Please input your Venue" }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Note" name="note" rules={[{ required: true, message: "Please input your Note" }]}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Date" name="date" rules={[{ required: true, message: "Please input your date" }]}>
          <DatePicker />
        </Form.Item>
        <Form.Item label="time" name={"scheduleId"} rules={[{ required: true, message: "Please input your schedule" }]}>
          {/* <Calendar
            onChange={(value) => {
              console.log(value);
              form.setFieldValue("date", value.$d);
            }}
            fullscreen={false}
            onPanelChange={onPanelChange}
          /> */}
          <Select
            style={{
              width: 120,
            }}
            options={schedule}
          />
        </Form.Item>
      </Form>
    </>
  );
};
export default FillInformation;
