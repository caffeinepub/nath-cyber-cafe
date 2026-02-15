import { useState, FormEvent } from 'react';
import { useSubmitContact, useIsContacted } from '../../hooks/useQueries';
import { Loader2, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [localSuccess, setLocalSuccess] = useState(false);

  const submitContact = useSubmitContact();
  const { data: isContacted } = useIsContacted();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !phone.trim() || !message.trim()) {
      return;
    }

    try {
      await submitContact.mutateAsync({ name, phone, message });
      setLocalSuccess(true);
      setName('');
      setPhone('');
      setMessage('');
      
      setTimeout(() => setLocalSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting contact:', error);
    }
  };

  const showSuccess = localSuccess || submitContact.isSuccess;
  const isAlreadyContacted = isContacted && !localSuccess;

  return (
    <div className="bg-card border rounded-xl p-8 shadow-sm">
      <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
      
      {isAlreadyContacted ? (
        <div className="bg-secondary/10 border border-secondary rounded-lg p-6 text-center">
          <CheckCircle className="w-12 h-12 text-secondary mx-auto mb-3" />
          <p className="text-lg font-medium">Thank you for contacting us!</p>
          <p className="text-sm text-muted-foreground mt-2">
            We have received your message and will get back to you soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone <span className="text-destructive">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your phone number"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message <span className="text-destructive">*</span>
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              className="w-full px-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              placeholder="How can we help you?"
            />
          </div>

          {submitContact.isError && (
            <div className="bg-destructive/10 border border-destructive text-destructive rounded-lg p-4 text-sm">
              {submitContact.error instanceof Error 
                ? submitContact.error.message 
                : 'Failed to send message. Please try again.'}
            </div>
          )}

          {showSuccess && (
            <div className="bg-secondary/10 border border-secondary text-secondary rounded-lg p-4 text-sm flex items-center gap-2">
              <CheckCircle size={18} />
              Message sent successfully! We'll contact you soon.
            </div>
          )}

          <button
            type="submit"
            disabled={submitContact.isPending}
            className="w-full inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-all shadow-royal disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitContact.isPending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      )}
    </div>
  );
}
