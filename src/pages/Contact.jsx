export default function Contact() {
  return (
    <>
      <h1 className="text-center text-4xl">Contact Us</h1>
      <p className="text-center mt-4">
        If you have any questions or feedback, feel free to reach out to us!
      </p>

      <p className="text-xs text-center text-gray-400">
        You can fill the forms down here or contact us trough our email{" "}
        <a href="mailto:mvmzms@gmail.com" className="underline">
          mvmzms@gmail.com
        </a>
      </p>

      <br />

      <form className="flex flex-col gap-4 items-center w-1/2 h-[80vh] mx-auto">
        <div className="flex flex-col w-full">
          <label htmlFor="name">Name:</label>
          <input
            className="bg-white text-black placeholder:text-gray-600 p-3 rounded-xl border-2 border-black max-w-96 focus:outline-2 focus:outline-gray-500 text-lg w-full"
            placeholder="Ash Ketchum"
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="email">Email:</label>
          <input
            className="bg-white text-black placeholder:text-gray-600 p-3 rounded-xl border-2 border-black max-w-96 focus:outline-2 focus:outline-gray-500 text-lg w-full"
            type="email"
            placeholder="trainer@email.com"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="organization">Organization:</label>
          <input
            className="bg-white text-black placeholder:text-gray-600 p-3 rounded-xl border-2 border-black max-w-96 focus:outline-2 focus:outline-gray-500 text-lg w-full"
            placeholder="Team Rocket"
            type="text"
            name="organization"
            id="organization"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="message">Message:</label>
          <textarea
            className="bg-white text-black placeholder:text-gray-600"
            name="comment"
            id="comment"
            cols={30}
            rows={10}
          ></textarea>
        </div>

        <input
          type="submit"
          value="Send"
          className="bg-blue-600 text-white px-8 py-3 rounded-xl border-2 border-blue-600 hover:bg-blue-700 hover:border-blue-700 focus:outline-2 focus:outline-blue-500 cursor-pointer transition-colors duration-200 font-semibold text-lg"
        />
      </form>
    </>
  );
}
