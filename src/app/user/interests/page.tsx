import InterestCard from "@/components/InterestCard/InterestCard";

const interestsArray = [
  "🎨 Graphic Design",
  "🤖 Artificial Intelligence",
  "🎮 Game Development",
  "📊 Data Analytics",
  "💬 Telecommunications",
  "🧑‍🎨 UI/UX Design",
  "❓ Testing",
  "⛓️ Blockchain",
  "Product Management",
  "⚙️ Robotics",
  "☁️ Cloud Architecture",
  "🔐 Cybersecurity",
  "💻 Software Development",
];

const InterestPage = () => {
  return (
    <>
      <div className="pb-6">Your Interest</div>
      <div className="flex flex-wrap gap-6">
        {interestsArray.map((item, idex) => (
          <InterestCard text={item} key={`item-${idex}`} />
        ))}
      </div>
    </>
  );
};

export default InterestPage;
