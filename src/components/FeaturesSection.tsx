import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Brain, 
  BarChart3, 
  Sparkles, 
  Upload, 
  CheckCircle,
  TrendingUp,
  MessageSquare
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: FileText,
      title: "Document Processing",
      description: "Upload and process various document formats with advanced AI parsing and content extraction.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: CheckCircle,
      title: "Automated Assessments",
      description: "Generate personalized quizzes and assessments automatically from your study materials.",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: BarChart3,
      title: "Progress Analytics",
      description: "Track your learning progress with detailed analytics and performance insights.",
      color: "text-learning-info",
      bgColor: "bg-learning-info/10"
    },
    {
      icon: Brain,
      title: "AI Recommendations",
      description: "Get personalized study recommendations powered by advanced machine learning algorithms.",
      color: "text-learning-success",
      bgColor: "bg-learning-success/10"
    },
    {
      icon: Upload,
      title: "File Processing Tools",
      description: "Seamlessly handle multiple file formats with our advanced processing pipeline.",
      color: "text-learning-warning",
      bgColor: "bg-learning-warning/10"
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      description: "Monitor your learning journey with comprehensive performance metrics and insights.",
      color: "text-destructive",
      bgColor: "bg-destructive/10"
    }
  ];

  return (
    <section id="features" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-accent px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Platform Features
          </div>
          
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Everything You Need for
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Adaptive Learning</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge AI technology with intuitive design 
            to deliver a seamless learning experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 bg-gradient-card shadow-card border-0 hover:shadow-glow transition-all duration-300 group hover:-translate-y-2">
              <div className={`w-16 h-16 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              
              <Button variant="ghost" className="mt-6 p-0 h-auto font-medium text-primary hover:text-primary/80">
                Learn More →
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="px-8">
            <MessageSquare className="w-5 h-5" />
            Start Your Learning Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;