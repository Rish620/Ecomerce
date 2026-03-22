import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";
import SidebarLink from "../components/SidebarLink";

const Carrers = () => {
  // Placeholder data until backend integration
  const demoImages = [
    "https://media.istockphoto.com/id/1501103626/photo/defocused-background-image-of-a-spacious-hallway-in-a-modern-office.webp?b=1&s=170667a&w=0&k=20&c=3HUg5TdHHWq4rmYJ7lA0Jn9koAesfCrO4lFiEaUFKuI=",
    "https://www.maidwale.com/images/about/istockphoto-1283119095-170667a.jpg",
    "https://www.maidwale.com/images/about/istockphoto-1283119095-170667a.jpg",
  ];
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 600);
  
    useEffect(() => {
      const handleResize = () => {
        setIsWideScreen(window.innerWidth >= 600);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Cleanup event listener on unmount
      return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <>
      <Header navbar={true} />
      <div className="bg-[#E7F2F9]">
        {/* <div className="relativ">
          <img
            src={`${demoImages[0]}`}
            alt="Demo Image 1"
            className="w-full h-auto rounded-md mb-6 md:mb-0 h-[700px]"
          />
          <div className="absolute bottom-10 md:bottom-56 left-4 md:left-40 text-gray-100 text-5xl md:text-6xl font-Poppins font-bold">
            Carrers
            <div className="text-base md:text-xl font-medium">
              Learn what we are all about
            </div>
          </div>
        </div> */}

        <div className="container mx-auto py-8 flex flex-col md:flex-row">
          <div className="max-w-4xl mx-auto px-4 text-justify">
            <h1 className="text-3xl font-bold mb-4">Modcub.in Refund Policy</h1>
            <p className="text-lg mb-6">
              Information on refund methods, timelines and other terms &
              conditions for items purchased on Modcub.in. To view this page in
              your preferred language, click the link: English, हिन्दी (Hindi),
              தமிழ் (Tamil), తెలుగు (Telugu), ಕನ್ನಡ (Kannada), മലയാളം
              (Malayalam), मराठी (Marathi), বাংলা (Bengali).
            </p>
            <p className="text-lg mb-6">
              Once we receive your return or the seller notifies us of receipt
              of return, as the case may be, a refund is issued to the original
              payment method (in case of pre-paid transactions) or to your bank
              account / as Modcub Pay balance (in case of Pay on Delivery
              orders).
            </p>
            <h1 className="text-3xl font-bold mb-4">Refund Timelines:</h1>
            <p className="text-lg mb-2">
              The refund time period for different modes of payments is provided
              below.
            </p>
            <div className="w-full flex justify-center mb-6">
              <table className={`w-${isWideScreen ? '3/4' : 'full'}4 border-collapse border border-gray-300  `}>
                <thead>
                  <tr className="border-b border-gray-300 bg-gray-100">
                    <td className="text-sm font-bold p-1 w-1/3">Available refund method</td>
                    <td className="text-sm font-bold p-1 w-1/3">Refund Time-frame</td>
                    <td className="text-sm font-bold p-1 w-1/3"></td>
                  </tr>
                  <tr>
                    <td className="text-sm font-bold p-1 w-1/3 bg-gray-100"></td>
                    <td className="text-sm font-bold p-1 w-1/3 ">Modcub orders (After the return is received by Modcub)</td>
                    <td className="text-sm font-bold p-1 px-2 w-1/3">
                      seller-Fulfilled orders (After seller notifies Modcub of
                      receipt of return)
                    </td>
                  </tr>
                </thead>
                <tbody className="border border-gray-300">
                  <tr className="border-b border-gray-300 bg-gray-100">
                    <td className="text-sm font-bold p-1 w-1/3">Prepaid Orders</td>
                    <td className="text-sm font-bold p-1 w-1/3"></td>
                    <td className="text-sm font-bold p-1 w-1/3"></td>
                  </tr>
                 
                  <tr className="border-b border-gray-300 text-align-top ">
                    <td
                      className="flex flex-col"
                    >
                      <td className="text-sm border-b border-gray-300 p-1"> Credit Card/ Debit Card</td>
                      <td className="text-sm p-1 bg-gray-100 ">Net Banking Account (Credited to Bank Account)</td>
                    </td>
                    <td className="text-sm  p-1 w-1/3 ">Up to 15 Working days</td>
                    <td className="text-sm  p-1 w-1/3">Up to 15 Working days</td>
                  </tr>

                  <tr className="border-b border-gray-300 ">
                    <td className="text-sm  p-1 w-1/3">UPI Linked Bank Account</td>
                    <td className="text-sm  p-1 w-1/3">Up to 15 Working Days</td>
                    <td className="text-sm  p-1 w-1/3"></td>
                  </tr>

                  <tr className="border-b border-gray-300 bg-gray-100 ">
                    <td className="text-sm font-bold p-1 w-1/3">Pay on Delivery Orders </td>
                    <td className="text-sm font-bold p-1 w-1/3"></td>
                    <td className="text-sm font-bold p-1 w-1/3"></td>
                  </tr>
                  <tr className="border-b border-gray-300 ">
                    <td className="text-sm  p-1 w-1/3">NEFT to Bank Account</td>
                    <td className="text-sm  p-1 w-1/3">Up to 15 Working Days</td>
                    <td className="text-sm  p-1 w-1/3"> Up to 15 Working Days</td>
                  </tr>
                  
                  <tr className="border-b border-gray-300 bg-gray-100">
                    <td className="text-sm  p-1 w-1/3">Paper Cheque</td>
                    <td className="text-sm  p-1 w-1/3">Up to 15 Working Days</td>
                    <td className="text-sm  p-1 w-1/3"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-lg mb-6">
              If the standard time-frame as mentioned in the above table has
              expired and you have still not received the refund, please contact
              your credit or debit card issuer or your bank for more
              information. Refunds will not be processed in cash. Refunds can be
              processed via paper cheque only in exceptional cases.
            </p>
            <p className="text-lg mb-6">
              If Credit/Debit card that was used to place the order is no longer
              active or is expired, please contact us for assistance.
            </p>
            <p className="text-lg mb-6">
              Note: International customers would need to reach out to our
              Customer Service team to get refunds for their purchase. The
              refund would be made to the original payment method/instrument
              used to make the initial purchase.
            </p>
            <h4 className="text-xl font-bold mb-4">
              {" "}
              For Seller-Fulfilled orders:
            </h4>
            <ol className="list-decimal list-inside pl-6">
              <li className="text-lg mb-2">
                {" "}
                For damaged/ defective items, the seller will issue a refund if
                the item cannot be repaired or replaced.
              </li>
              <li className="text-lg mb-6">
                {" "}
                In any case where a refund is required, the seller(s) need to
                authorise that refund. Modcub.in can assist in facilitating
                refunds for you only when the seller notifies us of the receipt
                of the item. Once the seller notifies us of the receipt of the
                return item, the above refund time period will apply for
                processing refunds.
              </li>
            </ol>
            <h1 className="text-3xl font-bold mb-4">
              {" "}
              Refund for Pay on Delivery Orders:
            </h1>
            <p className="text-lg mb-6">
              For Pay on Delivery orders, refunds will be processed either to
              your bank account (via National Electronic Funds Transfer (NEFT))
              or Modcub account (as Modcub Pay balance).
            </p>
            <p className="text-lg mb-6">
              If you wish to receive the Pay on Delivery order's refund to your
              bank account, you can update the details of the bank account from
              the Returns Centre when you are returning an item.
            </p>{" "}
            <ul className="list-disc list-inside pl-6">
              <li className="text-lg mb-2">
                {" "}
                <span className="text-bold text-xl">
                  To add your bank account through mobile app,{" "}
                </span>
                go to Orders {">"} Click on the order you want to return {">"}{" "}
                Select Return or Replace items option {">"} Select ‘Refund to
                your bank account’ {">"} Select ‘Choose a bank account’ {">"}{" "}
                Select ‘Add a new bank account’, and enter your bank account
                details.
              </li>
              <li className="text-lg mb-6">
                {" "}
                <span className="text-bold text-xl">
                  To add your bank account through website,
                </span>{" "}
                to Orders {">"} Click on the order you want to return {">"}{" "}
                Select go to Return or Replacement items option {">"} Select
                ‘Refund to your bank account’ {">"} Select ‘Choose a bank
                account’ {">"} Select ‘Add a new bank account’, and enter your
                bank account details.
              </li>
            </ul>
            <p className="text-lg mb-6">
              {" "}
              <span className="text-bold">Note:</span> Refunds cannot be
              processed to third-party accounts. The name on your Modcub account
              should match with the name of the bank account holder.
            </p>
            <h1 className="text-3xl font-bold mb-4">Paper cheque clearing</h1>
            <p className="text-lg mb-6">
              All cheque refunds will be in form of "at par" Deutsche Bank
              cheques. All Deutsche Bank cheques are cleared locally in the
              following cities:
            </p>
            <div className="w-full flex justify-center mb-6">
              <table className={`w-${isWideScreen ? '3/4' : 'full'} border-collapse border border-gray-300 `}>
                <tbody className="border border-gray-300">
                  <tr className="border-b border-gray-300 bg-gray-100">
                    <td className="p-1">Ahmedabad</td>
                    <td className="p-1">Delhi</td>
                    <td className="p-1">Ludhiana</td>
                    <td className="p-1">Pune</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="p-1">Aurangabad</td>
                    <td className="p-1">Gurgaon</td>
                    <td className="p-1">Moradabad</td>
                    <td className="p-1">Salem</td>
                  </tr>
                  <tr className="border-b border-gray-300 bg-gray-100">
                    <td className="p-1">Bangalore</td>
                    <td className="p-1">Kolhapur</td>
                    <td className="p-1">Mumbai</td>
                    <td className="p-1">Surat</td>
                  </tr>
                  <tr>
                    <td className="p-1">Chennai </td>
                    <td className="p-1">Kolkata</td>
                    <td className="p-1">Noida</td>
                    <td className="p-1">Vellore</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-lg mb-6">
              {" "}
              If you plan to present the cheque in person in any other city,
              ensure that your beneficiary bank sends the cheque for outstation
              clearing.
            </p>
            <p className="text-lg mb-2">
              In case you plan to drop your cheque in a clearance box, please
              note the following:
            </p>
            <ul className="list-disc list-inside pl-6">
              <li className="text-lg mb-2">
                If you are dropping the cheque in a clearance box in any of the
                above cities, use the box marked Local Cheques.
              </li>
              <li className="text-lg mb-6">
                If you are dropping the cheque in a clearance box in any other
                city, use the box marked Outstation Cheques.
              </li>
            </ul>
            <p className="text-lg mb-6">
              Failing to follow the above instructions might result in the
              cheque not being processed and a penalty being levied by the bank.
            </p>
            <p className="text-lg mb-6">
              {" "}
              <span className="text-bold text-xl">Note: </span> Once a cheque is
              issued, Modcub will send you an e-mail with the tracking details
              of the refund cheque within 4 business days from the date of
              refund.
            </p>
            <h1 className="text-3xl font-bold mb-4">Shipping Cost Refunds</h1>
            <ol className="list-decimal list-inside pl-6">
              <li className="text-lg mb-2">
                For Fulfilled by Modcub and Prime Eligible items, return
                shipping costs of upto Rs. 100 will be refunded. The cost of
                gift-wrapping will also be refunded, if any. All such refunds
                will be issued through cheques. <br />{" "}
                <span className="text-bold text-xl"> Note:</span> If you incur
                return shipping charges over Rs.100 for returning large and
                heavy items, you can contact us for an additional refund. For
                refund of such additional charges, proof of payment, like a
                courier receipt needs to be submitted.
              </li>
              <li className="text-lg mb-6">
                {" "}
                If you're returning a Seller-Fulfilled item, you can request the
                seller to reimburse the return shipping charges you incurred. In
                such cases, a seller might ask you to provide the courier
                receipt.
              </li>
            </ol>
            <p>
              <span className="text-bold text-xl">Note:</span> The seller will
              not refund the shipping cost incurred in case of remorse returns.
            </p>
          </div>

          {/* Show sidebar only on medium and larger screens */}
          <div className="w-full md:w-1/4 ml-0 md:ml-8 max-1000px:hidden">
            <SidebarLink />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Carrers;
