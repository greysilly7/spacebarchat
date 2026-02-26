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
import { MessageCreateAttachment, MessageCreateCloudAttachment, PollCreationSchema } from "./MessageCreateSchema";

export const WebhookExecuteSchema = z.object({
    content: z.string().optional(),
    username: z.string().optional(),
    avatar_url: z.string().optional(),
    tts: z.boolean().optional(),
    embeds: z.array(z.any()).optional(),
    allowed_mentions: z
        .object({
            parse: z.array(z.string()).optional(),
            roles: z.array(z.string()).optional(),
            users: z.array(z.string()).optional(),
            replied_user: z.boolean().optional(),
        })
        .optional(),
    components: z.array(z.any()).optional(),
    file: z.object({ filename: z.string() }).optional(),
    payload_json: z.string().optional(),
    attachments: z.array(MessageCreateAttachment).optional(),
    flags: z.number().optional(),
    thread_name: z.string().optional(),
    applied_tags: z.array(z.string()).optional(),
    message_reference: z
        .object({
            message_id: z.string(),
            channel_id: z.string().optional(),
            guild_id: z.string().optional(),
            fail_if_not_exists: z.boolean().optional(),
        })
        .optional(),
    sticker_ids: z.array(z.string()).optional(),
    nonce: z.string().optional(),
    enforce_nonce: z.boolean().optional(),
    poll: PollCreationSchema.optional(),
});

export type WebhookExecuteSchema = z.infer<typeof WebhookExecuteSchema>;
