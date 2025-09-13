import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Sparkles, BarChart3, Zap } from "lucide-react";
import heroImage from "@/assets/hero-learning.jpg";

const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-gradient-primary px-4 py-2 rounded-full text-white text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                AI-Powered Learning
              </div>
              
              <h1 className="text-5xl font-bold text-foreground leading-tight">
                Adaptive Learning
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Platform</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Create a personalized study system with document processing, automated assessment generation, 
                progress analytics, and AI-driven study recommendations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8">
                <Upload className="w-5 h-5" />
                Upload Documents
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <BarChart3 className="w-5 h-5" />
                View Demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Documents Processed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">95%</div>
                <div className="text-sm text-muted-foreground">Learning Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-learning-info">24/7</div>
                <div className="text-sm text-muted-foreground">AI Support</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl opacity-20 blur-3xl transform rotate-6"></div>
            <Card className="relative p-8 bg-gradient-card shadow-card border-0 overflow-hidden">
              <img 
                src={heroImage} 
                alt="Adaptive Learning Platform Interface" 
                className="w-full h-80 object-cover rounded-2xl shadow-soft"
              />
              
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground p-4 rounded-2xl shadow-glow">
                <Zap className="w-8 h-8" />
              </div>
              
              <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground p-3 rounded-xl shadow-soft">
                <div className="text-xs font-medium">AI Processing</div>
                <div className="text-lg font-bold">Active</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;