import Link from "next/link";

const WhatsAppButton = () => {
  const buttonStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "rgb(113 62 223)",
    color: "white",
    borderRadius: "30px", // Rounded corners
    height: "50px",
    display: "flex",
    alignItems: "center",
    padding: "0 16px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    textDecoration: "none",
  };

  const iconStyle = {
    marginRight: "12px",
  };

  const textStyle = {
    color: "white",
    fontSize: "16px",
    fontFamily: "'Poppins', sans-serif", // Custom font
    fontWeight: "500", // Medium weight
  };

  return (
    <Link href="https://wa.me/+918750446500" passHref>
      <div style={buttonStyle}>
        <svg
          style={iconStyle}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.919 11.919 0 0 0 12 0a11.919 11.919 0 0 0-8.52 3.48A11.919 11.919 0 0 0 0 12c0 2.22.61 4.38 1.76 6.29l-1.91 6.93 7.07-1.85A11.919 11.919 0 0 0 12 24c3.18 0 6.16-1.24 8.52-3.48A11.919 11.919 0 0 0 24 12c0-3.18-1.24-6.16-3.48-8.52ZM12 21.75a9.685 9.685 0 0 1-5.11-1.44l-.37-.23-4.36 1.14 1.17-4.3-.25-.38A9.712 9.712 0 0 1 2.25 12a9.712 9.712 0 0 1 2.86-6.89 9.712 9.712 0 0 1 6.89-2.86 9.712 9.712 0 0 1 6.89 2.86 9.712 9.712 0 0 1 2.86 6.89 9.712 9.712 0 0 1-2.86 6.89A9.685 9.685 0 0 1 12 21.75Zm5.19-6.51c-.28-.14-1.63-.8-1.89-.89-.26-.09-.44-.14-.63.14-.19.28-.73.89-.89 1.07-.16.19-.33.21-.61.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.56.12-.12.28-.33.42-.49.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.61-1.47-.83-2.02-.22-.53-.43-.46-.63-.46H8.15c-.19 0-.49.07-.75.35s-.99.97-.99 2.37c0 1.4 1.01 2.77 1.15 2.96.14.19 1.99 3.04 4.82 4.26 2.28.96 2.79.78 3.29.73.5-.05 1.63-.66 1.86-1.3.23-.64.23-1.19.16-1.3-.07-.12-.26-.19-.54-.33Z" />
        </svg>
        <span style={textStyle}>Chat with us</span>
      </div>
    </Link>
  );
};

export default WhatsAppButton;