import Hero from "@/components/sections/hero";
import HowWeWork, { ChildrenYouthHelp } from "@/components/sections/how-we-work";
import References from "@/components/sections/references";

export default function Home() {
  return (
    <div className="bg-orange-soft">
      <Hero />
      <HowWeWork />
      <ChildrenYouthHelp />
      <References />
    </div>
  );
}
