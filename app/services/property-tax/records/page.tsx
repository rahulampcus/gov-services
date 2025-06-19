"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Building, Search, Download, FileText, MapPin, Calendar, User, Eye, Filter } from "lucide-react"
import Link from "next/link"

export default function PropertyRecordsPage() {
  const [propertyId, setPropertyId] = useState("")
  const [recordsFetched, setRecordsFetched] = useState(false)
  const [searchType, setSearchType] = useState("property-id")

  const handleSearchRecords = () => {
    if (propertyId) {
      setRecordsFetched(true)
    }
  }

  const propertyHistory = [
    {
      date: "Mar 15, 2020",
      event: "Property Registration",
      details: "Initial property registration and title transfer",
      amount: "₹65,00,000",
      status: "Completed",
    },
    {
      date: "Apr 10, 2020",
      event: "First Assessment",
      details: "Initial property assessment for tax calculation",
      amount: "₹68,00,000",
      status: "Completed",
    },
    {
      date: "Jan 05, 2022",
      event: "Property Modification",
      details: "Addition of first floor - 400 sq ft",
      amount: "₹70,00,000",
      status: "Completed",
    },
    {
      date: "Mar 20, 2024",
      event: "Reassessment",
      details: "Annual reassessment for current market value",
      amount: "₹72,00,000",
      status: "Completed",
    },
  ]

  const taxHistory = [
    { year: "2024-25", q1: "Paid", q2: "Paid", q3: "Due", q4: "Upcoming", total: "₹67,680" },
    { year: "2023-24", q1: "Paid", q2: "Paid", q3: "Paid", q4: "Paid", total: "₹64,800" },
    { year: "2022-23", q1: "Paid", q2: "Paid", q3: "Paid", q4: "Paid", total: "₹61,200" },
    { year: "2021-22", q1: "Paid", q2: "Paid", q3: "Paid", q4: "Paid", total: "₹58,400" },
  ]

  const documents = [
    { name: "Property Registration Certificate", date: "Mar 15, 2020", type: "PDF", size: "2.1 MB" },
    { name: "Latest Assessment Report", date: "Mar 20, 2024", type: "PDF", size: "1.8 MB" },
    { name: "Tax Payment Receipt Q2 2024", date: "Sep 25, 2024", type: "PDF", size: "0.5 MB" },
    { name: "Property Survey Report", date: "Jan 05, 2022", type: "PDF", size: "3.2 MB" },
    { name: "Ownership Transfer Document", date: "Mar 15, 2020", type: "PDF", size: "1.5 MB" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-6">
          <Link href="/services/property-tax">
            <Button variant="ghost" size="sm" className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Property Tax Services
            </Button>
          </Link>
          <div className="flex items-center">
            <Building className="h-6 w-6 text-lime-500 mr-3" />
            <h1 className="text-2xl font-bold text-slate-800">Property Records</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 space-y-6">
            {/* Search Section */}
            <Card className="border-slate-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-slate-800">Search Property Records</CardTitle>
                <CardDescription className="text-slate-600">
                  Access property ownership and transaction records
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-slate-700">Search By</Label>
                  <Select value={searchType} onValueChange={setSearchType}>
                    <SelectTrigger className="border-slate-300">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="property-id">Property ID</SelectItem>
                      <SelectItem value="owner-name">Owner Name</SelectItem>
                      <SelectItem value="address">Property Address</SelectItem>
                      <SelectItem value="survey-number">Survey Number</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="searchValue" className="text-slate-700">
                      {searchType === "property-id" && "Property ID *"}
                      {searchType === "owner-name" && "Owner Name *"}
                      {searchType === "address" && "Property Address *"}
                      {searchType === "survey-number" && "Survey Number *"}
                    </Label>
                    <Input
                      id="searchValue"
                      placeholder={
                        searchType === "property-id"
                          ? "Enter property ID"
                          : searchType === "owner-name"
                            ? "Enter owner name"
                            : searchType === "address"
                              ? "Enter property address"
                              : "Enter survey number"
                      }
                      className="border-slate-300"
                      value={propertyId}
                      onChange={(e) => setPropertyId(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="recordType" className="text-slate-700">
                      Record Type
                    </Label>
                    <Select>
                      <SelectTrigger className="border-slate-300">
                        <SelectValue placeholder="All records" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Records</SelectItem>
                        <SelectItem value="ownership">Ownership Records</SelectItem>
                        <SelectItem value="tax">Tax Records</SelectItem>
                        <SelectItem value="assessment">Assessment Records</SelectItem>
                        <SelectItem value="transaction">Transaction Records</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button
                  className="w-full bg-lime-600 hover:bg-lime-700 text-white"
                  onClick={handleSearchRecords}
                  disabled={!propertyId}
                >
                  <Search className="h-4 w-4 mr-2" />
                  Search Records
                </Button>
              </CardContent>
            </Card>

            {/* Records Display */}
            {recordsFetched && (
              <Card className="border-slate-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-slate-800">Property Records</CardTitle>
                  <CardDescription className="text-slate-600">
                    Complete records for Property ID: {propertyId}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="overview" className="space-y-6">
                    <TabsList className="grid w-full grid-cols-5 bg-slate-100">
                      <TabsTrigger
                        value="overview"
                        className="data-[state=active]:bg-lime-500 data-[state=active]:text-white"
                      >
                        Overview
                      </TabsTrigger>
                      <TabsTrigger
                        value="ownership"
                        className="data-[state=active]:bg-lime-500 data-[state=active]:text-white"
                      >
                        Ownership
                      </TabsTrigger>
                      <TabsTrigger
                        value="history"
                        className="data-[state=active]:bg-lime-500 data-[state=active]:text-white"
                      >
                        History
                      </TabsTrigger>
                      <TabsTrigger
                        value="tax"
                        className="data-[state=active]:bg-lime-500 data-[state=active]:text-white"
                      >
                        Tax Records
                      </TabsTrigger>
                      <TabsTrigger
                        value="documents"
                        className="data-[state=active]:bg-lime-500 data-[state=active]:text-white"
                      >
                        Documents
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="space-y-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="font-semibold text-slate-800">Property Details</h4>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-slate-600">Property ID</span>
                              <span className="font-medium">{propertyId}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600">Survey Number</span>
                              <span className="font-medium">123/4A</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600">Property Type</span>
                              <span className="font-medium">Residential</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600">Usage</span>
                              <span className="font-medium">Self Occupied</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600">Zone</span>
                              <span className="font-medium">Zone A</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="font-semibold text-slate-800">Current Status</h4>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-slate-600">Assessment Value</span>
                              <span className="font-medium">₹72,00,000</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600">Annual Tax</span>
                              <span className="font-medium">₹67,680</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600">Tax Status</span>
                              <Badge className="bg-yellow-100 text-yellow-800">Q3 Due</Badge>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600">Last Payment</span>
                              <span className="font-medium">Sep 25, 2024</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600">Next Due</span>
                              <span className="font-medium text-red-600">Dec 31, 2024</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-4">
                        <h4 className="font-semibold text-slate-800">Property Address</h4>
                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                          <div className="flex items-start gap-3">
                            <MapPin className="h-5 w-5 text-slate-500 mt-1" />
                            <div>
                              <p className="font-medium text-slate-800">123, Green Valley Apartments</p>
                              <p className="text-slate-600">Sector 15, Dwarka</p>
                              <p className="text-slate-600">New Delhi - 110075</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="ownership" className="space-y-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-slate-800">Current Ownership</h4>
                        <div className="border border-slate-200 rounded-lg p-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <p className="text-sm text-slate-600">Primary Owner</p>
                              <p className="font-medium text-slate-800">John Doe</p>
                            </div>
                            <div className="space-y-2">
                              <p className="text-sm text-slate-600">Ownership Type</p>
                              <p className="font-medium text-slate-800">Individual</p>
                            </div>
                            <div className="space-y-2">
                              <p className="text-sm text-slate-600">Registration Date</p>
                              <p className="font-medium text-slate-800">March 15, 2020</p>
                            </div>
                            <div className="space-y-2">
                              <p className="text-sm text-slate-600">Registration Number</p>
                              <p className="font-medium text-slate-800">REG/2020/001234</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-slate-800">Previous Owners</h4>
                        <div className="space-y-3">
                          <div className="border border-slate-200 rounded-lg p-4">
                            <div className="grid grid-cols-3 gap-4">
                              <div className="space-y-1">
                                <p className="font-medium text-slate-800">ABC Developers Ltd.</p>
                                <p className="text-sm text-slate-600">Builder/Developer</p>
                              </div>
                              <div className="space-y-1">
                                <p className="text-sm text-slate-600">Period</p>
                                <p className="font-medium text-slate-800">2018 - 2020</p>
                              </div>
                              <div className="space-y-1">
                                <p className="text-sm text-slate-600">Transfer Type</p>
                                <p className="font-medium text-slate-800">Sale Deed</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="history" className="space-y-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-slate-800">Property Transaction History</h4>
                        <div className="space-y-3">
                          {propertyHistory.map((record, index) => (
                            <div key={index} className="border border-slate-200 rounded-lg p-4">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-3">
                                  <Calendar className="h-5 w-5 text-slate-500" />
                                  <div>
                                    <p className="font-medium text-slate-800">{record.event}</p>
                                    <p className="text-sm text-slate-600">{record.date}</p>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <p className="font-medium text-slate-800">{record.amount}</p>
                                  <Badge className="bg-green-100 text-green-800">{record.status}</Badge>
                                </div>
                              </div>
                              <p className="text-sm text-slate-600 ml-8">{record.details}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="tax" className="space-y-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-slate-800">Tax Payment History</h4>
                        <div className="overflow-x-auto">
                          <table className="w-full border border-slate-200 rounded-lg">
                            <thead className="bg-slate-50">
                              <tr>
                                <th className="text-left p-3 border-b border-slate-200">Year</th>
                                <th className="text-center p-3 border-b border-slate-200">Q1</th>
                                <th className="text-center p-3 border-b border-slate-200">Q2</th>
                                <th className="text-center p-3 border-b border-slate-200">Q3</th>
                                <th className="text-center p-3 border-b border-slate-200">Q4</th>
                                <th className="text-right p-3 border-b border-slate-200">Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              {taxHistory.map((year, index) => (
                                <tr key={index} className="border-b border-slate-200">
                                  <td className="p-3 font-medium">{year.year}</td>
                                  <td className="p-3 text-center">
                                    <Badge
                                      className={
                                        year.q1 === "Paid"
                                          ? "bg-green-100 text-green-800"
                                          : year.q1 === "Due"
                                            ? "bg-red-100 text-red-800"
                                            : "bg-blue-100 text-blue-800"
                                      }
                                    >
                                      {year.q1}
                                    </Badge>
                                  </td>
                                  <td className="p-3 text-center">
                                    <Badge
                                      className={
                                        year.q2 === "Paid"
                                          ? "bg-green-100 text-green-800"
                                          : year.q2 === "Due"
                                            ? "bg-red-100 text-red-800"
                                            : "bg-blue-100 text-blue-800"
                                      }
                                    >
                                      {year.q2}
                                    </Badge>
                                  </td>
                                  <td className="p-3 text-center">
                                    <Badge
                                      className={
                                        year.q3 === "Paid"
                                          ? "bg-green-100 text-green-800"
                                          : year.q3 === "Due"
                                            ? "bg-red-100 text-red-800"
                                            : "bg-blue-100 text-blue-800"
                                      }
                                    >
                                      {year.q3}
                                    </Badge>
                                  </td>
                                  <td className="p-3 text-center">
                                    <Badge
                                      className={
                                        year.q4 === "Paid"
                                          ? "bg-green-100 text-green-800"
                                          : year.q4 === "Due"
                                            ? "bg-red-100 text-red-800"
                                            : "bg-blue-100 text-blue-800"
                                      }
                                    >
                                      {year.q4}
                                    </Badge>
                                  </td>
                                  <td className="p-3 text-right font-medium">{year.total}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="documents" className="space-y-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-slate-800">Property Documents</h4>
                        <div className="space-y-3">
                          {documents.map((doc, index) => (
                            <div key={index} className="border border-slate-200 rounded-lg p-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <FileText className="h-5 w-5 text-slate-500" />
                                  <div>
                                    <p className="font-medium text-slate-800">{doc.name}</p>
                                    <p className="text-sm text-slate-600">
                                      {doc.date} • {doc.type} • {doc.size}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex gap-2">
                                  <Button variant="outline" size="sm">
                                    <Eye className="h-4 w-4 mr-2" />
                                    View
                                  </Button>
                                  <Button variant="outline" size="sm">
                                    <Download className="h-4 w-4 mr-2" />
                                    Download
                                  </Button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Search Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-slate-700">Date Range</Label>
                  <Select>
                    <SelectTrigger className="border-slate-300">
                      <SelectValue placeholder="All time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Time</SelectItem>
                      <SelectItem value="1year">Last 1 Year</SelectItem>
                      <SelectItem value="5years">Last 5 Years</SelectItem>
                      <SelectItem value="custom">Custom Range</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-slate-700">Property Type</Label>
                  <Select>
                    <SelectTrigger className="border-slate-300">
                      <SelectValue placeholder="All types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="residential">Residential</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                      <SelectItem value="industrial">Industrial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button variant="outline" className="w-full border-slate-300">
                  <Filter className="h-4 w-4 mr-2" />
                  Apply Filters
                </Button>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start border-slate-300">
                  <Download className="h-4 w-4 mr-2" />
                  Download All Records
                </Button>
                <Button variant="outline" className="w-full justify-start border-slate-300">
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Report
                </Button>
                <Button variant="outline" className="w-full justify-start border-slate-300">
                  <User className="h-4 w-4 mr-2" />
                  Ownership Certificate
                </Button>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Record Types</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm text-slate-700">• Ownership Records</div>
                <div className="text-sm text-slate-700">• Tax Payment History</div>
                <div className="text-sm text-slate-700">• Assessment Records</div>
                <div className="text-sm text-slate-700">• Transaction History</div>
                <div className="text-sm text-slate-700">• Legal Documents</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
