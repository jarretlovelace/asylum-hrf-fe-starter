
import { useNavigate } from "react-router-dom";
import { useDownloadData } from "../../../hooks/useDownloadData.js";

export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReadMore = () => {
    window.location.href = "https://www.humanrightsfirst.org/";
  };

  const handleViewData = () => {
    console.log("Viewing Data");
  };

  const handleDownloadData = () => {
    downloadCSV();
  };

  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Main Content */}
      <main className="mx-auto">
        {/* Header and Title Section */}
        <section className="title-bg text-center py-6 sm:py-8">
          <h1 className="text-2xl sm:text-3xl font-bold py-2">
            Asylum Office Grant Rate Tracker
          </h1>
          <p className="text-sm sm:text-base lg:text-lg px-4 sm:px-8 max-w-4xl mx-auto">
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions.
          </p>
        </section>

        {/* Graphs Section */}
        <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12 px-4 sm:px-6 lg:px-8">
          {[
            { src: "/src/assets/bar-graph.png", text: "Search Grant Rates By Office" },
            { src: "/src/assets/pie-chart.png", text: "Search Grant Rates By Nationality" },
            { src: "/src/assets/line-graph.png", text: "Search Grant Rates Over Time" },
          ].map(({ src, text }, index) => (
            <div key={index} className="bg-white p-6 rounded shadow-md text-center">
              <img src={src} alt={text} className="w-full h-48 mb-4 object-contain" />
              <p className="text-sm sm:text-base">{text}</p>
            </div>
          ))}
        </section>

        {/* Buttons Section */}
        <section className="max-w-7xl mx-auto my-8 px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-200 p-6 rounded shadow-md text-center">
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={handleViewData}
                className="w-full sm:w-auto px-6 py-3 bg-[#666555] text-white rounded shadow hover:bg-blue-700"
              >
                View Data
              </button>
              <button
                onClick={handleDownloadData}
                className="w-full sm:w-auto px-6 py-3 bg-gray-500 text-white rounded shadow hover:bg-green-700"
              >
                Download Data
              </button>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="flex flex-col sm:flex-row items-center justify-center my-12 px-4 sm:px-6 lg:px-8 gap-8">
          <div className="flex-shrink-0">
            <img
              src="/src/assets/paper-stack.jpg"
              alt="Stack of documents"
              className="w-full sm:w-72 h-auto rounded shadow-md object-cover"
            />
          </div>
          <div className="text-center sm:text-left max-w-lg">
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-6">
              Human Rights First has created a search tool to give you a
              user-friendly way to explore a data set of asylum decisions between
              FY 2016 and May 2021 by the USCIS Asylum Office, which we received
              through a Freedom of Information Act request. You can search for
              information on asylum grant rates by year, nationality, and asylum
              office, visualize the data with charts and heat maps, and download
              the data set.
            </p>
          </div>
        </section>

        {/* Systemic Disparity Section */}
        <h1 className="title-bg text-5xl sm:text-3xl font-bold text-center my-12">
          Systemic Disparity Section
        </h1>
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center my-12 px-4 sm:px-6 lg:px-8">
          {[
            {
              stat: "36%",
              text: "By the end of the Trump administration, the average asylum office grant rate had fallen 36% from an average of 64% in fiscal year 2016 to 28% in fiscal year 2020.",
            },
            {
              stat: "5%",
              text: "The New York asylum office grant rate dropped to 5% in fiscal year 2020.",
            },
            {
              stat: "6x Lower",
              text: "Between fiscal year 2017 and 2020, the New York asylum office’s average grant rate was 6x lower than the San Francisco asylum office.",
            },
          ].map(({ stat, text }, index) => (
            <div key={index}>
              <p className="text-4xl sm:text-5xl font-extrabold text-gray-800">{stat}</p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-2">{text}</p>
            </div>
          ))}
        </section>

        {/* Read More Button */}
        <div className="text-center my-8">
          <button
            onClick={handleReadMore}
            className="px-6 py-3 bg-[#666555] text-white rounded shadow hover:bg-red-500"
          >
            Read More
          </button>
        </div>

        {/* Back to Top Button */}
        <div className="text-center my-12">
          <button
            onClick={scrollToTop}
            className="px-6 py-3 bg-gray-300 text-black rounded shadow hover:bg-[#e1d421]"
          >
            Back to Top
          </button>
        </div>
      </main>
    </div>
  );
};
