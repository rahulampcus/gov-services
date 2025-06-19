"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Building2,
  FileText,
  Heart,
  Shield,
  Briefcase,
  Users,
  Car,
  GraduationCap,
  Search,
  Bell,
  Settings,
  User,
  LogOut,
  ChevronRight,
  TrendingUp,
  Clock,
  CheckCircle,
  Home,
  CreditCard,
  Building,
  Factory,
  Zap,
  Flame,
  BadgeIcon as IdCard,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const services = [
  {
    title: "Tax Services",
    description: "File taxes, view returns, and manage tax documents",
    icon: FileText,
    color: "bg-emerald-500",
    status: "Available",
    notifications: 2,
    url: "/services/tax/calculate-pay",
  },
  {
    title: "Healthcare",
    description: "Medicare, Medicaid, and health insurance services",
    icon: Heart,
    color: "bg-red-500",
    status: "Available",
    notifications: 0,
    url: "/dashboard",
  },
  {
    title: "Social Security",
    description: "Benefits, disability claims, and retirement planning",
    icon: Shield,
    color: "bg-blue-500",
    status: "Available",
    notifications: 1,
    url: "/dashboard",
  },
  {
    title: "Business Services",
    description: "Registration, licensing, and business compliance",
    icon: Briefcase,
    color: "bg-purple-500",
    status: "Available",
    notifications: 0,
    url: "/dashboard",
  },
  {
    title: "Veterans Affairs",
    description: "Benefits, healthcare, and disability compensation",
    icon: Users,
    color: "bg-orange-500",
    status: "Available",
    notifications: 3,
    url: "/dashboard",
  },
  {
    title: "Motor Vehicles",
    description: "License renewal, registration, and vehicle services",
    icon: Car,
    color: "bg-cyan-500",
    status: "Available",
    notifications: 0,
    url: "/dashboard",
  },
  {
    title: "Education",
    description: "Student loans, grants, and educational resources",
    icon: GraduationCap,
    color: "bg-indigo-500",
    status: "Available",
    notifications: 1,
    url: "/dashboard",
  },
  {
    title: "Immigration",
    description: "Visa applications, citizenship, and immigration status",
    icon: Building2,
    color: "bg-pink-500",
    status: "Limited",
    notifications: 0,
    url: "/dashboard",
  },
  {
    title: "Rent Agreement",
    description:
      "Register rent agreements, tenant verification, and rental services",
    icon: Home,
    color: "bg-teal-500",
    status: "Available",
    notifications: 0,
    url: "/services/rent-agreement/process",
  },
  {
    title: "Aadhaar Services",
    description:
      "Update Aadhaar details, download card, and verification services",
    icon: CreditCard,
    color: "bg-amber-500",
    status: "Available",
    notifications: 2,
    url: "/services/aadhaar",
  },
  {
    title: "Property Tax",
    description: "Pay property tax, view assessments, and property records",
    icon: Building,
    color: "bg-lime-500",
    status: "Available",
    notifications: 1,
    url: "/services/property-tax/assessment",
  },
  {
    title: "Corporation Services",
    description: "Company registration, compliance, and corporate filings",
    icon: Factory,
    color: "bg-violet-500",
    status: "Available",
    notifications: 0,
    url: "/dashboard",
  },
  {
    title: "Electricity Services",
    description: "Bill payments, new connections, and power outage reports",
    icon: Zap,
    color: "bg-yellow-500",
    status: "Available",
    notifications: 3,
    url: "/services/electricity/pay-bill",
  },
  {
    title: "MNGL Gas Services",
    description: "Gas connection, bill payments, and cylinder booking",
    icon: Flame,
    color: "bg-red-600",
    status: "Available",
    notifications: 1,
  },
  {
    title: "PAN Card Services",
    description: "Apply for PAN card, corrections, and download e-PAN",
    icon: IdCard,
    color: "bg-blue-600",
    status: "Available",
    notifications: 0,
    url: "/services/pan-card/update",
  },
];

const recentActivity = [
  {
    title: "Tax Return Filed",
    description: "Your 2023 tax return has been successfully submitted",
    time: "2 hours ago",
    status: "completed",
  },
  {
    title: "Aadhaar Update Request",
    description: "Address update request is under review",
    time: "4 hours ago",
    status: "pending",
  },
  {
    title: "Property Tax Payment",
    description: "Property tax for Q4 2023 has been paid successfully",
    time: "1 day ago",
    status: "completed",
  },
  {
    title: "Electricity Bill Due",
    description: "Your electricity bill is due in 5 days",
    time: "2 days ago",
    status: "pending",
  },
  {
    title: "Rent Agreement Registered",
    description: "Your rental agreement has been successfully registered",
    time: "3 days ago",
    status: "completed",
  },
  {
    title: "Social Security Update",
    description: "Your benefit statement is now available",
    time: "5 days ago",
    status: "new",
  },
  {
    title: "Gas Cylinder Booked",
    description: "Your LPG cylinder booking has been confirmed",
    time: "6 hours ago",
    status: "completed",
  },
  {
    title: "PAN Card Application",
    description: "Your PAN card application is under review",
    time: "1 week ago",
    status: "pending",
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-slate-600" />
              <h1 className="ml-3 text-xl font-bold text-slate-800">
                GovServices
              </h1>
            </div>

            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Search services..."
                  className="pl-10 border-slate-300 focus:border-slate-500"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-600 hover:text-slate-800"
              >
                <Bell className="h-5 w-5" />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder-user.jpg" alt="User" />
                      <AvatarFallback className="bg-slate-600 text-white">
                        JD
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        John Doe
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        john.doe@example.com
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <Link href="/">
                    <DropdownMenuItem>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">
            Welcome back, John!
          </h2>
          <p className="text-slate-600">
            Access your government services and manage your account
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-slate-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-700">
                Active Services
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-800">10</div>
              <p className="text-xs text-slate-600">Currently enrolled</p>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-700">
                Pending Actions
              </CardTitle>
              <Clock className="h-4 w-4 text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-800">6</div>
              <p className="text-xs text-slate-600">Require attention</p>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-700">
                Completed
              </CardTitle>
              <CheckCircle className="h-4 w-4 text-slate-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-800">12</div>
              <p className="text-xs text-slate-600">This month</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Services Grid */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-slate-800 mb-6">
              Government Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="border-slate-200 hover:shadow-lg transition-shadow cursor-pointer group"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div
                        className={`p-2 rounded-lg ${service.color} text-white`}
                      >
                        <service.icon className="h-6 w-6" />
                      </div>
                      <div className="flex items-center space-x-2">
                        {service.notifications > 0 && (
                          <Badge variant="destructive" className="text-xs">
                            {service.notifications}
                          </Badge>
                        )}
                        <Badge
                          variant={
                            service.status === "Available"
                              ? "default"
                              : "secondary"
                          }
                          className={
                            service.status === "Available"
                              ? "bg-green-100 text-green-800"
                              : ""
                          }
                        >
                          {service.status}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-lg text-slate-800 group-hover:text-slate-600">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 mb-4">
                      {service.description}
                    </CardDescription>
                    {service.url && (
                      <Link href={service.url} className="block">
                        <Button
                          variant="outline"
                          className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 group-hover:border-slate-400"
                        >
                          Access Service
                          <ChevronRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                    )}
                    {/* {service.title === "Aadhaar Services" ? (
                      <Link href="/services/aadhaar" className="block">
                        <Button
                          variant="outline"
                          className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 group-hover:border-slate-400"
                        >
                          Access Service
                          <ChevronRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                    ) : (
                      <Button
                        variant="outline"
                        className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 group-hover:border-slate-400"
                      >
                        Access Service
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Button>
                    )} */}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-6">
              Recent Activity
            </h3>
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-lg text-slate-800">
                  Latest Updates
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Your recent government service activities
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 rounded-lg bg-slate-50"
                  >
                    <div
                      className={`p-1 rounded-full ${
                        activity.status === "completed"
                          ? "bg-green-100"
                          : activity.status === "new"
                          ? "bg-blue-100"
                          : "bg-yellow-100"
                      }`}
                    >
                      <div
                        className={`h-2 w-2 rounded-full ${
                          activity.status === "completed"
                            ? "bg-green-500"
                            : activity.status === "new"
                            ? "bg-blue-500"
                            : "bg-yellow-500"
                        }`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-800">
                        {activity.title}
                      </p>
                      <p className="text-xs text-slate-600 mt-1">
                        {activity.description}
                      </p>
                      <p className="text-xs text-slate-500 mt-2">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-slate-200 mt-6">
              <CardHeader>
                <CardTitle className="text-lg text-slate-800">
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start border-slate-300 text-slate-700 hover:bg-slate-50"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Download Tax Documents
                </Button>
                <Link href="/services/aadhaar/update">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-slate-300 text-slate-700 hover:bg-slate-50"
                  >
                    <CreditCard className="h-4 w-4 mr-2" />
                    Update Aadhaar Details
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="w-full justify-start border-slate-300 text-slate-700 hover:bg-slate-50"
                >
                  <Building className="h-4 w-4 mr-2" />
                  Pay Property Tax
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-slate-300 text-slate-700 hover:bg-slate-50"
                >
                  <Zap className="h-4 w-4 mr-2" />
                  View Electricity Bill
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-slate-300 text-slate-700 hover:bg-slate-50"
                >
                  <Home className="h-4 w-4 mr-2" />
                  Register Rent Agreement
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-slate-300 text-slate-700 hover:bg-slate-50"
                >
                  <Flame className="h-4 w-4 mr-2" />
                  Book Gas Cylinder
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-slate-300 text-slate-700 hover:bg-slate-50"
                >
                  <IdCard className="h-4 w-4 mr-2" />
                  Download PAN Card
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
