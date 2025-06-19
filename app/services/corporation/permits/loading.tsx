import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function PermitsLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="bg-white border-b border-purple-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-6 w-40" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          <div className="flex space-x-1">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-10 w-32" />
            ))}
          </div>

          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-48" />
              <Skeleton className="h-4 w-96" />
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 mb-6">
                <Skeleton className="h-10 flex-1" />
                <Skeleton className="h-10 w-48" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i}>
                    <CardHeader>
                      <div className="flex justify-between">
                        <div>
                          <Skeleton className="h-6 w-32 mb-2" />
                          <Skeleton className="h-4 w-20" />
                        </div>
                      </div>
                      <Skeleton className="h-4 w-48" />
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Skeleton className="h-4 w-12 mb-1" />
                            <Skeleton className="h-5 w-16" />
                          </div>
                          <div>
                            <Skeleton className="h-4 w-16 mb-1" />
                            <Skeleton className="h-5 w-12" />
                          </div>
                        </div>
                        <div>
                          <Skeleton className="h-4 w-24 mb-2" />
                          <div className="space-y-1">
                            <Skeleton className="h-3 w-32" />
                            <Skeleton className="h-3 w-28" />
                            <Skeleton className="h-3 w-36" />
                          </div>
                        </div>
                        <Skeleton className="h-10 w-full" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
