import React from "react";
import {cva} from "class-variance-authority";

interface MessageBalloonProps {
    isReceived?: boolean;
    message: string;
    time: string;
    username: string;
}
const MessageBalloonVariant = cva("flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 dark:bg-gray-700", {
    variants: {
        balloon: {
            default: 'rounded-e-xl rounded-es-xl',
            received: 'rounded-s-xl rounded-ee-xl ml-auto',
        },
    }
})

const MessageBalloon: React.FC<MessageBalloonProps> = ({isReceived = false, message, time, username}) => {
  return (
    <div className={MessageBalloonVariant({balloon: isReceived ? 'received' : 'default'})}>
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
        <span className="text-sm font-semibold text-gray-900 dark:text-white">
          {username}
        </span>
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          {time}
        </span>
      </div>
      <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
        {message}
      </p>
      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
        Delivered
      </span>
    </div>
  );
}

export default MessageBalloon
