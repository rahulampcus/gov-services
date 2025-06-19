"use client"

import { useState } from "react"
import {
  ArrowLeft,
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock,
  FileText,
  Calendar,
  TrendingUp,
  Download,
  Eye,
  Bell,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Link from "next/link"

export default function CompliancePage() {
  const [selectedPeriod, setSelectedPeriod] = useState("current")

  const complianceOverview = {
    totalRequirements: 24,
    completed: 18,
    pending: 4,
    overdue: 2,
    complianceScore: 75,
  }

  const upcomingDeadlines = [
    {
      id: 1,
      requirement: "Annual Return Filing",
      dueDate: "2024-07-15",
      daysLeft: 10,
      priority: "high",
      description: "Submit annual business return with financial statements",
    },
    {
      id: 2,
      requirement: "GST Return - June 2024",
      dueDate: "2024-07-20",
      daysLeft: 15,
      priority: "medium",
      description: "File GST return for the month of June 2024",
    },
    {
      id: 3,
      requirement: "Trade License Renewal",
      dueDate: "2024-08-01",
      daysLeft: 27,
      priority: "medium",
      description: "Renew trade license before expiration",
    },
    {
      id: 4,
      requirement: "Environmental Compliance Report",
      dueDate: "2024-08-15",
      daysLeft: 41,
      priority: "low",
      description: "Submit quarterly environmental compliance report",
    },
  ]

  const complianceHistory = [
    {
      id: 1,
      requirement: "Income Tax Return",
      submissionDate: "2024-05-30",
      dueDate: "2024-05-31",
      status: "completed",
      penalty: 0,
      documents: ["ITR Form", "Financial Statements", "Audit Report"],
    },
    {
      id: 2,
      requirement: "PF Return - May 2024",
      submissionDate: "2024-06-10",
      dueDate: "2024-06-05",
      status: "completed_late",
      penalty: 500,
      documents: ["PF Return", "Salary Register"],
    },
    {
      id: 3,
      requirement: "Fire Safety Certificate",
      submissionDate: "2024-04-15",
      dueDate: "2024-04-30",
      status: "completed",
      penalty: 0,
      documents: ["Fire Safety Certificate", "Inspection Report"],
    },
    {
      id: 4,
      requirement: "Labour License Renewal",
      submissionDate: null,
      dueDate: "2024-03-31",
      status: "overdue",
      penalty: 2000,
      documents: [],
    },
  ]

  const complianceCategories = [
    {
      name: "Tax Compliance",
      total: 8,
      completed: 6,
      pending: 1,
      overdue: 1,
      score: 75,
      color: "bg-blue-500",
    },
    {
      name: "Labor Compliance",
      total: 6,
      completed: 5,
      pending: 1,
      overdue: 0,
      score: 83,
      color: "bg-green-500",
    },
    {
      name: "Environmental",
      total: 4,
      completed: 3,
      pending: 1,
      overdue: 0,
      score: 75,
      color: "bg-yellow-500",
    },
    {
      name: "Safety & Security",
      total: 3,
      completed: 2,
      pending: 1,
      overdue: 0,
      score: 67,
      color: "bg-red-500",
    },
    {
      name: "Financial",
      total: 3,
      completed: 2,
      pending: 0,
      overdue: 1,
      score: 67,
      color: "bg-purple-500",
    },
  ]

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge className="bg-red-100 text-red-800">High Priority</Badge>
      case "medium":
        return <Badge className="bg-yellow-100 text-yellow-800">Medium Priority</Badge>
      case "low":
        return <Badge className="bg-green-100 text-green-800">Low Priority</Badge>
      default:
        return <Badge variant="secondary">{priority}</Badge>
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800">Completed</Badge>
      case "completed_late":
        return <Badge className="bg-yellow-100 text-yellow-800">Completed Late</Badge>
      case "overdue":
        return <Badge className="bg-red-100 text-red-800">Overdue</Badge>
      case "pending":
        return <Badge className="bg-blue-100 text-blue-800">Pending</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getDaysLeftColor = (days: number) => {
    if (days <= 7) return "text-red-600"
    if (days <= 15) return "text-yellow-600"
    return "text-green-600"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white border-b border-purple-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/services/corporation" className="flex items-center text-purple-600 hover:text-purple-700">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Corporation Services
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-purple-600" />
              <span className="text-lg font-semibold text-gray-900">Compliance Tracking</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Requirements</p>
                  <p className="text-2xl font-bold text-gray-900">{complianceOverview.totalRequirements}</p>
                </div>
                <FileText className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Completed</p>
                  <p className="text-2xl font-bold text-green-600">{complianceOverview.completed}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending</p>
                  <p className="text-2xl font-bold text-yellow-600">{complianceOverview.pending}</p>
                </div>
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Overdue</p>
                  <p className="text-2xl font-bold text-red-600">{complianceOverview.overdue}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Compliance Score</p>
                  <p className="text-2xl font-bold text-purple-600">{complianceOverview.complianceScore}%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <Progress value={complianceOverview.complianceScore} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        {/* Alerts */}
        {complianceOverview.overdue > 0 && (
          <Alert className="mb-6 border-red-200 bg-red-50">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertTitle className="text-red-800">Urgent Action Required</AlertTitle>
            <AlertDescription className="text-red-700">
              You have {complianceOverview.overdue} overdue compliance requirements. Please take immediate action to
              avoid penalties.
            </AlertDescription>
          </Alert>
        )}

        <Tabs defaultValue="upcoming" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="upcoming">Upcoming Deadlines</TabsTrigger>
            <TabsTrigger value="categories">By Category</TabsTrigger>
            <TabsTrigger value="history">Compliance History</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          {/* Upcoming Deadlines Tab */}
          <TabsContent value="upcoming" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-purple-600" />
                  Upcoming Compliance Deadlines
                </CardTitle>
                <CardDescription>Stay on top of your compliance requirements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingDeadlines.map((deadline) => (
                    <Card key={deadline.id} className="border-l-4 border-l-purple-500">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h4 className="font-semibold text-gray-900">{deadline.requirement}</h4>
                              {getPriorityBadge(deadline.priority)}
                            </div>
                            <p className="text-sm text-gray-600 mb-3">{deadline.description}</p>
                            <div className="flex items-center space-x-4 text-sm">
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                                <span>Due: {deadline.dueDate}</span>
                              </div>
                              <div className={`flex items-center font-medium ${getDaysLeftColor(deadline.daysLeft)}`}>
                                <Clock className="h-4 w-4 mr-1" />
                                <span>{deadline.daysLeft} days left</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Bell className="h-4 w-4 mr-1" />
                              Remind Me
                            </Button>
                            <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                              Take Action
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Categories Tab */}
          <TabsContent value="categories" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Compliance by Category</CardTitle>
                <CardDescription>Track compliance across different business areas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {complianceCategories.map((category, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-gray-900">{category.name}</h4>
                        <span className="text-sm font-medium text-purple-600">{category.score}%</span>
                      </div>
                      <Progress value={category.score} className="h-2" />
                      <div className="grid grid-cols-4 gap-4 text-sm">
                        <div className="text-center">
                          <p className="font-medium text-gray-900">{category.total}</p>
                          <p className="text-gray-600">Total</p>
                        </div>
                        <div className="text-center">
                          <p className="font-medium text-green-600">{category.completed}</p>
                          <p className="text-gray-600">Completed</p>
                        </div>
                        <div className="text-center">
                          <p className="font-medium text-yellow-600">{category.pending}</p>
                          <p className="text-gray-600">Pending</p>
                        </div>
                        <div className="text-center">
                          <p className="font-medium text-red-600">{category.overdue}</p>
                          <p className="text-gray-600">Overdue</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Compliance History</CardTitle>
                <CardDescription>Review past compliance submissions and their status</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Requirement</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Submission Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Penalty</TableHead>
                      <TableHead>Documents</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {complianceHistory.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.requirement}</TableCell>
                        <TableCell>{item.dueDate}</TableCell>
                        <TableCell>{item.submissionDate || "Not submitted"}</TableCell>
                        <TableCell>{getStatusBadge(item.status)}</TableCell>
                        <TableCell>
                          {item.penalty > 0 ? (
                            <span className="text-red-600 font-medium">₹{item.penalty}</span>
                          ) : (
                            <span className="text-green-600">₹0</span>
                          )}
                        </TableCell>
                        <TableCell>
                          <span className="text-sm text-gray-600">{item.documents.length} documents</span>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            {item.documents.length > 0 && (
                              <Button variant="outline" size="sm">
                                <Download className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Compliance Reports</CardTitle>
                <CardDescription>Generate and download compliance reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="border-dashed border-2 hover:border-purple-300 cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <FileText className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                      <h4 className="font-semibold mb-2">Monthly Compliance Report</h4>
                      <p className="text-sm text-gray-600 mb-4">Comprehensive monthly compliance status report</p>
                      <Button variant="outline" className="w-full">
                        <Download className="h-4 w-4 mr-2" />
                        Generate Report
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-dashed border-2 hover:border-purple-300 cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                      <h4 className="font-semibold mb-2">Compliance Scorecard</h4>
                      <p className="text-sm text-gray-600 mb-4">Detailed scorecard with improvement suggestions</p>
                      <Button variant="outline" className="w-full">
                        <Download className="h-4 w-4 mr-2" />
                        Generate Scorecard
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-dashed border-2 hover:border-purple-300 cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <Calendar className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                      <h4 className="font-semibold mb-2">Upcoming Deadlines</h4>
                      <p className="text-sm text-gray-600 mb-4">Calendar view of all upcoming compliance deadlines</p>
                      <Button variant="outline" className="w-full">
                        <Download className="h-4 w-4 mr-2" />
                        Export Calendar
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
