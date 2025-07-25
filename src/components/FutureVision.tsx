import { Sparkles, ArrowRight } from "lucide-react";

export default function FutureVision() {
  return (
    <section className='py-24 bg-background relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl'></div>
      <div className='absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl'></div>

      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in'>
        <div className='mb-8'>
          <div className='inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-8'>
            <Sparkles className='w-4 h-4 text-primary' />
            The Future
          </div>

          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight'>
            From tools to an
            <span className='block text-primary'>ecosystem</span>
          </h2>

          <p className='text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12'>
            Masst is growing into a full SaaS experience for developers — think
            Notion × Vercel for dev workflows. A unified platform where your
            tools, documentation, and projects live in harmony.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
          <div className='text-center'>
            <div className='w-12 h-12 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center'>
              <div className='w-6 h-6 bg-primary-foreground rounded'></div>
            </div>
            <h3 className='font-semibold text-lg text-foreground mb-2'>
              Unified Workspace
            </h3>
            <p className='text-muted-foreground text-sm'>
              All your dev tools in one beautiful interface
            </p>
          </div>

          <div className='text-center'>
            <div className='w-12 h-12 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center'>
              <div className='w-6 h-6 bg-primary-foreground rounded transform rotate-45'></div>
            </div>
            <h3 className='font-semibold text-lg text-foreground mb-2'>
              Smart Automation
            </h3>
            <p className='text-muted-foreground text-sm'>
              AI-powered workflows that adapt to your style
            </p>
          </div>

          <div className='text-center'>
            <div className='w-12 h-12 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center'>
              <div className='w-6 h-6 bg-primary-foreground rounded-full'></div>
            </div>
            <h3 className='font-semibold text-lg text-foreground mb-2'>
              Seamless Integration
            </h3>
            <p className='text-muted-foreground text-sm'>
              Connect with your existing development stack
            </p>
          </div>
        </div>

        <div className='bg-muted/50 rounded-lg p-8 border'>
          <h3 className='text-2xl font-bold text-foreground mb-4'>
            Be the first to experience the future
          </h3>
          <p className='text-muted-foreground mb-8'>
            Join our waitlist to get early access to the Masst SaaS platform
            when it launches.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'>
            <input
              type='email'
              placeholder='Enter your email'
              className='flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground placeholder-muted-foreground'
            />
            <button className='bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-2 justify-center'>
              Join Waitlist
              <ArrowRight className='w-4 h-4' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
