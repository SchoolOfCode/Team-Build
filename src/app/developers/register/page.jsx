
import "../../../../globals.css"
import Link from "next/link";
import DeveloperRegistration from "@/components/developerRegistration";

export default function DeveloperRegister() {
  return (
    <div className="flex flex-col">
      <div className="lg:flex lg:flex-col lg:items-center lg:justify-center lg:flex-grow">
        <DeveloperRegistration />
      </div>
    </div>
  );
}
