import { useState } from "react";
import { SpeakerphoneIcon, XIcon } from "@heroicons/react/outline";

export default function Notification() {
  const [show, setShow] = useState(true);

  if (!show) return "";

  const disableNotificationBar = () => {
    setShow(false);
  };

  return (
    <div className="bg-yellow-600">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-yellow-800">
              <SpeakerphoneIcon
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <a
                href="https://586bphz6wav.typeform.com/to/CDbsyMWV"
                target="_blank"
                rel="noopener noreferrer"
              >
                We&apos;re looking for more business to host!
              </a>
            </p>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              onClick={disableNotificationBar}
              className="-mr-1 flex p-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
