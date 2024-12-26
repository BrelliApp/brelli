import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { useTranslation } from "react-i18next";

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation('landing');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.functions.invoke('add-to-waitlist', {
        body: { email }
      });

      if (error) throw error;

      toast.success("Successfully joined the waitlist!");
      setEmail("");
    } catch (error: any) {
      console.error('Waitlist error:', error);
      toast.error("Failed to join waitlist. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="waitlist" className="py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-8">
            {t('waitlist.title')}
          </h2>
          <p className="text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
            {t('waitlist.description')}
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-6 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Input
            type="email"
            placeholder={t('waitlist.emailPlaceholder')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 h-16 text-lg px-6"
          />
          <Button 
            type="submit" 
            disabled={isLoading} 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 h-16 text-xl"
          >
            {isLoading ? t('waitlist.joining') : t('waitlist.joinButton')}
          </Button>
        </motion.form>

        <motion.p
          className="mt-8 text-base text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {t('waitlist.alreadyJoined')}
        </motion.p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    </section>
  );
};

export default WaitlistSection;