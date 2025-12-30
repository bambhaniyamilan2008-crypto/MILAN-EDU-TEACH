// @ts-nocheck
'use server';

import { aiChatTutorStudentQueries } from '@/ai/flows/ai-chat-tutor-student-queries';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';

const MessageSchema = z.object({
  question: z.string().min(1, { message: 'Message cannot be empty.' }),
});


export async function getAIResponse(prevState: any, formData: FormData) {
  const validatedFields = MessageSchema.safeParse({
    question: formData.get('question'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Message cannot be empty.',
    };
  }

  const { question } = validatedFields.data;

  try {
    const result = await aiChatTutorStudentQueries({ question });
    return { success: true, answer: result.answer, question };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Failed to get a response from the AI tutor.' };
  }
}
