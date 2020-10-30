declare module "*/UserAvatar.graphql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  export const GetUserAvatarInfo: DocumentNode;

  export default defaultDocument;
}

declare module "*/AuthRoute.graphql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  export const IsAuthed: DocumentNode;

  export default defaultDocument;
}

declare module "*/UserHook.graphql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  export const GetUser: DocumentNode;

  export default defaultDocument;
}

declare module "*/Login.graphql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  export const Login: DocumentNode;

  export default defaultDocument;
}

declare module "*/Entity.graphql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  export const EntityTypes: DocumentNode;
  export const EntityEditGet: DocumentNode;
  export const EditEntity: DocumentNode;

  export default defaultDocument;
}

declare module "*/EntitiesGet.graphql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  export const Entities: DocumentNode;

  export default defaultDocument;
}

declare module "*/Register.graphql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  export const Register: DocumentNode;

  export default defaultDocument;
}
