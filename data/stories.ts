export type Story = {
  slug: string;
  category: "News" | "Story" | "Report";
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  body: string[];
};

export const stories: Story[] = [
  {
    slug: "failure-before-it-happens",
    category: "Story",
    title: "Seeing the failure before it happens",
    excerpt:
      "Why the next generation of asset maintenance will be won by models that are honest about uncertainty.",
    date: "2026-09-18",
    readTime: "6 min",
    body: [
      "For most of industrial history, maintenance has been a negotiation with time. Assets were run until something failed, and the engineering question was never whether a failure would occur but whether anyone had budget to fix it first.",
      "That arrangement is ending. With enough sensor coverage on a single asset, the signals that precede catastrophic failure stop being ambiguous. Bearing temperature that climbs a fraction of a degree per week. Vibration spectra that shift before a fatigue crack becomes visible. Corrosion rates that quietly exceed the original design allowance by a factor of three.",
      "The hard part has never been the detection. It is the confidence. A model that flags four hundred possible failures and is wrong about three hundred of them does not get trusted the second time it matters, and once an operator ignores the alerts, no amount of accuracy brings them back.",
      "This is why the projects that work in the field share a design principle: the model should report what it does not know. A prediction with an honest confidence interval is operable. A confident prediction without one is theatre.",
      "The organisations getting this right are not the ones with the most sensors. They are the ones that have made the failure modes visible to the people who have to act on them, and who have earned the right to be believed when they raise a hand.",
    ],
  },
  {
    slug: "hydrogen-readiness-infrastructure",
    category: "News",
    title: "Building infrastructure that is ready for hydrogen",
    excerpt:
      "Retrofit decisions made today determine whether these assets can carry the next fuel. The margin for error is decades.",
    date: "2026-09-12",
    readTime: "4 min",
    body: [
      "Hydrogen is frequently discussed as a fuel question when it is substantially a materials question. Steel embrittlement, seal degradation, pressure cycling and thermal limits all impose constraints that no amount of operational cleverness can design around.",
      "The consequence is that infrastructure decisions made in the next decade are effectively irreversible. A pipeline, a compressor station or a storage facility built without hydrogen compatibility today will very likely be replaced rather than converted within its service life.",
      "We have started treating hydrogen readiness as a default specification rather than an upgrade path. In practical terms this means material selection that tolerates embrittlement, compression and storage envelopes sized for a wider range of working pressures, and electrical systems that do not assume a single energy source.",
      "None of this makes the asset more expensive to build today in any meaningful way. It makes it considerably cheaper than the alternative, which is a network built correctly and then dismantled because it could not carry what the market actually adopted.",
    ],
  },
  {
    slug: "the-cost-of-reactive-maintenance",
    category: "Report",
    title: "The true cost of reactive maintenance",
    excerpt:
      "A nine-year review of asset programmes across heavy industry, and where the money actually goes.",
    date: "2026-09-04",
    readTime: "11 min",
    body: [
      "We reviewed nine years of maintenance expenditure across thirty-one heavy industrial assets to understand where programme budgets genuinely flow. The headline finding is uncomfortable: on average, sixty-four percent of maintenance spend was reactive.",
      "Reactive maintenance is not merely expensive. It is the most expensive way to buy reliability, and it is structurally self-reinforcing. Every unplanned intervention consumes the budget that would have funded the planned work preventing the next one.",
      "The assets that escaped this pattern shared a characteristic that had nothing to do with age or capital value. They had an accountable owner with the authority to spend against a horizon longer than the current quarter, and access to enough condition data to justify it.",
      "Age predicted nothing. The oldest assets in the dataset were not the most expensive to maintain, and the newest were not the cheapest. Condition data and programme governance predicted a great deal.",
      "The practical conclusion is uncomfortable for organisations structured around annual maintenance cycles: reducing reactive spend is rarely a maintenance problem. It is a capital allocation problem wearing a maintenance uniform.",
    ],
  },
  {
    slug: "engineering-talent-pipeline",
    category: "News",
    title: "Rebuilding the engineering talent pipeline",
    excerpt:
      "Northline opens a graduate programme placing engineers on live site from their first month.",
    date: "2026-08-27",
    readTime: "3 min",
    body: [
      "The shortage of practising engineers is well documented. What is less discussed is that the profession is being made worse by how we introduce people to it, with graduate programmes that keep new engineers in a classroom or a review queue long enough for them to lose the thread entirely.",
      "Our new programme places every graduate on a live site within their first month, paired with a senior engineer who is responsible for their development rather than merely their output.",
      "This is not a gesture. Work that is built under real constraints teaches judgement that no simulation reproduces, and judgement cannot be acquired by reviewing someone else's decisions after the fact.",
      "We have committed to funding the programme for ten years irrespective of commercial conditions. A training pipeline that is switched on and off with the order book does not produce engineers; it produces a queue of applications.",
    ],
  },
  {
    slug: "digital-twin-lessons",
    category: "Story",
    title: "What four years of digital twins taught us",
    excerpt:
      "Most digital twin programmes do not fail technically. They fail at the moment of handover to operations.",
    date: "2026-08-19",
    readTime: "7 min",
    body: [
      "Across four years of digital twin delivery we have watched a consistent pattern. The modelling work is generally successful. The failure comes later, at the handover, when a capable engineering tool meets an operations team that was never consulted and has no reason to trust what it is telling them.",
      "A digital twin is a claim about reality. When that claim disagrees with an operator's direct experience, the operator is right and the model is wrong, regardless of what the validation data shows.",
      "The programmes that survived did three things consistently. They involved operators in deciding what the model was for. They made the model's confidence visible in the interface rather than in a validation report. And they gave operations ownership of the model as an asset they maintain, not a deliverable they received.",
      "The technology was rarely the interesting part. The interesting part was institutional: who owns the truth about an asset, and whether that answer changes when the people running it change.",
    ],
  },
  {
    slug: "grid-flexibility-market",
    category: "Report",
    title: "Flexibility is now the cheapest capacity",
    excerpt:
      "Grid economics have inverted. The analysis behind the shift, and what it means for asset owners.",
    date: "2026-08-08",
    readTime: "9 min",
    body: [
      "For most of the last century, the cost of meeting peak electricity demand was met by building more generation. That relationship has inverted. In markets with mature demand-response programmes, the marginal cost of a peak hour is now more often set by the price of flexibility than by the cost of a new plant.",
      "The engineering consequence is significant. An asset owner with a controllable load is no longer simply a cost centre on the energy bill. That load is a dispatchable resource with a value that can be modelled, contracted and forecast.",
      "In our analysis across three markets, controllable industrial load commanded a flexibility premium that exceeded its energy cost by a wide margin, and the premium was strongest precisely when the grid was under most stress.",
      "The constraint on capturing this value is rarely the technology. It is that the operational consequence of responding sits with the plant team, while the financial benefit accrues somewhere else. Programmes that fail to reconcile those two positions do not get deployed, regardless of how well they work.",
    ],
  },
];
