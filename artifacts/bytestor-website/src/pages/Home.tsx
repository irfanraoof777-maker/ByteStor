import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { 
  Sun, Moon, Menu, X, Server, BookOpen, Briefcase, 
  ChevronRight, ArrowRight, Mail, Linkedin, Facebook, Twitter, Youtube, Instagram
} from "lucide-react";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 top-0 left-0 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('home')}>
            <span className="text-2xl font-bold tracking-tighter">
              <span className="text-foreground">Byte</span>
              <span className="text-primary">Stor</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollTo('home')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="nav-home">Home</button>
            <button onClick={() => scrollTo('about')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="nav-about">Know Us</button>
            <button onClick={() => scrollTo('services')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="nav-services">Services</button>
            <button onClick={() => scrollTo('stats')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="nav-clients">Clients</button>
            <button onClick={() => scrollTo('cta')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="nav-contact">Contact Us</button>
            
            <div className="flex items-center gap-4 pl-4 border-l border-border">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn" data-testid="link-linkedin">
                <Linkedin className="w-5 h-5" />
              </a>
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary/20 transition-colors"
                  aria-label="Toggle theme"
                  data-testid="btn-theme-toggle"
                >
                  {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              )}
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full bg-secondary text-secondary-foreground"
                data-testid="btn-theme-toggle-mobile"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            )}
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground" data-testid="btn-mobile-menu">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            <button onClick={() => scrollTo('home')} className="text-left px-3 py-2 text-base font-medium text-foreground rounded-md hover:bg-secondary">Home</button>
            <button onClick={() => scrollTo('about')} className="text-left px-3 py-2 text-base font-medium text-foreground rounded-md hover:bg-secondary">Know Us</button>
            <button onClick={() => scrollTo('services')} className="text-left px-3 py-2 text-base font-medium text-foreground rounded-md hover:bg-secondary">Services</button>
            <button onClick={() => scrollTo('stats')} className="text-left px-3 py-2 text-base font-medium text-foreground rounded-md hover:bg-secondary">Clients</button>
            <button onClick={() => scrollTo('cta')} className="text-left px-3 py-2 text-base font-medium text-foreground rounded-md hover:bg-secondary">Contact Us</button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-20 blur-[100px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
            We build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">digital experiences.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
            We collaborate with smart and creative people to build global talent on emerging technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={scrollToServices}
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all flex items-center gap-2 shadow-lg shadow-primary/25"
              data-testid="btn-get-started"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const CountUp = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);
  
  return <>{count}</>;
};

const Stats = () => {
  const stats = [
    { value: 30, suffix: "+", label: "Years Of Experience" },
    { value: 20, suffix: "+", label: "Certifications" },
    { value: 600, suffix: "+", label: "Trainings Delivered" },
    { value: 20, suffix: "K+", label: "Students" },
  ];

  return (
    <section id="stats" className="py-20 bg-secondary/50 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <CountUp end={stat.value} />{stat.suffix}
              </div>
              <div className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Server className="w-10 h-10 text-primary" />,
      title: "IT Services",
      desc: "Storage Consolidation, Backup & Recovery, High Availability/Clustering, Disaster Recovery, HyperConverged (HCI)."
    },
    {
      icon: <Briefcase className="w-10 h-10 text-primary" />,
      title: "Consulting",
      desc: "Our Consultancy Services are designed based on proven best practices and industry standards to deliver expert quality to its clients. With a talent pool of highly qualified and certified consultants we deliver optimal value to businesses."
    },
    {
      icon: <BookOpen className="w-10 h-10 text-primary" />,
      title: "Training",
      desc: "Training and skill development: online courses, conferences, seminars, webinars, e-learning, coaching. Grow knowledge and abilities."
    }
  ];

  return (
    <section id="services" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">We Solve Creative Delusions Efficiently</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At BITS we develop IT strategy, design and use industry best practices to ensure that your Infrastructure and business critical Applications/Databases run 24x7x365 without downtime. Our strategies are focused to address your business growth and future roadmap which will achieve Lower Total Cost of Ownership and meet SLAs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-primary/50 transition-all group"
              data-testid={`card-service-${idx}`}
            >
              <div className="mb-6 p-4 bg-primary/10 rounded-xl inline-block group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {service.desc}
              </p>
              <a href="#" className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors">
                View More <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">About ByteStor Information Technology Services LLP (BITS)</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              ByteStor Information Technology Services LLP (BITS) is an IT Consultancy and Services company based in Hyderabad, India.
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed font-medium border-l-4 border-primary pl-4">
              Our Team = Our Strength — a team of dedicated, passionate and experienced professionals from various IT Domain proficiency and diversified backgrounds.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div> Our Values
                </h3>
                <p className="text-muted-foreground">Committed to our clients, providing quality yet cost-effective service. We value our team and pride ourselves in working with integrity and ethics.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div> Our Vision
                </h3>
                <p className="text-muted-foreground">To establish a footprint as the most esteemed entity and deliver services to achieve utmost customer satisfaction.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div> Our Mission
                </h3>
                <p className="text-muted-foreground">To deliver proficient and valuable services to our clients by utilizing industry best standards and create long-term and sustainable shareholder value.</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl border border-primary/20 p-8 flex flex-col justify-center">
              <div className="bg-card p-8 rounded-2xl shadow-xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-4">Employment Opportunities</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  BITS is an equal opportunity organization committed to providing a platform to talented, focused, and hard-working individuals.
                </p>
                <a href="mailto:info@bytestor.in" className="inline-flex items-center justify-center w-full px-6 py-4 bg-secondary text-foreground font-semibold rounded-lg hover:bg-secondary/80 transition-colors gap-2 border border-border">
                  <Mail className="w-5 h-5" /> Send your resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section id="cta" className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-8">Ready to work together?</h2>
        <p className="text-primary-foreground/80 text-xl mb-10 max-w-2xl mx-auto">
          Let's discuss how ByteStor can help stabilize and scale your enterprise infrastructure.
        </p>
        <button className="px-10 py-5 bg-background text-foreground font-bold text-lg rounded-xl hover:scale-105 transition-transform shadow-xl shadow-background/10">
          Contact Us Today
        </button>
      </div>
    </section>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold tracking-tighter mb-4 inline-block">
              <span className="text-foreground">Byte</span>
              <span className="text-primary">Stor</span>
            </span>
            <p className="text-muted-foreground max-w-sm mb-6">
              Seasoned IT consultancy and services company trusted by enterprises for infrastructure stability and workforce training.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"><Youtube className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><button onClick={() => document.getElementById('home')?.scrollIntoView()} className="text-muted-foreground hover:text-primary transition-colors">Home</button></li>
              <li><button onClick={() => document.getElementById('about')?.scrollIntoView()} className="text-muted-foreground hover:text-primary transition-colors">Know Us</button></li>
              <li><button onClick={() => document.getElementById('services')?.scrollIntoView()} className="text-muted-foreground hover:text-primary transition-colors">Services</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              <li><button onClick={() => document.getElementById('stats')?.scrollIntoView()} className="text-muted-foreground hover:text-primary transition-colors">Clients</button></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">News</a></li>
              <li><button onClick={() => document.getElementById('cta')?.scrollIntoView()} className="text-muted-foreground hover:text-primary transition-colors">Contact Us</button></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            Copyright © {currentYear} ByteStor IT Services
          </p>
          <p className="text-muted-foreground text-sm">
            Hyderabad, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col font-sans bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <Services />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
