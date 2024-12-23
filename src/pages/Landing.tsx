import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Users, Bell, Brain, Lock, Bot } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Guardler</h1>
          <div className="space-x-4">
            <Link to="/auth">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link to="/auth">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Protect Your Children Online
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Monitor and protect your children's social media activity with our comprehensive parental control solution.
            </p>
            <Link to="/auth">
              <Button size="lg" className="px-8">Start Protecting Today</Button>
            </Link>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Advanced Protection</h3>
                <p className="text-gray-600">
                  Real-time monitoring and protection across multiple social platforms.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Bell className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Instant Alerts</h3>
                <p className="text-gray-600">
                  Get notified immediately about potentially harmful activities.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Multiple Children</h3>
                <p className="text-gray-600">
                  Manage and protect all your children from a single dashboard.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Powered by Advanced AI</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Smart Analysis</h3>
                <p className="text-gray-600">
                  Our AI analyzes social media content to detect potential risks and inappropriate content.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Privacy First</h3>
                <p className="text-gray-600">
                  Advanced encryption and security measures to protect your family's data.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Bot className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">24/7 Monitoring</h3>
                <p className="text-gray-600">
                  Continuous AI-powered monitoring ensures your children are protected around the clock.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Landing;