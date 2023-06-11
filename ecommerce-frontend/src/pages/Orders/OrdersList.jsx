import './OrdersList.css'

import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { getOrders } from '../../Provider/Features/Order/orderSlice';
// import { getOrders } from "../features/auth/authSlice";
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },
  {
    title: "Date",
    dataIndex: "date",
  },

  {
    title: "Action",
    dataIndex: "action",
  },
];

const OrdersList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, []);
  const {isSuccess,isError,isLoading,orders} = useSelector((state) => state.order);
  console.log(orders);

  const data1 = [];
  for (let i = 0; i < orders.length; i++) {
    data1.push({
      key: i + 1,
      name: orders[i].user.name,
      product: (
        <Link to={`/admin`}>
          View Orders
        </Link>
      ),
      amount: orders[i].quantity*orders[i].product.price,
      date: new Date(orders[i].created_at).toLocaleString(),
      action: (
        <>
          <Link to="/" className=" fs-3 text-danger">
            <BiEdit />
          </Link>
          <Link className="ms-3 fs-3 text-danger" to="/">
            <AiFillDelete />
          </Link>
        </>
      ),
    });
  }
  return (
    <div>
      <h3 className="mb-4 title">Orders</h3>
      <div>{<Table columns={columns} loading={isLoading} dataSource={data1} />}</div>
    </div>
  );
};

export default OrdersList;
