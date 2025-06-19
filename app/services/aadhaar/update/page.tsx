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
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  CreditCard,
  Upload,
  Phone,
  Mail,
  Calendar,
  MapPin,
  User,
  Camera,
  FileText,
  AlertCircle,
  CheckCircle,
  Clock,
} from "lucide-react"
import Link from "next/link"

export default function AadhaarUpdatePage() {
  const [aadhaarNumber, setAadhaarNumber] = useState("")
  const [updateType, setUpdateType] = useState("")
  const [currentStep, setCurrentStep] = useState(1)

  const updateTypes = [
    { value: "name", label: "Name Correction", fee: "₹50", icon: User },
    { value: "address", label: "Address Update", fee: "₹50", icon: MapPin },
    { value: "phone", label: "Phone Number Update", fee: "Free", icon: Phone },
    { value: "email", label: "Email Update", fee: "Free", icon: Mail },
    { value: "dob", label: "Date of Birth Correction", fee: "₹50", icon: Calendar },
    { value: "photo", label: "Photograph Update", fee: "₹25", icon: Camera },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6">
          <Link href="/services/aadhaar">
            <Button variant="ghost" size="sm" className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Aadhaar Services
            </Button>
          </Link>
          <div className="flex items-center">
            <CreditCard className="h-6 w-6 text-amber-500 mr-3" />
            <h1 className="text-2xl font-bold text-slate-800">Update Aadhaar Details</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card className="border-slate-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-slate-800">Aadhaar Information Update</CardTitle>
                <CardDescription className="text-slate-600">
                  Update your Aadhaar card details with supporting documents
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Step 1: Aadhaar Verification */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        1
                      </div>
                      <h3 className="text-lg font-semibold text-slate-800">Verify Your Aadhaar</h3>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="aadhaarNum" className="text-slate-700">
                        Aadhaar Number *
                      </Label>
                      <Input
                        id="aadhaarNum"
                        placeholder="XXXX XXXX XXXX"
                        className="border-slate-300"
                        value={aadhaarNumber}
                        onChange={(e) => setAadhaarNumber(e.target.value)}
                        maxLength={14}
                      />
                      <p className="text-xs text-slate-500">Enter your 12-digit Aadhaar number</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="registeredPhone" className="text-slate-700">
                        Registered Mobile Number *
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input id="registeredPhone" placeholder="+91 XXXXX XXXXX" className="pl-10 border-slate-300" />
                      </div>
                    </div>

                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        We'll send an OTP to your registered mobile number for verification
                      </AlertDescription>
                    </Alert>

                    <Button
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                      onClick={() => setCurrentStep(2)}
                    >
                      Send OTP & Continue
                    </Button>
                  </div>
                )}

                {/* Step 2: Select Update Type */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        2
                      </div>
                      <h3 className="text-lg font-semibold text-slate-800">Select Update Type</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {updateTypes.map((type) => (
                        <Card
                          key={type.value}
                          className={`border-2 cursor-pointer transition-all ${
                            updateType === type.value
                              ? "border-amber-500 bg-amber-50"
                              : "border-slate-200 hover:border-slate-300"
                          }`}
                          onClick={() => setUpdateType(type.value)}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <type.icon className="h-5 w-5 text-amber-600" />
                                <div>
                                  <p className="font-medium text-slate-800">{type.label}</p>
                                  <p className="text-sm text-slate-600">Fee: {type.fee}</p>
                                </div>
                              </div>
                              {updateType === type.value && <CheckCircle className="h-5 w-5 text-amber-600" />}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Button variant="outline" onClick={() => setCurrentStep(1)} className="border-slate-300">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button
                        className="bg-amber-600 hover:bg-amber-700 text-white flex-1"
                        onClick={() => setCurrentStep(3)}
                        disabled={!updateType}
                      >
                        Continue
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Update Form */}
                {currentStep === 3 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        3
                      </div>
                      <h3 className="text-lg font-semibold text-slate-800">Update Information</h3>
                    </div>

                    <Tabs defaultValue="details" className="space-y-4">
                      <TabsList className="grid w-full grid-cols-2 bg-slate-100">
                        <TabsTrigger
                          value="details"
                          className="data-[state=active]:bg-amber-500 data-[state=active]:text-white"
                        >
                          Update Details
                        </TabsTrigger>
                        <TabsTrigger
                          value="documents"
                          className="data-[state=active]:bg-amber-500 data-[state=active]:text-white"
                        >
                          Upload Documents
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="details" className="space-y-4">
                        {updateType === "name" && (
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="currentName" className="text-slate-700">
                                  Current Name (as per Aadhaar)
                                </Label>
                                <Input id="currentName" placeholder="Current name" className="border-slate-300" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="newName" className="text-slate-700">
                                  Corrected Name *
                                </Label>
                                <Input id="newName" placeholder="Enter corrected name" className="border-slate-300" />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="nameReason" className="text-slate-700">
                                Reason for Name Correction
                              </Label>
                              <Select>
                                <SelectTrigger className="border-slate-300">
                                  <SelectValue placeholder="Select reason" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="spelling">Spelling Error</SelectItem>
                                  <SelectItem value="marriage">After Marriage</SelectItem>
                                  <SelectItem value="legal">Legal Name Change</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        )}

                        {updateType === "address" && (
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="newAddress" className="text-slate-700">
                                New Complete Address *
                              </Label>
                              <Textarea
                                id="newAddress"
                                placeholder="Enter your new complete address"
                                className="border-slate-300"
                                rows={3}
                              />
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="newCity" className="text-slate-700">
                                  City *
                                </Label>
                                <Input id="newCity" placeholder="Enter city" className="border-slate-300" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="newState" className="text-slate-700">
                                  State *
                                </Label>
                                <Select>
                                  <SelectTrigger className="border-slate-300">
                                    <SelectValue placeholder="Select state" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="maharashtra">Maharashtra</SelectItem>
                                    <SelectItem value="delhi">Delhi</SelectItem>
                                    <SelectItem value="karnataka">Karnataka</SelectItem>
                                    <SelectItem value="gujarat">Gujarat</SelectItem>
                                    <SelectItem value="rajasthan">Rajasthan</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="newPincode" className="text-slate-700">
                                  PIN Code *
                                </Label>
                                <Input id="newPincode" placeholder="Enter PIN code" className="border-slate-300" />
                              </div>
                            </div>
                          </div>
                        )}

                        {updateType === "phone" && (
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="currentPhone" className="text-slate-700">
                                  Current Phone Number
                                </Label>
                                <div className="relative">
                                  <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                  <Input
                                    id="currentPhone"
                                    placeholder="+91 XXXXX XXXXX"
                                    className="pl-10 border-slate-300"
                                  />
                                </div>
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="newPhone" className="text-slate-700">
                                  New Phone Number *
                                </Label>
                                <div className="relative">
                                  <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                  <Input
                                    id="newPhone"
                                    placeholder="+91 XXXXX XXXXX"
                                    className="pl-10 border-slate-300"
                                  />
                                </div>
                              </div>
                            </div>
                            <Alert>
                              <AlertCircle className="h-4 w-4" />
                              <AlertDescription>
                                OTP will be sent to both old and new phone numbers for verification
                              </AlertDescription>
                            </Alert>
                          </div>
                        )}

                        {updateType === "email" && (
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="currentEmail" className="text-slate-700">
                                  Current Email Address
                                </Label>
                                <div className="relative">
                                  <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                  <Input
                                    id="currentEmail"
                                    type="email"
                                    placeholder="current@email.com"
                                    className="pl-10 border-slate-300"
                                  />
                                </div>
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="newEmail" className="text-slate-700">
                                  New Email Address *
                                </Label>
                                <div className="relative">
                                  <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                  <Input
                                    id="newEmail"
                                    type="email"
                                    placeholder="new@email.com"
                                    className="pl-10 border-slate-300"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {updateType === "dob" && (
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="currentDOB" className="text-slate-700">
                                  Current Date of Birth
                                </Label>
                                <div className="relative">
                                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                  <Input id="currentDOB" type="date" className="pl-10 border-slate-300" />
                                </div>
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="newDOB" className="text-slate-700">
                                  Corrected Date of Birth *
                                </Label>
                                <div className="relative">
                                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                  <Input id="newDOB" type="date" className="pl-10 border-slate-300" />
                                </div>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="dobReason" className="text-slate-700">
                                Reason for DOB Correction
                              </Label>
                              <Select>
                                <SelectTrigger className="border-slate-300">
                                  <SelectValue placeholder="Select reason" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="error">Data Entry Error</SelectItem>
                                  <SelectItem value="document">As per Birth Certificate</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        )}

                        {updateType === "photo" && (
                          <div className="space-y-4">
                            <Alert>
                              <Camera className="h-4 w-4" />
                              <AlertDescription>
                                Upload a recent passport-size photograph with white background
                              </AlertDescription>
                            </Alert>
                            <div className="space-y-2">
                              <Label className="text-slate-700">Current Photograph</Label>
                              <div className="w-32 h-40 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center bg-slate-50">
                                <div className="text-center">
                                  <Camera className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                                  <p className="text-xs text-slate-500">Current Photo</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </TabsContent>

                      <TabsContent value="documents" className="space-y-4">
                        <div className="space-y-4">
                          <h4 className="font-semibold text-slate-800">Required Supporting Documents</h4>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
                              <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                              <p className="text-sm font-medium text-slate-700 mb-1">Supporting Document</p>
                              <p className="text-xs text-slate-500 mb-3">
                                {updateType === "name" && "Marriage certificate, Gazette notification, etc."}
                                {updateType === "address" && "Utility bill, Bank statement, Rent agreement"}
                                {updateType === "phone" && "Mobile connection proof"}
                                {updateType === "email" && "Email verification document"}
                                {updateType === "dob" && "Birth certificate, School certificate"}
                                {updateType === "photo" && "Recent passport-size photograph"}
                              </p>
                              <Button variant="outline" size="sm">
                                Choose File
                              </Button>
                            </div>

                            <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
                              <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                              <p className="text-sm font-medium text-slate-700 mb-1">Identity Proof</p>
                              <p className="text-xs text-slate-500 mb-3">Passport, Driving License, Voter ID, etc.</p>
                              <Button variant="outline" size="sm">
                                Choose File
                              </Button>
                            </div>
                          </div>

                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <h5 className="font-medium text-blue-800 mb-2">Document Guidelines:</h5>
                            <ul className="text-sm text-blue-700 space-y-1">
                              <li>• Upload clear, colored scanned copies</li>
                              <li>• File size should be less than 2MB</li>
                              <li>• Supported formats: JPG, PNG, PDF</li>
                              <li>• Documents should be valid and not expired</li>
                            </ul>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>

                    <div className="flex gap-4 pt-4">
                      <Button variant="outline" onClick={() => setCurrentStep(2)} className="border-slate-300">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button
                        className="bg-amber-600 hover:bg-amber-700 text-white flex-1"
                        onClick={() => setCurrentStep(4)}
                      >
                        Continue to Review
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 4: Review & Submit */}
                {currentStep === 4 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        4
                      </div>
                      <h3 className="text-lg font-semibold text-slate-800">Review & Submit</h3>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
                      <h4 className="font-semibold text-slate-800 mb-3">Update Summary</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Aadhaar Number</span>
                          <span className="font-medium">XXXX XXXX {aadhaarNumber.slice(-4)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Update Type</span>
                          <span className="font-medium">{updateTypes.find((t) => t.value === updateType)?.label}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Processing Fee</span>
                          <span className="font-medium">{updateTypes.find((t) => t.value === updateType)?.fee}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Processing Time</span>
                          <span className="font-medium">15-30 working days</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="declaration" className="border-slate-300" />
                      <Label htmlFor="declaration" className="text-sm text-slate-700">
                        I hereby declare that the information provided is true and correct to the best of my knowledge
                      </Label>
                    </div>

                    <div className="flex gap-4">
                      <Button variant="outline" onClick={() => setCurrentStep(3)} className="border-slate-300">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button className="bg-amber-600 hover:bg-amber-700 text-white flex-1">
                        Submit Update Request
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Update Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className={`flex items-center gap-3 ${currentStep >= 1 ? "text-amber-600" : "text-slate-400"}`}>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
                        currentStep >= 1 ? "bg-amber-500 text-white" : "bg-slate-200"
                      }`}
                    >
                      {currentStep > 1 ? <CheckCircle className="h-4 w-4" /> : "1"}
                    </div>
                    <span className="text-sm">Verify Aadhaar</span>
                  </div>
                  <div className={`flex items-center gap-3 ${currentStep >= 2 ? "text-amber-600" : "text-slate-400"}`}>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
                        currentStep >= 2 ? "bg-amber-500 text-white" : "bg-slate-200"
                      }`}
                    >
                      {currentStep > 2 ? <CheckCircle className="h-4 w-4" /> : "2"}
                    </div>
                    <span className="text-sm">Select Update Type</span>
                  </div>
                  <div className={`flex items-center gap-3 ${currentStep >= 3 ? "text-amber-600" : "text-slate-400"}`}>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
                        currentStep >= 3 ? "bg-amber-500 text-white" : "bg-slate-200"
                      }`}
                    >
                      {currentStep > 3 ? <CheckCircle className="h-4 w-4" /> : "3"}
                    </div>
                    <span className="text-sm">Update Information</span>
                  </div>
                  <div className={`flex items-center gap-3 ${currentStep >= 4 ? "text-amber-600" : "text-slate-400"}`}>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
                        currentStep >= 4 ? "bg-amber-500 text-white" : "bg-slate-200"
                      }`}
                    >
                      4
                    </div>
                    <span className="text-sm">Review & Submit</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Update Fees</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Name/Address/DOB</span>
                  <Badge variant="secondary">₹50</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Phone/Email</span>
                  <Badge className="bg-green-100 text-green-800">Free</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Photograph</span>
                  <Badge variant="secondary">₹25</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Processing Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-slate-500" />
                  <span className="text-sm text-slate-600">15-30 working days</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start border-slate-300">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Support
                </Button>
                <Button variant="outline" className="w-full justify-start border-slate-300">
                  <FileText className="h-4 w-4 mr-2" />
                  View Guidelines
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
