//import {openai_key} from './constant'
//import OpenAI from 'openai';

//const openAI = new OpenAI({
 // apiKey: openai_key, 
  //dangerouslyAllowBrowser: true 
//});

//export default openAI;


import { GoogleGenerativeAI } from "@google/generative-ai";
import { openai_key } from "./constant"; 

const genAI = new GoogleGenerativeAI(openai_key);

const geminiai = () => {
  return genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); 
};

export default geminiai;