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

const ChannelOverrideSchema = z.object({
    message_notifications: z.number(),
    mute_config: z.any().nullable(),
    muted: z.boolean(),
    channel_id: z.string().nullable(),
});

export const UserGuildSettingsSchema = z.object({
    channel_overrides: z.record(z.string(), ChannelOverrideSchema).nullable().optional(),
    message_notifications: z.number().optional(),
    mobile_push: z.boolean().optional(),
    mute_config: z.any().nullable().optional(),
    muted: z.boolean().optional(),
    suppress_everyone: z.boolean().optional(),
    suppress_roles: z.boolean().optional(),
    version: z.number().optional(),
    guild_id: z.string().nullable().optional(),
    flags: z.number().optional(),
    mute_scheduled_events: z.boolean().optional(),
    hide_muted_channels: z.boolean().optional(),
    notify_highlights: z.literal(0).optional(),
});

export type UserGuildSettingsSchema = z.infer<typeof UserGuildSettingsSchema>;
