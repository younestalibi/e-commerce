import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getIndividualOrders, updateStatus } from "../../../Provider/Features/Order/orderSlice";
import { Descriptions, Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";
import { useState } from "react";

const columns = [
    {
      title: "SNo",
      dataIndex: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Color",
      dataIndex: "color",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
    },
    {
      title: "Total",
      dataIndex: "total",
    },
    {
      title: "Image",
      dataIndex: "image",
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];
  
const ViewOrder = () => {
    const {batch}=useParams()
    const {orderlist,isLoading}=useSelector((state)=>state.order)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getIndividualOrders(batch))
    },[])
    

    // console.log(orderlist[0])
    // const han=()=>{
    //     dispatch(getIndividualOrders(batch))
    // }
    const data1 = [];
    if(orderlist){
        for (let [index,item] of orderlist.entries()) {
            data1.push({
              key: index + 1,
              name: item.product.name,
              // brand: products[i].brand.name,
              // category: products[i].category.name,
              color: <span style={{backgroundColor:item.product.color,padding:'0 27px',margin:'auto',borderRadius:'4px'}}></span>,
              price: `${item.product.price}Dh`,
              quantity: `${item.quantity}`,
              total:`${item.quantity*item.product.price}Dh`,
              image:
              <img style={{width:'60px',height:'60px',objectFit:"cover"}} 
              src={`${import.meta.env.VITE_SERVER_URL}/storage/${item.product.images.length>0 && item.product.images[0].image_path}`}/>,
              action: (
                <>
                  <Link to={`/admin/form-product/${ item.id}`} className=" fs-3 text-danger">
                      <AiFillEye />
                  </Link>
                </> 
              ),
            });
          }
    }

    const [selectedStatus, setSelectedStatus] = useState('');
    const statusOptions = ['pending', 'processing', 'delivered', 'cancelled'];
    useEffect(()=>{
        if(orderlist){
            setSelectedStatus(orderlist[0].status)
        }
    },[orderlist])
    const updateStatusOrders = () => {
        console.log(selectedStatus)
        const status={
            batchID:batch,
            newStatus:selectedStatus
        }
        dispatch(updateStatus(status))
        // axios
        // .put(`/orders/batch/${batchId}/status/${selectedStatus}`)
        // .then(response => {
        //     console.log(response.data.message);
        // })
        // .catch(error => {
        //     console.error(error);
        // });
    };
    return ( 
        <div>
        <Descriptions  style={{fontWeight:'bold'}}  bordered={true}   title="User Info" layout="vertical">
            <Descriptions.Item  label="UserName">{orderlist&&orderlist[0].first_name+" "+orderlist[0].last_name}</Descriptions.Item>
            <Descriptions.Item  label="Picture">
                <img style={{width:'100px',height:'100px',objectFit:'contain'}} src="http://localhost:8000/images/default-profile.jpg" alt="user image" />
            </Descriptions.Item>
            <Descriptions.Item label="Telephone">{orderlist&&orderlist[0].phone}</Descriptions.Item>
            <Descriptions.Item label="Email">{orderlist&&orderlist[0].email}</Descriptions.Item>
            <Descriptions.Item label="Live" >{orderlist&&orderlist[0].city}</Descriptions.Item>
            <Descriptions.Item label="Address">{orderlist&&orderlist[0].address}</Descriptions.Item>
        </Descriptions>
            
            <div className="mt-5">
                <div className="fw-bold text-muted">Orders</div>
                <Table columns={columns} loading={isLoading} dataSource={data1} />  
            </div>
            <div className="container mx-auto p-4">

                <div className="mb-4">
                <label htmlFor="status" className="block font-medium text-gray-700 mb-1">
                    Select Status:
                </label>
                <select
                    id="status"
                    className="p-2 form-control rounded"
                    value={selectedStatus}
                    onChange={e => setSelectedStatus(e.target.value)}
                >
                    {statusOptions.map(status => (
                    <option key={status} value={status}>
                        {status}
                    </option>
                    ))}
                </select>
                </div>
                <button
                    className="btn btn-info "
                    onClick={updateStatusOrders}
                    >
                    Update Status
                    </button>

            </div>
        
        </div>
     );
}
 
export default ViewOrder;