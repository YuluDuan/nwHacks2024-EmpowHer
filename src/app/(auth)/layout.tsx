const Authlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex py-20 items-center justify-center h-full">
      {children}
    </div>
  );
};

export default Authlayout;
