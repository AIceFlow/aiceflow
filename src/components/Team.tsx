const Team = () => {
  const founders = [
    {
      name: "Alex Schneider",
      position: "Co-Founder & AI Strategy Director",
      bio: "Former Tesla AI engineer with 8+ years in machine learning and process automation. Tennis player who brings precision and strategic thinking to every project.",
      expertise: ["Large Language Models", "Process Optimization", "Strategic Planning"],
      image: "AS"
    },
    {
      name: "Maria Hoffmann",
      position: "Co-Founder & Technical Director",
      bio: "Ex-Google software architect specializing in enterprise automation. Tennis enthusiast who applies court strategy to business solutions.",
      expertise: ["System Architecture", "Dashboard Development", "Integration"],
      image: "MH"
    }
  ];

  return (
    <section className="py-24 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meet Our Founders
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our tennis-inspired approach to teamwork drives innovation and excellence. Meet the experts behind AIceFlow's success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-500 hover:scale-105 border border-border group">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold group-hover:shadow-glow transition-all duration-300">
                  {founder.image}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{founder.name}</h3>
                <p className="text-primary font-semibold">{founder.position}</p>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6 text-center">
                {founder.bio}
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground text-center mb-4">Core Expertise</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {founder.expertise.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tennis inspiration section */}
        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">The Tennis Philosophy</h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Just like in tennis, success in AI automation requires <strong className="text-foreground">precision</strong>, <strong className="text-foreground">strategic thinking</strong>, and <strong className="text-foreground">adaptability</strong>. 
              Our team applies these principles to every project, ensuring we deliver solutions that are not just technically sound, but strategically aligned with your business goals.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-primary font-semibold mb-2">Precision</div>
                <div className="text-sm text-muted-foreground">Every line of code and process designed with surgical accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-primary font-semibold mb-2">Strategy</div>
                <div className="text-sm text-muted-foreground">Long-term thinking and tactical execution for sustainable results</div>
              </div>
              <div className="text-center">
                <div className="text-primary font-semibold mb-2">Agility</div>
                <div className="text-sm text-muted-foreground">Quick adaptation to changing business needs and market conditions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;