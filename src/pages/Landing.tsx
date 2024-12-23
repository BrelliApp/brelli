import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldAlert, MessageSquareWarning, Heart } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Guardler</h1>
          <div className="space-x-4">
            <Link to="/auth">
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900">Sign In</Button>
            </Link>
            <Link to="/auth">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Protect Your Children Online
              </h1>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                Monitor and protect your children's social media activity with our comprehensive parental control solution.
              </p>
              <Link to="/auth">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                  Start Protecting Today
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Keeping Your Kids Safe Online</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our advanced AI technology works 24/7 to protect your children from online threats
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-16">
              <div className="group">
                <div className="mb-6 transform transition-transform group-hover:scale-105">
                  <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mx-auto">
                    <ShieldAlert className="h-8 w-8 text-red-500" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Predator Detection</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our AI spots suspicious behavior and potential predators before they can cause harm. No creeps allowed on our watch! 🚫
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="mb-6 transform transition-transform group-hover:scale-105">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto">
                    <MessageSquareWarning className="h-8 w-8 text-blue-500" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Anti-Bullying Shield</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We detect and block mean messages, hate speech, and harassment. Because everyone deserves to feel safe online. 💪
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="mb-6 transform transition-transform group-hover:scale-105">
                  <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto">
                    <Heart className="h-8 w-8 text-green-500" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Support When Needed</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We provide resources and support for both parents and kids. Building a safer internet, together! ❤️
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Powered by Advanced AI</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our intelligent system works around the clock to keep your children safe
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-16">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Smart Analysis</h3>
                <p className="text-gray-600">
                  Our AI analyzes social media content to detect potential risks and inappropriate content.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Privacy First</h3>
                <p className="text-gray-600">
                  Advanced encryption and security measures to protect your family's data.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">24/7 Monitoring</h3>
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