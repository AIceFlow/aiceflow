import dashboardMockup from "@/assets/dashboard-mockup.jpg";

const Showcase = () => {
  return (
    <section className="py-24 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            See AI Automation in Action
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the power of our custom dashboards and automation platforms. This interactive demo showcases real-time process monitoring and AI-driven insights.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border">
            <div className="relative group">
              <img 
                src={dashboardMockup} 
                alt="AI Dashboard Demo" 
                className="w-full rounded-xl shadow-card transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay with interactive elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Real-Time Process Dashboard</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">98.7%</div>
                      <div className="text-sm opacity-80">Automation Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400">2.3s</div>
                      <div className="text-sm opacity-80">Average Processing Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-400">€127K</div>
                      <div className="text-sm opacity-80">Monthly Cost Savings</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive dots */}
              <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary rounded-full shadow-glow animate-pulse"></div>
              <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-green-500 rounded-full shadow-glow animate-pulse animation-delay-200"></div>
              <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-yellow-500 rounded-full shadow-glow animate-pulse animation-delay-300"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Key Features Demonstrated</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Real-time process monitoring and analytics
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Automated workflow visualization
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Performance KPI tracking
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Predictive insights and alerts
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Business Impact</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-accent/50 rounded-lg">
                    <span className="text-muted-foreground">Time Saved Daily</span>
                    <span className="font-semibold text-primary">6.5 hours</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-accent/50 rounded-lg">
                    <span className="text-muted-foreground">Error Reduction</span>
                    <span className="font-semibold text-green-600">-94%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-accent/50 rounded-lg">
                    <span className="text-muted-foreground">ROI Timeline</span>
                    <span className="font-semibold text-primary">3 months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;