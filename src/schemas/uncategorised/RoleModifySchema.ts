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

export const RoleModifySchema = z.object({
    name: z.string().optional(),
    permissions: z.string().optional(),
    color: z.number().optional(),
    hoist: z.boolean().optional(),
    mentionable: z.boolean().optional(),
    position: z.number().optional(),
    icon: z.string().optional(),
    unicode_emoji: z.string().optional(),
    colors: z
        .object({
            primary_color: z.number(),
            secondary_color: z.number().nullable().optional(),
            tertiary_color: z.number().nullable().optional(),
        })
        .optional(),
});

export type RoleModifySchema = z.infer<typeof RoleModifySchema>;
