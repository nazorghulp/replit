import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import OverOns from "@/pages/over-ons";
import Diensten from "@/pages/diensten";
import Kinderen from "@/pages/kinderen";
import BlogsOverview from "@/pages/blogs-overview";
import BlogPost from "@/pages/blog/[slug]";
import FAQ from "@/pages/faq";
import Contact from "@/pages/contact";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

function Router() {
  const [location] = useLocation();
  
  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="min-h-screen bg-purple-primary">
      <Navbar />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/over-ons" component={OverOns} />
          <Route path="/diensten" component={Diensten} />
          <Route path="/kinderen" component={Kinderen} />
          <Route path="/blogs" component={BlogsOverview} />
          <Route path="/blogs/:slug" component={BlogPost} />
          <Route path="/faq" component={FAQ} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
