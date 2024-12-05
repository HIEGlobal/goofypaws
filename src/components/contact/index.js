import React from "react";
import TextConatiner from "../textContainer";
import sms from "../../../public/assets/sms.png";
import location from "../../../public/assets/location.png";
import phone from "../../../public/assets/phone.png";
import Image from "next/image";
import paw from "../../../public/assets/paw.png";
import styles from "./Contact.module.css";
import ContentWrapper from "../wrapper";

// Contact data for the right-aligned section
const contactDataRight = [
  {
    icon: sms,
    text: "woof@goofypaws.org",
  },
  {
    icon: phone,
    text: "+918750446500",
  },
];

// Contact data for the left-aligned section
const contactDataLeft = [
  {
    icon: location,
    title: "India Office",
    text: "Shop No. 103, 75-76, Manisha Building, Nehru Place, New Delhi-19",
  },
  {
    icon: location,
    title: "Phoenix Headquarters",
    text: "#2942 N, 24th Street, Suite 114, Phoenix, AZ 850116",
  },
];

const Contact = () => {
  return (
    <div className="bg-customPurple px-0 xl:py-20 py-40 relative flex flex-col xl:mb-0">
      <ContentWrapper>
        <TextConatiner
          textHead="CONNECT WITH US"
          textDesc1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
          textDesc2="tempor incididunt ut labore et dolore magna aliq."
        />
        <div className="xl:py-[150px] flex justify-between items-start gap-10">
          {/* Left-aligned section for addresses */}
          <div className="flex flex-col items-start gap-6">
            {contactDataLeft.map((item, index) => (
              <div
                className="flex items-start gap-4 text-lg font-medium"
                key={index}
              >
                <Image src={item.icon} alt={item.title} width={40} height={40} />
                <div>
                  <h3 className="text-[#1C1C1E] xl:text-lg text-[14px] font-bold">
                    {item.title}
                  </h3>
                  <p className="text-[#1C1C1E] xl:text-lg text-[12px] opacity-[70%]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right-aligned section for email and phone */}
          <div className="flex flex-col items-end gap-6">
            {/* Email */}
            <div className="flex items-center gap-4 text-lg font-medium">
              <Image src={sms} alt="Email" width={30} height={30} />
              <h3 className="text-[#1C1C1E] xl:text-lg text-[12px]  opacity-[70%]">
                woof@goofypaws.org
              </h3>
            </div>
            {/* Phone */}
            <div className="flex items-center gap-4 text-lg font-medium">
              <Image src={phone} alt="Phone" width={30} height={30} />
              <h3 className="text-[#1C1C1E] xl:text-lg text-[12px] opacity-[70%]">
                +918750446500
              </h3>
            </div>
          </div>
        </div>

        {/* Decorative paw icons */}
        <Image
          src={paw}
          alt="paw"
          className={`${styles.pawIcon1} absolute xl:top-[40px] top-0 left-[50px]`}
        />
        <Image
          src={paw}
          alt="paw"
          className={`${styles.pawIcon2} absolute xl:top-[120px] xl:left-[155px] top-[50px] left-[160px]`}
        />
        <Image
          src={paw}
          alt="paw"
          className={`${styles.pawIcon3} absolute xl:bottom-[50px] xl:right-[135px] bottom-[50px] right-[140px]`}
        />
        <Image
          src={paw}
          alt="paw"
          className={`${styles.pawIcon4} absolute xl:bottom-[10px] bottom-[10px] right-[30px]`}
        />
      </ContentWrapper>
    </div>
  );
};

export default Contact;
