export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type RoleEntity = {
  __typename?: "RoleEntity";
  id: Scalars["ID"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
};

export type UserEntity = {
  __typename?: "UserEntity";
  id: Scalars["ID"];
  email: Scalars["String"];
  firstName?: Maybe<Scalars["String"]>;
  middleName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  phoneNumber?: Maybe<Scalars["String"]>;
  active: Scalars["Boolean"];
  role?: Maybe<RoleEntity>;
};

export type UserModel = {
  __typename?: "UserModel";
  token: Scalars["String"];
  email: Scalars["String"];
  firstName?: Maybe<Scalars["String"]>;
  middleName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  phoneNumber?: Maybe<Scalars["String"]>;
  profilePicturePath?: Maybe<Scalars["String"]>;
};

export type FormulaEntity = {
  __typename?: "FormulaEntity";
  id: Scalars["ID"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
};

export type TypeEntity = {
  __typename?: "TypeEntity";
  id: Scalars["ID"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  relevance?: Maybe<Scalars["Float"]>;
};

export type ScaleTypeEntity = {
  __typename?: "ScaleTypeEntity";
  id: Scalars["ID"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  relevance?: Maybe<Scalars["Float"]>;
};

export type ScaleEntity = {
  __typename?: "ScaleEntity";
  id: Scalars["ID"];
  name: Scalars["String"];
  scaleType: ScaleTypeEntity;
  scaleValues?: Maybe<Array<ScaleValueEntity>>;
  isDefault: Scalars["Boolean"];
};

export type ScaleValueEntity = {
  __typename?: "ScaleValueEntity";
  id: Scalars["ID"];
  name: Scalars["String"];
  value: Scalars["Float"];
  scaleId: Scalars["Float"];
  defaultValue?: Maybe<Scalars["Float"]>;
  formula?: Maybe<FormulaEntity>;
};

export type RelationTypeEntity = {
  __typename?: "RelationTypeEntity";
  id: Scalars["ID"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  relevance?: Maybe<Scalars["Float"]>;
};

export type MeasurementTypeEntity = {
  __typename?: "MeasurementTypeEntity";
  id: Scalars["ID"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  relevance?: Maybe<Scalars["Float"]>;
};

export type MeasurementEntity = {
  __typename?: "MeasurementEntity";
  id: Scalars["ID"];
  sourceEntity: UnitEntity;
  measuredEntity: UnitEntity;
  scale: ScaleEntity;
  measurementCategory: MeasurementCategory;
  measurementType: MeasurementTypeEntity;
  measuredValue: Scalars["Float"];
  measuredOn: Scalars["DateTime"];
  standardizedValue?: Maybe<Scalars["Float"]>;
  quality?: Maybe<Scalars["Float"]>;
  groupingKey?: Maybe<Scalars["String"]>;
};

/** Measurement has the following categories: Assessment, Endorsement and Self-Assigned */
export enum MeasurementCategory {
  Assessment = "ASSESSMENT",
  Endorsement = "ENDORSEMENT",
  Selfassigned = "SELFASSIGNED",
}

export type IndicatorTypeEntity = {
  __typename?: "IndicatorTypeEntity";
  id: Scalars["ID"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  relevance?: Maybe<Scalars["Float"]>;
};

export type IndicatorEntity = {
  __typename?: "IndicatorEntity";
  id: Scalars["ID"];
  name: Scalars["String"];
  indicatorType: IndicatorTypeEntity;
  scaleType?: Maybe<ScaleTypeEntity>;
  indicatorCategory: IndicatorCategory;
  futureRelevance?: Maybe<Scalars["Float"]>;
  measuredValue?: Maybe<Scalars["Float"]>;
};

/** Indicator has the following categories: SKILL, CHARACTERISTIC and PREFERENCE */
export enum IndicatorCategory {
  Skill = "SKILL",
  Characteristic = "CHARACTERISTIC",
  Preference = "PREFERENCE",
}

export type UnitTypeEntity = {
  __typename?: "UnitTypeEntity";
  id: Scalars["ID"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  relevance?: Maybe<Scalars["Float"]>;
};

export type UnitEntity = {
  __typename?: "UnitEntity";
  id: Scalars["ID"];
  name: Scalars["String"];
  key: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  unitType: UnitTypeEntity;
  quality?: Maybe<Scalars["Float"]>;
  measurementCount?: Maybe<Scalars["Float"]>;
  indicatorCount?: Maybe<Scalars["Float"]>;
};

export type RelationEntity = {
  __typename?: "RelationEntity";
  id: Scalars["ID"];
  fromUnit: UnitEntity;
  fromType: RelationTypeEntity;
  fromRating?: Maybe<Scalars["Float"]>;
  toUnit: UnitEntity;
  toType: RelationTypeEntity;
  toRating?: Maybe<Scalars["Float"]>;
  involvedUnit?: Maybe<UnitEntity>;
  involvedType?: Maybe<RelationTypeEntity>;
  involvedRating?: Maybe<Scalars["Float"]>;
  startedOn: Scalars["DateTime"];
  endedOn?: Maybe<Scalars["DateTime"]>;
};

export type UnitIndicatorModel = {
  __typename?: "UnitIndicatorModel";
  indicatorId: Scalars["ID"];
  unitId: Scalars["ID"];
  indicatorName: Scalars["String"];
  indicatorTypeName: Scalars["String"];
  scaleTypeName?: Maybe<Scalars["String"]>;
  indicatorCategory: IndicatorCategory;
  indicatorFutureRelevance?: Maybe<Scalars["Float"]>;
  indicatorValue?: Maybe<Scalars["Float"]>;
  ranking?: Maybe<Scalars["Float"]>;
  unitIndicatorrelevance?: Maybe<Scalars["Float"]>;
};

export type Query = {
  __typename?: "Query";
  userFind: Array<UserEntity>;
  roleFind: Array<RoleEntity>;
  me: UserEntity;
  formulaFind: Array<FormulaEntity>;
  scaleTypeFind: Array<ScaleTypeEntity>;
  scaleFind: Array<ScaleEntity>;
  scaleValueFind: Array<ScaleValueEntity>;
  relationTypeFind: Array<TypeEntity>;
  relationFind: Array<RelationEntity>;
  unitTypeFind: Array<TypeEntity>;
  unitFind: Array<UnitEntity>;
  indicatorFind: Array<IndicatorEntity>;
  indicatorFindByEntityKey: Array<UnitIndicatorModel>;
  indicatorTypeFind: Array<TypeEntity>;
  measurementFind: Array<MeasurementEntity>;
  measurementTypeFind: Array<MeasurementTypeEntity>;
};

export type QueryUserFindArgs = {
  active?: Maybe<Scalars["Boolean"]>;
  confirmed?: Maybe<Scalars["Boolean"]>;
  entityKey?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Float"]>;
};

export type QueryRoleFindArgs = {
  description?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Float"]>;
};

export type QueryFormulaFindArgs = {
  description?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type QueryScaleFindArgs = {
  isDefault?: Maybe<Scalars["Boolean"]>;
  scaleTypeName?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Float"]>;
};

export type QueryScaleValueFindArgs = {
  formulaName?: Maybe<Scalars["String"]>;
  scaleName?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Float"]>;
};

export type QueryRelationFindArgs = {
  relationActiveOn?: Maybe<Scalars["DateTime"]>;
  involvedRelationTypeName?: Maybe<Scalars["String"]>;
  involvedUnitKey?: Maybe<Scalars["String"]>;
  toRelationTypeName?: Maybe<Scalars["String"]>;
  toUnitKey?: Maybe<Scalars["String"]>;
  fromRelationTypeName?: Maybe<Scalars["String"]>;
  fromUnitKey?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Float"]>;
};

export type QueryUnitFindArgs = {
  relationQuery?: Maybe<RelationQuery>;
  indicatorName?: Maybe<Scalars["String"]>;
  locationKey?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  userEmail?: Maybe<Scalars["String"]>;
  unitTypeName?: Maybe<Scalars["String"]>;
  key?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Float"]>;
};

export type QueryIndicatorFindArgs = {
  indicatorCategory?: Maybe<Scalars["String"]>;
  scaleTypeName?: Maybe<Scalars["String"]>;
  indicatorTypeName?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Float"]>;
};

export type QueryIndicatorFindByEntityKeyArgs = {
  amount?: Maybe<Scalars["Float"]>;
  loadingType: Scalars["String"];
  entityKey: Scalars["String"];
};

export type QueryMeasurementFindArgs = {
  measurementDateTo?: Maybe<Scalars["DateTime"]>;
  measurementDateFrom?: Maybe<Scalars["DateTime"]>;
  groupingKey?: Maybe<Scalars["String"]>;
  measurementCategory?: Maybe<Scalars["String"]>;
  measurementTypeName?: Maybe<Scalars["String"]>;
  scaleName?: Maybe<Scalars["String"]>;
  indicatorName?: Maybe<Scalars["String"]>;
  measuredEntityKey?: Maybe<Scalars["String"]>;
  sourceEntityKey?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Float"]>;
};

export type RelationQuery = {
  relationRole: RelationRole;
  fromUnitKey?: Maybe<Scalars["String"]>;
  fromRelationTypeName?: Maybe<Scalars["String"]>;
  toUnitKey?: Maybe<Scalars["String"]>;
  toRelationTypeName?: Maybe<Scalars["String"]>;
  involvedUnitKey?: Maybe<Scalars["String"]>;
  involvedRelationTypeName?: Maybe<Scalars["String"]>;
  relationFromDate?: Maybe<Scalars["DateTime"]>;
  relationToDate?: Maybe<Scalars["DateTime"]>;
  relationPeriodCompletlyWithinRequestedTimeFrame?: Maybe<Scalars["Boolean"]>;
  recursivelyFindSpecifiedRelatedType?: Maybe<Scalars["Boolean"]>;
};

export enum RelationRole {
  From = "FROM",
  To = "TO",
  Involved = "INVOLVED",
}

export type Mutation = {
  __typename?: "Mutation";
  userRegister: UserModel;
  userConfirm: Scalars["Boolean"];
  userLogin: UserModel;
  userLogout: Scalars["Boolean"];
  userForgotPassword: Scalars["Boolean"];
  userUpdate?: Maybe<UserEntity>;
  userDelete: Scalars["Boolean"];
  userGrantRole: UserEntity;
  userRevokeRole: UserEntity;
  roleCreate: RoleEntity;
  roleUpdate?: Maybe<RoleEntity>;
  roleDelete: Scalars["Boolean"];
  meAddProfilePicture: Scalars["Boolean"];
  meUpdate?: Maybe<UserEntity>;
  meDelete: Scalars["Boolean"];
  formulaCreate: FormulaEntity;
  formulaDelete: Scalars["Boolean"];
  formulaUpdate: FormulaEntity;
  scaleTypeCreate: ScaleTypeEntity;
  scaleTypeDelete: Scalars["Boolean"];
  scaleCreate: ScaleEntity;
  scaleDelete: Scalars["Boolean"];
  scaleValueCreate: ScaleValueEntity;
  scaleValueDelete: Scalars["Boolean"];
  relationTypeCreate: TypeEntity;
  relationTypeDelete: Scalars["Boolean"];
  relationCreate: RelationEntity;
  relationDelete: Scalars["Boolean"];
  relationUpdate: RelationEntity;
  unitTypeCreate: TypeEntity;
  unitTypeDelete: Scalars["Boolean"];
  unitCreate: UnitEntity;
  unitDelete: Scalars["Boolean"];
  unitUpdate: UnitEntity;
  indicatorCreate: IndicatorEntity;
  indicatorDelete: Scalars["Boolean"];
  indicatorUpdate: IndicatorEntity;
  indicatorTypeCreate: TypeEntity;
  indicatorTypeDelete: Scalars["Boolean"];
  measurementCreate: MeasurementEntity;
  measurementDelete: Scalars["Boolean"];
  measurementUpdate: MeasurementEntity;
  measurementTypeCreate: MeasurementTypeEntity;
  measurementTypeDelete: Scalars["Boolean"];
};

export type MutationUserRegisterArgs = {
  registerInput: RegisterInput;
};

export type MutationUserConfirmArgs = {
  token: Scalars["String"];
};

export type MutationUserLoginArgs = {
  loginInput: LoginInput;
};

export type MutationUserForgotPasswordArgs = {
  email: Scalars["String"];
};

export type MutationUserUpdateArgs = {
  data: UserInput;
  email: Scalars["String"];
};

export type MutationUserDeleteArgs = {
  id: Scalars["Float"];
};

export type MutationUserGrantRoleArgs = {
  roleName: Scalars["String"];
  id: Scalars["Float"];
};

export type MutationUserRevokeRoleArgs = {
  id: Scalars["Float"];
};

export type MutationRoleCreateArgs = {
  data: RoleInput;
};

export type MutationRoleUpdateArgs = {
  role: RoleInput;
  id: Scalars["Float"];
};

export type MutationRoleDeleteArgs = {
  id: Scalars["Float"];
};

export type MutationMeAddProfilePictureArgs = {
  picture: Scalars["Upload"];
};

export type MutationMeUpdateArgs = {
  data: UserInput;
};

export type MutationFormulaCreateArgs = {
  data: FormulaInput;
};

export type MutationFormulaDeleteArgs = {
  id: Scalars["Float"];
};

export type MutationFormulaUpdateArgs = {
  data: FormulaInput;
  id: Scalars["Float"];
};

export type MutationScaleTypeCreateArgs = {
  data: TypeInput;
};

export type MutationScaleTypeDeleteArgs = {
  id: Scalars["Float"];
};

export type MutationScaleCreateArgs = {
  data: ScaleInput;
};

export type MutationScaleDeleteArgs = {
  id: Scalars["Float"];
};

export type MutationScaleValueCreateArgs = {
  data: ScaleValueInput;
};

export type MutationScaleValueDeleteArgs = {
  id: Scalars["Float"];
};

export type MutationRelationTypeCreateArgs = {
  data: TypeInput;
};

export type MutationRelationTypeDeleteArgs = {
  id: Scalars["Float"];
};

export type MutationRelationCreateArgs = {
  data: RelationInput;
};

export type MutationRelationDeleteArgs = {
  id: Scalars["Float"];
};

export type MutationRelationUpdateArgs = {
  data: RelationInput;
  id: Scalars["Float"];
};

export type MutationUnitTypeCreateArgs = {
  data: TypeInput;
};

export type MutationUnitTypeDeleteArgs = {
  id: Scalars["Float"];
};

export type MutationUnitCreateArgs = {
  data: UnitInput;
};

export type MutationUnitDeleteArgs = {
  id: Scalars["Float"];
};

export type MutationUnitUpdateArgs = {
  data: UnitInput;
  id: Scalars["Float"];
};

export type MutationIndicatorCreateArgs = {
  data: IndicatorInput;
};

export type MutationIndicatorDeleteArgs = {
  id: Scalars["Float"];
};

export type MutationIndicatorUpdateArgs = {
  data: IndicatorInput;
  id: Scalars["Float"];
};

export type MutationIndicatorTypeCreateArgs = {
  data: TypeInput;
};

export type MutationIndicatorTypeDeleteArgs = {
  id: Scalars["Float"];
};

export type MutationMeasurementCreateArgs = {
  data: MeasurementInput;
};

export type MutationMeasurementDeleteArgs = {
  id: Scalars["Float"];
};

export type MutationMeasurementUpdateArgs = {
  data: MeasurementInput;
  id: Scalars["Float"];
};

export type MutationMeasurementTypeCreateArgs = {
  data: TypeInput;
};

export type MutationMeasurementTypeDeleteArgs = {
  id: Scalars["Float"];
};

export type RegisterInput = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type LoginInput = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type UserInput = {
  firstName?: Maybe<Scalars["String"]>;
  middleName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  phoneNumber?: Maybe<Scalars["String"]>;
  profilePicturePath?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
};

export type RoleInput = {
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
};

export type FormulaInput = {
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
};

export type TypeInput = {
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  relevance?: Maybe<Scalars["Float"]>;
};

export type ScaleInput = {
  name: Scalars["String"];
  type: Scalars["String"];
  scaleValues: Array<ScaleValueInput>;
  isDefault?: Maybe<Scalars["Boolean"]>;
  formulaName?: Maybe<Scalars["String"]>;
};

export type ScaleValueInput = {
  name: Scalars["String"];
  value: Scalars["Float"];
  scale: Scalars["String"];
  defaultValue?: Maybe<Scalars["Float"]>;
  formulaName?: Maybe<Scalars["String"]>;
};

export type RelationInput = {
  fromUnitKey?: Maybe<Scalars["String"]>;
  fromTypeName?: Maybe<Scalars["String"]>;
  fromRating?: Maybe<Scalars["Float"]>;
  toUnitKey?: Maybe<Scalars["String"]>;
  toTypeName?: Maybe<Scalars["String"]>;
  toRating?: Maybe<Scalars["Float"]>;
  involvedUnitKey?: Maybe<Scalars["String"]>;
  involvedTypeName?: Maybe<Scalars["String"]>;
  involvedRating?: Maybe<Scalars["Float"]>;
  startedOn?: Maybe<Scalars["DateTime"]>;
  endedOn?: Maybe<Scalars["DateTime"]>;
};

export type UnitInput = {
  name?: Maybe<Scalars["String"]>;
  parent?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  quality?: Maybe<Scalars["Float"]>;
};

export type IndicatorInput = {
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  category?: Maybe<IndicatorCategory>;
  scaleTypeName?: Maybe<Scalars["String"]>;
  futureRelevance?: Maybe<Scalars["Float"]>;
};

export type MeasurementInput = {
  sourceUnitKey?: Maybe<Scalars["String"]>;
  measuredUnitKey?: Maybe<Scalars["String"]>;
  indicatorName?: Maybe<Scalars["String"]>;
  scaleName?: Maybe<Scalars["String"]>;
  category?: Maybe<MeasurementCategory>;
  typeName?: Maybe<Scalars["String"]>;
  measuredValue?: Maybe<Scalars["Float"]>;
  measuredOn?: Maybe<Scalars["DateTime"]>;
  quality?: Maybe<Scalars["Float"]>;
  groupingKey?: Maybe<Scalars["String"]>;
};
