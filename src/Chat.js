import React from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";

function Chat() {
  return (
    <div className="chat">
      <ChatHeader />

      <div className="chat__messages">
        {/* {Messages.map(({ message, user, timestamp }) => (
                    <Message
                        message={message}
                        user={user}
                        timestamp={timestamp}
                    />
                ))} */}
      </div>

      <div className="chat__input">
        <AddCircleRoundedIcon fontSize="large" />
        <form>
          <input
          // disabled={!channelId}
          // value={Input}
          // onChange={e => setInput(e.target.value)} placeholder={channelName ? `Message #${channelName}` : 'Message'}
          />
          <button
            // disabled={!channelId}
            className="chat__inputButton"
            type="submit"
            // onClick={sendMessage}
          >
            Send Message
          </button>
        </form>

        <div className="chat__inputIcons">
          <CardGiftcardIcon fontSize="large" />
          <GifIcon fontSize="large" />
          <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default Chat;
