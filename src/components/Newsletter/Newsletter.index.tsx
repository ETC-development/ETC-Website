import NewsletterBackground from "./Newsletter.background";
import NewsletterForground from "./Newsletter.forground";
import { Database } from "@/lib/database.types";


interface INewsletterProps {
    clubInfo: Database["public"]["Tables"]["club_info"]["Row"];
}

export default function Newsletter({clubInfo}: INewsletterProps) {
  return (
    <div id="Newsletter" className="newsletter h-[90vh]  min-h-[65rem]  w-full overflow-hidden relative flex flex-col justify-center">
       <NewsletterBackground />
      <NewsletterForground clubInfo={clubInfo} />
    </div>
  );
}
