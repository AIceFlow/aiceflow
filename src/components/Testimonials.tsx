const Testimonials = () => {
  const testimonials = [
    {
      quote: "AIceFlow transformed our logistics operations completely. Their AI automation reduced our processing time by 80% and eliminated manual errors. The ROI was immediate and substantial.",
      author: "Sarah Mueller",
      position: "Operations Director",
      company: "LogiTech GmbH",
      rating: 5
    },
    {
      quote: "The custom dashboard they built gives us real-time visibility into our entire sales pipeline. Our conversion rates increased by 45% within the first quarter of implementation.",
      author: "Marcus Schmidt",
      position: "Sales Manager",
      company: "TechSolutions AG",
      rating: 5
    },
    {
      quote: "Working with AIceFlow was seamless. Their expertise in AI and understanding of our business needs resulted in a solution that exceeded our expectations. Highly recommended!",
      author: "Anna Weber",
      position: "Marketing Director",
      company: "Digital Dynamics",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Client Success Stories
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. See how we've helped businesses across various industries achieve remarkable results with AI automation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 border border-border relative group"
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>

              {/* Rating stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                  <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;