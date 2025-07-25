import { ArrowRight, Download } from "lucide-react";
import logo from "../assets/logo.png";

export default function Hero() {
  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center justify-center overflow-hidden bg-background'
    >
      <div className='absolute inset-0'>
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl animate-pulse'></div>
        <div
          className='absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-primary/5 to-transparent rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className='relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in'>
        <div className='mb-8'>
          <div className='inline-flex items-center justify-center w-16 h-16 bg-primary rounded-xl'>
            <img src={logo} alt='Logo' className='w-14 h-14 object-contain' />
          </div>
        </div>

        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight leading-tight'>
          Dev tools you'll
          <span className='block text-primary'>actually love using</span>
        </h1>

        <p className='text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed'>
          A modern ecosystem of handcrafted developer tools — minimal, fast, and
          growing with you.
        </p>

        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <button
            onClick={() =>
              document
                .getElementById("tools")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className='group bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-2 shadow-sm hover:shadow-md'
          >
            Explore Tools
            <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-200' />
          </button>
        </div>
      </div>
    </section>
  );
}
