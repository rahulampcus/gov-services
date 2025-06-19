"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, CreditCard, Download, Search, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AadhaarPage() {
  const [aadhaarNumber, setAadhaarNumber] = useState("")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm" className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <div className="flex items-center">
            <CreditCard className="h-6 w-6 text-amber-500 mr-3" />
            <h1 className="text-2xl font-bold text-slate-800">Aadhaar Services</h1>
          </div>
        </div>

        <Tabs defaultValue="update" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-slate-100">
            <TabsTrigger value="update" className="data-[state=active]:bg-amber-500 data-[state=active]:text-white">
              Update Details
            </TabsTrigger>
            <TabsTrigger value="download" className="data-[state=active]:bg-amber-500 data-[state=active]:text-white">
              Download Card
            </TabsTrigger>
            <TabsTrigger value="verify" className="data-[state=active]:bg-amber-500 data-[state=active]:text-white">
              Verify Aadhaar
            </TabsTrigger>
            <TabsTrigger value="status" className="data-[state=active]:bg-amber-500 data-[state=active]:text-white">
              Check Status
            </TabsTrigger>
          </TabsList>

          <TabsContent value="update" className="space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Update Aadhaar Details</CardTitle>
                <CardDescription className="text-slate-600">
                  Update your personal information in Aadhaar database
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center py-8">
                  <CreditCard className="h-16 w-16 text-amber-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Update Your Aadhaar Details</h3>
                  <p className="text-slate-600 mb-6">
                    Use our comprehensive update form to modify your Aadhaar information
                  </p>
                  <Link href="/services/aadhaar/update">
                    <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                      Go to Update Form
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="download" className="space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Download Aadhaar Card</CardTitle>
                <CardDescription className="text-slate-600">
                  Download your Aadhaar card using Aadhaar number or enrollment ID
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="downloadAadhaar" className="text-slate-700">
                      Aadhaar Number
                    </Label>
                    <Input id="downloadAadhaar" placeholder="XXXX XXXX XXXX" className="border-slate-300" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="downloadPhone" className="text-slate-700">
                      Registered Phone
                    </Label>
                    <Input id="downloadPhone" placeholder="+91 XXXXX XXXXX" className="border-slate-300" />
                  </div>
                </div>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                  <Download className="h-4 w-4 mr-2" />
                  Download Aadhaar Card
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="verify" className="space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Verify Aadhaar</CardTitle>
                <CardDescription className="text-slate-600">
                  Verify Aadhaar number and check its validity
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="verifyAadhaar" className="text-slate-700">
                    Aadhaar Number to Verify
                  </Label>
                  <Input id="verifyAadhaar" placeholder="XXXX XXXX XXXX" className="border-slate-300" />
                </div>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                  <Search className="h-4 w-4 mr-2" />
                  Verify Aadhaar
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="status" className="space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Check Update Status</CardTitle>
                <CardDescription className="text-slate-600">
                  Track the status of your Aadhaar update request
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="statusAadhaar" className="text-slate-700">
                    Aadhaar Number
                  </Label>
                  <Input id="statusAadhaar" placeholder="XXXX XXXX XXXX" className="border-slate-300" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="updateRequestId" className="text-slate-700">
                    Update Request ID (Optional)
                  </Label>
                  <Input id="updateRequestId" placeholder="Enter request ID" className="border-slate-300" />
                </div>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                  <Search className="h-4 w-4 mr-2" />
                  Check Status
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
