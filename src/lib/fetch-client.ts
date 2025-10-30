import createClient from "openapi-fetch";
import type { paths } from "@/generated/openapi-schema";
import { env } from "@/lib/env";

export const fetchClient = createClient<paths>({ baseUrl: env.API_URL });
