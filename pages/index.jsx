import Head from "next/head";

import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  connectHits,
  connectSearchBox,
  Stats,
  PoweredBy,
} from "react-instantsearch-dom";
import { SearchIcon } from "@heroicons/react/outline";
import { LocationMarkerIcon, GlobeAltIcon } from "@heroicons/react/solid";

import About from "./fragments/about";
import AddBusiness from "./fragments/add-business-cta";
import BusinessStats from "./fragments/stats";
import Footer from "./fragments/footer";
import Notification from "./fragments/notification";
import Hero from "./fragments/hero";
import Questions from "./fragments/questions";

const searchClient = algoliasearch(
  "YTU7KDAG82",
  "e83e0665f64f1adc2884e6a7d759de4a"
);

// (Future) Add filters
// (Future) Add search suggestions
// (Future) Add Algolia recommendations
// (Future) Product highlight & recommendations

const SearchBox = ({ currentRefinement, refine }) => (
  <div className="mx-auto max-w-2xl flex gap-2">
    <div className="flex-grow">
      <label htmlFor="search-input" className="sr-only">
        Product search input
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          name="search-input"
          type="search"
          className="pl-10 shadow-sm focus:ring-yellow-600 focus:border-yellow-600 block w-full sm:text-sm border border-gray-300 rounded-md"
          placeholder="Find the perfect gift"
          value={currentRefinement}
          onChange={(event) => refine(event.currentTarget.value)}
        />
      </div>
      <Stats className="text-xs font-light text-gray-700 mt-2" />
    </div>
    <PoweredBy className="transform scale-75 mb-auto mr-auto" />
  </div>
);

function parseURLString(str) {
  return str.substring(str.indexOf("(") + 1, str.lastIndexOf(")"));
}

const Hits = ({ hits }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
    {hits.map((hit) => (
      <article key={hit.objectID} className="shadow rounded flex">
        <img
          src={parseURLString(hit.Logo)}
          alt={hit.Name}
          className="w-1/3 rounded-l object-cover"
        />

        <div className="w-2/3 p-3 text-gray-600 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold leading-loose text-gray-900">
              {hit.Name}
            </h2>

            <ul className="flex flex-wrap gap-1">
              {hit["Product Types"]
                .split(",")
                .slice(0, 3)
                .map((item) => (
                  <li
                    key={item}
                    className="text-xs px-2 py-1 rounded-full bg-yellow-600 text-white"
                  >
                    {item}
                  </li>
                ))}
            </ul>

            <p className="text-gray-800 text-sm mt-2 line-clamp-2">
              {hit.Description}
            </p>
          </div>

          <div className="mt-2">
            <p className="text-xs font-light mt-2 whitespace-normal text-gray-900">
              <LocationMarkerIcon className="h-5 w-5 inline" />{" "}
              {hit.Address == "" ? (
                "Online"
              ) : (
                <a
                  href={"https://www.google.com/maps/place/" + hit.Address}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-normal underline"
                >
                  Google Maps
                </a>
              )}
            </p>
            <div className="flex gap-2 text-gray-900 text-xs font-light mt-4 space-x-4 text-yellow-600">
              <a href={hit.Website} target="_blank" rel="noopener noreferrer">
                <GlobeAltIcon className="h-5 w-5 inline" />
              </a>
              <a href={hit.Website} target="_blank" rel="noopener noreferrer">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="facebook"
                  className="h-5 w-5 fill-current"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                </svg>
              </a>
              <a href={hit.Website} target="_blank" rel="noopener noreferrer">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="instagram"
                  className="h-5 w-5 fill-current"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </article>
    ))}
  </div>
);

const CustomSearchBox = connectSearchBox(SearchBox);
const CustomHits = connectHits(Hits);

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Support Them | Stop looking for that perfect gift; find it.
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#F59E0B" />
        <meta
          name="description"
          content="A community-focused e-commerce browser built to help bring people together to support local business."
        />
        <meta
          name="keywords"
          content="support,them,ecommerce,commerce,community,search,local,business,recovery"
        />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="@thedannyferg" key="twhandle" />
        <meta
          property="og:url"
          content="https://supportthem.com.au"
          key="ogurl"
        />
        <meta
          property="og:image"
          content="https://supportthem.com.au/img/main-1.jpg"
          key="ogimage"
        />
        <meta property="og:site_name" content="Support Them" key="ogsitename" />
        <meta property="og:title" content="Support Them" key="ogtitle" />
        <meta
          property="og:description"
          content="A community-focused e-commerce browser built to help bring people together to support local business."
          key="ogdesc"
        />
      </Head>

      <Notification />
      <Hero />

      <main
        id="search"
        className="pb-20 md:py-36 sm:px-6 md:px-8 mx-auto max-w-7xl px-4"
      >
        <InstantSearch indexName="Businesses" searchClient={searchClient}>
          <CustomSearchBox />
          <CustomHits className="mt-8" />
        </InstantSearch>
      </main>

      <BusinessStats />
      <About />
      <AddBusiness />
      <Questions />
      <Footer />
    </div>
  );
}
