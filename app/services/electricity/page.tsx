"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Zap, CreditCard, Search, FileText, AlertTriangle, Phone } from "lucide-react"
import Link from "next/link"

export default function ElectricityPage() {
  const [consumerNumber, setConsumerNumber] = useState("")

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
            <Zap className="h-6 w-6 text-yellow-500 mr-3" />
            <h1 className="text-2xl font-bold text-slate-800">Electricity Services</h1>
          </div>
        </div>

        <Tabs defaultValue="bill" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-slate-100">
            <TabsTrigger value="bill" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-white">
              Pay Bill
            </TabsTrigger>
            <TabsTrigger
              value="connection"
              className="data-[state=active]:bg-yellow-500 data-[state=active]:text-white"
            >
              New Connection
            </TabsTrigger>
            <TabsTrigger value="complaint" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-white">
              Complaints
            </TabsTrigger>
            <TabsTrigger value="usage" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-white">
              Usage History
            </TabsTrigger>
          </TabsList>

          <TabsContent value="bill" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-slate-800">Pay Electricity Bill</CardTitle>
                    <CardDescription className="text-slate-600">
                      Pay your electricity bill online with instant confirmation
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="consumerNum" className="text-slate-700">
                        Consumer Number
                      </Label>
                      <Input
                        id="consumerNum"
                        placeholder="Enter your consumer number"
                        className="border-slate-300"
                        value={consumerNumber}
                        onChange={(e) => setConsumerNumber(e.target.value)}
                      />
                    </div>

                    <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">
                      <Search className="h-4 w-4 mr-2" />
                      Get Bill Details
                    </Button>

                    <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
                      <h4 className="font-semibold text-slate-800 mb-3">Current Bill Details</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Consumer Name</span>
                          <span className="font-medium">John Doe</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Bill Month</span>
                          <span className="font-medium">December 2023</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Units Consumed</span>
                          <span className="font-medium">245 kWh</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Energy Charges</span>
                          <span className="font-medium">₹1,470</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Fixed Charges</span>
                          <span className="font-medium">₹150</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Taxes & Surcharge</span>
                          <span className="font-medium">₹180</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Due Date</span>
                          <span className="font-medium text-red-600">Jan 15, 2024</span>
                        </div>
                        <hr className="my-2" />
                        <div className="flex justify-between font-semibold text-lg">
                          <span>Total Amount</span>
                          <span>₹1,800</span>
                        </div>
                      </div>
                    </div>

                    <Alert>
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>Pay before due date to avoid late payment charges of ₹50</AlertDescription>
                    </Alert>

                    <div className="space-y-2">
                      <Label className="text-slate-700">Payment Method</Label>
                      <Select>
                        <SelectTrigger className="border-slate-300">
                          <SelectValue placeholder="Select payment method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="card">Credit/Debit Card</SelectItem>
                          <SelectItem value="netbanking">Net Banking</SelectItem>
                          <SelectItem value="upi">UPI</SelectItem>
                          <SelectItem value="wallet">Digital Wallet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Pay ₹1,800
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-slate-800">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start border-slate-300">
                      <FileText className="h-4 w-4 mr-2" />
                      Download Bill
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-slate-300">
                      <Search className="h-4 w-4 mr-2" />
                      View Usage History
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-slate-300">
                      <Phone className="h-4 w-4 mr-2" />
                      Register Complaint
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-slate-800">Payment Status</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Current Bill</span>
                      <Badge variant="destructive">Pending</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Last Payment</span>
                      <Badge className="bg-green-100 text-green-800">Paid</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="connection" className="space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Apply for New Connection</CardTitle>
                <CardDescription className="text-slate-600">
                  Apply for a new electricity connection for your property
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="applicantName" className="text-slate-700">
                      Applicant Name
                    </Label>
                    <Input id="applicantName" placeholder="Enter full name" className="border-slate-300" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="connectionType" className="text-slate-700">
                      Connection Type
                    </Label>
                    <Select>
                      <SelectTrigger className="border-slate-300">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="domestic">Domestic</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                        <SelectItem value="industrial">Industrial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="loadRequired" className="text-slate-700">
                    Load Required (kW)
                  </Label>
                  <Input id="loadRequired" placeholder="Enter load in kW" className="border-slate-300" />
                </div>
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">
                  Apply for Connection - ₹1,500
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="complaint" className="space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Register Complaint</CardTitle>
                <CardDescription className="text-slate-600">
                  Report power outages, billing issues, or technical problems
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="complaintConsumer" className="text-slate-700">
                    Consumer Number
                  </Label>
                  <Input id="complaintConsumer" placeholder="Enter consumer number" className="border-slate-300" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="complaintType" className="text-slate-700">
                    Complaint Type
                  </Label>
                  <Select>
                    <SelectTrigger className="border-slate-300">
                      <SelectValue placeholder="Select complaint type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="outage">Power Outage</SelectItem>
                      <SelectItem value="billing">Billing Issue</SelectItem>
                      <SelectItem value="voltage">Voltage Problem</SelectItem>
                      <SelectItem value="meter">Meter Issue</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">Register Complaint</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="usage" className="space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Usage History</CardTitle>
                <CardDescription className="text-slate-600">
                  View your electricity consumption history and patterns
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="usageConsumer" className="text-slate-700">
                    Consumer Number
                  </Label>
                  <Input id="usageConsumer" placeholder="Enter consumer number" className="border-slate-300" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="usagePeriod" className="text-slate-700">
                    Period
                  </Label>
                  <Select>
                    <SelectTrigger className="border-slate-300">
                      <SelectValue placeholder="Select period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="6months">Last 6 Months</SelectItem>
                      <SelectItem value="1year">Last 1 Year</SelectItem>
                      <SelectItem value="2years">Last 2 Years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">
                  <Search className="h-4 w-4 mr-2" />
                  View Usage History
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
