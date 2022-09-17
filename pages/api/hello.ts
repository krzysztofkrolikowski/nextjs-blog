// They can be deployed as Serverless Functions (also known as Lambdas).

// req: http.IncomingMessage
// https://nodejs.org/api/http.html#http_class_http_incomingmessage

// res: http.ServerResponse
// https://nodejs.org/api/http.html#http_class_http_serverresponse
import {NextApiRequest, NextApiResponse} from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({text: 'Hello'})
}
