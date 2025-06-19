"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import {
  ArrowLeft,
  Building,
  Search,
  CreditCard,
  Download,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react"
import Link from "next/link"

export default function PropertyTaxPayPage() {
  const [propertyId, setPropertyId] = useState("")
  const [taxDetailsFetched, setTaxDetailsFetched] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("")
  const [selectedQuarters, setSelectedQuarters] = useState<string[]>([])

  const handleFetchTaxDetails = () => {
    if (propertyId) {
      setTaxDetailsFetched(true)
    }
  }

  const quarters = [
    { id: "q1", period: "Q1 (Apr-Jun 2024)", amount: 16920, dueDate: "Jun 30, 2024", status: "paid" },
    { id: "q2", period: "Q2 (Jul-Sep 2024)", amount: 16920, dueDate: "Sep 30, 2024", status: "paid" },
    { id: "q3", period: "Q3 (Oct-Dec 2024)", amount: 16920, dueDate: "Dec 31, 2024", status: "due" },
    { id: "q4", period: "Q4 (Jan-Mar 2025)", amount: 16920, dueDate: "Mar 31, 2025", status: "upcoming" },
  ]

  const handleQuarterSelection = (quarterId: string, checked: boolean) => {
    if (checked) {
      setSelectedQuarters([...selectedQuarters, quarterId])
    } else {
      setSelectedQuarters(selectedQuarters.filter((id) => id !== quarterId))
    }
  }

  const totalAmount = selectedQuarters.reduce((total, quarterId) => {
    const quarter = quarters.find((q) => q.id === quarterId)
    return total + (quarter?.amount || 0)
  }, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6">
          <Link href="/services/property-tax">
            <Button variant="ghost" size="sm" className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Property Tax Services
            </Button>
          </Link>
          <div className="flex items-center">
            <Building className="h-6 w-6 text-lime-500 mr-3" />
            <h1 className="text-2xl font-bold text-slate-800">Pay Property Tax</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Property Search */}
            <Card className="border-slate-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-slate-800">Enter Property Details</CardTitle>
                <CardDescription className="text-slate-600">
                  Enter your property ID to fetch tax details and make payment
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="propertyId" className="text-slate-700">
                      Property ID *
                    </Label>
                    <Input
                      id="propertyId"
                      placeholder="Enter your property ID"
                      className="border-slate-300"
                      value={propertyId}
                      onChange={(e) => setPropertyId(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="assessmentYear" className="text-slate-700">
                      Assessment Year *
                    </Label>
                    <Select defaultValue="2024-25">
                      <SelectTrigger className="border-slate-300">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024-25">2024-25</SelectItem>
                        <SelectItem value="2023-24">2023-24</SelectItem>
                        <SelectItem value="2022-23">2022-23</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ownerName" className="text-slate-700">
                    Property Owner Name
                  </Label>
                  <Input id="ownerName" placeholder="Enter owner name" className="border-slate-300" />
                </div>

                <Button
                  className="w-full bg-lime-600 hover:bg-lime-700 text-white"
                  onClick={handleFetchTaxDetails}
                  disabled={!propertyId}
                >
                  <Search className="h-4 w-4 mr-2" />
                  Get Tax Details
                </Button>
              </CardContent>
            </Card>

            {/* Tax Details */}
            {taxDetailsFetched && (
              <Card className="border-slate-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-slate-800">Property Tax Details</CardTitle>
                  <CardDescription className="text-slate-600">
                    Property ID: {propertyId} • Assessment Year: 2024-25
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Property Info */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm text-slate-600">Property Owner</p>
                      <p className="font-medium text-slate-800">John Doe</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-slate-600">Property Type</p>
                      <p className="font-medium text-slate-800">Residential</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-slate-600">Assessment Value</p>
                      <p className="font-medium text-slate-800">₹72,00,000</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-slate-600">Annual Tax</p>
                      <p className="font-medium text-slate-800">₹67,680</p>
                    </div>
                  </div>

                  <Separator />

                  {/* Quarterly Payments */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-slate-800">Select Payment Period</h4>
                    <div className="space-y-3">
                      {quarters.map((quarter) => (
                        <div
                          key={quarter.id}
                          className={`border rounded-lg p-4 ${
                            quarter.status === "paid"
                              ? "border-green-200 bg-green-50"
                              : quarter.status === "due"
                                ? "border-red-200 bg-red-50"
                                : "border-slate-200"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              {quarter.status !== "paid" && (
                                <Checkbox
                                  id={quarter.id}
                                  checked={selectedQuarters.includes(quarter.id)}
                                  onCheckedChange={(checked) => handleQuarterSelection(quarter.id, checked as boolean)}
                                  disabled={quarter.status === "paid"}
                                  className="border-slate-300"
                                />
                              )}
                              <div>
                                <p className="font-medium text-slate-800">{quarter.period}</p>
                                <p className="text-sm text-slate-600">Due: {quarter.dueDate}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-medium text-slate-800">₹{quarter.amount.toLocaleString()}</p>
                              <Badge
                                className={
                                  quarter.status === "paid"
                                    ? "bg-green-100 text-green-800"
                                    : quarter.status === "due"
                                      ? "bg-red-100 text-red-800"
                                      : "bg-blue-100 text-blue-800"
                                }
                              >
                                {quarter.status === "paid" ? "Paid" : quarter.status === "due" ? "Due" : "Upcoming"}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {selectedQuarters.length > 0 && (
                    <>
                      <Separator />

                      {/* Payment Summary */}
                      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                        <h4 className="font-semibold text-slate-800 mb-3">Payment Summary</h4>
                        <div className="space-y-2">
                          {selectedQuarters.map((quarterId) => {
                            const quarter = quarters.find((q) => q.id === quarterId)
                            return (
                              <div key={quarterId} className="flex justify-between">
                                <span className="text-slate-600">{quarter?.period}</span>
                                <span className="font-medium">₹{quarter?.amount.toLocaleString()}</span>
                              </div>
                            )
                          })}
                          <Separator />
                          <div className="flex justify-between font-semibold text-lg">
                            <span>Total Amount</span>
                            <span className="text-lime-600">₹{totalAmount.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>

                      {/* Payment Method */}
                      <div className="space-y-4">
                        <h4 className="font-semibold text-slate-800">Payment Method</h4>
                        <Select value={paymentMethod} onValueChange={setPaymentMethod}>
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

                        {paymentMethod === "card" && (
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="cardNumber" className="text-slate-700">
                                Card Number
                              </Label>
                              <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="border-slate-300" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="expiry" className="text-slate-700">
                                  Expiry Date
                                </Label>
                                <Input id="expiry" placeholder="MM/YY" className="border-slate-300" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="cvv" className="text-slate-700">
                                  CVV
                                </Label>
                                <Input id="cvv" placeholder="123" className="border-slate-300" />
                              </div>
                            </div>
                          </div>
                        )}

                        {paymentMethod === "upi" && (
                          <div className="space-y-2">
                            <Label htmlFor="upiId" className="text-slate-700">
                              UPI ID
                            </Label>
                            <Input id="upiId" placeholder="yourname@upi" className="border-slate-300" />
                          </div>
                        )}
                      </div>

                      <Alert>
                        <CheckCircle className="h-4 w-4" />
                        <AlertDescription>
                          Pay before due date to avoid penalty charges. Early payment discount of 5% available for
                          advance payments.
                        </AlertDescription>
                      </Alert>

                      <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white" disabled={!paymentMethod}>
                        <CreditCard className="h-4 w-4 mr-2" />
                        Pay ₹{totalAmount.toLocaleString()}
                      </Button>
                    </>
                  )}
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
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
                  <span className="text-sm text-slate-700">Q3 Due: Dec 31, 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-slate-500" />
                  <span className="text-sm text-slate-700">Q4 Due: Mar 31, 2025</span>
                </div>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-4 w-4 text-amber-500" />
                  <span className="text-sm text-slate-700">Penalty after due date</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start border-slate-300">
                  <Download className="h-4 w-4 mr-2" />
                  Download Receipt
                </Button>
                <Button variant="outline" className="w-full justify-start border-slate-300">
                  <Clock className="h-4 w-4 mr-2" />
                  Payment History
                </Button>
                <Button variant="outline" className="w-full justify-start border-slate-300">
                  <Calendar className="h-4 w-4 mr-2" />
                  Set Reminder
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
