import React from "react";

interface Props {
  children?: React.ReactNode;
}

const BaseLayout: React.FC<Props> = (props) => {
  return <div className="bg-black h-screen w-screen p-6">{props.children}</div>;
};

export default BaseLayout;
