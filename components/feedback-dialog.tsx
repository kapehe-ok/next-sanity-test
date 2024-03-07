import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export function FeedbackDialog() {
    const { toast } = useToast()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Collect form data with type assertion
        const nameElement = document.getElementById('entry.name') as HTMLInputElement;
        const emailElement = document.getElementById('entry.email') as HTMLInputElement;
        const messageElement = document.getElementById('entry.message') as HTMLTextAreaElement;

        // Now you can safely access the `value` property
        const formData = {
            name: nameElement.value,
            email: emailElement.value,
            message: messageElement.value,
        };

        try {
            const response = await fetch('http://localhost:8000/submit-feedback/', { // Replace with your FastAPI URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                toast({
                    title: 'Thank you for submitting your feedback!',
                    description: 'We will contact you at your email address.',
                });
            } else {
                throw new Error(data.detail || 'An unknown error occurred');
            }
        } catch (error) {
            toast({
                title: 'Submission failed',
                description: error.toString(),
            });
        }
    };



    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="link">Help us improve!</Button>
            </DialogTrigger>
            <form onSubmit={handleSubmit}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>How can we improve?</DialogTitle>
                        <DialogDescription>
                            Please, we will love to hear what you think. Share what you think with us and we&apos;ll reach back as soon as possible.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        {/* Adjust field names and IDs */}
                        <div className="grid w-full items-center gap-3">
                            <Label htmlFor="entry.name">Name</Label>
                            <Input type="text" name="entry.name" id="entry.name" placeholder="John Smith" required className="text-base" />
                        </div>
                        <div className="grid w-full items-center gap-3">
                            <Label htmlFor="entry.email">Email</Label>
                            <Input type="email" name="entry.email" id="entry.email" placeholder="john@email.com" required className="text-base" />
                        </div>
                        <div className="grid w-full items-center gap-3">
                            <Label htmlFor="entry.message">Message</Label>
                            <Textarea name="entry.message" id="entry.message" placeholder="Type your message here." required className="text-base" />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="submit">Submit</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
