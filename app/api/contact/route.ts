import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const formdata = await request.json()

    const result = await resend.emails.send({
       from: 'onboarding@resend.dev',
       to: 'ademayo234@gmail.com',
       replyTo: formdata.email,
       subject: `New inquiry from ${formdata.fullName}`,
       html: `<p>Company: ${formdata.companyName} Phone-Number: ${formdata.number}</p><p>Interested in ${formdata.interest}</p><p>${formdata.message}</p>`
    })

    if (!result.error) {
        return Response.json({ success: true })
    } else {
        return Response.json({ message: "something went wrong please try again" })
    }

    
}