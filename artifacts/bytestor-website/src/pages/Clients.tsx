import { motion } from "framer-motion";
import { Link } from "wouter";
import { Globe, Building2, Handshake, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const regions = [
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: "India",
    desc: "Serving enterprise clients across India including Hyderabad, Mumbai, Delhi, Bangalore and other major cities.",
  },
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: "Middle East & Africa",
    desc: "Delivering training and consultancy services to clients across the Middle East and Africa region.",
  },
];

const sectors = [
  "Banking & Financial Services",
  "Healthcare & Pharmaceuticals",
  "Manufacturing",
  "Telecommunications",
  "Government & Public Sector",
  "Information Technology",
  "Retail & E-Commerce",
  "Education & Research",
];

const stats = [
  { value: "30+", label: "Years Serving Clients" },
  { value: "20K+", label: "Students Trained" },
  { value: "600+", label: "Trainings Delivered" },
  { value: "20+", label: "Industry Certifications" },
];

export default function Clients() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-primary opacity-10 blur-[80px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Trusted By</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">Our Clients</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              For over 30 years, ByteStor IT Services (BITS) has delivered enterprise-grade IT solutions, consultancy
              and training to organizations across India and the Middle East & Africa region.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary/10 border-y border-primary/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <div key={i} data-testid={`client-stat-${i}`}>
                <div className="text-4xl font-bold text-primary mb-2">{s.value}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">Regions We Serve</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {regions.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-card border border-border rounded-2xl p-8 flex gap-4 items-start"
                data-testid={`region-${i}`}
              >
                <div className="p-3 bg-primary/10 rounded-xl shrink-0">{r.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{r.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sectors */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Industries We Serve</h2>
                <p className="text-muted-foreground">Our expertise spans a wide range of industries with mission-critical infrastructure needs.</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {sectors.map((sector, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="flex items-center gap-2 bg-secondary/50 rounded-xl px-4 py-3"
                  data-testid={`sector-${i}`}
                >
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">{sector}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="py-16 bg-secondary/30 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-primary/10 rounded-2xl">
              <Handshake className="w-10 h-10 text-primary" />
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Become a Partner</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the growing list of enterprises that trust ByteStor IT Services for their critical infrastructure and workforce development needs.
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all flex items-center gap-2 mx-auto" data-testid="btn-partner">
              Work With Us <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
