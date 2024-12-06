import React, { useEffect, useState } from "react";
import { fetchAllCharacters } from "../API/fetchCharacters";
import { Table, Typography, Image, Input, Button, Space } from "antd";
import { SearchOutlined, HeartOutlined } from "@ant-design/icons";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    render: (image) => <Image alt="" src={image} />,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => {
      return (
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            padding: 8,
          }}
        >
          <Space>
            <Input
              autoFocus
              placeholder="Search by name"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>

            <Button
              onClick={() => {
                clearFilters();
                confirm();
              }}
              type="danger"
            >
              Reset
            </Button>
          </Space>
        </div>
      );
    },
    filterIcon: () => {
      return <SearchOutlined />;
    },
    onFilter: (value, record) => {
      return record.name.toLowerCase().includes(value.toLowerCase());
    },
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Species",
    dataIndex: "species",
    key: "species",
  },
  {
    title: "Gender",
    key: "gender",
    dataIndex: "gender",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
];

const { Title } = Typography;

const CharactersTable = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllCharacters();
        setCharacters(data);
      } catch (error) {
        console.error("Error fetching characters:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Table
        columns={columns}
        dataSource={characters}
        pagination={{
          position: ["topRight"],
        }}
        bordered
        rowKey={"id"}
        loading={loading}
        scroll={{ x: "max-content" }}
        style={{ overflowX: 'auto' }} 
        title={() => (
          <div style={{ textAlign: "center" }}>
            <Title level={4}>
              Rick and Morty Characters <HeartOutlined />
            </Title>
          </div>
        )}
      />
    </>
  );
};

export default CharactersTable;