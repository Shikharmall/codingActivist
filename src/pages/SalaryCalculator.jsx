import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";

export default function SalaryCalculator() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isError, setIsError] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    income: "",
    experience: "Fresher",
  });

  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  async function submitHandler(e) {
    e.preventDefault();

    const incomeValue = parseFloat(formData.income);

    if (!isNaN(incomeValue) && typeof incomeValue === "number") {
      // Valid number
      setIsModalOpen(true);
      setIsError(false);
    } else {
      // Not a valid number
      setIsError(true);
    }
  }

  const handlePrint = () => {
    window.print();
  };

  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const options = { year: "numeric" };
    const formattedDate = today.toLocaleDateString("en-US", options);
    setCurrentDate(formattedDate);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-0 sm:p-12">
        <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
          {isError ? (
            <>
              <h1 className="text-2xl font-bold mb-4">Salary Calculator</h1>
              <p className="text-red-500 mb-4">Enter Valid Annual Income!</p>
            </>
          ) : (
            <h1 className="text-2xl font-bold mb-8">Salary Calculator</h1>
          )}
          <form id="form" noValidate>
            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                id="name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                name="name"
                value={formData.name}
                onChange={onChangeHandler}
              />
              <label
                htmlFor="name"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Company Name
              </label>
            </div>

            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                id="designation"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                name="designation"
                value={formData.designation}
                onChange={onChangeHandler}
              />
              <label
                htmlFor="designation"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Designation
              </label>
            </div>

            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                id="income"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                name="income"
                value={formData.income}
                onChange={onChangeHandler}
              />
              <label
                htmlFor="income"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Annual Income
              </label>
            </div>

            <div className="relative z-0 w-full mb-5">
              <select
                id="experience"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="experience"
                value={formData.experience}
                onChange={onChangeHandler}
              >
                <option disabled>Select Experience</option>
                <option value="Fresher">Fresher</option>
                <option value="1 Year">1 Year</option>
                <option value="FR">2 Year</option>
              </select>
            </div>

            {formData.name === "" ||
            formData.designation === "" ||
            formData.experience === "" ||
            formData.income === "" ? (
              <button
                id="button"
                type="button"
                className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
                disabled
              >
                Calculate
              </button>
            ) : (
              <button
                id="button"
                type="button"
                className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
                onClick={submitHandler}
              >
                Calculate
              </button>
            )}
          </form>
        </div>
      </div>

      {isModalOpen && (
        <div
          class="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div
                  class="container mx-auto my-8 p-8 bg-white shadow-md max-w-md"
                  id="divToPrint"
                >
                  <div class="text-center">
                    <h1 class="text-2xl font-bold">Salary </h1>
                    <p class="text-gray-500">Year: {currentDate}</p>
                  </div>

                  <div class="mt-8">
                    <h2 class="text-lg font-semibold mb-4">Information</h2>
                    <div class="flex justify-between">
                      <div class="flex-1">
                        <p class="text-gray-600">Company Name:</p>
                        <p class="font-semibold">{formData.name}</p>
                      </div>
                      <div class="flex-1">
                        <p class="text-gray-600">Designation: </p>
                        <p class="font-semibold">{formData.designation}</p>
                      </div>
                    </div>
                  </div>

                  <div class="mt-8">
                    <div class="flex justify-between">
                      <div class="flex-1">
                        <p class="text-gray-600">Experience:</p>
                        <p class="font-semibold">{formData.experience}</p>
                      </div>
                      <div class="flex-1">
                        <p class="text-gray-600">Base Salary:</p>
                        <p class="font-semibold">
                          ₹ {Math.ceil(formData.income / 12)}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="mt-8 border-t pt-4">
                    <div class="flex justify-between">
                      <div class="flex-1">
                        <h2 class="text-lg font-semibold">Total Salary:</h2>
                        <p class="font-bold text-green-600">
                          ₹ {formData.income}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    class="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                    onClick={() => {
                      handlePrint();
                    }}
                  >
                    Print
                  </button>
                  <button
                    type="button"
                    class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => {
                      closeModal();
                      setFormData({
                        name: "",
                        designation: "",
                        income: "",
                        experience: "Fresher",
                      });
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
