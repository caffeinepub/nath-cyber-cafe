import { useState } from 'react';
import { useSubmitContact, useIsContacted } from '../../hooks/useQueries';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Loader2, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const { data: isContacted } = useIsContacted();
  const submitContact = useSubmitContact();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !phone.trim() || !message.trim()) {
      return;
    }

    submitContact.mutate(
      { name, phone, message },
      {
        onSuccess: () => {
          setName('');
          setPhone('');
          setMessage('');
        },
      }
    );
  };

  if (isContacted) {
    return (
      <div className="bg-card border rounded-xl p-8 shadow-sm">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
            <CheckCircle className="text-primary" size={32} />
          </div>
          <h3 className="text-xl font-semibold">Thank You!</h3>
          <p className="text-muted-foreground">
            We've received your message and will get back to you soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border rounded-xl p-8 shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="Your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="How can we help you?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            required
          />
        </div>

        {submitContact.isError && (
          <div className="text-sm text-destructive">
            {submitContact.error instanceof Error
              ? submitContact.error.message
              : 'Failed to send message. Please try again.'}
          </div>
        )}

        <Button
          type="submit"
          className="w-full"
          disabled={submitContact.isPending}
        >
          {submitContact.isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </Button>
      </form>
    </div>
  );
}
