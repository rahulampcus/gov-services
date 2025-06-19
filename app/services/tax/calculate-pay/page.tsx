"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, FileText, Calculator, CreditCard, Download, AlertCircle, DollarSign, Calendar } from "lucide-react"
import Link from "next/link"

export default function TaxCalculatePayPage() {
  const [assessmentYear, setAssessmentYear] = useState("")
  const [taxCalculated, setTaxCalculated] = useState(false)
  const [annualIncome, setAnnualIncome] = useState("")
  const [deductions, setDeductions] = useState("")

  const calculateTax = () => {
    if (annualIncome && assessmentYear) {
      setTaxCalculated(true)
    }
  }

  const taxSlabs = [
    { range: "Up to ₹2,50,000", rate: "0%", tax: "Nil" },
    { range: "₹2,50,001 - ₹5,00,000", rate: "5%", tax: "₹12,500" },
    { range: "₹5,00,001 - ₹10,00,000", rate: "20%", tax: "₹1,00,000" },
    { range: "Above ₹10,00,000", rate: "30%", tax: "As applicable" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-6">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm" className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <div className="flex items-center">
            <FileText className="h-6 w-6 text-emerald-500 mr-3" />
            <h1 className="text-2xl font-bold text-slate-800">Tax Calculator & Payment</h1>
          </div>
        </div>

        <Tabs defaultValue="calculate" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-slate-100">
            <TabsTrigger
              value="calculate"
              className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white"
            >
              Calculate Tax
            </TabsTrigger>
            <TabsTrigger value="pay" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              Pay Tax
            </TabsTrigger>
            <TabsTrigger value="history" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              Payment History
            </TabsTrigger>
          </TabsList>

          <TabsContent value="calculate" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                {/* Tax Calculator */}
                <Card className="border-slate-200 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-slate-800">Income Tax Calculator</CardTitle>
                    <CardDescription className="text-slate-600">
                      Calculate your income tax liability for the assessment year
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="assessmentYear" className="text-slate-700">
                          Assessment Year *
                        </Label>
                        <Select value={assessmentYear} onValueChange={setAssessmentYear}>
                          <SelectTrigger className="border-slate-300">
                            <SelectValue placeholder="Select assessment year" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2024-25">2024-25</SelectItem>
                            <SelectItem value="2023-24">2023-24</SelectItem>
                            <SelectItem value="2022-23">2022-23</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="taxRegime" className="text-slate-700">
                          Tax Regime
                        </Label>
                        <Select defaultValue="old">
                          <SelectTrigger className="border-slate-300">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="old">Old Tax Regime</SelectItem>
                            <SelectItem value="new">New Tax Regime</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="annualIncome" className="text-slate-700">
                        Annual Income *
                      </Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input
                          id="annualIncome"
                          placeholder="Enter your annual income"
                          className="pl-10 border-slate-300"
                          value={annualIncome}
                          onChange={(e) => setAnnualIncome(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-800">Income Sources</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="salary" className="text-slate-700">
                            Salary Income
                          </Label>
                          <Input id="salary" placeholder="₹0" className="border-slate-300" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="business" className="text-slate-700">
                            Business Income
                          </Label>
                          <Input id="business" placeholder="₹0" className="border-slate-300" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="capital" className="text-slate-700">
                            Capital Gains
                          </Label>
                          <Input id="capital" placeholder="₹0" className="border-slate-300" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="other" className="text-slate-700">
                            Other Income
                          </Label>
                          <Input id="other" placeholder="₹0" className="border-slate-300" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-800">Deductions</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="section80c" className="text-slate-700">
                            Section 80C (Max ₹1,50,000)
                          </Label>
                          <Input id="section80c" placeholder="₹0" className="border-slate-300" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="section80d" className="text-slate-700">
                            Section 80D (Health Insurance)
                          </Label>
                          <Input id="section80d" placeholder="₹0" className="border-slate-300" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="hra" className="text-slate-700">
                            HRA Exemption
                          </Label>
                          <Input id="hra" placeholder="₹0" className="border-slate-300" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="otherDeductions" className="text-slate-700">
                            Other Deductions
                          </Label>
                          <Input
                            id="otherDeductions"
                            placeholder="₹0"
                            className="border-slate-300"
                            value={deductions}
                            onChange={(e) => setDeductions(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <Button
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                      onClick={calculateTax}
                      disabled={!annualIncome || !assessmentYear}
                    >
                      <Calculator className="h-4 w-4 mr-2" />
                      Calculate Tax
                    </Button>
                  </CardContent>
                </Card>

                {/* Tax Calculation Results */}
                {taxCalculated && (
                  <Card className="border-slate-200 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-slate-800">Tax Calculation Results</CardTitle>
                      <CardDescription className="text-slate-600">
                        Your tax liability for Assessment Year {assessmentYear}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <p className="text-sm text-slate-600">Gross Total Income</p>
                          <p className="text-xl font-semibold text-slate-800">
                            ₹{Number.parseInt(annualIncome || "0").toLocaleString()}
                          </p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-slate-600">Total Deductions</p>
                          <p className="text-xl font-semibold text-emerald-600">
                            ₹{Number.parseInt(deductions || "0").toLocaleString()}
                          </p>
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-3">
                        <h4 className="font-semibold text-slate-800">Tax Breakdown</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-slate-600">Taxable Income</span>
                            <span className="font-medium">
                              ₹
                              {(
                                Number.parseInt(annualIncome || "0") - Number.parseInt(deductions || "0")
                              ).toLocaleString()}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600">Income Tax</span>
                            <span className="font-medium">₹45,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600">Health & Education Cess (4%)</span>
                            <span className="font-medium">₹1,800</span>
                          </div>
                          <Separator />
                          <div className="flex justify-between font-semibold text-lg">
                            <span>Total Tax Liability</span>
                            <span className="text-red-600">₹46,800</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600">TDS Already Deducted</span>
                            <span className="font-medium text-green-600">₹35,000</span>
                          </div>
                          <div className="flex justify-between font-semibold text-lg">
                            <span>Tax Payable</span>
                            <span className="text-red-600">₹11,800</span>
                          </div>
                        </div>
                      </div>

                      <Alert>
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>
                          This is an estimated calculation. Please consult a tax professional for accurate tax planning.
                        </AlertDescription>
                      </Alert>

                      <div className="flex gap-4">
                        <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white">
                          <CreditCard className="h-4 w-4 mr-2" />
                          Pay Tax Now
                        </Button>
                        <Button variant="outline" className="border-slate-300">
                          <Download className="h-4 w-4 mr-2" />
                          Download Report
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-slate-800">Tax Slabs 2024-25</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {taxSlabs.map((slab, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-slate-600">{slab.range}</span>
                          <Badge variant="secondary">{slab.rate}</Badge>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-slate-800">Popular Deductions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="text-sm text-slate-700">• Section 80C - ₹1,50,000</div>
                    <div className="text-sm text-slate-700">• Section 80D - ₹25,000</div>
                    <div className="text-sm text-slate-700">• Section 80E - Education Loan</div>
                    <div className="text-sm text-slate-700">• Section 80G - Donations</div>
                    <div className="text-sm text-slate-700">• HRA Exemption</div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-slate-800">Important Dates</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-slate-500" />
                      <span className="text-sm text-slate-600">ITR Filing: July 31, 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-slate-500" />
                      <span className="text-sm text-slate-600">Advance Tax: March 15, 2024</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="pay" className="space-y-6">
            <Card className="border-slate-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-slate-800">Pay Income Tax</CardTitle>
                <CardDescription className="text-slate-600">
                  Pay your income tax online using Challan 280
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="panNumber" className="text-slate-700">
                      PAN Number *
                    </Label>
                    <Input id="panNumber" placeholder="ABCDE1234F" className="border-slate-300 uppercase" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="paymentYear" className="text-slate-700">
                      Assessment Year *
                    </Label>
                    <Select>
                      <SelectTrigger className="border-slate-300">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024-25">2024-25</SelectItem>
                        <SelectItem value="2023-24">2023-24</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="taxType" className="text-slate-700">
                    Tax Type *
                  </Label>
                  <Select>
                    <SelectTrigger className="border-slate-300">
                      <SelectValue placeholder="Select tax type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="advance">Advance Tax</SelectItem>
                      <SelectItem value="self-assessment">Self Assessment Tax</SelectItem>
                      <SelectItem value="regular">Regular Assessment Tax</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="taxAmount" className="text-slate-700">
                    Tax Amount *
                  </Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input id="taxAmount" placeholder="Enter tax amount" className="pl-10 border-slate-300" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-700">Payment Method</Label>
                  <Select>
                    <SelectTrigger className="border-slate-300">
                      <SelectValue placeholder="Select payment method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="netbanking">Net Banking</SelectItem>
                      <SelectItem value="card">Credit/Debit Card</SelectItem>
                      <SelectItem value="upi">UPI</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" className="border-slate-300" />
                  <Label htmlFor="terms" className="text-sm text-slate-700">
                    I agree to the terms and conditions for online tax payment
                  </Label>
                </div>

                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Proceed to Payment
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card className="border-slate-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-slate-800">Payment History</CardTitle>
                <CardDescription className="text-slate-600">
                  View your tax payment history and download receipts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      date: "Mar 15, 2024",
                      type: "Advance Tax",
                      amount: "₹25,000",
                      status: "Paid",
                      challan: "280-001234",
                    },
                    {
                      date: "Dec 15, 2023",
                      type: "Advance Tax",
                      amount: "₹20,000",
                      status: "Paid",
                      challan: "280-001235",
                    },
                    {
                      date: "Sep 15, 2023",
                      type: "Advance Tax",
                      amount: "₹15,000",
                      status: "Paid",
                      challan: "280-001236",
                    },
                  ].map((payment, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border border-slate-200 rounded-lg"
                    >
                      <div className="space-y-1">
                        <p className="font-medium text-slate-800">{payment.type}</p>
                        <p className="text-sm text-slate-600">
                          {payment.date} • Challan: {payment.challan}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-medium text-slate-800">{payment.amount}</p>
                          <Badge className="bg-green-100 text-green-800">{payment.status}</Badge>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Receipt
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
