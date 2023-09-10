import NewsletterForground from "./Newsletter.forground";

export default function Newsletter() {
  return (
    <div id="Newsletter" className="newsletter h-[90vh]  min-h-[65rem]  w-full overflow-hidden relative flex flex-col justify-center">
       {/* <NewsletterBackground /> */}
      <NewsletterForground />
    </div>
  );
}
