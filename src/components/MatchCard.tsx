import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const MatchCard = (props: {
  imageURL: string;
  firstName: string;
  lastName: string;
  techField: any;
  content: string;
}) => {
  return (
    <div className="w-1/3 h-2/3 bg-green-dark rounded-3xl text-center flex flex-col items-center py-10 gap-8 px-4">
      <Image src={props.imageURL} width={50} height={50} alt="Avatar" />

      <p className="text-xl">
        {props.firstName} {props.lastName}
      </p>

      <div className="flex flex-wrap gap-4 pb-5">
        {props.techField.map((item: any) => (
          <Badge variant="outline" className="bg-white">
            {item}
          </Badge>
        ))}
      </div>

      <p>{props.content}</p>
    </div>
  );
};

export default MatchCard;
