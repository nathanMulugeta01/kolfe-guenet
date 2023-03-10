import { useEffect } from "react";
import { AiOutlineCheck } from "react-icons/ai";

function Modal({
  handleClose,
  progressValue,
  showModal,
  setProgressValue,
  data,
}) {
  // set progress bar value
  useEffect(() => {
    if (showModal) {
      const interval = setInterval(() => {
        setProgressValue((prevProgress) => prevProgress - 0.5);
      }, 25);

      return () => clearInterval(interval);
    }
    // eslint-disable-next-line
  }, [showModal]);

  useEffect(() => {
    document.body.classList.add("modal-open");
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  //   Handle outside click
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto bg-black/75">
      <div
        onClick={handleOutsideClick}
        className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
      >
        <div className="relative transform overflow-hidden rounded-lg bg-white pb-1 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <progress
            className="progress progress-secondary absolute top-0 left-0 right-0 w-full"
            value={progressValue}
            max="100"
          ></progress>
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="mx-auto mb-6 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-auto">
              <AiOutlineCheck className="text-2xl text-green-600" />
            </div>
            <div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:flex sm:flex-col sm:items-center sm:gap-4 sm:text-left">
                <h3 className="text-lg font-semibold leading-6 text-gray-900 sm:text-2xl">
                  Submit Successful
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    All your data has been transferred successfully!
                  </p>

                  {/* Code starts here */}
                  <div className="grid grid-cols-6 gap-1">
                    <div className="col-span-6 sm:col-span-3">
                      <p className="block text-sm font-medium leading-6 text-gray-900">
                        First name
                      </p>
                      <div
                        className={`block w-full rounded-md border-0  bg-gray-200 p-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6`}
                      >
                        {data ? data.firstName : "No data"}
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <p className="block text-sm font-medium leading-6 text-gray-900">
                        Last name
                      </p>
                      <div
                        className={`block w-full rounded-md border-0 bg-gray-200 p-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6`}
                      >
                        {data ? data.lastName : "No data"}
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <p className="block text-sm font-medium leading-6 text-gray-900">
                        Phone
                      </p>
                      <div
                        className={`block w-full rounded-md border-0 bg-gray-200 p-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6`}
                      >
                        {data ? data.phone : "No data"}
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <p className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                      </p>
                      <div
                        className={`block w-full rounded-md border-0 bg-gray-200 p-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6`}
                      >
                        {data ? data.email : "No data"}
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <p className="block text-sm font-medium leading-6 text-gray-900">
                        Interest
                      </p>
                      <div className="block w-full rounded-md border-0 bg-gray-200 p-1.5 text-gray-900 shadow-sm  ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6">
                        {data ? data.interest : "No data"}
                      </div>
                    </div>

                    <div className="col-span-6">
                      <p className="block text-sm font-medium leading-6 text-gray-900">
                        Your message
                      </p>
                    </div>
                    <div className="block w-full rounded-md border-0 bg-gray-200 p-1.5 text-gray-900 shadow-sm  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6">
                      {data ? data.message : "No data"}
                    </div>
                  </div>
                  {/* Code ends here */}
                </div>
              </div>
            </div>
          </div>
          <div className="justify-center bg-gray-50 px-4 py-3 sm:flex sm:flex-row sm:px-6">
            <button
              type="button"
              className="inline-flex w-full justify-center rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-secondary/75 active:scale-95 sm:ml-3 sm:w-auto"
              onClick={handleClose}
            >
              Okay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
