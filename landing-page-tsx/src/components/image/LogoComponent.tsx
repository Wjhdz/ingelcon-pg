import React from "react";

const LogoComponent: React.FC = () => {
  return (
    <div>
      <Icon
        component={() => (
          <img src="/images/my-image.png" alt="Mi imagen personalizada" />
        )}
        style={{
          fontSize: "32px",
          color: "#f5222d",
        }}
      />
    </div>
  );
};
export default LogoComponent;
