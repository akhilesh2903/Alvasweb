export default function PhysicsExploreLoading() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-[1500px] mx-auto px-4 md:px-8 grid lg:grid-cols-12 gap-8">
        {/* Sidebar Skeleton */}
        <div className="lg:col-span-3">
          <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm animate-pulse">
            <div className="h-6 bg-gray-200 rounded-md w-1/2 mb-6"></div>
            <div className="flex flex-col gap-3">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="h-12 bg-gray-100 rounded-2xl w-full"
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Area Skeleton */}
        <div className="lg:col-span-9">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm animate-pulse min-h-[600px]">
            <div className="h-8 bg-gray-200 rounded-md w-1/3 mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-100 rounded w-full"></div>
              <div className="h-4 bg-gray-100 rounded w-5/6"></div>
              <div className="h-4 bg-gray-100 rounded w-4/6"></div>
            </div>
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="h-32 bg-gray-100 rounded-2xl"></div>
              <div className="h-32 bg-gray-100 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
