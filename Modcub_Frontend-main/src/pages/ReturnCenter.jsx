import React, { useEffect, useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import { returnPolicy } from "../static/data";

const orders = [
  {
    title: "Want to manage your order?",
    description: "View, cancel or refund on product",
  },
  {
    title: "Need help with payment?",
    description: "Manage your payment methods",
  },
  {
    title: "Looking for deals?",
    description: "Check out the latest offers",
  },
  {
    title: "Looking for deals?",
    description: "Check out the latest offers",
  },
  {
    title: "Looking for deals?",
    description: "Check out the latest offers",
  },
];

const ReturCenter = () => {
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
      <Header activeHeading={0} navbar={true} />
      <div className="bg-[#E7F2F9] p-2 pl-10">
      <div className={`w-${isWideScreen ? '3/4' : 'full'}`}>
      <h1 className="text-3xl font-bold mb-4">Amazon.in Returns Policy</h1>
          <p className="text-lg mb-6">
            Information on return eligibility, timelines and other terms &
            conditions for items purchased on Amazon.in. To view this page in
            your preferred language, click the link: English, हिन्दी (Hindi),
            தமிழ் (Tamil), తెలుగు (Telugu), ಕನ್ನಡ (Kannada), മലയാളം (Malayalam),
            मराठी (Marathi), বাংলা (Bengali).
          </p>
          <h1 className="text-3xl font-bold mb-4">General Returns Policy</h1>

          <ol className="list-decimal list-inside pl-6">
            <li className="text-lg mb-3">
              Applicable products are returnable within the applicable return
              window if you've received them in a condition that is physically
              damaged, has missing parts or accessories, defective or different
              from their description on the product detail page on Amazon.in.
            </li>
            <li className="text-lg mb-3">
              {" "}
              If you report an issue with your Smartphone, Tablet, Laptop,
              Television, Air Conditioner, Refrigerator, Washing Machine,
              Microwave, we may facilitate scheduling a technician visit to your
              location. This visit is scheduled by placing an order with Amazon
              through Amazon.in Home Services. Subject to Amazon.in Home
              Services Terms and Conditions, a resolution will be provided based
              on the technician's evaluation report.
            </li>
            <li className="text-lg mb-3">
              Return will be processed only if:
              <ul className="list-disc list-inside pl-6">
                <li className="text-lg mb-2">
                  it is determined that the product was not damaged while in
                  your possession;
                </li>
                <li className="text-lg mb-2">
                  the product is not different from what was shipped to you;
                </li>
                <li className="text-lg mb-2">
                  the product is returned in original condition (with
                  brand’s/manufacturer's box, MRP tag intact, user manual,
                  warranty card and all the accessories therein).
                </li>
              </ul>
            </li>
            <li className="text-lg mb-3">
              {" "}
              If you wish to return an electronic device that stores any
              personal information, please ensure that you have removed all such
              personal information from the device prior to returning. Amazon
              shall not be liable in any manner for any misuse or usage of such
              information.
            </li>

            <li className="text-lg mb-3">
              Products may not be eligible for return in some cases, including
              cases of buyer's remorse such as incorrect model or color of
              product ordered or incorrect product ordered.
            </li>

            <li className="text-lg mb-3">
              Products marked as "non-returnable" on the product detail page
              cannot be returned. However, in an unlikely event of damaged,
              defective or wrong item delivered to you, we will provide a full
              refund or replacement, as applicable. We may contact you to
              ascertain the damage or defect in the product prior to issuing
              refund/replacement. We reserve the right to pick up the product to
              ascertain the damage or defect in the product prior to issuing
              refund/replacement.
            </li>
            <li className="text-lg mb-3">
              No additional information is required to return an eligible order
              unless otherwise noted in the category specific policy.{" "}
            </li>
            <li className="text-lg mb-3">
              Products may be eligible for replacement only if the same seller
              has the exact same item in stock.{" "}
            </li>
            <li className="text-lg mb-3">
              If the replacement request is placed and the seller does not have
              the exact same product in stock, a refund would be issued to you.
            </li>
            <li className="text-lg mb-3">
              Products purchased by international customers are not eligible for
              returns. However, orders made by international customers are
              eligible for refunds and customers will have to contact customer
              service within 5 business days from delivery date or estimated
              delivery date to claim refunds.
            </li>
            <li className="text-lg mb-3">
              To know about the Return window for Amazon Business orders, please
              visit here.
            </li>
            <li className="text-lg mb-3">
              n the event customers are found to misuse the return policy by
              excessively returning, or cancelling or not accepting the orders
              placed, Amazon reserves the right to warn and/or suspend and/or
              block and/or terminate such customer accounts, as necessary.
            </li>
          </ol>
          <p className="text-lg mb-6">
            <span className="font-bold text-lg">Note:</span> If you've received
            a non-returnable product in a damaged/defective condition, you can
            contact us within 5 days from the delivery of the product.
          </p>
          <p className="text-lg mb-6">
            <span className="font-bold text-lg"> Note:</span> All product
            categories are non-returnable for International Customers for Export
            Orders.
          </p>

          <h1 className="text-3xl font-bold mb-4">
            {" "}
            Categories with associated return window and exceptions, if any:
          </h1>

          
         

{returnPolicy.map((item)=>(
  <>

<h1 className="text-3xl font-bold my-6">{item?.title}</h1>
          <table className="w-full border-collapse border border-gray-300 ">
            <tbody className="border border-gray-300">
              <tr className="border-b border-gray-300 bg-gray-100 ">
                <td className="p-1 px-2 w-1/2">Category</td>
                <td className="p-1 px-2 w-1/2">Return Policy</td>
              </tr>
              {item?.content.map((items, indeex)=>(
                
             
              <tr className={`border-b border-gray-300 ${indeex % 2 === 0 ? '' : 'bg-gray-100'}  `}>
                
                <td className="p-1 px-3 align-top w-1/2">
                  {items?.subTitle}
                </td>
                <td className="p-1 px-3 flex flex-col ">

                {items?.subcontent?.map((sub,index)=>(
                  
                
                  <td 
                  key={index}
                  className={`flex flex-col mb-3 ${index === 0 ? 'font-bold' : ''}`}              
                      ><span><span className="font-bold">{sub?.textbold}</span> {sub?.policy}</span>
                    {sub?.bullet?.length > 0 && (
                      <ul className="list-disc list-inside ml-5">
                      {sub?.bullet?.map((bullets)=>(
                        <li>{bullets}</li>
                      ))}
                     
                      </ul>
                    )}
                  </td>
                ))}
                </td>
              </tr>
              ))}
            </tbody>
          </table>
          </>
))}
         
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReturCenter;
