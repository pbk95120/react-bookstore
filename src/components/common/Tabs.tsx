import React, { useState } from "react";

interface TabProps {
  title: string;
  children: React.ReactNode;
}

interface TabsProps {
  children: React.ReactNode;
}

export const Tab = ({ children }: TabProps) => {
  return <div>{children}</div>;
};

export const Tabs = ({ children }: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabs = React.Children.toArray(
    children
  ) as React.ReactElement<TabProps>[];

  return (
    <section>
      <div className="flex gap-0.5 border-b border-solid">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`text-xl font-bold py-3 px-6 rounded ${
              activeIndex === index ? "bg-orange text-white" : "bg-lightgray"
            }`}
          >
            {tab.props.title}
          </button>
        ))}
      </div>
      <div className="py-6">{tabs[activeIndex]}</div>
    </section>
  );
};
