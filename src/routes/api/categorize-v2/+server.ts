import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { API_KEY } from '$env/static/private'
import type { RequestHandler } from './$types';

const openai = new OpenAI({
    apiKey: API_KEY || '',
  });
 
export const config = {
    runtime: 'edge',
}

//export const runtime = 'edge'

export const POST = (async ({ request }) => {  
  // Extract the `prompt` from the body of the request
  const { prompt, model } = await request.json();

  // Request the OpenAI API for the response based on the prompt
  const response = await openai.chat.completions.create({
    model: model || 'gpt-3.5-turbo-1106',
    stream: true,
    // a precise prompt is important for the AI to reply with the correct tokens
    messages: [
      {
        role: 'user',
        content: `Can you categorize these payment transactions only to one of the listed categories
        and create a json response returning an array of objects using the following fields:
        "summary": a summary of the transaction in 1 or 2 words, most often this is the merchant name. Try to use normal sentence casing, remove things like BV or NV from merchant names)
        "category": the category you picked
        "explanation": a short explanation why you picked this category for this
        
        Additional requirements:
        - If you can, rather pick a category than chosing the category "other"

        The categories are:
        Living (this is about your house, mortgage, rent)
        Groceries (this is only related to shopping for food)
        Food (this can be eating out, takeaway, or lunch/coffee)
        Online shopping (for big online retailers where you can buy multiple types of things like books, washing machines, toys and we don't know what specific thing you bought)
        Internet, TV and phone 
        Transport (this can be parking, public transit, bike, car, petrol etc.)
        School & study
        Family (this can be stuff for your kids, daycare, family related taxes)
        Pets
        Hobby & leisure (this can be theatre,concerts but subscriptions also go in this category)
        Sports
        Income (salary, but no refunds for cloths for instance, they go with clothing category)
        Loans
        Savings and investments (this can be stocks, crypto, but also transfers to and from savings accounts)
        Taxes
        Insurances
        Clothes
        Personal care (can be stores where you buy health and care items)
        Health (can be health insurance, or health related costs like hospital, dentist, doctor)
        Presents
        Charities
        Holiday (this can be hotels, flights, car rental, but also souvenirs)
        Going out (can be bars, disco's and the likes)
        Other (if you really really have no clue at all)
        Lottery
        Credit Card
        Payment requests (for payment requests or tikkies)


        Transactions: 
        ${prompt}`
      },
    ],
    response_format: { type: "json_object" },
    max_tokens: 2000,
    temperature: 0.5, // kinda certain
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });



  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}) satisfies RequestHandler;