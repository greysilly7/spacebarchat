/*
    Spacebar: A FOSS re-implementation and extension of the Discord.com backend.
    Copyright (C) 2023 Spacebar and Spacebar Contributors

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { z } from "zod";

export const RegisterSchema = z.object({
    username: z.string().min(2),
    password: z.string().min(1).max(72).optional(),
    consent: z.boolean(),
    email: z.email().optional(),
    fingerprint: z.string().optional(),
    invite: z.string().optional(),
    date_of_birth: z.union([z.string(), z.date()]).optional(),
    gift_code_sku_id: z.string().optional(),
    captcha_key: z.string().optional(),
    promotional_email_opt_in: z.boolean().optional(),
    unique_username_registration: z.boolean().optional(),
    global_name: z.string().optional(),
});

export type RegisterSchema = z.infer<typeof RegisterSchema>;
