import React from "react";
import TextConatiner from "../textContainer";
import sms from "../../../public/assets/sms.png";
import location from "../../../public/assets/location.png";
import phone from "../../../public/assets/phone.png";
import Image from "next/image";
import paw from "../../../public/assets/paw.png";
import styles from "./Contact.module.css";
import ContentWrapper from "../wrapper";

const contactData = [
  {
    icon: sms,
    text: "woof@goofypaws.org",
  },
  {
    icon: location,
    text: "2942 N. 24th Street, Suite 114, Phoenix, AZ 85016, USA",
  },
  {
    icon: phone,
    text: "(480) 322-5889",
  },
];
const Contact = () => {
  return (
    <div className="bg-customPurple px-0 xl:py-20 py-40 relative flex flex-col xl:mb-0 ">
      <ContentWrapper>
        <TextConatiner
          textHead="CONNECT WITH US"
          textDesc1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
          textDesc2="tempor incididunt ut labore et dolore magna aliq."
        />
        <div className="xl:py-[150px]">
          <div className="flex xl:flex-row flex-col xl:items-center items-start justify-around xl:gap-10 gap-2">
            {contactData.map((item, index) => {
              return (
                <div
                  className="flex items-center justify-center gap-2 text-lg font-medium"
                  key={index}
                >
                  <Image src={item.icon} alt="item.text" />
                  <h3 className="text-[#1C1C1E] xl:text-lg text-[12px] opacity-[70%]">
                    {item.text}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
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
