import React from "react";

const ContentWrapper = ({ children }) => {
  return (
    <div className="mx-auto max-w-[1424px] px-4 xl:px-6 lg:px-8">
      {children}
    </div>
  );
};

export default ContentWrapper;
