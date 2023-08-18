import NewsletterBackground from "./Newsletter.background";
import NewsletterForground from "./Newsletter.forground";

export default function Newsletter() {
  return (
    <div className="h-[100vh] w-full overflow-hidden relative flex flex-col justify-center">
      <NewsletterBackground />
      <NewsletterForground />
    </div>
  );
}
