import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function ComplianceLoading() {
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
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {[1, 2, 3, 4, 5].map((i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Skeleton className="h-4 w-24 mb-2" />
                    <Skeleton className="h-8 w-12" />
                  </div>
                  <Skeleton className="h-8 w-8" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <div className="flex space-x-1">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-10 w-32" />
            ))}
          </div>

          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-48" />
              <Skeleton className="h-4 w-96" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i}>
                    <CardContent className="p-4">
                      <div className="flex justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <Skeleton className="h-5 w-48" />
                            <Skeleton className="h-5 w-20" />
                          </div>
                          <Skeleton className="h-4 w-96 mb-3" />
                          <div className="flex space-x-4">
                            <Skeleton className="h-4 w-24" />
                            <Skeleton className="h-4 w-20" />
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Skeleton className="h-8 w-24" />
                          <Skeleton className="h-8 w-24" />
                        </div>
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
