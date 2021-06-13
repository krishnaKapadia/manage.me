/** @format */
import { createClient } from "@supabase/supabase-js";

const apiClient = createClient(
  process.env.REACT_APP_SUPABASE_API_URI,
  process.env.REACT_APP_SUPABASE_API_KEY
);

export { apiClient };
