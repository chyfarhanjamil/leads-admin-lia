import ChatContent from "../chatContent/ChatContent";
import ChatContentExtra from "../chatContent/ChatContentExtra";
import ChatList from "../chatList/ChatList";
import ChatSupport from "../chatSupport/ChatSupport";
import UserProfile from "../userProfile/UserProfile";

import "./chatBody.css";

export default function ChatBody() {
  return (
    <div className="main__chatbody">
      <ChatSupport />
      <ChatList />
      <ChatContent />
      <UserProfile />
    </div>
  );
}
