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
import { ChannelType } from "@spacebar/schemas";

const PermissionOverwriteSchema = z.object({
    id: z.string(),
    type: z.number(),
    allow: z.string(),
    deny: z.string(),
});

const TagCreateBaseSchema = z.object({
    name: z.string(),
    moderated: z.boolean().optional(),
    emoji_id: z.string().nullable().optional(),
    emoji_name: z.string().nullable().optional(),
});

export const ChannelModifySchema = z.object({
    name: z.string().optional(),
    type: z.enum(ChannelType).optional(),
    topic: z.string().optional(),
    icon: z.string().nullable().optional(),
    bitrate: z.number().optional(),
    user_limit: z.number().optional(),
    rate_limit_per_user: z.number().optional(),
    position: z.number().optional(),
    invitable: z.boolean().optional(),
    permission_overwrites: z.array(PermissionOverwriteSchema).optional(),
    applied_tags: z.array(z.string()).optional(),
    parent_id: z.string().optional(),
    id: z.string().optional(),
    nsfw: z.boolean().optional(),
    rtc_region: z.string().optional(),
    default_auto_archive_duration: z.number().optional(),
    default_reaction_emoji: z.string().nullable().optional(),
    flags: z.number().optional(),
    default_thread_rate_limit_per_user: z.number().optional(),
    video_quality_mode: z.number().optional(),
    auto_archive_duration: z.number().optional(),
    archived: z.boolean().optional(),
    locked: z.boolean().optional(),
    available_tags: z.array(TagCreateBaseSchema.extend({ id: z.string() })).optional(),
});

export type ChannelModifySchema = z.infer<typeof ChannelModifySchema>;
