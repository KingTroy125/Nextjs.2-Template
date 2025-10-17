import { Badge } from "@/components/ui/badge";

const stats = [
  {
    percentage: "95%",
    title: "Fast-Track Results",
    description: "Accelerate your growth journey with Nexio's cutting-edge analytics.",
  },
  {
    percentage: "20%",
    title: "Increased Efficiency",
    description: "Uncover hidden opportunities in your data with Nexio's automated insights.",
  },
  {
    percentage: "36%",
    title: "Performance Leap",
    description: "Elevate your workflows and outpace the competition using Nexio's advanced features.",
  },
  {
    percentage: "54%",
    title: "Strategic Advantage",
    description: "Gain a competitive edge through Nexio's powerful, data-driven strategies.",
  },
];

const StatsHero = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Side - Header */}
          <div className="flex flex-col gap-8">
            {/* Badge with decorative line */}
            <div className="flex items-center gap-3">
              <Badge variant="hero">
                <span className="text-sm font-medium">Our statistics</span>
              </Badge>
              <div className="h-px w-32 bg-border/50"></div>
            </div>

            {/* Heading */}
            <h2 className="bg-gradient-to-br from-foreground to-primary bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
              The numbers that<br />define our success
            </h2>
          </div>

          {/* Right Side - Stats Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative flex flex-col rounded-2xl border border-border/50 bg-card/50 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-primary/5"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Percentage */}
                  <div className="mb-16 bg-gradient-to-r from-foreground to-primary bg-clip-text text-5xl font-bold text-transparent">
                    {stat.percentage}
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {stat.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsHero;