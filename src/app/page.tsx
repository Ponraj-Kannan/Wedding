import { MobileGate } from "@/components/MobileGate";
import { WeddingInvitation } from "@/components/WeddingInvitation";

export default function HomePage() {
  return (
    <MobileGate>
      <WeddingInvitation />
    </MobileGate>
  );
}
