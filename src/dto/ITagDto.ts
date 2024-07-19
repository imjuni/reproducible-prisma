import type { Tag } from '@prisma/client';

/**
 * Tag Response DTO
 */
export interface ITagDto {
  id: Tag['id'];
  name: Tag['name'];
}
