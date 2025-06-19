"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Building, CreditCard, Search, FileText, Calendar } from "lucide-react"
import Link from "next/link"

export default function PropertyTaxPage() {
  const [propertyId, setPropertyId] = useState("")

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
            <Building className="h-6 w-6 text-lime-500 mr-3" />
            <h1 className="text-2xl font-bold text-slate-800">Property Tax Services</h1>
          </div>
        </div>

        <Tabs defaultValue="pay" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-slate-100">
            <TabsTrigger value="pay" className="data-[state=active]:bg-lime-500 data-[state=active]:text-white">
              Pay Tax
            </TabsTrigger>
            <TabsTrigger value="assessment" className="data-[state=active]:bg-lime-500 data-[state=active]:text-white">
              View Assessment
            </TabsTrigger>
            <TabsTrigger value="records" className="data-[state=active]:bg-lime-500 data-[state=active]:text-white">
              Property Records
            </TabsTrigger>
            <TabsTrigger value="exemption" className="data-[state=active]:bg-lime-500 data-[state=active]:text-white">
              Tax Exemption
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pay" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-slate-800">Pay Property Tax</CardTitle>
                    <CardDescription className="text-slate-600">
                      Pay your property tax online with instant receipt
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="propertyIdPay" className="text-slate-700">
                        Property ID
                      </Label>
                      <Input
                        id="propertyIdPay"
                        placeholder="Enter your property ID"
                        className="border-slate-300"
                        value={propertyId}
                        onChange={(e) => setPropertyId(e.target.value)}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="assessmentYear" className="text-slate-700">
                          Assessment Year
                        </Label>
                        <Select>
                          <SelectTrigger className="border-slate-300">
                            <SelectValue placeholder="Select year" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2024">2024-25</SelectItem>
                            <SelectItem value="2023">2023-24</SelectItem>
                            <SelectItem value="2022">2022-23</SelectItem>
                            <SelectItem value="2021">2021-22</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="paymentType" className="text-slate-700">
                          Payment Type
                        </Label>
                        <Select>
                          <SelectTrigger className="border-slate-300">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="annual">Annual Payment</SelectItem>
                            <SelectItem value="quarterly">Quarterly Payment</SelectItem>
                            <SelectItem value="arrears">Arrears Payment</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white">
                      <Search className="h-4 w-4 mr-2" />
                      Get Tax Details
                    </Button>

                    <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
                      <h4 className="font-semibold text-slate-800 mb-3">Tax Calculation</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Property Tax</span>
                          <span className="font-medium">₹15,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Water Tax</span>
                          <span className="font-medium">₹2,500</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Sewerage Tax</span>
                          <span className="font-medium">₹1,200</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Late Fee</span>
                          <span className="font-medium text-red-600">₹500</span>
                        </div>
                        <hr className="my-2" />
                        <div className="flex justify-between font-semibold text-lg">
                          <span>Total Amount</span>
                          <span>₹19,200</span>
                        </div>
                      </div>
                    </div>

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

                    <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Pay ₹19,200
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-slate-800">Payment Benefits</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Early Payment Discount</span>
                      <Badge variant="secondary">5%</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Online Payment Discount</span>
                      <Badge variant="secondary">2%</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Instant Receipt</span>
                      <Badge className="bg-green-100 text-green-800">Available</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-slate-800">Important Dates</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-slate-500" />
                      <span className="text-sm text-slate-700">Due Date: March 31, 2024</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-slate-500" />
                      <span className="text-sm text-slate-700">Penalty After: April 1, 2024</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="assessment" className="space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Property Assessment</CardTitle>
                <CardDescription className="text-slate-600">
                  View your property assessment details and valuation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="assessmentPropertyId" className="text-slate-700">
                    Property ID
                  </Label>
                  <Input id="assessmentPropertyId" placeholder="Enter property ID" className="border-slate-300" />
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white">
                  <FileText className="h-4 w-4 mr-2" />
                  View Assessment
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="records" className="space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Property Records</CardTitle>
                <CardDescription className="text-slate-600">
                  Access your property ownership and transaction records
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="recordsPropertyId" className="text-slate-700">
                    Property ID
                  </Label>
                  <Input id="recordsPropertyId" placeholder="Enter property ID" className="border-slate-300" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ownerName" className="text-slate-700">
                    Owner Name
                  </Label>
                  <Input id="ownerName" placeholder="Enter owner name" className="border-slate-300" />
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white">
                  <Search className="h-4 w-4 mr-2" />
                  Search Records
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="exemption" className="space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Tax Exemption</CardTitle>
                <CardDescription className="text-slate-600">
                  Apply for property tax exemption based on eligibility
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="exemptionType" className="text-slate-700">
                    Exemption Type
                  </Label>
                  <Select>
                    <SelectTrigger className="border-slate-300">
                      <SelectValue placeholder="Select exemption type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="senior">Senior Citizen</SelectItem>
                      <SelectItem value="disabled">Disabled Person</SelectItem>
                      <SelectItem value="widow">Widow</SelectItem>
                      <SelectItem value="veteran">War Veteran</SelectItem>
                      <SelectItem value="charitable">Charitable Institution</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="exemptionPropertyId" className="text-slate-700">
                    Property ID
                  </Label>
                  <Input id="exemptionPropertyId" placeholder="Enter property ID" className="border-slate-300" />
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white">Apply for Exemption</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
