import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Send, Phone, Video, MoreVertical, Paperclip, Smile } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const conversations = [
  { id: "1", name: "Sarah Chen", lastMessage: "Thanks for the opportunity!", time: "2 min ago", unread: 2, online: true },
  { id: "2", name: "TechCorp HR", lastMessage: "We'd love to schedule an interview", time: "1 hour ago", unread: 0, online: true },
  { id: "3", name: "Michael Roberts", lastMessage: "I've attached my portfolio", time: "3 hours ago", unread: 0, online: false },
  { id: "4", name: "StartUp Hub", lastMessage: "Your application is under review", time: "1 day ago", unread: 0, online: false },
];

const messages = [
  { id: "1", sender: "them", text: "Hi! Thanks for applying to our Senior Developer position.", time: "10:30 AM" },
  { id: "2", sender: "me", text: "Thank you! I'm very excited about this opportunity.", time: "10:32 AM" },
  { id: "3", sender: "them", text: "We reviewed your profile and we're impressed with your experience.", time: "10:35 AM" },
  { id: "4", sender: "them", text: "Would you be available for a video call next week?", time: "10:35 AM" },
  { id: "5", sender: "me", text: "Absolutely! I'm flexible with my schedule. What times work best for you?", time: "10:40 AM" },
];

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState("1");
  const [newMessage, setNewMessage] = useState("");

  return (
    <DashboardLayout userRole="candidate" userName="John Doe">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-card rounded-2xl border border-border/50 overflow-hidden h-[calc(100vh-140px)]">
        <div className="grid grid-cols-1 md:grid-cols-3 h-full">
          {/* Sidebar */}
          <div className="border-r border-border/50 flex flex-col">
            <div className="p-4 border-b border-border/50">
              <h2 className="font-display font-semibold text-lg mb-3">Messages</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search conversations..." className="pl-9 h-10 rounded-xl" />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              {conversations.map((conv) => (
                <button key={conv.id} onClick={() => setSelectedConversation(conv.id)} className={cn("w-full p-4 flex items-center gap-3 hover:bg-muted/50 transition-colors text-left", selectedConversation === conv.id && "bg-muted/50")}>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-coral flex items-center justify-center text-primary-foreground font-medium">{conv.name.charAt(0)}</div>
                    {conv.online && <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-card" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-medium truncate">{conv.name}</p>
                      <span className="text-xs text-muted-foreground">{conv.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                  </div>
                  {conv.unread > 0 && <span className="w-5 h-5 rounded-full bg-coral text-white text-xs flex items-center justify-center">{conv.unread}</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="col-span-2 flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-border/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-coral flex items-center justify-center text-primary-foreground font-medium">S</div>
                <div><p className="font-medium">Sarah Chen</p><p className="text-xs text-green-600">Online</p></div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="rounded-xl"><Phone className="w-5 h-5" /></Button>
                <Button variant="ghost" size="icon" className="rounded-xl"><Video className="w-5 h-5" /></Button>
                <Button variant="ghost" size="icon" className="rounded-xl"><MoreVertical className="w-5 h-5" /></Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={cn("flex", msg.sender === "me" ? "justify-end" : "justify-start")}>
                  <div className={cn("max-w-[70%] rounded-2xl px-4 py-2", msg.sender === "me" ? "bg-primary text-primary-foreground rounded-br-md" : "bg-muted rounded-bl-md")}>
                    <p className="text-sm">{msg.text}</p>
                    <p className={cn("text-xs mt-1", msg.sender === "me" ? "text-primary-foreground/70" : "text-muted-foreground")}>{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border/50">
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" className="rounded-xl"><Paperclip className="w-5 h-5" /></Button>
                <Input value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Type a message..." className="flex-1 rounded-xl" />
                <Button variant="ghost" size="icon" className="rounded-xl"><Smile className="w-5 h-5" /></Button>
                <Button size="icon" className="rounded-xl"><Send className="w-5 h-5" /></Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
}
