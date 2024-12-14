import { AMQPChannel, AMQPClient } from "@cloudamqp/amqp-client";
import { AMQPBaseClient } from "@cloudamqp/amqp-client/amqp-base-client";

const globalForAMQP = globalThis as unknown as { amqp: AMQPBaseClient, demandChannel: AMQPChannel }

const amqp = globalForAMQP.amqp || (new AMQPClient(process.env.RABBIT_SERVICE_URI!))
const connection = await amqp.connect()
export const demandChannel = globalForAMQP.demandChannel || await connection.channel()

if (process.env.NODE_ENV !== "production") globalForAMQP.amqp = amqp