import Image from "next/image";

function InterestCard(props: { text: string }) {
  return (
    <>
      <button className="w-72 h-12 rounded-xl bg-white text-center py-2 px-4 border border-slate flex gap-2 items-center">
        <Image src={"/assets/add.svg"} height={20} width={20} alt="add" />
        <div>{props.text}</div>
      </button>
    </>
  );
}

export default InterestCard;
