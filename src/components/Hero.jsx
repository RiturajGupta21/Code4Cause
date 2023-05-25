import { styles } from "../styles";
import { codex, logo } from "../assets";
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto my-auto`}>
      <div className={`absolute inset-0  mx-auto flex flex-row items-start items-center justify-center`}>
        <div>
          <h1 className='text-white text-center'>
            <a href="https://codex-iter.in/"><img src={codex} alt='codex' className='w-4/5 mx-auto h-24 object-contain' /></a>
            PRESENT'S
          </h1>
          <h1 className={`${styles.sectionHeadText} text-center`}>
            <span className='text-[#915EFF]'>
              Code <br />
              For <br />
              Cause
            </span>
            <img src={logo} alt='codex' className='w-96 h-24 object-contain' />
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
