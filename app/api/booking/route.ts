import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, date, time, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !service || !date || !time) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Log the booking (in production, integrate with email service)
    console.log('Booking submission:', {
      name,
      email,
      phone,
      service,
      date,
      time,
      message,
      timestamp: new Date().toISOString()
    });

    // TODO: Integrate with email service and calendar
    // await sendEmail({
    //   to: 'bryanzallc@outlook.com',
    //   from: 'noreply@bryanzallc.com',
    //   subject: `New Booking Request from ${name}`,
    //   html: `
    //     <h2>New Booking Request</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Service:</strong> ${service}</p>
    //     <p><strong>Preferred Date:</strong> ${date}</p>
    //     <p><strong>Preferred Time:</strong> ${time}</p>
    //     <p><strong>Additional Details:</strong> ${message}</p>
    //   `
    // });

    return NextResponse.json(
      { success: true, message: 'Booking submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing booking:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
