import Image from "next/image";
export default function Home() {
  return (
    <main className="flex justify-center items-center w-full h-[100vh] bg-slate-600">
      <div className="bg-black flex flex-row w-[90%] h-[90%] max-w-[100%]">
        <div className="w-[30%] bg-gray-900 overflow-y-auto">
          {new Array(14).fill(0).map((_, index) => (
            <div key={index} className="p-4 flex hover:bg-gray-800">
              <Image
                alt="user-photo"
                className="rounded-full mr-3"
                src="https://placehold.co/60x60/png"
                width={50}
                height={50}
              />
              <div className="flex justify-center flex-col">
                <span>Renan</span>
                <span className="text-sm opacity-80">E aí, tudo bem?</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col w-[70%]">
          <div className="bg-slate-800 flex-1 w-full p-10">
            <div className="flex flex-col items-start gap-2.5">
              {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image"> */}
              <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    Bonnie Green
                  </span>
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    11:46
                  </span>
                </div>
                <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                  That's awesome. I think our users will really appreciate the
                  improvements.
                </p>
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Delivered
                </span>
              </div>

              <div className="flex ml-auto flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-s-xl rounded-ee-xl dark:bg-gray-700">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    Bonnie Green
                  </span>
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    11:46
                  </span>
                </div>
                <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                  That's awesome. I think our users will really appreciate the
                  improvements.
                </p>
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Delivered
                </span>
              </div>
            </div>
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
