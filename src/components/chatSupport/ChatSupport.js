import React, { useState } from "react";
import "./chatSupport.css";
import ChatSupportItems from "./ChatSupportItems";

export default function ChatSupport() {
  let allChatSupport = [
    {
      id: 1,
      name: "Unresolved Requests",
    },
    {
      id: 2,
      name: "Resolved Requests",
    },
  ];

  const [allSupport, setAllSupport] = useState(allChatSupport);

  return (
    <div className="main__chatlist" style={{ marginRight: "20px" }}>
      <div className="chatlist__heading">
        <h2>Support Requests</h2>
      </div>
      <div className="chatlist__items">
        {allChatSupport.map((item, index) => {
          return (
            <ChatSupportItems
              name={item.name}
              key={item.id}
              animationDelay={index + 1}
              active={item.active ? "active" : ""}
              isOnline={item.isOnline ? "active" : ""}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
}
