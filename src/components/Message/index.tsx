import React from "react";
import Image from "next/image";
import {cva} from "class-variance-authority";

export interface MessageProps {
    selected?: boolean;
    message: string;
    username: string;
}

const messageVariant = cva("p-4 flex hover:bg-gray-800 hover:cursor-pointer", {
    variants: {
        selected: {
            false: '',
            true: 'bg-gray-700',
        },
    },
    defaultVariants: {
        selected: false,
    }
})

const Message: React.FC<MessageProps> = ({selected, username, message}) => {
  return (
    <div className={messageVariant({
        selected
    })}>
      <Image
        alt="user-photo"
        className="rounded-full mr-3"
        src="https://placehold.co/60x60/png"
        width={50}
        height={50}
      />
      <div className="flex justify-center flex-col">
        <span>@{username}</span>
        <span className="text-sm opacity-80">{message}</span>
      </div>
    </div>
  );
}

export default Message;
