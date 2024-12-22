import { Button } from "@/components/ui/button";
import { Shield, Users, Bell, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-primary py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Keep Your Children Safe Online
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
            Monitor social media activity and protect your children from online risks
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/dashboard")}
            className="bg-white text-primary-foreground hover:bg-white/90"
          >
            Get Started
          </Button>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Shield className="w-12 h-12 mx-auto mb-4 text-primary-foreground" />
              <h3 className="text-xl font-semibold mb-2">Proactive Protection</h3>
              <p className="text-gray-600">
                Real-time monitoring and instant alerts for suspicious activities
              </p>
            </div>
            <div className="text-center p-6">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary-foreground" />
              <h3 className="text-xl font-semibold mb-2">Multiple Accounts</h3>
              <p className="text-gray-600">
                Monitor all social media platforms in one dashboard
              </p>
            </div>
            <div className="text-center p-6">
              <Bell className="w-12 h-12 mx-auto mb-4 text-primary-foreground" />
              <h3 className="text-xl font-semibold mb-2">Smart Alerts</h3>
              <p className="text-gray-600">
                Get notified about potential risks and suspicious behavior
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Simple Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="border rounded-lg p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Basic</h3>
              <p className="text-3xl font-bold mb-6">$9.99<span className="text-lg font-normal text-gray-600">/month</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>1 child profile</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>2 social media accounts</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Basic alerts</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline" onClick={() => navigate("/dashboard")}>
                Start Basic
              </Button>
            </div>

            {/* Premium Plan */}
            <div className="border rounded-lg p-8 bg-primary shadow-lg scale-105 transform">
              <h3 className="text-xl font-semibold mb-4">Premium</h3>
              <p className="text-3xl font-bold mb-6">$19.99<span className="text-lg font-normal text-primary-foreground/70">/month</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>3 child profiles</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Unlimited social accounts</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Advanced risk detection</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>24/7 support</span>
                </li>
              </ul>
              <Button className="w-full bg-white text-primary-foreground hover:bg-white/90" onClick={() => navigate("/dashboard")}>
                Start Premium
              </Button>
            </div>

            {/* Family Plan */}
            <div className="border rounded-lg p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Family</h3>
              <p className="text-3xl font-bold mb-6">$29.99<span className="text-lg font-normal text-gray-600">/month</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Unlimited child profiles</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Unlimited social accounts</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Premium risk detection</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Family dashboard</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline" onClick={() => navigate("/dashboard")}>
                Start Family Plan
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;