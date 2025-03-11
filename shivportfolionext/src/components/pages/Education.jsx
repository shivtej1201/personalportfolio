import { CardSpotlight } from "@/components/ui/card-spotlight";

export function Education() {
  const authSteps = [
    {
      title: "MSc. Computer Science",
      steps: [
        "Savitribai Phule Pune University",
        "Year: 2022-2024",
        "Grade: A",
        "Verify your identity",
      ],
      link: "https://example.com/msc-results",
    },
    {
      title: "BSc. Computer Science",
      steps: [
        "Savitribai Phule Pune University",
        "Year: 2019-2022",
        "Grade: A+",
        "Monitor account activity",
      ],
      link: "https://example.com/bsc-results",
    },
    {
      title: "Full Stack Development",
      steps: [
        "Felix IT Systems",
        "Year: 2022-2023",
        "Grade: A",
        "Manage data sharing preferences",
      ],
      link: "https://example.com/fullstack-results",
    },
  ];

  return (
    <div className="flex flex-col gap-6 p-5 ">
      <h1 className="py-10 text-center text-4xl md:text-[3rem] font-bold mt-1 leading-none">
        Education
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-14 ">
        {authSteps.map((card, cardIndex) => (
          <CardSpotlight
            key={cardIndex}
            className="flex flex-col items-center justify-center h-96 w-96 p-4"
          >
            <p className="text-xl font-bold relative z-20 mt-2 text-white">
              {card.title}
            </p>
            <div className="flex flex-col gap-6">
              <div className="text-neutral-200 mt-4 relative z-20">
                <ul className="list-none mt-2">
                  {card.steps.map((step, stepIndex) => (
                    <Step key={stepIndex} title={step} />
                  ))}
                </ul>
              </div>

              <a href={card.link} target="_blank" rel="noopener noreferrer">
                <button
                  type="button"
                  className="flex flex-row gap-2 mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:bg-black hover:text-white before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                >
                  View Result
                  <svg
                    className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      className="fill-gray-800 group-hover:fill-gray-800"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </CardSpotlight>
        ))}
      </div>
    </div>
  );
}

const Step = ({ title }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};
