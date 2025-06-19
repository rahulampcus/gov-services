"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, Lock, Mail } from "lucide-react"
import Link from "next/link"

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Building2 className="h-12 w-12 text-slate-600" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800">GovServices</h1>
          <p className="text-slate-600 mt-2">Your Digital Government Portal</p>
        </div>

        <Card className="border-slate-200 shadow-lg">
          <CardHeader className="space-y-1">
            <Tabs value={isLogin ? "login" : "signup"} className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-slate-100">
                <TabsTrigger
                  value="login"
                  onClick={() => setIsLogin(true)}
                  className="data-[state=active]:bg-slate-600 data-[state=active]:text-white"
                >
                  Login
                </TabsTrigger>
                <TabsTrigger
                  value="signup"
                  onClick={() => setIsLogin(false)}
                  className="data-[state=active]:bg-slate-600 data-[state=active]:text-white"
                >
                  Sign Up
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-4 mt-6">
                <CardTitle className="text-2xl text-slate-800">Welcome Back</CardTitle>
                <CardDescription className="text-slate-600">Sign in to access your government services</CardDescription>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-700">
                      Email
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="pl-10 border-slate-300 focus:border-slate-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-slate-700">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <Input id="password" type="password" className="pl-10 border-slate-300 focus:border-slate-500" />
                    </div>
                  </div>
                  <Link href="/dashboard" className="block">
                    <Button className="w-full bg-slate-600 hover:bg-slate-700 text-white">Sign In</Button>
                  </Link>
                  <div className="text-center">
                    <Link href="#" className="text-sm text-slate-600 hover:text-slate-800">
                      Forgot your password?
                    </Link>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="signup" className="space-y-4 mt-6">
                <CardTitle className="text-2xl text-slate-800">Get Started</CardTitle>
                <CardDescription className="text-slate-600">
                  Create your account to access government services
                </CardDescription>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-slate-700">
                        First Name
                      </Label>
                      <Input id="firstName" placeholder="John" className="border-slate-300 focus:border-slate-500" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-slate-700">
                        Last Name
                      </Label>
                      <Input id="lastName" placeholder="Doe" className="border-slate-300 focus:border-slate-500" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signupEmail" className="text-slate-700">
                      Email
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <Input
                        id="signupEmail"
                        type="email"
                        placeholder="your.email@example.com"
                        className="pl-10 border-slate-300 focus:border-slate-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signupPassword" className="text-slate-700">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <Input
                        id="signupPassword"
                        type="password"
                        className="pl-10 border-slate-300 focus:border-slate-500"
                      />
                    </div>
                  </div>
                  <Link href="/onboarding" className="block">
                    <Button className="w-full bg-slate-600 hover:bg-slate-700 text-white">
                      Continue to Onboarding
                    </Button>
                  </Link>
                </div>
              </TabsContent>
            </Tabs>
          </CardHeader>
        </Card>

        <div className="text-center mt-6 text-sm text-slate-600">
          <p>Secure • Trusted • Government Verified</p>
        </div>
      </div>
    </div>
  )
}
