const Loading = () => {
  return (
    <div>
      <div className="w-full h-[600px] bg-slate-50 rounded">
        <div className="h-10 w-40 bg-slate-100 animate-pulse rounded"></div>
        <div className="h-6 w-full bg-slate-100 animate-pulse rounded"></div>
        <div className="h-6 w-full bg-slate-100 animate-pulse rounded"></div>
      </div>
      <div className="mt-20 px-60 w-fit flex items-center justify-center">
        <div className="h-full w-full bg-slate-100 animate-pulse"></div>
        <div className="h-full w-full bg-slate-100 animate-pulse"></div>
        <div className="h-full w-full bg-slate-100 animate-pulse"></div>
        <div className="h-full w-full bg-slate-100 animate-pulse"></div>
        <div className="h-full w-full bg-slate-100 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Loading;
