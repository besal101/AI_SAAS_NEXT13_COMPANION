import SubscriptionButton from "@/components/Element/subscription-button";
import { checkSubscription } from "@/lib/subscription";
import * as React from "react";

interface ISettingsProps {}

const Settings: React.FC<ISettingsProps> = async (props) => {
  const isPro = await checkSubscription();
  return (
    <div className="h-full p-4 space-y-2">
      <h3 className="text-lg font-medium">Settings</h3>
      <div className="text-muted-foreground text-sm">
        {isPro
          ? "You are currently on a Pro Plan"
          : "You are currently on a free plan"}
      </div>
      <SubscriptionButton isPro={isPro} />
    </div>
  );
};

export default Settings;
