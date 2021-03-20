const TheirMessage = ({ lastMessage, message }) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username != message.sender.username;


    return (
        <div>
            TheirMessage
        </div>
    )
}

export default TheirMessage;