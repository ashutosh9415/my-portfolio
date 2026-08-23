function Achievements() {
  const achievements = [
    {
      number: "600+",
      title: "CodeChef Problems",
      link: "https://www.codechef.com/users/ashutosh_945",
      button: "CodeChef Profile",
    },
    {
      number: "150+",
      title: "GeeksforGeeks Problems",
      link: "https://www.geeksforgeeks.org/user/ashutosh9415/",
      button: "GFG Profile",
    },
    {
      number: "100+",
      title: "LeetCode Problems",
      link: "https://leetcode.com/u/ashutosh9415/",
      button: "LeetCode Profile",
    },
  ];

  return (
    <section
      id="achievements"
      className="bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="text-cyan-400">
            MILESTONES
          </p>

          <h2 className="mt-2 text-4xl font-bold text-white">
            Achievements
          </h2>
        </div>

        {/* Achievement Cards */}
        <div className="flex flex-wrap justify-center gap-6">

          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="w-full max-w-sm rounded-2xl border border-slate-800 bg-slate-900 p-7 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10"
            >

              {/* Number */}
              <h3 className="text-4xl font-bold text-cyan-400">
                {achievement.number}
              </h3>

              {/* Title */}
              <p className="mt-3 text-lg font-medium text-slate-300">
                {achievement.title}
              </p>

              {/* Profile Button */}
              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-lg border border-cyan-400 px-5 py-2.5 text-sm font-semibold text-cyan-400 transition duration-300 hover:bg-cyan-400 hover:text-slate-950"
              >
                {achievement.button}
              </a>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Achievements;