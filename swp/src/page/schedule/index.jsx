import { Breadcrumb, Button } from "antd";
import React, { useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined, CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Box, Flex, Input, Text, useDisclosure } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer } from "@chakra-ui/react";
``;
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import api from "../../config/axios";
import { useSelector } from "react-redux";
const schedulesData = [
  {
    id: 1,
    time: "05:30",
  },
  {
    id: 2,
    time: "08:00",
  },
  {
    id: 3,
    time: "12:30",
  },
  {
    id: 4,
    time: "13:15",
  },
  {
    id: 5,
    time: "15:30",
  },
];

const Schedule = () => {
  const currentUser = useSelector((store) => store.user);
  const [schedules, setSchedules] = useState(schedulesData);

  const handleDelete = async (id) => {
    if (confirm("Do you want to delete this schedule?")) {
      const response = await api.delete(`/schedule/deleteSchedule/${id}`);
      console.log(response);
      setSchedules((prev) => {
        return prev.filter((schedule) => schedule.id != id);
      });
      toast.success("Delete schedule successfully!");
    }
  };

  const handleAdd = async (time) => {
    if (schedules.find((item) => item.time === time)) {
      toast.error("Schedule already exist!");
    } else {
      const response = await api.post(`/schedule/createSchedule`, {
        time: `${time}:00`,
      });
      console.log(response.data);
      setSchedules((prev) => {
        return [
          ...prev,
          {
            id: prev.length + 1,
            time: time,
          },
        ];
      });
      toast.success("Add new schedule successfully!");
    }
  };

  const handleAddPackage = async (values) => {
    console.log(values);
    const response = await api.post("/schedule/createSchedule", values);
    toast.success("Successfully create new package");
    console.log(response.data);
  };

  const handleEdit = async (id, time) => {
    if (schedules.find((item) => item.time === time)) {
      toast.error("Schedule already exist!");
    } else {
      console.log(time);
      const response = await api.put(`/schedule/updateSchedule/${id}`, {
        time: `${time}:00`,
      });

      console.log(response);

      setSchedules((prev) => {
        return prev.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              time: time,
            };
          }
          return item;
        });
      });
      toast.success("Update schedule successfully!");
    }
  };

  const Row = ({ id, time }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [currentTime, setCurrentTime] = useState(time);

    const handleSave = () => {
      handleEdit(id, currentTime);
      setIsEdit(false);
    };

    return (
      <Tr>
        <Td>
          {isEdit ? (
            <Input
              type="time"
              value={currentTime}
              w="120px"
              h="40px"
              fontSize="lg"
              onChange={(e) => setCurrentTime(e.target.value)}
            />
          ) : (
            time
          )}
        </Td>
        <Td textAlign="right">
          {isEdit ? (
            <>
              <Button shape="circle" onClick={handleSave} mr={2}>
                <CheckOutlined />
              </Button>
              <Button shape="circle" color="red" onClick={() => setIsEdit(false)}>
                <CloseOutlined />
              </Button>
            </>
          ) : (
            <>
              <Button shape="circle" onClick={() => setIsEdit(true)} mr={2}>
                <EditOutlined />
              </Button>
              <Button shape="circle" color="red" onClick={() => handleDelete(id)}>
                <DeleteOutlined />
              </Button>
            </>
          )}
        </Td>
      </Tr>
    );
  };

  const AddButton = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [newTime, setNewTime] = useState("12:00");
    return (
      <>
        <Button type="primary" onClick={onOpen}>
          Add
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add new schedule</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex justifyContent="center" mt={10} flexDir="column" alignItems="center" gap={5}>
                <Input
                  placeholder="Select time"
                  type="time"
                  w="120px"
                  h="40px"
                  fontSize="lg"
                  value={newTime}
                  onChange={(e) => setNewTime(e.target.value)}
                />
              </Flex>
            </ModalBody>

            <ModalFooter display="flex" gap={5}>
              <Button type="primary" danger onClick={onClose}>
                Cancel
              </Button>
              <Button type="primary" onClick={() => handleAdd(newTime, new Date(newDate))}>
                Add
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };

  const fetchSchedule = async () => {
    const response = await api.get(`/schedule/getSchduleByHost/${currentUser.id}`);
    setSchedules(response.data);
  };

  useEffect(() => {
    fetchSchedule();
  }, []);

  return (
    <div>
      <Flex justifyContent="space-between">
        <Text fontSize="3xl" mb={5}>
          Schedules
        </Text>
        <Box>
          <AddButton />
        </Box>
      </Flex>

      <TableContainer>
        <Table variant="simple" size="lg">
          <Thead>
            <Tr>
              <Th>Time</Th>
              <Th textAlign="right">Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {schedules
              .filter((item) => !item.deleted)
              .sort((item1, item2) => {
                return new Date(`01/01/2024 ${item1.time}`) - new Date(`01/01/2024 ${item2.time}`);
              })
              .map((schedule, index) => {
                return <Row key={`schedule-${index}`} time={schedule.time} id={schedule.id} />;
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Schedule;
