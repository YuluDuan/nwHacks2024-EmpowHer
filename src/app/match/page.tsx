import { matchUser } from "@/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import MatchCard from "@/components/MatchCard";

const MatchPage = async () => {
  const user = await currentUser();
  if (!user) return null;
  const users = await matchUser(user.id);
  return (
    <div className="h-screen mx-20 my-20 flex flex-wrap gap-8">
      {users.map((item: any) => (
        <MatchCard
          key={`match-${item}`}
          imageURL={item.imageUrl}
          firstName={item.firstName}
          lastName={item.lasttName}
          techField={item.techField}
          content={"Hey there, I am happy to connect"}
        />
      ))}
    </div>
  );
};

export default MatchPage;
