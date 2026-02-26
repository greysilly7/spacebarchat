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

export const ConnectedAccountSchema = z.object({
    external_id: z.string(),
    user_id: z.string(),
    token_data: z.any().optional(),
    friend_sync: z.boolean().optional(),
    name: z.string(),
    revoked: z.boolean().optional(),
    show_activity: z.number().optional(),
    type: z.string(),
    verified: z.boolean().optional(),
    visibility: z.number().optional(),
    integrations: z.array(z.string()).optional(),
    metadata_: z.any().optional(),
    metadata_visibility: z.number().optional(),
    two_way_link: z.boolean().optional(),
    access_token: z.string().optional(),
});

export type ConnectedAccountSchema = z.infer<typeof ConnectedAccountSchema>;
