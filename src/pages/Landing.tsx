import { Button } from "@/components/ui/button";
import { Shield, Users, Bell, Brain, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { RunwareService, GeneratedImage } from "@/services/runware";
import { toast } from "sonner";

const Landing = () => {
  const navigate = useNavigate();
  const [apiKey, setApiKey] = useState<string>("");
  const [images, setImages] = useState<Record<string, string>>({});
  const [isGenerating, setIsGenerating] = useState(false);

  const generateImages = async () => {
    if (!apiKey) {
      toast.error("Please enter your Runware API key");
      return;
    }

    setIsGenerating(true);
    const runwareService = new RunwareService(apiKey);

    const prompts = [
      {
        key: "shield",
        prompt: "A glowing protective shield surrounding digital messages, abstract visualization, clean modern style, blue tones, professional security concept",
      },
      {
        key: "analysis",
        prompt: "AI analyzing text patterns, abstract data visualization, flowing lines of code being scanned, cybersecurity concept, professional tech illustration",
      },
      {
        key: "safety",
        prompt: "Safe communication symbols, parent and child silhouettes with protective digital shield, modern minimal style, professional family safety concept",
      },
    ];

    try {
      const generatedImages: Record<string, string> = {};
      
      for (const { key, prompt } of prompts) {
        const result = await runwareService.generateImage({
          positivePrompt: prompt,
          model: "runware:100@1",
          width: 1024,
          height: 512,
        });
        generatedImages[key] = result.imageURL;
      }

      setImages(generatedImages);
    } catch (error) {
      console.error("Error generating images:", error);
      toast.error("Failed to generate images. Please check your API key and try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-primary py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-8">
            <Shield className="w-24 h-24 text-primary-foreground opacity-90" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-8">
            Keep Your Children Safe Online
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto">
            Monitor social media activity and protect your children from online risks
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/dashboard")}
            className="bg-white text-primary-foreground hover:bg-white/90 h-16 px-12 text-xl"
          >
            <Shield className="w-8 h-8 mr-2" />
            Get Started
          </Button>
        </div>
      </header>

      {/* API Key Input */}
      <div className="max-w-xl mx-auto mt-8 p-4">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Enter your Runware API key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="flex-1 p-2 border rounded"
          />
          <Button 
            onClick={generateImages}
            disabled={isGenerating}
          >
            {isGenerating ? "Generating..." : "Generate Images"}
          </Button>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Get your API key from <a href="https://runware.ai/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Runware.ai</a>
        </p>
      </div>

      {/* Generated Images Display */}
      {Object.keys(images).length > 0 && (
        <div className="max-w-7xl mx-auto mt-8 p-4 grid md:grid-cols-3 gap-8">
          {Object.entries(images).map(([key, url]) => (
            <div key={key} className="rounded-lg overflow-hidden shadow-lg">
              <img src={url} alt={key} className="w-full h-64 object-cover" />
            </div>
          ))}
        </div>
      )}

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

      {/* AI Protection Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader className="flex flex-row items-center gap-4">
              <Brain className="w-8 h-8 text-primary" />
              <div>
                <CardTitle>AI-Powered Protection</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Predator Detection</h3>
                    <p className="text-sm text-muted-foreground">
                      Our AI constantly analyzes conversations to identify potential predatory behavior, suspicious patterns, and grooming attempts.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Anti-Bullying System</h3>
                    <p className="text-sm text-muted-foreground">
                      Advanced language processing detects signs of cyberbullying, hate speech, and harmful content in real-time.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-background/50 p-4 rounded-lg mt-4">
                <p className="text-sm text-center text-muted-foreground">
                  Our AI system processes over 1 million messages daily with 99.9% accuracy in threat detection
                </p>
              </div>
            </CardContent>
          </Card>
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