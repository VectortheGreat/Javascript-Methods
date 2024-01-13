import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import CircleRightComp from "../components/CircleRightComp";
import CircleLeftComp from "../components/CircleLeftComp";

const Home = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
    >
      <div>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[800px] text-center flex flex-col items-center"
              data-wow-delay=".2s"
            >
              <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Welcome to Javascript Methods
              </h1>
              <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                This is a website that shows you Javascript's important methods for String, Number, Array, Date, and
                Math.
              </p>
              <Link
                to={"https://github.com/VectortheGreat/Javascript-Methods"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-sky-800 mt-10 lg:space-x-2 duration-300"
              >
                <p className="text-sm lg:text-lg">
                  This is a React Typescript Project. Click for the
                  <span className="ml-1">
                    source code
                    <AiFillGithub className="h-8 w-8 lg:h-16 lg:w-16 inline-block ml-4" />
                  </span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 z-[-1] opacity-30 lg:opacity-100">
        <CircleRightComp />
      </div>
      <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
        <CircleLeftComp />
      </div>
    </section>
  );
};

export default Home;
