import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  TrendingUp, 
  Target, 
  Clock,
  Award,
  Zap
} from "lucide-react";

const AnalyticsSection = () => {
  const stats = [
    { label: "Documents Processed", value: "1,247", change: "+23%", icon: BarChart3 },
    { label: "Learning Sessions", value: "89", change: "+12%", icon: Clock },
    { label: "Assessments Completed", value: "156", change: "+34%", icon: Target },
    { label: "Achievements Earned", value: "42", change: "+8%", icon: Award }
  ];

  const progressData = [
    { subject: "Mathematics", progress: 85, color: "bg-primary" },
    { subject: "Physics", progress: 72, color: "bg-accent" },
    { subject: "Chemistry", progress: 91, color: "bg-learning-success" },
    { subject: "Biology", progress: 68, color: "bg-learning-info" }
  ];

  return (
    <section id="analytics" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-primary px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            Analytics Dashboard
          </div>
          
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Track Your
            <span className="bg-gradient-accent bg-clip-text text-transparent"> Learning Progress</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get detailed insights into your learning journey with comprehensive analytics and performance tracking.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Card className="p-8 bg-gradient-card shadow-card border-0">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-foreground">Performance Overview</h3>
                <Button variant="outline" size="sm">
                  <BarChart3 className="w-4 h-4" />
                  View Details
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-background/50 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-3">
                      <stat.icon className="w-8 h-8 text-primary" />
                      <span className="text-sm font-medium text-learning-success">{stat.change}</span>
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-card shadow-card border-0">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Learning Streak</h3>
                <p className="text-sm text-muted-foreground">Keep up the momentum!</p>
              </div>
            </div>

            <div className="text-center py-8">
              <div className="text-5xl font-bold text-primary mb-2">15</div>
              <div className="text-lg text-muted-foreground mb-6">Days in a row</div>
              <Progress value={75} className="mb-4" />
              <p className="text-sm text-muted-foreground">
                5 more days to reach your monthly goal!
              </p>
            </div>
          </Card>
        </div>

        <Card className="p-8 bg-gradient-card shadow-card border-0">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-foreground">Subject Progress</h3>
            <Button variant="outline" size="sm">View All Subjects</Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {progressData.map((item, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground">{item.subject}</span>
                  <span className="text-sm text-muted-foreground">{item.progress}%</span>
                </div>
                <Progress value={item.progress} className="h-3" />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AnalyticsSection;