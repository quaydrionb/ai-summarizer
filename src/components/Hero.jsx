import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-1">
        <img src={logo} alt="logo" className="pt-6 w-28 object-container" />
        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/quaydrionb/ai-summarizer")
          }
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize articles with
        <br className="max-md:hidden" />
        <span className="blue_gradient">OpenAI GPT-4</span>
      </h1>

      <h2 className="desc">
        Make your reading easier with Article Digest, an open-source tool that
        condenses lengthy articles into clear and concise summaries.
      </h2>
    </header>
  );
};

export default Hero;
