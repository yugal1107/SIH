import React from "react";
import { Bell, Clock, MapPin, MessageSquare, Train, User } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function RailwayComplaintDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">
        Railway Complaint Tracking Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Complaint Status Card */}
        <Card>
          <CardHeader>
            <CardTitle>Complaint Status</CardTitle>
            <CardDescription>Track your recent complaint</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Complaint ID: #12345</span>
                <Badge>In Progress</Badge>
              </div>
              <Progress value={60} className="w-full" />
              <p className="text-sm text-gray-500">Last Updated: 2 hours ago</p>
            </div>
          </CardContent>
        </Card>

        {/* Train Status Card */}
        <Card>
          <CardHeader>
            <CardTitle>Train Status</CardTitle>
            <CardDescription>Real-time information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Train className="h-5 w-5 text-blue-500" />
                <span className="font-semibold">Rajdhani Express (12301)</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">Current Station</p>
                  <p className="text-lg font-bold">Allahabad Jn</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Delay</p>
                  <p className="text-lg font-bold text-yellow-600">+15 min</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-500">
                  ETA: 2 hours 30 minutes
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions Card */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Frequently used features</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="flex items-center justify-center space-x-2"
              >
                <MessageSquare className="h-4 w-4" />
                <span>New Complaint</span>
              </Button>
              <Button
                variant="outline"
                className="flex items-center justify-center space-x-2"
              >
                <MapPin className="h-4 w-4" />
                <span>Track PNR</span>
              </Button>
              <Button
                variant="outline"
                className="flex items-center justify-center space-x-2"
              >
                <Bell className="h-4 w-4" />
                <span>Notifications</span>
              </Button>
              <Button
                variant="outline"
                className="flex items-center justify-center space-x-2"
              >
                <User className="h-4 w-4" />
                <span>My Profile</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Complaints Card */}
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle>Recent Complaints</CardTitle>
            <CardDescription>
              Overview of your last 5 complaints
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  id: "12345",
                  title: "AC not working",
                  status: "In Progress",
                  date: "2023-09-25",
                },
                {
                  id: "12344",
                  title: "Food quality issue",
                  status: "Resolved",
                  date: "2023-09-20",
                },
                {
                  id: "12343",
                  title: "Cleanliness concern",
                  status: "Pending",
                  date: "2023-09-18",
                },
                {
                  id: "12342",
                  title: "Delay compensation",
                  status: "Resolved",
                  date: "2023-09-15",
                },
                {
                  id: "12341",
                  title: "Seat not available",
                  status: "Closed",
                  date: "2023-09-10",
                },
              ].map((complaint) => (
                <div
                  key={complaint.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarFallback>{complaint.id.slice(-2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{complaint.title}</p>
                      <p className="text-sm text-gray-500">
                        Complaint ID: #{complaint.id}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge
                      variant={
                        complaint.status === "Resolved"
                          ? "default"
                          : "secondary"
                      }
                    >
                      {complaint.status}
                    </Badge>
                    <p className="text-sm text-gray-500 mt-1">
                      {complaint.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
