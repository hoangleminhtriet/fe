import React, { useState, useContext } from "react";
import { Button, message, Steps, ConfigProvider, Form, Input } from "antd";

import "./checkout.css";
import Checkout from "./Checkout";
import Payment from "./payment";
import FillInformation from "./fill-information";
import ChoosePackage from "./choose-package";
import ChooseServices from "./choose-services";
import api from "../../config/axios";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../redux/features/bookingSlice";

const { Step } = Steps;
const { Item } = Form;

const StepProgress = () => {
  const [current, setCurrent] = useState(0);
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls("steps", "ant-steps");
  const [form] = Form.useForm();
  const [cartItems, setCartItems] = useState([]);
  const booking = useSelector((store) => store.booking);
  const dispatch = useDispatch();
  const steps = [
    {
      title: "Packages",
      content: <ChoosePackage />,
    },
    {
      title: "Services",
      content: <ChooseServices />,
    },
    {
      title: "Fill information",
      content: <FillInformation form={form} setCurrent={setCurrent} current={current} />,
    },
    {
      title: "Checkout",
      content: <Checkout setCartItemsIndex={setCartItems} />,
    },
    {
      title: "Payment",
      content: <Payment />,
    },
  ];
  const next = () => {
    if (current === 2) {
      form.submit();
    } else {
      setCurrent(current + 1);
    }
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const calcTotal = () => {
    var subtotal = 0;
    cartItems.forEach((item) => {
      subtotal += item.price * item.quantity;
    });
    alert(subtotal);

    return subtotal;
  };

  const handlePayment = async () => {
    console.log(booking);
    console.log({
      totalPrice: calcTotal(),
      packageId: booking.package.id,
      nameReceiver: booking?.information?.username,
      phone: booking?.information?.phoneNumber,
      email: booking?.information?.email,
      venue: booking?.information?.venue,
      additionalNotes: booking?.information?.note,
      schedule: booking?.information?.scheduleId,
    });
    const response = await api.post("/api/order/create-payment", {
      // totalPrice: calcTotal() * 25000,
      // packageId: booking.package.id,
      // nameReceiver: booking?.information?.username,
      // phone: booking?.information?.phoneNumber,
      // email: booking?.information?.email,
      // venue: booking?.information?.venue,
      // additionalNotes: booking?.information?.note,
      // scheduleId: booking?.information?.scheduleId,
      // orderDetailDTOList: booking.services.map((item) => item.id),
      packageList: [booking.package.id],
      serviceList: booking.services.map((item) => item.id),
      total: calcTotal(),
      scheduleId: booking?.information?.scheduleId,
      dateBook: booking?.information?.date,
    });
    console.log(response);
    dispatch(reset());
    window.open(response.data, "_self");
  };
  return (
    <div>
      <div className="container container-progress">
        <Steps current={current} className={prefixCls}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className={`${prefixCls}-content`}>
          {typeof steps[current].content === "function" ? steps[current].content() : steps[current].content}
        </div>
        <div style={{ marginTop: 24 }}>
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={handlePayment}>
              Done
            </Button>
          )}

          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepProgress;
