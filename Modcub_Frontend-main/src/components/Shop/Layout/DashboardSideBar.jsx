import React from "react";
import { AiOutlineFolderAdd, AiOutlineGift } from "react-icons/ai";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { VscNewFile } from "react-icons/vsc";
import { CiMoneyBill, CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiOutlineReceiptRefund } from "react-icons/hi";

const DashboardSideBar = ({ active }) => {
    return (
        <div className="w-full h-[90vh] bg-[#054D76] shadow-sm overflow-y-scroll sticky top-0 left-0 z-10">
            {/* single item */}
            <div className={`w-full flex items-center p-4 border-b ${active===1? "bg-[#054D76]":"bg-[#032C43]"}`}>
                <Link to="/dashboard" className="w-full flex items-center">
                    <RxDashboard
                        size={30}
                        color={`${active === 1 ? "white" : "white"}`}
                    />
                    <h5
                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
                            active === 1 ? "text-white" : "text-[#fff]"
                        }`}
                    >
                        Dashboard
                    </h5>
                </Link>
            </div>

            <div className={`w-full flex items-center p-4 border-b ${active===2? "bg-[#054D76]":"bg-[#032C43]"}`}>
                <Link
                    to="/dashboard-orders"
                    className="w-full flex items-center"
                >
                    <FiShoppingBag
                        size={30}
                        color={`${active === 2 ? "white" : "white"}`}
                    />
                    <h5
                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
                            active === 2 ? "text-white" : "text-white"
                        }`}
                    >
                        All Orders
                    </h5>
                </Link>
            </div>

            <div className={`w-full flex items-center p-4 border-b ${active===3? "bg-[#054D76]":"bg-[#032C43]"}`}>
                <Link
                    to="/dashboard-products"
                    className="w-full flex items-center"
                >
                    <FiPackage
                        size={30}
                        color={`${active === 3 ? "white" : "white"}`}
                    />
                    <h5
                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
                            active === 3 ? "text-[white]" : "text-[white]"
                        }`}
                    >
                        All Products
                    </h5>
                </Link>
            </div>

            <div className={`w-full flex items-center p-4 border-b ${active===4? "bg-[#054D76]":"bg-[#032C43]"}`}>
                <Link
                    to="/dashboard-create-product"
                    className="w-full flex items-center"
                >
                    <AiOutlineFolderAdd
                        size={30}
                        color={`${active === 4 ? "white" : "white"}`}
                    />
                    <h5
                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
                            active === 4 ? "text-[white]" : "text-[white]"
                        }`}
                    >
                        Create Product
                    </h5>
                </Link>
            </div>

            {/* <div className="w-full flex items-center p-4">
                <Link
                    to="/dashboard-events"
                    className="w-full flex items-center"
                >
                    <MdOutlineLocalOffer
                        size={30}
                        color={`${active === 5 ? "white" : "white"}`}
                    />
                    <h5
                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
                            active === 5 ? "text-[white]" : "text-[white]"
                        }`}
                    >
                        All Events
                    </h5>
                </Link>
            </div> */}

            {/* <div className="w-full flex items-center p-4">
                <Link
                    to="/dashboard-create-event"
                    className="w-full flex items-center"
                >
                    <VscNewFile
                        size={30}
                        color={`${active === 6 ? "white" : "white"}`}
                    />
                    <h5
                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
                            active === 6 ? "text-[white]" : "text-[white]"
                        }`}
                    >
                        Create Event
                    </h5>
                </Link>
            </div> */}

            <div className={`w-full flex items-center p-4 border-b ${active===7?"bg-[#054D76]":"bg-[#032C43]"}`}>
                <Link
                    to="/dashboard-withdraw-money"
                    className="w-full flex items-center"
                >
                    <CiMoneyBill
                        size={30}
                        color={`${active === 7 ? "white" : "white"}`}
                    />
                    <h5
                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
                            active === 7 ? "text-[white]" : "text-[white]"
                        }`}
                    >
                        Withdraw Money
                    </h5>
                </Link>
            </div>

            {/* <div className={`w-full flex items-center p-4 ${active===8? "bg-slate-200":"bg-white"}`}>
                <Link
                    to="/dashboard-messages"
                    className="w-full flex items-center"
                >
                    <BiMessageSquareDetail
                        size={30}
                        color={`${active === 8 ? "white" : "white"}`}
                    />
                    <h5
                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
                            active === 8 ? "text-[white]" : "text-[white]"
                        }`}
                    >
                        Shop Inbox
                    </h5>
                </Link>
            </div> */}

            <div className={`w-full flex items-center p-4 border-b ${active===9? "bg-[#054D76]":"bg-[#032C43]"}`}>
                <Link
                    to="/dashboard-coupouns"
                    className="w-full flex items-center"
                >
                    <AiOutlineGift
                        size={30}
                        color={`${active === 9 ? "white" : "white"}`}
                    />
                    <h5
                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
                            active === 9 ? "text-[white]" : "text-[white]"
                        }`}
                    >
                        Discount Codes
                    </h5>
                </Link>
            </div>

            <div className={`w-full flex items-center p-4 border-b ${active===10? "bg-[#054D76]":"bg-[#032C43]"}`}>
                <Link
                    to="/dashboard-refunds"
                    className="w-full flex items-center"
                >
                    <HiOutlineReceiptRefund
                        size={30}
                        color={`${active === 10 ? "white" : "white"}`}
                    />
                    <h5
                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
                            active === 10 ? "text-[white]" : "text-[white]"
                        }`}
                    >
                        Refunds
                    </h5>
                </Link>
            </div>

            <div className={`w-full flex items-center p-4 border-b ${active===11? "bg-[#054D76]":"bg-[#032C43]"}`}>
                <Link to="/settings" className="w-full flex items-center">
                    <CiSettings
                        size={30}
                        color={`${active === 11 ? "white" : "white"}`}
                    />
                    <h5
                        className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
                            active === 11 ? "text-[white]" : "text-[white]"
                        }`}
                    >
                        Settings
                    </h5>
                </Link>
            </div>
        </div>
    );
};

export default DashboardSideBar;
