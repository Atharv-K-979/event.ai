"use client";

import { useState, useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../../../components/ui/dialog";
import { Loader2, Sparkles } from "lucide-react";

export default function AIEventCreator({ onEventGenerated }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const [open, setOpen] = useState(false);
    const [prompt, setPrompt] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);

    if (!mounted) {
        return null;
    }

    const handleGenerate = async () => {
        if (!prompt) return;
        setIsGenerating(true);

        // TODO: Connect to actual AI endpoint (e.g. Convex action with OpenAI)
        // For now, mockup delay and specific response
        setTimeout(() => {
            const mockEvent = {
                title: `AI Generated: ${prompt}`,
                description: `This is an auto-generated description for "${prompt}". It includes detailed information about the schedule, speakers, and venue highlights to attract attendees. Join us for an unforgettable experience!`,
                category: "music", // Default to music or random
                suggestedCapacity: 100,
                suggestedTicketType: "free",
            };

            onEventGenerated(mockEvent);
            setIsGenerating(false);
            setOpen(false);
            setPrompt("");
        }, 1500);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" className="gap-2 border-purple-200 hover:bg-purple-50 hover:text-purple-600">
                    <Sparkles className="w-4 h-4 text-purple-500" />
                    Create with AI
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-purple-500" />
                        AI Event Assistant
                    </DialogTitle>
                    <DialogDescription>
                        Describe your event idea, and let AI fill in the details.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <Input
                        placeholder="e.g., Tech meetup in Bangalore next weekend"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        disabled={isGenerating}
                    />
                    <Button onClick={handleGenerate} disabled={!prompt || isGenerating}>
                        {isGenerating ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Generating...
                            </>
                        ) : (
                            "Generate Details"
                        )}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
