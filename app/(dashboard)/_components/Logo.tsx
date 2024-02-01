import Image from "next/image";
export const Logo = () => {
  return (
    <div className="flex flex-row justify-start items-center">
      <Image
        height={40}
        width={40}
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          marginLeft: 20,
          marginRight: 10,
          marginTop: 5,
          marginBottom: 5,
        }}
        alt="logo"
        src="/logo.svg"
      />
      <h2 className="text-2xl font-bold text-orange-500">Your Path</h2>
    </div>
  );
};
