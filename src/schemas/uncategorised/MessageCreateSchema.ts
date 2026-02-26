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

export const MessageCreateAttachment = z.object({
    id: z.string(),
    filename: z.string(),
});

export const MessageCreateCloudAttachment = z.object({
    id: z.string().optional(),
    filename: z.string(),
    uploaded_filename: z.string(),
    original_content_type: z.string().optional(),
});

const AllowedMentionsSchema = z.object({
    parse: z.array(z.string()).optional(),
    roles: z.array(z.string()).optional(),
    users: z.array(z.string()).optional(),
    replied_user: z.boolean().optional(),
});

const MessageReferenceSchema = z.object({
    message_id: z.string().optional(),
    channel_id: z.string().optional(),
    guild_id: z.string().optional(),
    fail_if_not_exists: z.boolean().optional(),
    type: z.number().optional(),
});

export const PollCreationSchema = z.object({
    question: z.object({ text: z.string().optional() }),
    answers: z.array(z.object({ poll_media: z.object({ text: z.string().optional(), emoji: z.any().optional() }) })),
    duration: z.number().optional(),
    allow_multiselect: z.boolean().optional(),
    layout_type: z.number().optional(),
});

export const MessageCreateSchema = z.object({
    type: z.number().optional(),
    content: z.string().optional(),
    mobile_network_type: z.string().optional(),
    nonce: z.string().optional(),
    channel_id: z.string().optional(),
    tts: z.boolean().optional(),
    flags: z.number().optional(),
    embeds: z.array(z.any()).nullable().optional(),
    embed: z.any().nullable().optional(),
    allowed_mentions: AllowedMentionsSchema.optional(),
    message_reference: MessageReferenceSchema.optional(),
    payload_json: z.string().optional(),
    file: z.object({ filename: z.string() }).optional(),
    attachments: z.array(z.union([MessageCreateAttachment, MessageCreateCloudAttachment])).optional(),
    sticker_ids: z.array(z.string()).nullable().optional(),
    components: z.array(z.any()).nullable().optional(),
    poll: PollCreationSchema.optional(),
    enforce_nonce: z.boolean().optional(),
    applied_tags: z.array(z.string()).optional(),
    thread_name: z.string().optional(),
    avatar_url: z.string().optional(),
    interaction: z.any().optional(),
    interaction_metadata: z.any().optional(),
});

export type MessageCreateSchema = z.infer<typeof MessageCreateSchema>;
export type PollCreationSchema = z.infer<typeof PollCreationSchema>;
export type MessageCreateAttachment = z.infer<typeof MessageCreateAttachment>;
export type MessageCreateCloudAttachment = z.infer<typeof MessageCreateCloudAttachment>;
