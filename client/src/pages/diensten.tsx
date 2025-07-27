import PricingPackages from "@/components/sections/pricing-packages";
import ChildrenSpecialization from "@/components/sections/children-specialization";

export default function Diensten() {
  return (
    <div className="py-16">
      <PricingPackages />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ChildrenSpecialization />
      </div>
    </div>
  );
}
