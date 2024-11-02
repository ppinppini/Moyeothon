export const Skeleton = () => {
  return (
    <div className="max-w-[300px] max-h-[200px] bg-gray-600 rounded-lg animate-pulse">
      <div className="w-full border-4 bg-gray-600 rounded mb"></div>
      <div className="w-1/2 border-4 bg-gray-600 rounded"></div>
    </div>
  );
};
export default Skeleton;
