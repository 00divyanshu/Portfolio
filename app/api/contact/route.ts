import { NextResponse } from "next/server";

export interface ContactRequestBody {
  name: string;
  email: string;
  projectType: string;
  timeline: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json();

    const { name, email, projectType, timeline, message } = body;

    // Strict input validation
    if (!name || !name.trim()) {
      return NextResponse.json(
        { error: "Validation Error: Name or company is required." },
        { status: 400 }
      );
    }

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Validation Error: A valid email address is required." },
        { status: 400 }
      );
    }

    if (!message || message.trim().length < 5) {
      return NextResponse.json(
        { error: "Validation Error: Project objectives must be at least 5 characters." },
        { status: 400 }
      );
    }

    // Server-side logging for incoming client inquiry
    console.log("[INQUIRY_RECEIVED]", {
      timestamp: new Date().toISOString(),
      name,
      email,
      projectType: projectType || "Custom Secure RAG & Knowledge Vault",
      timeline: timeline || "Immediate",
      messageLength: message.length,
    });

    // Simulated transmission latency (300ms)
    await new Promise((resolve) => setTimeout(resolve, 300));

    return NextResponse.json(
      {
        success: true,
        message: "Project inquiry received successfully. SLA: Response within 24 hours.",
        receivedAt: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[INQUIRY_ERROR]", error);
    return NextResponse.json(
      { error: "Internal Server Error: Failed to process inquiry transmission." },
      { status: 500 }
    );
  }
}
