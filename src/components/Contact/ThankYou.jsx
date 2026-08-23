function ThankYou() {
    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

            <div className="text-center max-w-2xl">

                <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10">
                    <span className="text-4xl text-cyan-400">
                        ✓
                    </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold text-white">
                    Thanks for{" "}
                    <span className="text-cyan-400">
                        connecting!
                    </span>
                </h1>

                <p className="mt-6 text-lg leading-8 text-slate-400">
                    Your message has been successfully delivered.
                    I appreciate you taking the time to reach out
                    and connect with me.
                </p>

                <p className="mt-4 text-slate-500">
                    I’ll review your message and get back to you soon.
                </p>

                <div className="mx-auto my-8 h-px w-24 bg-cyan-400/40"></div>

                <p className="text-sm text-slate-500">
                    Every great project starts with a conversation.
                </p>

                <a
                    href="/"
                    onClick={() => window.scrollTo(0, 0)}
                    className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-7 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-400"
                >
                    ← Return to Portfolio
                </a>

            </div>
        </div>
    );
}

export default ThankYou;