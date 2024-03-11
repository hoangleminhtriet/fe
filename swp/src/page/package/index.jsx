
import React, { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Collapse,
  Table,
  Button,
  Space,
  Modal,
  Form,
  Input,
  InputNumber,
  Select,
  Cascader,
  TreeSelect,
  DatePicker,
  Row,
  Col,
  Upload,
  Image,
  Descriptions,
} from "antd";
import "bootstrap/dist/css/bootstrap.css";
import TextArea from "antd/es/input/TextArea";
import { useForm } from "antd/es/form/Form";
import api from "../../config/axios";
import uploadFile from "../../utils/upload";
import { toast } from "react-toastify";

const { Panel } = Collapse;

const ActionButtons = ({ onEdit, handleDelete }) => (
  <Space>
    <Button type="primary" onClick={onEdit}>
      Edit
    </Button>
    <Button type="danger" onClick={handleDelete}>
      Delete
    </Button>
  </Space>
);

const Service = ({ data, fetchPackage }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [form] = useForm();

  const handleEdit = () => {
    // Logic to edit the action
    console.log("Edit button clicked");
    setModalVisible(true);
  };

  const handleDelete = async (record) => {
    try {
      const response = await api.delete(`/service/deleteService/${record.id}`);
      console.log(response.data);

      const newData = dataSource.filter((item) => item.id !== record.id);
      setDataSource(newData);
      message.success("Deleted successfully");
    } catch (error) {
      console.error("Error deleting packageID:", error);
      message.error("Failed to delete packageID");
    }
  };
  useEffect(() => {
    fetchPackage();
  }, []);

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  const handleModalOk = () => {
    // Logic to handle modal OK button click (save changes)
    console.log("Modal OK button clicked");
    setModalVisible(false);
  };

  const columns = [
    {
      title: "Service",
      dataIndex: "serviceName",
      key: "serviceName",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Picture",
      dataIndex: "picture",
      key: "picture",
      render: (value) => {
        return <Image src={value} width={100} />;
      },
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <>
          <ActionButtons onEdit={() => handleEdit(record.key)} onDelete={() => handleDelete(record.key)} />
        </>
      ),
    },
  ];

  const handleSubmmitService = async (values) => {
    console.log(values);
    if (values.picture.file) {
      const url = await uploadFile(values.picture.file.originFileObj);
      values.picture = url;
    }
    values.packageId = data.id;
    const response = await api.post("/service/createService", values);
    form.resetFields();
    setModalVisible(false);
    toast.success("Successfully create new service");
    fetchPackage();
  };

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf("/") + 1));
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  return (
    <div>
      <Descriptions title="Package Info" size="2">
        <Descriptions.Item label={"picture"}>
          <Image src={data.picture} width={100} />
        </Descriptions.Item>
        <Descriptions.Item label={"name"}>{data.name}</Descriptions.Item>
        <Descriptions.Item label={"capacity"}>{data.capacity}</Descriptions.Item>
        <Descriptions.Item label={"category"}>{data.category}</Descriptions.Item>
        <Descriptions.Item label={"Description"}>{data.description}</Descriptions.Item>
      </Descriptions>
      <Button
        onClick={() => {
          setModalVisible(true);
        }}
      >
        Add new Service
      </Button>
      <Table columns={columns} dataSource={data.services} />
      <Modal title="Edit Action" visible={modalVisible} onOk={() => form.submit()} onCancel={handleModalCancel}>
        {/* Form fields for editing action details */}
        <Form
          form={form}
          labelCol={{
            span: 24,
          }}
          onFinish={handleSubmmitService}
        >
          <Form.Item
            label="Service Name"
            name={"serviceName"}
            rules={[
              {
                required: true,
                message: "Input serviceName!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Row gutter={12}>
            <Col span={8}>
              {" "}
              <Form.Item
                label="Price"
                name={"price"}
                rules={[
                  {
                    required: true,
                    message: "Input price!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              {" "}
              <Form.Item
                label="Quantity"
                name={"quantity"}
                rules={[
                  {
                    required: true,
                    message: "Input quantity!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Category"
                name={"category"}
                rules={[
                  {
                    required: true,
                    message: "Input category!",
                  },
                ]}
              >
                <Select
                  style={{ width: "100%" }}
                  placeholder="Select category"
                  options={[
                    {
                      label: "Food",
                      value: "FOOD",
                    },
                    {
                      label: "Game",
                      value: "GAME",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item name={"picture"} label="Picture">
            <Upload
              action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
              maxCount={1}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
          </Form.Item>
          {/* Add more form fields as needed */}
        </Form>
      </Modal>

      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </div>
  );
};

// const AddPackage = () => {
//   return  <>
//       <div>

//       </div>
//     </>
// };
const PackageDetail = () => {
  return (
    <>
      <strong>Name</strong>
    </>
  );
};

const Package = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const [packages, setPackages] = useState([]);
  const handleCancel = () => setPreviewOpen(false);
  const [form] = useForm();
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf("/") + 1));
  };
  const handleChangeImage = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  const handleModalOk = () => {
    // Logic to handle modal OK button click (save changes)
    console.log("Modal OK button clicked");
    setModalVisible(false);
  };

  const handleChange = (key) => {
    console.log(key);
  };

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleAddPackage = async (values) => {
    console.log(values);
    if (values.picture.file) {
      const url = await uploadFile(values.picture.file.originFileObj);
      values.picture = url;
    }
    const response = await api.post("/package/postNewPackage", values);
    toast.success("Successfully create new package");
    form.resetFields();
    setModalVisible(false);
    fetchPackage();
  };

  const fetchPackage = async () => {
    const response = await api.get("/package/getPackages");
    setPackages(response.data);
  };

  useEffect(() => {
    fetchPackage();
  }, []);

  return (
    <div>
      <Button type="primary" onClick={() => setModalVisible(true)}>
        Add Package{" "}
      </Button>

      <Collapse
        items={packages.map((item) => {
          return {
            key: item.id,
            label: item.description,
            children: <Service data={item} fetchPackage={fetchPackage} />,
          };
        })}
        defaultActiveKey={["1"]}
        onChange={handleChange}
      />

      <Modal title="Add Package" visible={modalVisible} onOk={() => form.submit()} onCancel={handleModalCancel}>
        {/* Form fields for editing package details */}
        <Form
          form={form}
          labelCol={{
            span: 24,
          }}
          onFinish={handleAddPackage}
        >
          <Form.Item
            label="Package Name"
            name={"name"}
            rules={[
              {
                required: true,
                message: "Input name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name={"description"}
            rules={[
              {
                required: true,
                message: "Input description!",
              },
            ]}
          >
            <TextArea />
          </Form.Item>
          <Row gutter={12}>
            <Col span={12}>
              <Form.Item
                label="Capacity"
                name={"capacity"}
                rules={[
                  {
                    required: true,
                    message: "Input capacity!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Category"
                name={"category"}
                rules={[
                  {
                    required: true,
                    message: "Input category!",
                  },
                ]}
              >
                <Select
                  style={{ width: "100%" }}
                  placeholder="Select category"
                  options={[
                    {
                      label: "Food",
                      value: "FOOD",
                    },
                    {
                      label: "Game",
                      value: "GAME",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item name={"picture"} label={"Picture"}>
            <Upload
              action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChangeImage}
              maxCount={1}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
          </Form.Item>

          {/* Add more form fields as needed */}
        </Form>
      </Modal>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img
          alt="example"
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal>
    </div>
  );
};

export default Package;
