import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { API_KEY } from '$env/static/private'
import type { RequestHandler } from './$types';

const openai = new OpenAI({
    apiKey: API_KEY || '',
  });
 
export const POST = (async ({ request }) => {  
  // Extract the `prompt` from the body of the request
  const { prompt } = await request.json();

  // Request the OpenAI API for the response based on the prompt
  const response = await openai.chat.completions.create({
    //model: 'gpt-4',
    model: 'gpt-3.5-turbo-1106',
    stream: true,
    // a precise prompt is important for the AI to reply with the correct tokens
    messages: [
      {
        role: 'user',
        content: `Can you categorize these payment transactions only to one of the listed categories
        and make a table out of it with the columns "summary of 1 or 2 words", "category", "short explanation
        why you picked this using a reference from the payment"? If you can, rather pick a category than chosing "other"

        The categories (in dutch) are:
        Wonen (this is about your house, mortgage, rent)
        Boodschappen (this is only related to shopping for food)
        Eten (this can be eating out, takeaway, or lunch/coffee)
        Online shopping (for big online retailers where you can buy multiple types of things like books, washing machines, toys and we don't know what specific thing you bought)
        Internet TV en telefoon (this is what it says it is)
        Vervoer (this can be parking, public transit, bike, car, petrol etc.)
        School en studie (this is clear)
        Gezin (this can be stuff for your kids, daycare, family related taxes)
        Huisdier (this is obvious)
        Hobby en vrije tijd (this can be theatre,concerts but subscriptions also go in this category)
        Sport (pretty obvious)
        Inkomsten (salary, but no refunds for cloths for instance, they go with clothing category)
        Leningen
        Bankkosten
        Belasting
        Verzekeringen
        Kleding
        Verzorging (can be stores where you buy health and care items)
        Zorg en gezondheid (can be health insurance, or health related costs like hospital, dentist, doctor)
        Cadeaus
        Goede doelen
        Vakantie
        Uitgaan (can be bars, disco's and the likes)
        Interne overboekingen (payments to your own accounts)
        Overig (if you really really have no clue at all)
        Loterij
        Credit Card
        Betaalverzoek (for payment requests or tikkies)

        Transactions: 
        ${prompt}`
      },
    ],
    //response_format: { type: "json_object" },
    max_tokens: 2000,
    temperature: 0.1, // kinda certain
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
  });



  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}) satisfies RequestHandler;