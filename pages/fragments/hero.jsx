import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon, CameraIcon } from "@heroicons/react/outline";
import Image from "next/image";

const navigation = [
  { name: "Find a Present", href: "#search" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
                href="https://586bphz6wav.typeform.com/to/CDbsyMWV"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                      <span className="sr-only">Workflow</span>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="shopping-bag"
                        className="h-8 w-auto sm:h-10 text-yellow-600 fill-current"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"
                        ></path>
                      </svg>
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-600">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="font-medium text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="shopping-bag"
                        className="h-8 w-auto sm:h-10 text-yellow-600 fill-current"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"
                        ></path>
                      </svg>
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-600">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">
                  Stop looking for that perfect gift.
                </span>{" "}
                <span className="block xl:inline bg-clip-text text-transparent bg-gradient-to-tr from-yellow-400 to-yellow-600">
                  Find it.
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                <span className="text-yellow-600">
                  Support local businesses
                </span>{" "}
                this Christmas by finding the perfect present for that special
                someone, all while helping to support our community and local
                businesses.
              </p>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                You can make an{" "}
                <span className="text-yellow-600">incredible impact</span> in
                the lives of those that have sacrificed so much.
              </p>

              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#search"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-600 md:py-4 md:text-lg md:px-10"
                  >
                    Find a gift
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="https://586bphz6wav.typeform.com/to/CDbsyMWV"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-yellow-600 md:py-4 md:text-lg md:px-10 hover:ring-4 ring-yellow-400"
                  >
                    Add a business
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/img/main-1.jpg"
          alt="A sunrise in Ballarat"
          blurDataURL="data:image/jpeg;base64,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"
          placeholder="blur"
          layout="fill"
        />
        <div className="absolute bottom-3 right-5 text-white text-sm opacity-75">
          <a
            href="https://www.instagram.com/emma_burnham_photography/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CameraIcon className="h-5 w-5 inline mr-1" /> Emma Burnam
            Photography
          </a>
        </div>
      </div>
    </div>
  );
}
