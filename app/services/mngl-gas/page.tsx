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
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Flame, CreditCard, Search, FileText, Phone, MapPin, Calendar } from "lucide-react"
import Link from "next/link"

export default function MNGLGasPage() {
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
            <Flame className="h-6 w-6 text-red-600 mr-3" />
            <h1 className="text-2xl font-bold text-slate-800">MNGL Gas Services</h1>
          </div>
        </div>

        <Tabs defaultValue="booking" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-slate-100">
            <TabsTrigger value="booking" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
              Book Cylinder
            </TabsTrigger>
            <TabsTrigger value="connection" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
              New Connection
            </TabsTrigger>
            <TabsTrigger value="bill" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
              Pay Bill
            </TabsTrigger>
            <TabsTrigger value="services" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
              Other Services
            </TabsTrigger>
          </TabsList>

          <TabsContent value="booking" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-slate-800">Book LPG Cylinder</CardTitle>
                    <CardDescription className="text-slate-600">
                      Book your LPG cylinder online for home delivery
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

                    <div className="space-y-2">
                      <Label htmlFor="mobileNumber" className="text-slate-700">
                        Registered Mobile Number
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input id="mobileNumber" placeholder="+91 XXXXX XXXXX" className="pl-10 border-slate-300" />
                      </div>
                    </div>

                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                      <Search className="h-4 w-4 mr-2" />
                      Get Connection Details
                    </Button>

                    <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
                      <h4 className="font-semibold text-slate-800 mb-3">Connection Details</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Consumer Name</span>
                          <span className="font-medium">John Doe</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Connection Type</span>
                          <span className="font-medium">Domestic</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Last Delivery</span>
                          <span className="font-medium">Dec 15, 2023</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Cylinder Price</span>
                          <span className="font-medium">₹850</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Subsidy Amount</span>
                          <span className="font-medium text-green-600">₹200</span>
                        </div>
                        <hr className="my-2" />
                        <div className="flex justify-between font-semibold text-lg">
                          <span>Amount to Pay</span>
                          <span>₹650</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="deliveryDate" className="text-slate-700">
                          Preferred Delivery Date
                        </Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input id="deliveryDate" type="date" className="pl-10 border-slate-300" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="deliveryTime" className="text-slate-700">
                          Preferred Time Slot
                        </Label>
                        <Select>
                          <SelectTrigger className="border-slate-300">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">9 AM - 12 PM</SelectItem>
                            <SelectItem value="afternoon">12 PM - 4 PM</SelectItem>
                            <SelectItem value="evening">4 PM - 7 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="deliveryAddress" className="text-slate-700">
                        Delivery Address
                      </Label>
                      <Textarea
                        id="deliveryAddress"
                        placeholder="Enter complete delivery address"
                        className="border-slate-300"
                      />
                    </div>

                    <Alert>
                      <Flame className="h-4 w-4" />
                      <AlertDescription>
                        Free home delivery within 2-3 working days. Cash on delivery available.
                      </AlertDescription>
                    </Alert>

                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Book Cylinder - ₹650
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-slate-800">Booking Status</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Last Booking</span>
                      <Badge className="bg-green-100 text-green-800">Delivered</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Subsidy Status</span>
                      <Badge className="bg-blue-100 text-blue-800">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Next Booking</span>
                      <Badge variant="secondary">Available</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-slate-800">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start border-slate-300">
                      <FileText className="h-4 w-4 mr-2" />
                      View Booking History
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-slate-300">
                      <Phone className="h-4 w-4 mr-2" />
                      Track Delivery
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-slate-300">
                      <Search className="h-4 w-4 mr-2" />
                      Check Subsidy Status
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="connection" className="space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Apply for New Gas Connection</CardTitle>
                <CardDescription className="text-slate-600">
                  Apply for a new LPG connection for your home or business
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
                  <Label htmlFor="installationAddress" className="text-slate-700">
                    Installation Address
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Textarea
                      id="installationAddress"
                      placeholder="Enter complete installation address"
                      className="pl-10 border-slate-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="mobileNum" className="text-slate-700">
                      Mobile Number
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <Input id="mobileNum" placeholder="+91 XXXXX XXXXX" className="pl-10 border-slate-300" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="aadhaarNum" className="text-slate-700">
                      Aadhaar Number
                    </Label>
                    <Input id="aadhaarNum" placeholder="XXXX XXXX XXXX" className="border-slate-300" />
                  </div>
                </div>

                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Apply for Connection - ₹2,500</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bill" className="space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Pay Gas Bill</CardTitle>
                <CardDescription className="text-slate-600">Pay your monthly gas pipeline bill online</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="billConsumerNum" className="text-slate-700">
                    Consumer Number
                  </Label>
                  <Input id="billConsumerNum" placeholder="Enter consumer number" className="border-slate-300" />
                </div>

                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  <Search className="h-4 w-4 mr-2" />
                  Get Bill Details
                </Button>

                <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
                  <h4 className="font-semibold text-slate-800 mb-3">Current Bill</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Bill Month</span>
                      <span className="font-medium">December 2023</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Gas Consumed</span>
                      <span className="font-medium">45 SCM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Amount</span>
                      <span className="font-medium">₹1,350</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Due Date</span>
                      <span className="font-medium text-red-600">Jan 20, 2024</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Pay ₹1,350
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-800">Transfer Connection</CardTitle>
                  <CardDescription className="text-slate-600">
                    Transfer your gas connection to new address
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Apply for Transfer</Button>
                </CardContent>
              </Card>

              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-800">Surrender Connection</CardTitle>
                  <CardDescription className="text-slate-600">Permanently close your gas connection</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full border-red-300 text-red-700 hover:bg-red-50">
                    Surrender Connection
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-800">Safety Certificate</CardTitle>
                  <CardDescription className="text-slate-600">Get safety inspection certificate</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Book Inspection</Button>
                </CardContent>
              </Card>

              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-800">Complaint Registration</CardTitle>
                  <CardDescription className="text-slate-600">
                    Register gas leakage or service complaints
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full border-slate-300 text-slate-700 hover:bg-slate-50">
                    Register Complaint
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
