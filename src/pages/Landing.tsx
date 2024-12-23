import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Users, Bell, Brain, Lock, Bot, ShieldAlert, MessageSquareWarning, Heart } from "lucide-react";

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
            <h2 className="text-3xl font-bold text-center mb-12">Keeping Your Kids Safe Online</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldAlert className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Predator Detection</h3>
                <p className="text-gray-600">
                  We've got your back! Our AI spots suspicious behavior and potential predators before they can cause harm. No creeps allowed on our watch! 🚫
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageSquareWarning className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Anti-Bullying Shield</h3>
                <p className="text-gray-600">
                  Say goodbye to cyberbullying! We detect and block mean messages, hate speech, and harassment. Because everyone deserves to feel safe online. 💪
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Support When Needed</h3>
                <p className="text-gray-600">
                  We don't just block the bad stuff - we provide resources and support for both parents and kids. Building a safer internet, together! ❤️
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