import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent
} from "@/components/ui/tabs";
import Titration from "./experiments/Titration";
import SaltPreparation from "./experiments/SaltPreparation";
import ReactionRate from "./experiments/ReactionRate";

export default function ChemistryLabPractical() {
  return (
    <div className="min-h-screen bg-primary text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-4">
        🧪 Chemistry Lab Practical Simulations
      </h1>

      <Tabs defaultValue="titration" className="w-full max-w-5xl mx-auto">
        <TabsList>
          <TabsTrigger value="titration">Titration</TabsTrigger>
          <TabsTrigger value="salt">Salt Prep</TabsTrigger>
          <TabsTrigger value="reaction">Reaction Rate</TabsTrigger>
        </TabsList>

        <TabsContent value="titration">
          <Titration />
        </TabsContent>
        <TabsContent value="salt">
          <SaltPreparation />
        </TabsContent>
        <TabsContent value="reaction">
          <ReactionRate />
        </TabsContent>
      </Tabs>
    </div>
  );
}
