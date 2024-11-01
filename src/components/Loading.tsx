const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-inherit backdrop-blur-sm z-50">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-deep border-r-transparent"
        role="status"
      ></div>
    </div>
  );
};

export default Loading;
