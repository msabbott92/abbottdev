interface ContactRequest {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const VALID_PROJECT_TYPES = ['software', 'ai', 'consulting', 'other'];

interface Env {
  RESEND_API_KEY: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };

  try {
    const body = (await context.request.json()) as Partial<ContactRequest>;

    // Validate required fields
    const errors: string[] = [];

    if (!body.name?.trim()) {
      errors.push('Name is required');
    }
    if (!body.email?.trim() || !isValidEmail(body.email)) {
      errors.push('A valid email is required');
    }
    if (!body.projectType || !VALID_PROJECT_TYPES.includes(body.projectType)) {
      errors.push('A valid project type is required');
    }
    if (!body.message?.trim()) {
      errors.push('Message is required');
    }

    if (errors.length > 0) {
      return new Response(JSON.stringify({ success: false, errors }), {
        status: 400,
        headers,
      });
    }

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${context.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: 'matthew@abbottendeavors.com',
        reply_to: body.email,
        subject: `New inquiry from ${body.name} — ${body.projectType}`,
        text: `Name: ${body.name}\nEmail: ${body.email}\nProject Type: ${body.projectType}\n\nMessage:\n${body.message}`,
      }),
    });

    if (!resendRes.ok) {
      const err = await resendRes.text();
      console.error('Resend error:', err);
      return new Response(
        JSON.stringify({ success: false, errors: ['Failed to send message. Please try again.'] }),
        { status: 500, headers }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Message received' }),
      { status: 200, headers }
    );
  } catch {
    return new Response(
      JSON.stringify({ success: false, errors: ['Invalid request'] }),
      { status: 400, headers }
    );
  }
};
