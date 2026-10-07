export default function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-coal-2 bg-ink-2/95 backdrop-blur-md lg:hidden">
      <a
        href="tel:+15555550199"
        className="flex items-center justify-center gap-2 border-r border-coal-2 py-3.5 font-display text-sm font-bold tracking-[0.2em] text-paper active:bg-coal"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-volt" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        CALL
      </a>
      <a
        href="sms:+15555550199"
        className="flex items-center justify-center gap-2 border-r border-coal-2 py-3.5 font-display text-sm font-bold tracking-[0.2em] text-paper active:bg-coal"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-volt" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        TEXT
      </a>
      <a
        href="#quote"
        className="flex items-center justify-center bg-volt py-3.5 font-display text-sm font-bold tracking-[0.2em] text-ink active:bg-volt-3"
      >
        GET QUOTE
      </a>
    </div>
  );
}
