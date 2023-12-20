import React from "react";

const SocialLogo = ({ src, alt }) => {
  return (
    <div className="w-16 h-16 bg-[#EEDEC8] rounded-full flex items-center justify-center">
      <img
        src={process.env.PUBLIC_URL + src}
        alt={alt}
        className="h-[88%] w-[88%]"
      />
    </div>
  );
};

export default SocialLogo;
