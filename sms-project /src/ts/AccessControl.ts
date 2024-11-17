import { BaseContent } from './BaseContent';
import { Role } from './Role';

export interface AccessControl<T extends BaseContent> {
  role: Role;
  contentType: T;
  permissions: {
    create: boolean;
    read: boolean;
    update: boolean;
    delete: boolean;
  };
}
