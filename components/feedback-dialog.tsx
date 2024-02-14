import { Button } from "@/components/ui/button"
import {
    Dialog,
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

export function FeedbackDialog() {
    // URL to submit the form. Replace with your Google Form action URL
    const formAction = "YOUR_GOOGLE_FORM_ACTION_URL";
    const { toast } = useToast();

    // Adjust the input names to match your Google Form field names
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget); // Use currentTarget instead of target for type safety
        fetch(formAction, {
            method: 'POST',
            body: formData,
            mode: 'no-cors', // Google Forms submission results in a redirect, which causes a CORS error if not handled.
        }).then(() => {
            // Handle submission success
            alert('Feedback submitted successfully!');
        }).catch((error) => {
            // Handle submission error
            console.error('Submission failed', error);
        });
    };


    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="link">Give Feedback</Button>
            </DialogTrigger>
            <form action={formAction} method="POST" onSubmit={handleSubmit}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Give Feedback</DialogTitle>
                        <DialogDescription>
                            Share your thoughts, please.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        {/* Adjust field names and IDs */}
                        <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="entry.name">Name</Label>
                            <Input type="text" name="entry.name" id="entry.name" placeholder="John Smith" required />
                        </div>
                        <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="entry.email">Email</Label>
                            <Input type="email" name="entry.email" id="entry.email" placeholder="john@email.com" required />
                        </div>
                        <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="entry.message">Message</Label>
                            <Textarea name="entry.message" id="entry.message" placeholder="Type your message here." required />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" onClick={() => {
                            toast({
                                title: 'Thank you for submitting your feedback!',
                                description: 'We will contact you to your email address.'
                            })
                        }}>Submit</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
