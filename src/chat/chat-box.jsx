import ChatHeader  from './chat-header';
import ChatBody  from './chat-body';
import ChatFooter  from './chat-footer';
import styles from "./index.css";


export default class ChatBox extends React.Component {
  render() {
    return (
          <div className="chatBox">
            <ChatHeader />
            <ChatBody />
            <ChatFooter />
          </div>
        );
  }
}
