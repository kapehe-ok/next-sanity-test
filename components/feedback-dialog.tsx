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
    const formAction = "https://script.google.com/macros/s/AKfycbxyoUXUs6NuCMXKrGpYWghdHFa3-6rYqU_FGTdwbzILWYawmLClilPEaIIxZkI5o0WJ/exec";
    const { toast } = useToast();

    const handleSubmit = async () => {
        const formElement = document.querySelector('form'); // This might return null if the form is not found

        // Check if formElement is not null before proceeding
        if (formElement === null) {
            console.error('Form element not found');
            return; // Exit the function if form is not found
        }

        const formData = new FormData(formElement);

        try {
            await fetch(formAction, {
                method: 'POST',
                body: formData,
                mode: 'no-cors',
            });
            console.log('Feedback submitted successfully!');
            // Toast is shown inside the onClick, so it's removed from here
        } catch (error) {
            console.error('Submission failed', error);
        }
    };



    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="link">Give Feedback</Button>
            </DialogTrigger>
            <form action={formAction} method="POST" onSubmit={handleSubmit}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Tell us what you think!</DialogTitle>
                        <DialogDescription>
                            We will love to hear from you. Share your thoughts, please.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        {/* Adjust field names and IDs */}
                        <div className="grid w-full items-center gap-3">
                            <Label htmlFor="entry.name">Name (Optional)</Label>
                            <Input type="text" name="entry.name" id="entry.name" placeholder="John Smith" required />
                        </div>
                        <div className="grid w-full items-center gap-3">
                            <Label htmlFor="entry.email">Email (Optional)</Label>
                            <Input type="email" name="entry.email" id="entry.email" placeholder="john@email.com" required />
                        </div>
                        <div className="grid w-full items-center gap-3">
                            <Label htmlFor="entry.message">Message</Label>
                            <Textarea name="entry.message" id="entry.message" placeholder="Type your message here." required />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" onClick={(e) => {
                            e.preventDefault(); // Prevent default form submission
                            toast({
                                title: 'Thank you for submitting your feedback!',
                                description: 'We will contact you to your email address.'
                            });
                            handleSubmit(); // Then submit the form data
                        }}>Submit</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
