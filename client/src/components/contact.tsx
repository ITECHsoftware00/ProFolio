import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Linkedin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Message sent",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-32 container px-6 md:px-12 relative">
      <div className="grid lg:grid-cols-2 gap-16 md:gap-24 relative z-10">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-cyan-400 mb-2 inline-block px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/30 shadow-[0_0_10px_rgba(0,198,255,0.3)]">
            Let's Build Together
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">Ready to Start Your Project?</h3>
          <p className="text-xl text-gray-400 mb-12">
            If you're looking for reliability, expertise, and a partner who delivers, look no further than TechSolution.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4 group">
              <div className="p-3 rounded-lg bg-purple-900/20 text-cyan-400 border border-purple-500/30 group-hover:shadow-[0_0_15px_rgba(112,66,248,0.3)] transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-1">Email</h4>
                <a href="mailto:tsolution418@gmail.com" className="text-xl font-bold text-white hover:text-cyan-400 transition-colors">
                  tsolution418@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-3 rounded-lg bg-purple-900/20 text-cyan-400 border border-purple-500/30 group-hover:shadow-[0_0_15px_rgba(112,66,248,0.3)] transition-all">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-1">Phone</h4>
                <a href="tel:+380951594897" className="text-xl font-bold text-white hover:text-cyan-400 transition-colors">
                  +380 95 159 4897
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-3 rounded-lg bg-purple-900/20 text-cyan-400 border border-purple-500/30 group-hover:shadow-[0_0_15px_rgba(112,66,248,0.3)] transition-all">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-1">LinkedIn</h4>
                <a href="https://www.linkedin.com/in/abdul-halim-1aba17374" target="_blank" rel="noreferrer" className="text-xl font-bold text-white hover:text-cyan-400 transition-colors">
                  Connect with me
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#0a0a1a]/50 p-8 md:p-12 rounded-3xl border border-purple-500/20 backdrop-blur-sm shadow-[0_0_30px_rgba(0,0,0,0.3)]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} className="bg-[#030014] border-purple-500/20 focus:border-cyan-500/50 text-white placeholder:text-gray-600 transition-colors" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your@email.com" {...field} className="bg-[#030014] border-purple-500/20 focus:border-cyan-500/50 text-white placeholder:text-gray-600 transition-colors" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell me about your project..." {...field} className="bg-[#030014] border-purple-500/20 focus:border-cyan-500/50 text-white placeholder:text-gray-600 min-h-[150px] transition-colors" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" size="lg" className="w-full rounded-full font-bold text-lg py-6 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white shadow-[0_0_20px_rgba(112,66,248,0.3)] border-none">
                Send Message
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
