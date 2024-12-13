import { rabbitClient } from "./rabbitClient";

// Connect to stock-demand stream
export const demandPublisher = await rabbitClient.declarePublisher({ stream: "stock-demand" })