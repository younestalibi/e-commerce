import './OrdersList.css'

import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
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
    title: "Phone",
    dataIndex: "phone",
  },
  {
    title: "City",
    dataIndex: "city",
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },
  {
    title: "Total",
    dataIndex: "total",
  },
  {
    title: "Status",
    dataIndex: "status",
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
    // Create a new list with unique batch IDs and calculate total quantity per batch
  const uniqueBatchOrders = [];

  orders.forEach((item) => {
    item.forEach((order)=>{
      const { batch_id, quantity,price, user,first_name,last_name, email, phone,address,city,zipCode ,status} = order;
    let foundBatch = false;
    console.log(order.firstName)

    for (let i = 0; i < uniqueBatchOrders.length; i++) {
      if (uniqueBatchOrders[i].batch_id == batch_id) {
        uniqueBatchOrders[i].totalQuantity += quantity; // Increment the quantity by one
        uniqueBatchOrders[i].amount+=price*quantity
        foundBatch = true;
        break;
      }
    }
    console.log(typeof(price*quantity))
    console.log(price*quantity)

    if (!foundBatch) {
      uniqueBatchOrders.push({
        batch_id,
        firstName:first_name,
        lastName:last_name,
        phone,
        status,
        city,
        amount:quantity*price, 
        totalQuantity: quantity,
        user
      });
    }
    })
    
  });

// Print the new list with unique batch IDs and total quantities
console.log(uniqueBatchOrders);

 for (let item of uniqueBatchOrders) {
    data1.push({
      key: item.batch_id,
      name: item.firstName+' '+item.lastName,
      city: item.city,
  //     product: (
  //       <Link to={`/admin`}>
  //         View Orders
  //       </Link>
  //     ),
  //     amount: orders[i].quantity*orders[i].product.price,
      phone: item.phone,
      amount: item.totalQuantity,
      total: `${item.amount}Dh`,
      status:
      <span
        style={{
          backgroundColor: item.status === 'pending' ? 'red' : item.status==='processing'?'green':item.status==='delivered'?'gray':item.status==='cancelled'&&'orange', 
          color: 'white',
          padding: '4px 8px',
          borderRadius: '4px',
          display: 'inline-block',
        }}
      >
        {item.status}
      </span>,
      action: (
        <>
          <Link to={`/admin/view-order/${item.batch_id}`} className=" fs-3 text-danger">
            <AiFillEye />
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
