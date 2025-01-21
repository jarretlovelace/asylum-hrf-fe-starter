import { useNavigate } from "react-router-dom";
import { useDownloadData } from "../../../hooks/useDownloadData.js";

export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReadMore = () => {
    navigate("https://www.humanrightsfirst.org/");
  };

  const handleViewData = () => {
    // code to view the data, e.g., opening a modal or page
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
        <section className="bg-666555 text-white text-center py-4">
          <h1 className="text-5xl font-normal py-2">
            Asylum Office Grant Rate Tracker
          </h1>
          <p className="text-lg">
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions.
          </p>
        </section>

        {/* Graphs Section */}
        <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 my-12 px-4">
          <div className="bg-white p-6 rounded shadow-md text-center">
            <img
              src="/src/assets/bar-graph.png"
              alt="Bar Graph"
              className="w-full h-48 mb-4"
            />
            <p>Search Grant Rates By Office</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md text-center">
            <img
              src="/src/assets/pie-chart.png"
              alt="Pie Chart"
              className="w-full h-48 mb-4"
            />
            <p>Search Grant Rates By Nationality</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md text-center">
            <img
              src="/src/assets/line-graph.png"
              alt="Line Graph"
              className="w-full h-48 mb-4"
            />
            <p>Search Grant Rates Over Time</p>
          </div>
        </section>

        {/* Buttons Section - Separate Box Under Pie Chart */}
        <section className="max-w-7xl mx-auto my-8 px-4">
          <div className="bg-white p-6 rounded shadow-md text-center">
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleViewData}
                className="px-6 py-3 bg-gray-600 text-white rounded shadow hover:bg-blue-700"
              >
                View Data
              </button>
              <button
                onClick={handleDownloadData}
                className="px-6 py-3 bg-gray-600 text-white rounded shadow hover:bg-green-700"
              >
                Download Data
              </button>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="flex flex-col sm:flex-row items-center justify-center my-12 px-4 gap-8">
          {/* Image */}
          <div className="flex-shrink-0">
            <img
              src="/src/assets/paper-stack.jpg"
              alt="Stack of documents"
              className="w-72 h-auto rounded shadow-md"
            />
          </div>

          {/* Text */}
          <div className="text-center sm:text-left max-w-lg">
            <p className="text-gray-600 leading-relaxed mb-6">
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
        <h1 className="text-5xl font-normal text-center my-12">Systemic Disparity Insights</h1>
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center my-12 px-4">
          <div>
            <p className="text-3xl font-normal text-gray-800">36%</p>
            <p className="text-gray-600 mt-2">
              By the end of the Trump administration, the average asylum office
              grant rate had fallen 36% from an average of 64% in fiscal year
              2016 to 28% in fiscal year 2020.
            </p>
          </div>
          <div>
            <p className="text-3xl font-normal text-gray-800">5%</p>
            <p className="text-gray-600 mt-2">
              The New York asylum office grant rate dropped to 5% in fiscal year
              2020.
            </p>
          </div>
          <div>
            <p className="text-3xl font-normal text-gray-800">6x Lower</p>
            <p className="text-gray-600 mt-2">
              Between fiscal year 2017 and 2020, the New York asylum office’s
              average grant rate was 6x lower than the San Francisco asylum
              office.
            </p>
          </div>
        </section>

        {/* Read More Button */}
        <div className="text-center my-8">
          <button
            onClick={handleReadMore}
            className="px-6 py-3 bg-gray-600 text-white rounded shadow hover:bg-blue-700"
          >
            Read More
          </button>
        </div>

        {/* Back to Top Button */}
        <div className="text-center my-12">
          <button
            onClick={scrollToTop}
            className="px-6 py-3 text-black hover:bg-666555"
          >
            Back to Top
          </button>
        </div>
      </main>
    </div>
  );
};
