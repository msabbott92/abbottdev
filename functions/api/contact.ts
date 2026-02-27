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

export const onRequestPost: PagesFunction = async (context) => {
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

    // TODO: Wire up email delivery (Resend, SendGrid, Cloudflare Email Workers, etc.)
    // Example with Resend:
    //
    // const resendApiKey = context.env.RESEND_API_KEY;
    // await fetch('https://api.resend.com/emails', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${resendApiKey}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     from: 'contact@abbottdev.ai',
    //     to: 'matthew@abbottendeavors.com',
    //     subject: `New inquiry from ${body.name} — ${body.projectType}`,
    //     text: `Name: ${body.name}\nEmail: ${body.email}\nType: ${body.projectType}\n\n${body.message}`,
    //   }),
    // });

    console.log('Contact form submission:', {
      name: body.name,
      email: body.email,
      projectType: body.projectType,
      messageLength: body.message!.length,
    });

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
