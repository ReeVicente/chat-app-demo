import Message from "@/components/Message";
import MessageBalloon from "@/components/MessageBallon";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex justify-center items-center w-full h-[100vh] bg-slate-600 overflow-hidden">
      <div className="bg-black flex flex-row w-[90%] h-[90%] max-w-[100%]">
        <div className="flex flex-col w-[30%] bg-gray-900">
          <header className="flex items-center h-[100px] px-4 w-full bg-gray-900">
            Conversas
          </header>
          <div className="overflow-y-auto">
            {new Array(14).fill(0).map((_, index) => (
              <Message username="renanvicente" message="Hello" selected={index === 0} key={index} />
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-col w-[70%]">
          <header className="flex flex-row h-[100px] px-10 w-full bg-gray-900 items-center">
            <div>
              <Image
                alt="user-photo"
                className="rounded-full mr-3"
                src="https://placehold.co/50x50/png"
                width={50}
                height={50}
              />
            </div>
            <div className="flex justify-center flex-col">
              <span>Renan</span>
            </div>
          </header>
          <div className="flex flex-col bg-slate-800 flex-1 overflow-y-auto items-start gap-2.5 p-10">
            <MessageBalloon username="AA" message="BB" time="11:45" isReceived />
            <MessageBalloon username="AA" message="BB" time="11:56" isReceived />
            <MessageBalloon username="AA" message="BB" time="12:30" />
            <MessageBalloon username="AA" message="BB" time="12:40" />
            <MessageBalloon username="AA" message="BB" time="12:40" />
            <MessageBalloon username="AA" message="BB" time="12:40" />
            <MessageBalloon username="AA" message="BB" time="12:40" />
          </div>
          <div className="min-h-[100px] bg-gray-900 p-5 w-full flex items-center justify-center">
            <textarea
              className="w-full h-[100px] min-h-[100px] max-h-[300px] leading-tight bg-slate-800 p-3"
              placeholder="Type something..."
            />
          </div>
        </div>
      </div>
    </main>
  );
}
