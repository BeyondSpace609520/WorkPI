import * as Types from "./schemas";

export type GetUserAvatarInfoQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type GetUserAvatarInfoQuery = { __typename?: "Query" } & {
  me: { __typename?: "UserEntity" } & Pick<
    Types.UserEntity,
    "lastName" | "firstName"
  >;
};

export type IsAuthedQueryVariables = Types.Exact<{ [key: string]: never }>;

export type IsAuthedQuery = { __typename?: "Query" } & {
  me: { __typename?: "UserEntity" } & Pick<Types.UserEntity, "active">;
};

export type GetUserQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetUserQuery = { __typename?: "Query" } & {
  me: { __typename?: "UserEntity" } & Pick<
    Types.UserEntity,
    | "id"
    | "firstName"
    | "middleName"
    | "lastName"
    | "email"
    | "phoneNumber"
    | "active"
  >;
};

export type LoginMutationVariables = Types.Exact<{
  email: Types.Scalars["String"];
  password: Types.Scalars["String"];
}>;

export type LoginMutation = { __typename?: "Mutation" } & {
  userLogin: { __typename?: "UserModel" } & Pick<Types.UserModel, "token">;
};

export type EntityTypesQueryVariables = Types.Exact<{ [key: string]: never }>;

export type EntityTypesQuery = { __typename?: "Query" } & {
  unitTypeFind: Array<
    { __typename?: "TypeEntity" } & Pick<Types.TypeEntity, "name">
  >;
};

export type EntityEditGetQueryVariables = Types.Exact<{
  id: Types.Scalars["Float"];
}>;

export type EntityEditGetQuery = { __typename?: "Query" } & {
  unitFind: Array<
    { __typename?: "UnitEntity" } & Pick<
      Types.UnitEntity,
      "name" | "description"
    > & {
        unitType: { __typename?: "UnitTypeEntity" } & Pick<
          Types.UnitTypeEntity,
          "name"
        >;
      }
  >;
};

export type EditEntityMutationVariables = Types.Exact<{
  id: Types.Scalars["Float"];
  data: Types.UnitInput;
}>;

export type EditEntityMutation = { __typename?: "Mutation" } & {
  unitUpdate: { __typename?: "UnitEntity" } & Pick<
    Types.UnitEntity,
    "name" | "description"
  > & {
      unitType: { __typename?: "UnitTypeEntity" } & Pick<
        Types.UnitTypeEntity,
        "name"
      >;
    };
};

export type EntitiesQueryVariables = Types.Exact<{ [key: string]: never }>;

export type EntitiesQuery = { __typename?: "Query" } & {
  unitFind: Array<
    { __typename?: "UnitEntity" } & Pick<
      Types.UnitEntity,
      | "id"
      | "name"
      | "key"
      | "description"
      | "indicatorCount"
      | "measurementCount"
    > & {
        unitType: { __typename?: "UnitTypeEntity" } & Pick<
          Types.UnitTypeEntity,
          "name"
        >;
      }
  >;
};

export type RegisterMutationVariables = Types.Exact<{
  reg: Types.RegisterInput;
}>;

export type RegisterMutation = { __typename?: "Mutation" } & {
  userRegister: { __typename?: "UserModel" } & Pick<Types.UserModel, "email">;
};
