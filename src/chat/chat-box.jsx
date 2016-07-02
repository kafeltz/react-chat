import ChatHeader  from './chat-header';
import ChatBody  from './chat-body';
import ChatFooter  from './chat-footer';
import styles from "./index.css";


export default class ChatBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            conversations: [
                {count: 1, msg: 'Random text here!'},
                {count: 2, msg: 'Mais textos!'}
            ],
        }
    }

    onNewMsg(count, newMsg) {
        var appendedConversations = this.state.conversations.concat( [{count: count, msg: newMsg}] );
        this.setState({conversations: appendedConversations});
    }

    render() {
        return (
              <div className="chatBox">
                <ChatHeader />
                    <ChatBody conversations={this.state.conversations} />
                <ChatFooter onNewMsg={this.onNewMsg.bind(this)} />
              </div>
            );
    }
}
