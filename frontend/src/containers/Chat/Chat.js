import React, {Component} from 'react';
import ModalExample from "../../components/Modal/Modal";
import {getMessages, switchModalState} from "../../store/actions/chatActions";
import {connect} from "react-redux";
import MessageCard from "../../components/MessageCard/MessageCard";

class Chat extends Component {


    componentDidMount() {
        this.props.getMessages();
    };


    render() {
        return (
            <div>
                <ModalExample
                    modal={this.props.modal}
                    toggle={this.props.modalSwitcher}
                />
                {this.props.messages.map(message => (
                    <MessageCard
                        key={message.id}
                        image={message.image}
                        user={message.author}
                        message={message.message}
                    />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    messages: state.messages,
    modal: state.modal
});

const mapDispatchToProps = dispatch => ({
    getMessages: () => dispatch(getMessages()),
    modalSwitcher: () => dispatch(switchModalState())
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);