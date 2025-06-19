"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Home, Upload, FileText, Calendar, DollarSign } from "lucide-react"
import Link from "next/link"

export default function RentAgreementPage() {
  const [agreementType, setAgreementType] = useState("")

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
            <Home className="h-6 w-6 text-teal-500 mr-3" />
            <h1 className="text-2xl font-bold text-slate-800">Rent Agreement Services</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Register New Rent Agreement</CardTitle>
                <CardDescription className="text-slate-600">
                  Register your rental agreement for legal compliance and tenant verification
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="landlordName" className="text-slate-700">
                      Landlord Name
                    </Label>
                    <Input id="landlordName" placeholder="Enter landlord name" className="border-slate-300" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tenantName" className="text-slate-700">
                      Tenant Name
                    </Label>
                    <Input id="tenantName" placeholder="Enter tenant name" className="border-slate-300" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="propertyAddress" className="text-slate-700">
                    Property Address
                  </Label>
                  <Textarea
                    id="propertyAddress"
                    placeholder="Enter complete property address"
                    className="border-slate-300"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="rentAmount" className="text-slate-700">
                      Monthly Rent
                    </Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <Input id="rentAmount" placeholder="5000" className="pl-10 border-slate-300" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="securityDeposit" className="text-slate-700">
                      Security Deposit
                    </Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <Input id="securityDeposit" placeholder="10000" className="pl-10 border-slate-300" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="leasePeriod" className="text-slate-700">
                      Lease Period
                    </Label>
                    <Select>
                      <SelectTrigger className="border-slate-300">
                        <SelectValue placeholder="Select period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="6months">6 Months</SelectItem>
                        <SelectItem value="1year">1 Year</SelectItem>
                        <SelectItem value="2years">2 Years</SelectItem>
                        <SelectItem value="3years">3 Years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="startDate" className="text-slate-700">
                      Lease Start Date
                    </Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <Input id="startDate" type="date" className="pl-10 border-slate-300" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="endDate" className="text-slate-700">
                      Lease End Date
                    </Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <Input id="endDate" type="date" className="pl-10 border-slate-300" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-slate-700">Upload Documents</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center">
                      <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                      <p className="text-sm text-slate-600">Property Documents</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Upload
                      </Button>
                    </div>
                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center">
                      <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                      <p className="text-sm text-slate-600">Identity Proof</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Upload
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" className="border-slate-300" />
                  <Label htmlFor="terms" className="text-sm text-slate-700">
                    I agree to the terms and conditions for rent agreement registration
                  </Label>
                </div>

                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">Register Agreement - ₹500</Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Service Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Registration Fee</span>
                  <Badge variant="secondary">₹500</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Processing Time</span>
                  <Badge variant="secondary">3-5 Days</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Validity</span>
                  <Badge variant="secondary">As per lease</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Required Documents</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center space-x-2">
                  <FileText className="h-4 w-4 text-slate-500" />
                  <span className="text-sm text-slate-700">Property ownership documents</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FileText className="h-4 w-4 text-slate-500" />
                  <span className="text-sm text-slate-700">Landlord & Tenant ID proof</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FileText className="h-4 w-4 text-slate-500" />
                  <span className="text-sm text-slate-700">Address proof</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FileText className="h-4 w-4 text-slate-500" />
                  <span className="text-sm text-slate-700">Passport size photographs</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
