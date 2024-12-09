import rabbit from "rabbitmq-stream-js-client"

const rabbitGlobal = globalThis as unknown as { rabbit: rabbit.Client }

export const rabbitClient = rabbitGlobal.rabbit || await rabbit.connect({
    hostname: process.env.RABBIT_HOST!,
    port: +process.env.RABBIT_PORT!,
    username: process.env.RABBIT_USERNAME!,
    password: process.env.RABBIT_PASSWORD!,
    vhost: process.env.RABBIT_VHOST!
})

if (process.env.NODE_ENV !== "production") rabbitGlobal.rabbit = rabbitClient