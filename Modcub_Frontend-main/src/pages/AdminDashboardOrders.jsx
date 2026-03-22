import React, { useEffect } from "react";
import AdminHeader from "../components/Layout/AdminHeader";
import AdminSideBar from "../components/Admin/Layout/AdminSideBar";
import { DataGrid } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfAdmin } from "../redux/actions/order";

const AdminDashboardOrders = () => {
  const dispatch = useDispatch();

  const { adminOrders, adminOrderLoading } = useSelector(
    (state) => state.order
  );

  console.log(adminOrders);
  useEffect(() => {
    dispatch(getAllOrdersOfAdmin());
  }, []);

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },
    {
      field: "createdAt",
      headerName: "Order Date",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },
    {
      field: "address1",
      headerName: "address1",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "address2",
      headerName: "address2",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "ZipCode",
      headerName: "ZipCode",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "Phone",
      headerName: "Phone",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "City",
      headerName: "City",
      minWidth: 200,
      flex: 1,
    },
  ];

  const row = [];
  adminOrders &&
    adminOrders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item?.cart?.reduce((acc, item) => acc + item.qty, 0),
        total: item?.totalPrice + " $",
        status: item?.status,
        createdAt: item?.createdAt.slice(0, 10),
        address1: item.shippingAddress?.address1,
        address2: item.shippingAddress?.address2,
        ZipCode: item.shippingAddress?.zipCode,
        Phone: item.shippingAddress?.phone,
        City: item.shippingAddress?.city,
      });
    });
  return (
    <div>
      <AdminHeader />
      <div className="w-full flex">
        <div className="flex  items-start justify-between w-full">
          <div className="w-[80px] 800px:w-[330px]">
            <AdminSideBar active={2} />
          </div>
          <div className="w-full flex flex-col">
            <div className="w-full flex bg-red-100 p-2">
              <h2 className="w-1/2 text-center text-xl ">Buyer</h2>
              {/* <div
                        className=""
                        style={{ width: "1px", background: "black" }}
                      ></div> */}
              <h2 className="w-1/2 text-center text-xl">Seller</h2>
            </div>
            <div className="w-full min-h-[45vh] rounded flex justify-center">
              <div className="w-[100%] flex justify-center">
                <div className="w-full min-h-[45vh]  rounded flex flex-col p-5 pt-0">
                  {adminOrders?.map((order, index) => (
                    <div className="w-full " key={index}>
                      <div className="w-[97%] flex justify-between">
                        {/* <DataGrid
                                rows={row}
                                columns={columns}
                                pageSize={10}
                                disableSelectionOnClick
                                autoHeight
                            /> */}
                        <div className="w-1/2 pt-2">
                          <h2> Order Id: {order._id}</h2>
                          <div className="flex justify-between pr-4">
                            <h2> User Name: {order?.user?.name}</h2>
                            <h2>
                              {" "}
                              otp:{" "}
                              <span
                                className={`font-bold text-lg ${
                                  order?.otpVerified ? "text-red-500" : ""
                                }`}
                              >
                                {order?.otp}
                              </span>{" "}
                            </h2>
                          </div>

                          <div className="flex justify-between pr-4">
                            <p className="flex align-middle gap-1">
                              itemsQty:{" "}
                              <span className="font-bold text-lg">
                                {order?.cart?.reduce(
                                  (acc, item) => acc + item.qty,
                                  0
                                )}
                              </span>
                            </p>
                            <p className="flex align-middle gap-1">
                              {" "}
                              total price:{" "}
                              <span className="font-bold text-lg">
                                {order?.totalPrice + " $"}
                              </span>
                            </p>
                            <p> status: {order?.status}</p>
                          </div>
                          <p>
                            {" "}
                            address:{order.shippingAddress?.address1},
                            {order.shippingAddress?.address2}{" "}
                          </p>
                          <div className="flex gap-5">
                            <p> City: {order.shippingAddress?.city}</p>
                            <p> ZipCode: {order.shippingAddress?.zipCode}</p>
                          </div>
                          <p> Phone: {order.shippingAddress?.phone}</p>
                          <p> createdAt: {order?.createdAt.slice(0, 10)}</p>
                        </div>
                        <div
                          className=""
                          style={{ width: "1px", background: "black" }}
                        ></div>
                        <div className="w-1/2 pl-4 pt-2">
                          <h2> Shop Id: {order?.cart?.[0]?.shopId}</h2>
                          <h2> Shop Name: {order?.cart?.[0]?.shop?.name}</h2>

                          <div className="flex justify-between pr-4">
                            <p className="flex align-middle gap-1">
                              stock:{" "}
                              <span className="font-bold text-lg">
                                {order?.cart?.[0]?.stock}
                              </span>
                            </p>
                            <p className="flex align-middle gap-1">
                              {" "}
                              total price:{" "}
                              <span className="font-bold text-lg">
                                {order?.totalPrice + " $"}
                              </span>
                            </p>
                            {/* <p>   status: {order?.status}</p>  */}
                          </div>
                          <p>
                            {" "}
                            address: {order?.cart?.[0]?.shop?.address},
                            {order.shippingAddress?.address2}{" "}
                          </p>
                          <div className="flex gap-5">
                            <p> ZipCode: {order?.cart?.[0]?.shop?.zipCode}</p>
                            <p> Phone: {order?.cart?.[0]?.shop?.phoneNumber}</p>
                          </div>
                          <p>
                            {" "}
                            createdAt:{" "}
                            {order?.cart?.[0]?.shop?.createdAt.slice(0, 10)}
                          </p>
                        </div>
                      </div>
                      <div
                        className=""
                        style={{ height: "1px", background: "black" }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardOrders;
