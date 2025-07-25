import {
  ExternalLink,
  Github,
  Clock,
  Zap,
  Terminal,
  FileText,
  Eye,
  Layers,
} from "lucide-react";

const tools = [
  {
    name: "LeetDaily",
    description:
      "Track your LeetCode streak. Chrome extension that glows red if you forget to solve.",
    icon: Clock,
    links: [
      { label: "Chrome Store", url: "#", icon: ExternalLink },
      { label: "GitHub", url: "#", icon: Github },
    ],
    status: "available",
  },
  {
    name: "Masst UI",
    description: "Lightweight component library, built for speed and clarity.",
    icon: Layers,
    links: [
      { label: "Docs", url: "#", icon: FileText },
      { label: "GitHub", url: "#", icon: Github },
    ],
    status: "available",
  },
  {
    name: "Masst CLI",
    description:
      "CLI for scaffolding and automation, plug-and-play simplicity.",
    icon: Terminal,
    links: [{ label: "GitHub", url: "#", icon: Github }],
    status: "available",
  },
  {
    name: "Masst Events",
    description: "A reliable event bus for structured, reactive flows.",
    icon: Zap,
    links: [{ label: "GitHub", url: "#", icon: Github }],
    status: "available",
  },
  {
    name: "Masst Docs",
    description:
      "AI-powered, minimal documentation viewer with blazing fast search.",
    icon: FileText,
    links: [{ label: "GitHub", url: "#", icon: Github }],
    status: "available",
  },
  {
    name: "Glass UI",
    description:
      "Next-gen glassmorphism UI system inspired by Apple's design system.",
    icon: Eye,
    links: [],
    status: "coming-soon",
  },
];

export default function FeaturedTools() {
  return (
    <section id='tools' className='py-24 bg-muted/30'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16 animate-fade-in'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight'>
            Crafted with
            <span className='block text-primary'>purpose</span>
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Each tool in the Masst ecosystem is built with obsessive attention
            to detail, developer experience, and performance.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {tools.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <div
                key={tool.name}
                className='group bg-background border rounded-lg p-6 transition-all duration-200 hover:shadow-md hover:scale-[1.02] animate-slide-up'
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className='flex items-start justify-between mb-4'>
                  <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 bg-primary text-primary-foreground rounded-md flex items-center justify-center'>
                      <IconComponent className='w-5 h-5' />
                    </div>
                    <h3 className='text-lg font-semibold text-foreground'>
                      {tool.name}
                    </h3>
                  </div>
                  {tool.status === "coming-soon" && (
                    <span className='px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium'>
                      Coming Soon
                    </span>
                  )}
                </div>

                <p className='text-muted-foreground mb-6 leading-relaxed text-sm'>
                  {tool.description}
                </p>

                <div className='flex gap-2 flex-wrap'>
                  {tool.links.map((link) => {
                    const LinkIcon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.url}
                        className='inline-flex items-center gap-1 px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md text-xs font-medium transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:scale-105 active:scale-95'
                      >
                        <LinkIcon className='w-3 h-3' />
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
