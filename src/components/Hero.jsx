import { styles } from "../styles";
import { codex, logo } from "../assets";
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto my-auto`}>
      <div className={`absolute inset-0  mx-auto flex flex-row items-start items-center justify-center`}>
        <div>
          <a href="https://codex-iter.in/"><img src={codex} alt='codex' className='w-3/5 mx-auto h-24 object-contain' /></a>
          <h1 className='text-white text-center mt-3'> PRESENT'S</h1>
          <h1 className={`${styles.sectionHeadText} text-center`}>
            {/* <span className='text-[#915EFF]'>
              Code <br />
              For <br />
              Cause
            </span> */}
            <img src={logo} alt='codex' className='mt-5 mx-auto object-contain' />
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
