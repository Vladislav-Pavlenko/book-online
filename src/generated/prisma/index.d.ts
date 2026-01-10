/**
 * Client
 **/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Book
 *
 */
export type Book = $Result.DefaultSelection<Prisma.$BookPayload>;
/**
 * Model Author
 *
 */
export type Author = $Result.DefaultSelection<Prisma.$AuthorPayload>;
/**
 * Model BookAuthor
 *
 */
export type BookAuthor = $Result.DefaultSelection<Prisma.$BookAuthorPayload>;
/**
 * Model Category
 *
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>;
/**
 * Model BookCategory
 *
 */
export type BookCategory =
  $Result.DefaultSelection<Prisma.$BookCategoryPayload>;
/**
 * Model Comment
 *
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>;
/**
 * Model Like
 *
 */
export type Like = $Result.DefaultSelection<Prisma.$LikePayload>;
/**
 * Model Favorite
 *
 */
export type Favorite = $Result.DefaultSelection<Prisma.$FavoritePayload>;
/**
 * Model ReadingProgress
 *
 */
export type ReadingProgress =
  $Result.DefaultSelection<Prisma.$ReadingProgressPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
    MALE: 'MALE';
    FEMALE: 'FEMALE';
    OTHER: 'OTHER';
  };

  export type Gender = (typeof Gender)[keyof typeof Gender];
}

export type Gender = $Enums.Gender;

export const Gender: typeof $Enums.Gender;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const user = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const user = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent
    ) => void
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel }
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    }
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const user = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.book`: Exposes CRUD operations for the **Book** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Books
   * const books = await prisma.book.findMany()
   * ```
   */
  get book(): Prisma.BookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.author`: Exposes CRUD operations for the **Author** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Authors
   * const authors = await prisma.author.findMany()
   * ```
   */
  get author(): Prisma.AuthorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookAuthor`: Exposes CRUD operations for the **BookAuthor** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more BookAuthors
   * const bookAuthors = await prisma.bookAuthor.findMany()
   * ```
   */
  get bookAuthor(): Prisma.BookAuthorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
   * ```
   */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookCategory`: Exposes CRUD operations for the **BookCategory** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more BookCategories
   * const bookCategories = await prisma.bookCategory.findMany()
   * ```
   */
  get bookCategory(): Prisma.BookCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Comments
   * const comments = await prisma.comment.findMany()
   * ```
   */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.like`: Exposes CRUD operations for the **Like** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Likes
   * const likes = await prisma.like.findMany()
   * ```
   */
  get like(): Prisma.LikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favorite`: Exposes CRUD operations for the **Favorite** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Favorites
   * const favorites = await prisma.favorite.findMany()
   * ```
   */
  get favorite(): Prisma.FavoriteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.readingProgress`: Exposes CRUD operations for the **ReadingProgress** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more ReadingProgresses
   * const readingProgresses = await prisma.readingProgress.findMany()
   * ```
   */
  get readingProgress(): Prisma.ReadingProgressDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string;
    engine: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import Bytes = runtime.Bytes;
  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: 'User';
    Book: 'Book';
    Author: 'Author';
    BookAuthor: 'BookAuthor';
    Category: 'Category';
    BookCategory: 'BookCategory';
    Comment: 'Comment';
    Like: 'Like';
    Favorite: 'Favorite';
    ReadingProgress: 'ReadingProgress';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<
    { extArgs: $Extensions.InternalArgs },
    $Utils.Record<string, any>
  > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | 'user'
        | 'book'
        | 'author'
        | 'bookAuthor'
        | 'category'
        | 'bookCategory'
        | 'comment'
        | 'like'
        | 'favorite'
        | 'readingProgress';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Book: {
        payload: Prisma.$BookPayload<ExtArgs>;
        fields: Prisma.BookFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.BookFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.BookFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookPayload>;
          };
          findFirst: {
            args: Prisma.BookFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.BookFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookPayload>;
          };
          findMany: {
            args: Prisma.BookFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[];
          };
          create: {
            args: Prisma.BookCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookPayload>;
          };
          createMany: {
            args: Prisma.BookCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.BookCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[];
          };
          delete: {
            args: Prisma.BookDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookPayload>;
          };
          update: {
            args: Prisma.BookUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookPayload>;
          };
          deleteMany: {
            args: Prisma.BookDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.BookUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.BookUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[];
          };
          upsert: {
            args: Prisma.BookUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookPayload>;
          };
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBook>;
          };
          groupBy: {
            args: Prisma.BookGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BookGroupByOutputType>[];
          };
          count: {
            args: Prisma.BookCountArgs<ExtArgs>;
            result: $Utils.Optional<BookCountAggregateOutputType> | number;
          };
        };
      };
      Author: {
        payload: Prisma.$AuthorPayload<ExtArgs>;
        fields: Prisma.AuthorFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AuthorFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AuthorFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>;
          };
          findFirst: {
            args: Prisma.AuthorFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AuthorFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>;
          };
          findMany: {
            args: Prisma.AuthorFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[];
          };
          create: {
            args: Prisma.AuthorCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>;
          };
          createMany: {
            args: Prisma.AuthorCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.AuthorCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[];
          };
          delete: {
            args: Prisma.AuthorDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>;
          };
          update: {
            args: Prisma.AuthorUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>;
          };
          deleteMany: {
            args: Prisma.AuthorDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.AuthorUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.AuthorUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[];
          };
          upsert: {
            args: Prisma.AuthorUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>;
          };
          aggregate: {
            args: Prisma.AuthorAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAuthor>;
          };
          groupBy: {
            args: Prisma.AuthorGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AuthorGroupByOutputType>[];
          };
          count: {
            args: Prisma.AuthorCountArgs<ExtArgs>;
            result: $Utils.Optional<AuthorCountAggregateOutputType> | number;
          };
        };
      };
      BookAuthor: {
        payload: Prisma.$BookAuthorPayload<ExtArgs>;
        fields: Prisma.BookAuthorFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.BookAuthorFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.BookAuthorFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload>;
          };
          findFirst: {
            args: Prisma.BookAuthorFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.BookAuthorFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload>;
          };
          findMany: {
            args: Prisma.BookAuthorFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload>[];
          };
          create: {
            args: Prisma.BookAuthorCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload>;
          };
          createMany: {
            args: Prisma.BookAuthorCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.BookAuthorCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload>[];
          };
          delete: {
            args: Prisma.BookAuthorDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload>;
          };
          update: {
            args: Prisma.BookAuthorUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload>;
          };
          deleteMany: {
            args: Prisma.BookAuthorDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.BookAuthorUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.BookAuthorUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload>[];
          };
          upsert: {
            args: Prisma.BookAuthorUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload>;
          };
          aggregate: {
            args: Prisma.BookAuthorAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBookAuthor>;
          };
          groupBy: {
            args: Prisma.BookAuthorGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BookAuthorGroupByOutputType>[];
          };
          count: {
            args: Prisma.BookAuthorCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<BookAuthorCountAggregateOutputType>
              | number;
          };
        };
      };
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>;
        fields: Prisma.CategoryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[];
          };
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[];
          };
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[];
          };
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCategory>;
          };
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CategoryGroupByOutputType>[];
          };
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>;
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number;
          };
        };
      };
      BookCategory: {
        payload: Prisma.$BookCategoryPayload<ExtArgs>;
        fields: Prisma.BookCategoryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.BookCategoryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookCategoryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.BookCategoryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookCategoryPayload>;
          };
          findFirst: {
            args: Prisma.BookCategoryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookCategoryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.BookCategoryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookCategoryPayload>;
          };
          findMany: {
            args: Prisma.BookCategoryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookCategoryPayload>[];
          };
          create: {
            args: Prisma.BookCategoryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookCategoryPayload>;
          };
          createMany: {
            args: Prisma.BookCategoryCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.BookCategoryCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookCategoryPayload>[];
          };
          delete: {
            args: Prisma.BookCategoryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookCategoryPayload>;
          };
          update: {
            args: Prisma.BookCategoryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookCategoryPayload>;
          };
          deleteMany: {
            args: Prisma.BookCategoryDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.BookCategoryUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.BookCategoryUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookCategoryPayload>[];
          };
          upsert: {
            args: Prisma.BookCategoryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookCategoryPayload>;
          };
          aggregate: {
            args: Prisma.BookCategoryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBookCategory>;
          };
          groupBy: {
            args: Prisma.BookCategoryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BookCategoryGroupByOutputType>[];
          };
          count: {
            args: Prisma.BookCategoryCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<BookCategoryCountAggregateOutputType>
              | number;
          };
        };
      };
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>;
        fields: Prisma.CommentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[];
          };
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[];
          };
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[];
          };
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateComment>;
          };
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CommentGroupByOutputType>[];
          };
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>;
            result: $Utils.Optional<CommentCountAggregateOutputType> | number;
          };
        };
      };
      Like: {
        payload: Prisma.$LikePayload<ExtArgs>;
        fields: Prisma.LikeFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.LikeFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.LikeFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LikePayload>;
          };
          findFirst: {
            args: Prisma.LikeFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.LikeFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LikePayload>;
          };
          findMany: {
            args: Prisma.LikeFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[];
          };
          create: {
            args: Prisma.LikeCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LikePayload>;
          };
          createMany: {
            args: Prisma.LikeCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.LikeCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[];
          };
          delete: {
            args: Prisma.LikeDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LikePayload>;
          };
          update: {
            args: Prisma.LikeUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LikePayload>;
          };
          deleteMany: {
            args: Prisma.LikeDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.LikeUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.LikeUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[];
          };
          upsert: {
            args: Prisma.LikeUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LikePayload>;
          };
          aggregate: {
            args: Prisma.LikeAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateLike>;
          };
          groupBy: {
            args: Prisma.LikeGroupByArgs<ExtArgs>;
            result: $Utils.Optional<LikeGroupByOutputType>[];
          };
          count: {
            args: Prisma.LikeCountArgs<ExtArgs>;
            result: $Utils.Optional<LikeCountAggregateOutputType> | number;
          };
        };
      };
      Favorite: {
        payload: Prisma.$FavoritePayload<ExtArgs>;
        fields: Prisma.FavoriteFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.FavoriteFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.FavoriteFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>;
          };
          findFirst: {
            args: Prisma.FavoriteFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.FavoriteFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>;
          };
          findMany: {
            args: Prisma.FavoriteFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[];
          };
          create: {
            args: Prisma.FavoriteCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>;
          };
          createMany: {
            args: Prisma.FavoriteCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.FavoriteCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[];
          };
          delete: {
            args: Prisma.FavoriteDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>;
          };
          update: {
            args: Prisma.FavoriteUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>;
          };
          deleteMany: {
            args: Prisma.FavoriteDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.FavoriteUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.FavoriteUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[];
          };
          upsert: {
            args: Prisma.FavoriteUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>;
          };
          aggregate: {
            args: Prisma.FavoriteAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateFavorite>;
          };
          groupBy: {
            args: Prisma.FavoriteGroupByArgs<ExtArgs>;
            result: $Utils.Optional<FavoriteGroupByOutputType>[];
          };
          count: {
            args: Prisma.FavoriteCountArgs<ExtArgs>;
            result: $Utils.Optional<FavoriteCountAggregateOutputType> | number;
          };
        };
      };
      ReadingProgress: {
        payload: Prisma.$ReadingProgressPayload<ExtArgs>;
        fields: Prisma.ReadingProgressFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ReadingProgressFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReadingProgressPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ReadingProgressFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReadingProgressPayload>;
          };
          findFirst: {
            args: Prisma.ReadingProgressFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReadingProgressPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ReadingProgressFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReadingProgressPayload>;
          };
          findMany: {
            args: Prisma.ReadingProgressFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReadingProgressPayload>[];
          };
          create: {
            args: Prisma.ReadingProgressCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReadingProgressPayload>;
          };
          createMany: {
            args: Prisma.ReadingProgressCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ReadingProgressCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReadingProgressPayload>[];
          };
          delete: {
            args: Prisma.ReadingProgressDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReadingProgressPayload>;
          };
          update: {
            args: Prisma.ReadingProgressUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReadingProgressPayload>;
          };
          deleteMany: {
            args: Prisma.ReadingProgressDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ReadingProgressUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ReadingProgressUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReadingProgressPayload>[];
          };
          upsert: {
            args: Prisma.ReadingProgressUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReadingProgressPayload>;
          };
          aggregate: {
            args: Prisma.ReadingProgressAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateReadingProgress>;
          };
          groupBy: {
            args: Prisma.ReadingProgressGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ReadingProgressGroupByOutputType>[];
          };
          count: {
            args: Prisma.ReadingProgressCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<ReadingProgressCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory;
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string;
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
  }
  export type GlobalOmitConfig = {
    user?: UserOmit;
    book?: BookOmit;
    author?: AuthorOmit;
    bookAuthor?: BookAuthorOmit;
    category?: CategoryOmit;
    bookCategory?: BookCategoryOmit;
    comment?: CommentOmit;
    like?: LikeOmit;
    favorite?: FavoriteOmit;
    readingProgress?: ReadingProgressOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    comments: number;
    favorites: number;
    likes: number;
    addedBooks: number;
    readingProgress: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    comments?: boolean | UserCountOutputTypeCountCommentsArgs;
    favorites?: boolean | UserCountOutputTypeCountFavoritesArgs;
    likes?: boolean | UserCountOutputTypeCountLikesArgs;
    addedBooks?: boolean | UserCountOutputTypeCountAddedBooksArgs;
    readingProgress?: boolean | UserCountOutputTypeCountReadingProgressArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CommentWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoritesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FavoriteWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: LikeWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAddedBooksArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: BookWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReadingProgressArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ReadingProgressWhereInput;
  };

  /**
   * Count Type BookCountOutputType
   */

  export type BookCountOutputType = {
    authors: number;
    categories: number;
    comments: number;
    likes: number;
    favorites: number;
    readingProgress: number;
  };

  export type BookCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    authors?: boolean | BookCountOutputTypeCountAuthorsArgs;
    categories?: boolean | BookCountOutputTypeCountCategoriesArgs;
    comments?: boolean | BookCountOutputTypeCountCommentsArgs;
    likes?: boolean | BookCountOutputTypeCountLikesArgs;
    favorites?: boolean | BookCountOutputTypeCountFavoritesArgs;
    readingProgress?: boolean | BookCountOutputTypeCountReadingProgressArgs;
  };

  // Custom InputTypes
  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     */
    select?: BookCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountAuthorsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: BookAuthorWhereInput;
  };

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountCategoriesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: BookCategoryWhereInput;
  };

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountCommentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CommentWhereInput;
  };

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountLikesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: LikeWhereInput;
  };

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountFavoritesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FavoriteWhereInput;
  };

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountReadingProgressArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ReadingProgressWhereInput;
  };

  /**
   * Count Type AuthorCountOutputType
   */

  export type AuthorCountOutputType = {
    books: number;
  };

  export type AuthorCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    books?: boolean | AuthorCountOutputTypeCountBooksArgs;
  };

  // Custom InputTypes
  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuthorCountOutputType
     */
    select?: AuthorCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeCountBooksArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: BookAuthorWhereInput;
  };

  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    books: number;
  };

  export type CategoryCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    books?: boolean | CategoryCountOutputTypeCountBooksArgs;
  };

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountBooksArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: BookCategoryWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    password: string | null;
    fullName: string | null;
    gender: $Enums.Gender | null;
    birthDate: Date | null;
    avatarUrl: string | null;
    resetToken: string | null;
    resetTokenExpiry: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    password: string | null;
    fullName: string | null;
    gender: $Enums.Gender | null;
    birthDate: Date | null;
    avatarUrl: string | null;
    resetToken: string | null;
    resetTokenExpiry: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    password: number;
    fullName: number;
    gender: number;
    birthDate: number;
    avatarUrl: number;
    resetToken: number;
    resetTokenExpiry: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    fullName?: true;
    gender?: true;
    birthDate?: true;
    avatarUrl?: true;
    resetToken?: true;
    resetTokenExpiry?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    fullName?: true;
    gender?: true;
    birthDate?: true;
    avatarUrl?: true;
    resetToken?: true;
    resetTokenExpiry?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    fullName?: true;
    gender?: true;
    birthDate?: true;
    avatarUrl?: true;
    resetToken?: true;
    resetTokenExpiry?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    password: string;
    fullName: string;
    gender: $Enums.Gender | null;
    birthDate: Date | null;
    avatarUrl: string | null;
    resetToken: string | null;
    resetTokenExpiry: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      password?: boolean;
      fullName?: boolean;
      gender?: boolean;
      birthDate?: boolean;
      avatarUrl?: boolean;
      resetToken?: boolean;
      resetTokenExpiry?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      comments?: boolean | User$commentsArgs<ExtArgs>;
      favorites?: boolean | User$favoritesArgs<ExtArgs>;
      likes?: boolean | User$likesArgs<ExtArgs>;
      addedBooks?: boolean | User$addedBooksArgs<ExtArgs>;
      readingProgress?: boolean | User$readingProgressArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      password?: boolean;
      fullName?: boolean;
      gender?: boolean;
      birthDate?: boolean;
      avatarUrl?: boolean;
      resetToken?: boolean;
      resetTokenExpiry?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      password?: boolean;
      fullName?: boolean;
      gender?: boolean;
      birthDate?: boolean;
      avatarUrl?: boolean;
      resetToken?: boolean;
      resetTokenExpiry?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    password?: boolean;
    fullName?: boolean;
    gender?: boolean;
    birthDate?: boolean;
    avatarUrl?: boolean;
    resetToken?: boolean;
    resetTokenExpiry?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'email'
    | 'password'
    | 'fullName'
    | 'gender'
    | 'birthDate'
    | 'avatarUrl'
    | 'resetToken'
    | 'resetTokenExpiry'
    | 'createdAt'
    | 'updatedAt',
    ExtArgs['result']['user']
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    comments?: boolean | User$commentsArgs<ExtArgs>;
    favorites?: boolean | User$favoritesArgs<ExtArgs>;
    likes?: boolean | User$likesArgs<ExtArgs>;
    addedBooks?: boolean | User$addedBooksArgs<ExtArgs>;
    readingProgress?: boolean | User$readingProgressArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'User';
    objects: {
      comments: Prisma.$CommentPayload<ExtArgs>[];
      favorites: Prisma.$FavoritePayload<ExtArgs>[];
      likes: Prisma.$LikePayload<ExtArgs>[];
      addedBooks: Prisma.$BookPayload<ExtArgs>[];
      readingProgress: Prisma.$ReadingProgressPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        password: string;
        fullName: string;
        gender: $Enums.Gender | null;
        birthDate: Date | null;
        avatarUrl: string | null;
        resetToken: string | null;
        resetTokenExpiry: Date | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['User'];
      meta: { name: 'User' };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const user = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const user = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 user
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    comments<T extends User$commentsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$commentsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CommentPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    favorites<T extends User$favoritesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$favoritesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$FavoritePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    likes<T extends User$likesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$likesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$LikePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    addedBooks<T extends User$addedBooksArgs<ExtArgs> = {}>(
      args?: Subset<T, User$addedBooksArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$BookPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    readingProgress<T extends User$readingProgressArgs<ExtArgs> = {}>(
      args?: Subset<T, User$readingProgressArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ReadingProgressPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'String'>;
    readonly email: FieldRef<'User', 'String'>;
    readonly password: FieldRef<'User', 'String'>;
    readonly fullName: FieldRef<'User', 'String'>;
    readonly gender: FieldRef<'User', 'Gender'>;
    readonly birthDate: FieldRef<'User', 'DateTime'>;
    readonly avatarUrl: FieldRef<'User', 'String'>;
    readonly resetToken: FieldRef<'User', 'String'>;
    readonly resetTokenExpiry: FieldRef<'User', 'DateTime'>;
    readonly createdAt: FieldRef<'User', 'DateTime'>;
    readonly updatedAt: FieldRef<'User', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.comments
   */
  export type User$commentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    where?: CommentWhereInput;
    orderBy?:
      | CommentOrderByWithRelationInput
      | CommentOrderByWithRelationInput[];
    cursor?: CommentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[];
  };

  /**
   * User.favorites
   */
  export type User$favoritesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null;
    where?: FavoriteWhereInput;
    orderBy?:
      | FavoriteOrderByWithRelationInput
      | FavoriteOrderByWithRelationInput[];
    cursor?: FavoriteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[];
  };

  /**
   * User.likes
   */
  export type User$likesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null;
    where?: LikeWhereInput;
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[];
    cursor?: LikeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[];
  };

  /**
   * User.addedBooks
   */
  export type User$addedBooksArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null;
    where?: BookWhereInput;
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[];
    cursor?: BookWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[];
  };

  /**
   * User.readingProgress
   */
  export type User$readingProgressArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ReadingProgress
     */
    select?: ReadingProgressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ReadingProgress
     */
    omit?: ReadingProgressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingProgressInclude<ExtArgs> | null;
    where?: ReadingProgressWhereInput;
    orderBy?:
      | ReadingProgressOrderByWithRelationInput
      | ReadingProgressOrderByWithRelationInput[];
    cursor?: ReadingProgressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | ReadingProgressScalarFieldEnum
      | ReadingProgressScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model Book
   */

  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null;
    _min: BookMinAggregateOutputType | null;
    _max: BookMaxAggregateOutputType | null;
  };

  export type BookMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    coverUrl: string | null;
    publishedAt: Date | null;
    producerId: string | null;
    producerName: string | null;
    fileUrl: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type BookMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    coverUrl: string | null;
    publishedAt: Date | null;
    producerId: string | null;
    producerName: string | null;
    fileUrl: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type BookCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    coverUrl: number;
    publishedAt: number;
    producerId: number;
    producerName: number;
    fileUrl: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type BookMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    coverUrl?: true;
    publishedAt?: true;
    producerId?: true;
    producerName?: true;
    fileUrl?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type BookMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    coverUrl?: true;
    publishedAt?: true;
    producerId?: true;
    producerName?: true;
    fileUrl?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type BookCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    coverUrl?: true;
    publishedAt?: true;
    producerId?: true;
    producerName?: true;
    fileUrl?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type BookAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Book to aggregate.
     */
    where?: BookWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: BookWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Books from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Books.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Books
     **/
    _count?: true | BookCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BookMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BookMaxAggregateInputType;
  };

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
    [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>;
  };

  export type BookGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: BookWhereInput;
    orderBy?:
      | BookOrderByWithAggregationInput
      | BookOrderByWithAggregationInput[];
    by: BookScalarFieldEnum[] | BookScalarFieldEnum;
    having?: BookScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BookCountAggregateInputType | true;
    _min?: BookMinAggregateInputType;
    _max?: BookMaxAggregateInputType;
  };

  export type BookGroupByOutputType = {
    id: string;
    title: string;
    description: string | null;
    coverUrl: string | null;
    publishedAt: Date | null;
    producerId: string | null;
    producerName: string | null;
    fileUrl: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: BookCountAggregateOutputType | null;
    _min: BookMinAggregateOutputType | null;
    _max: BookMaxAggregateOutputType | null;
  };

  type GetBookGroupByPayload<T extends BookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGroupByOutputType, T['by']> & {
        [P in keyof T & keyof BookGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], BookGroupByOutputType[P]>
          : GetScalarType<T[P], BookGroupByOutputType[P]>;
      }
    >
  >;

  export type BookSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      coverUrl?: boolean;
      publishedAt?: boolean;
      producerId?: boolean;
      producerName?: boolean;
      fileUrl?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | Book$userArgs<ExtArgs>;
      authors?: boolean | Book$authorsArgs<ExtArgs>;
      categories?: boolean | Book$categoriesArgs<ExtArgs>;
      comments?: boolean | Book$commentsArgs<ExtArgs>;
      likes?: boolean | Book$likesArgs<ExtArgs>;
      favorites?: boolean | Book$favoritesArgs<ExtArgs>;
      readingProgress?: boolean | Book$readingProgressArgs<ExtArgs>;
      _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['book']
  >;

  export type BookSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      coverUrl?: boolean;
      publishedAt?: boolean;
      producerId?: boolean;
      producerName?: boolean;
      fileUrl?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | Book$userArgs<ExtArgs>;
    },
    ExtArgs['result']['book']
  >;

  export type BookSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      coverUrl?: boolean;
      publishedAt?: boolean;
      producerId?: boolean;
      producerName?: boolean;
      fileUrl?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | Book$userArgs<ExtArgs>;
    },
    ExtArgs['result']['book']
  >;

  export type BookSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    coverUrl?: boolean;
    publishedAt?: boolean;
    producerId?: boolean;
    producerName?: boolean;
    fileUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type BookOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'title'
    | 'description'
    | 'coverUrl'
    | 'publishedAt'
    | 'producerId'
    | 'producerName'
    | 'fileUrl'
    | 'createdAt'
    | 'updatedAt',
    ExtArgs['result']['book']
  >;
  export type BookInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | Book$userArgs<ExtArgs>;
    authors?: boolean | Book$authorsArgs<ExtArgs>;
    categories?: boolean | Book$categoriesArgs<ExtArgs>;
    comments?: boolean | Book$commentsArgs<ExtArgs>;
    likes?: boolean | Book$likesArgs<ExtArgs>;
    favorites?: boolean | Book$favoritesArgs<ExtArgs>;
    readingProgress?: boolean | Book$readingProgressArgs<ExtArgs>;
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type BookIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | Book$userArgs<ExtArgs>;
  };
  export type BookIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | Book$userArgs<ExtArgs>;
  };

  export type $BookPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Book';
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null;
      authors: Prisma.$BookAuthorPayload<ExtArgs>[];
      categories: Prisma.$BookCategoryPayload<ExtArgs>[];
      comments: Prisma.$CommentPayload<ExtArgs>[];
      likes: Prisma.$LikePayload<ExtArgs>[];
      favorites: Prisma.$FavoritePayload<ExtArgs>[];
      readingProgress: Prisma.$ReadingProgressPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        description: string | null;
        coverUrl: string | null;
        publishedAt: Date | null;
        producerId: string | null;
        producerName: string | null;
        fileUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['book']
    >;
    composites: {};
  };

  type BookGetPayload<S extends boolean | null | undefined | BookDefaultArgs> =
    $Result.GetResult<Prisma.$BookPayload, S>;

  type BookCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<BookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BookCountAggregateInputType | true;
  };

  export interface BookDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Book'];
      meta: { name: 'Book' };
    };
    /**
     * Find zero or one Book that matches the filter.
     * @param {BookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookFindUniqueArgs>(
      args: SelectSubset<T, BookFindUniqueArgs<ExtArgs>>
    ): Prisma__BookClient<
      $Result.GetResult<
        Prisma.$BookPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Book that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs>(
      args: SelectSubset<T, BookFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BookClient<
      $Result.GetResult<
        Prisma.$BookPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookFindFirstArgs>(
      args?: SelectSubset<T, BookFindFirstArgs<ExtArgs>>
    ): Prisma__BookClient<
      $Result.GetResult<
        Prisma.$BookPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BookFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BookClient<
      $Result.GetResult<
        Prisma.$BookPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     *
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const bookWithIdOnly = await prisma.book.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BookFindManyArgs>(
      args?: SelectSubset<T, BookFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BookPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Book.
     * @param {BookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     *
     */
    create<T extends BookCreateArgs>(
      args: SelectSubset<T, BookCreateArgs<ExtArgs>>
    ): Prisma__BookClient<
      $Result.GetResult<
        Prisma.$BookPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Books.
     * @param {BookCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BookCreateManyArgs>(
      args?: SelectSubset<T, BookCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Books and returns the data saved in the database.
     * @param {BookCreateManyAndReturnArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BookCreateManyAndReturnArgs>(
      args?: SelectSubset<T, BookCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BookPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Book.
     * @param {BookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     *
     */
    delete<T extends BookDeleteArgs>(
      args: SelectSubset<T, BookDeleteArgs<ExtArgs>>
    ): Prisma__BookClient<
      $Result.GetResult<
        Prisma.$BookPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Book.
     * @param {BookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BookUpdateArgs>(
      args: SelectSubset<T, BookUpdateArgs<ExtArgs>>
    ): Prisma__BookClient<
      $Result.GetResult<
        Prisma.$BookPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Books.
     * @param {BookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BookDeleteManyArgs>(
      args?: SelectSubset<T, BookDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BookUpdateManyArgs>(
      args: SelectSubset<T, BookUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Books and returns the data updated in the database.
     * @param {BookUpdateManyAndReturnArgs} args - Arguments to update many Books.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends BookUpdateManyAndReturnArgs>(
      args: SelectSubset<T, BookUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BookPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Book.
     * @param {BookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
     */
    upsert<T extends BookUpsertArgs>(
      args: SelectSubset<T, BookUpsertArgs<ExtArgs>>
    ): Prisma__BookClient<
      $Result.GetResult<
        Prisma.$BookPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
     **/
    count<T extends BookCountArgs>(
      args?: Subset<T, BookCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 user
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends BookAggregateArgs>(
      args: Subset<T, BookAggregateArgs>
    ): Prisma.PrismaPromise<GetBookAggregateType<T>>;

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends BookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookGroupByArgs['orderBy'] }
        : { orderBy?: BookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetBookGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Book model
     */
    readonly fields: BookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends Book$userArgs<ExtArgs> = {}>(
      args?: Subset<T, Book$userArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    authors<T extends Book$authorsArgs<ExtArgs> = {}>(
      args?: Subset<T, Book$authorsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$BookAuthorPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    categories<T extends Book$categoriesArgs<ExtArgs> = {}>(
      args?: Subset<T, Book$categoriesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$BookCategoryPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    comments<T extends Book$commentsArgs<ExtArgs> = {}>(
      args?: Subset<T, Book$commentsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CommentPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    likes<T extends Book$likesArgs<ExtArgs> = {}>(
      args?: Subset<T, Book$likesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$LikePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    favorites<T extends Book$favoritesArgs<ExtArgs> = {}>(
      args?: Subset<T, Book$favoritesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$FavoritePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    readingProgress<T extends Book$readingProgressArgs<ExtArgs> = {}>(
      args?: Subset<T, Book$readingProgressArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ReadingProgressPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Book model
   */
  interface BookFieldRefs {
    readonly id: FieldRef<'Book', 'String'>;
    readonly title: FieldRef<'Book', 'String'>;
    readonly description: FieldRef<'Book', 'String'>;
    readonly coverUrl: FieldRef<'Book', 'String'>;
    readonly publishedAt: FieldRef<'Book', 'DateTime'>;
    readonly producerId: FieldRef<'Book', 'String'>;
    readonly producerName: FieldRef<'Book', 'String'>;
    readonly fileUrl: FieldRef<'Book', 'String'>;
    readonly createdAt: FieldRef<'Book', 'DateTime'>;
    readonly updatedAt: FieldRef<'Book', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Book findUnique
   */
  export type BookFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null;
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput;
  };

  /**
   * Book findUniqueOrThrow
   */
  export type BookFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null;
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput;
  };

  /**
   * Book findFirst
   */
  export type BookFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null;
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Books from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Books.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[];
  };

  /**
   * Book findFirstOrThrow
   */
  export type BookFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null;
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Books from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Books.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[];
  };

  /**
   * Book findMany
   */
  export type BookFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null;
    /**
     * Filter, which Books to fetch.
     */
    where?: BookWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Books.
     */
    cursor?: BookWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Books from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Books.
     */
    skip?: number;
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[];
  };

  /**
   * Book create
   */
  export type BookCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null;
    /**
     * The data needed to create a Book.
     */
    data: XOR<BookCreateInput, BookUncheckedCreateInput>;
  };

  /**
   * Book createMany
   */
  export type BookCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Book createManyAndReturn
   */
  export type BookCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null;
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Book update
   */
  export type BookUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null;
    /**
     * The data needed to update a Book.
     */
    data: XOR<BookUpdateInput, BookUncheckedUpdateInput>;
    /**
     * Choose, which Book to update.
     */
    where: BookWhereUniqueInput;
  };

  /**
   * Book updateMany
   */
  export type BookUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>;
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput;
    /**
     * Limit how many Books to update.
     */
    limit?: number;
  };

  /**
   * Book updateManyAndReturn
   */
  export type BookUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null;
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>;
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput;
    /**
     * Limit how many Books to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Book upsert
   */
  export type BookUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null;
    /**
     * The filter to search for the Book to update in case it exists.
     */
    where: BookWhereUniqueInput;
    /**
     * In case the Book found by the `where` argument doesn't exist, create a new Book with this data.
     */
    create: XOR<BookCreateInput, BookUncheckedCreateInput>;
    /**
     * In case the Book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookUpdateInput, BookUncheckedUpdateInput>;
  };

  /**
   * Book delete
   */
  export type BookDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null;
    /**
     * Filter which Book to delete.
     */
    where: BookWhereUniqueInput;
  };

  /**
   * Book deleteMany
   */
  export type BookDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Books to delete
     */
    where?: BookWhereInput;
    /**
     * Limit how many Books to delete.
     */
    limit?: number;
  };

  /**
   * Book.user
   */
  export type Book$userArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    where?: UserWhereInput;
  };

  /**
   * Book.authors
   */
  export type Book$authorsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null;
    where?: BookAuthorWhereInput;
    orderBy?:
      | BookAuthorOrderByWithRelationInput
      | BookAuthorOrderByWithRelationInput[];
    cursor?: BookAuthorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BookAuthorScalarFieldEnum | BookAuthorScalarFieldEnum[];
  };

  /**
   * Book.categories
   */
  export type Book$categoriesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookCategory
     */
    select?: BookCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookCategory
     */
    omit?: BookCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCategoryInclude<ExtArgs> | null;
    where?: BookCategoryWhereInput;
    orderBy?:
      | BookCategoryOrderByWithRelationInput
      | BookCategoryOrderByWithRelationInput[];
    cursor?: BookCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BookCategoryScalarFieldEnum | BookCategoryScalarFieldEnum[];
  };

  /**
   * Book.comments
   */
  export type Book$commentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    where?: CommentWhereInput;
    orderBy?:
      | CommentOrderByWithRelationInput
      | CommentOrderByWithRelationInput[];
    cursor?: CommentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[];
  };

  /**
   * Book.likes
   */
  export type Book$likesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null;
    where?: LikeWhereInput;
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[];
    cursor?: LikeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[];
  };

  /**
   * Book.favorites
   */
  export type Book$favoritesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null;
    where?: FavoriteWhereInput;
    orderBy?:
      | FavoriteOrderByWithRelationInput
      | FavoriteOrderByWithRelationInput[];
    cursor?: FavoriteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[];
  };

  /**
   * Book.readingProgress
   */
  export type Book$readingProgressArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ReadingProgress
     */
    select?: ReadingProgressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ReadingProgress
     */
    omit?: ReadingProgressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingProgressInclude<ExtArgs> | null;
    where?: ReadingProgressWhereInput;
    orderBy?:
      | ReadingProgressOrderByWithRelationInput
      | ReadingProgressOrderByWithRelationInput[];
    cursor?: ReadingProgressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | ReadingProgressScalarFieldEnum
      | ReadingProgressScalarFieldEnum[];
  };

  /**
   * Book without action
   */
  export type BookDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null;
  };

  /**
   * Model Author
   */

  export type AggregateAuthor = {
    _count: AuthorCountAggregateOutputType | null;
    _min: AuthorMinAggregateOutputType | null;
    _max: AuthorMaxAggregateOutputType | null;
  };

  export type AuthorMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    bio: string | null;
  };

  export type AuthorMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    bio: string | null;
  };

  export type AuthorCountAggregateOutputType = {
    id: number;
    name: number;
    bio: number;
    _all: number;
  };

  export type AuthorMinAggregateInputType = {
    id?: true;
    name?: true;
    bio?: true;
  };

  export type AuthorMaxAggregateInputType = {
    id?: true;
    name?: true;
    bio?: true;
  };

  export type AuthorCountAggregateInputType = {
    id?: true;
    name?: true;
    bio?: true;
    _all?: true;
  };

  export type AuthorAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Author to aggregate.
     */
    where?: AuthorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AuthorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Authors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Authors
     **/
    _count?: true | AuthorCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AuthorMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AuthorMaxAggregateInputType;
  };

  export type GetAuthorAggregateType<T extends AuthorAggregateArgs> = {
    [P in keyof T & keyof AggregateAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthor[P]>
      : GetScalarType<T[P], AggregateAuthor[P]>;
  };

  export type AuthorGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AuthorWhereInput;
    orderBy?:
      | AuthorOrderByWithAggregationInput
      | AuthorOrderByWithAggregationInput[];
    by: AuthorScalarFieldEnum[] | AuthorScalarFieldEnum;
    having?: AuthorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AuthorCountAggregateInputType | true;
    _min?: AuthorMinAggregateInputType;
    _max?: AuthorMaxAggregateInputType;
  };

  export type AuthorGroupByOutputType = {
    id: string;
    name: string;
    bio: string | null;
    _count: AuthorCountAggregateOutputType | null;
    _min: AuthorMinAggregateOutputType | null;
    _max: AuthorMaxAggregateOutputType | null;
  };

  type GetAuthorGroupByPayload<T extends AuthorGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AuthorGroupByOutputType, T['by']> & {
          [P in keyof T & keyof AuthorGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorGroupByOutputType[P]>;
        }
      >
    >;

  export type AuthorSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      bio?: boolean;
      books?: boolean | Author$booksArgs<ExtArgs>;
      _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['author']
  >;

  export type AuthorSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      bio?: boolean;
    },
    ExtArgs['result']['author']
  >;

  export type AuthorSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      bio?: boolean;
    },
    ExtArgs['result']['author']
  >;

  export type AuthorSelectScalar = {
    id?: boolean;
    name?: boolean;
    bio?: boolean;
  };

  export type AuthorOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<'id' | 'name' | 'bio', ExtArgs['result']['author']>;
  export type AuthorInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    books?: boolean | Author$booksArgs<ExtArgs>;
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type AuthorIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type AuthorIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $AuthorPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Author';
    objects: {
      books: Prisma.$BookAuthorPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        bio: string | null;
      },
      ExtArgs['result']['author']
    >;
    composites: {};
  };

  type AuthorGetPayload<
    S extends boolean | null | undefined | AuthorDefaultArgs,
  > = $Result.GetResult<Prisma.$AuthorPayload, S>;

  type AuthorCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<AuthorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AuthorCountAggregateInputType | true;
  };

  export interface AuthorDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Author'];
      meta: { name: 'Author' };
    };
    /**
     * Find zero or one Author that matches the filter.
     * @param {AuthorFindUniqueArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthorFindUniqueArgs>(
      args: SelectSubset<T, AuthorFindUniqueArgs<ExtArgs>>
    ): Prisma__AuthorClient<
      $Result.GetResult<
        Prisma.$AuthorPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Author that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthorFindUniqueOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthorFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AuthorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AuthorClient<
      $Result.GetResult<
        Prisma.$AuthorPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Author that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthorFindFirstArgs>(
      args?: SelectSubset<T, AuthorFindFirstArgs<ExtArgs>>
    ): Prisma__AuthorClient<
      $Result.GetResult<
        Prisma.$AuthorPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Author that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthorFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AuthorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AuthorClient<
      $Result.GetResult<
        Prisma.$AuthorPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authors
     * const authors = await prisma.author.findMany()
     *
     * // Get first 10 Authors
     * const authors = await prisma.author.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const authorWithIdOnly = await prisma.author.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AuthorFindManyArgs>(
      args?: SelectSubset<T, AuthorFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AuthorPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Author.
     * @param {AuthorCreateArgs} args - Arguments to create a Author.
     * @example
     * // Create one Author
     * const Author = await prisma.author.create({
     *   data: {
     *     // ... data to create a Author
     *   }
     * })
     *
     */
    create<T extends AuthorCreateArgs>(
      args: SelectSubset<T, AuthorCreateArgs<ExtArgs>>
    ): Prisma__AuthorClient<
      $Result.GetResult<
        Prisma.$AuthorPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Authors.
     * @param {AuthorCreateManyArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AuthorCreateManyArgs>(
      args?: SelectSubset<T, AuthorCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Authors and returns the data saved in the database.
     * @param {AuthorCreateManyAndReturnArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Authors and only return the `id`
     * const authorWithIdOnly = await prisma.author.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AuthorCreateManyAndReturnArgs>(
      args?: SelectSubset<T, AuthorCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AuthorPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Author.
     * @param {AuthorDeleteArgs} args - Arguments to delete one Author.
     * @example
     * // Delete one Author
     * const Author = await prisma.author.delete({
     *   where: {
     *     // ... filter to delete one Author
     *   }
     * })
     *
     */
    delete<T extends AuthorDeleteArgs>(
      args: SelectSubset<T, AuthorDeleteArgs<ExtArgs>>
    ): Prisma__AuthorClient<
      $Result.GetResult<
        Prisma.$AuthorPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Author.
     * @param {AuthorUpdateArgs} args - Arguments to update one Author.
     * @example
     * // Update one Author
     * const author = await prisma.author.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AuthorUpdateArgs>(
      args: SelectSubset<T, AuthorUpdateArgs<ExtArgs>>
    ): Prisma__AuthorClient<
      $Result.GetResult<
        Prisma.$AuthorPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Authors.
     * @param {AuthorDeleteManyArgs} args - Arguments to filter Authors to delete.
     * @example
     * // Delete a few Authors
     * const { count } = await prisma.author.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AuthorDeleteManyArgs>(
      args?: SelectSubset<T, AuthorDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AuthorUpdateManyArgs>(
      args: SelectSubset<T, AuthorUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Authors and returns the data updated in the database.
     * @param {AuthorUpdateManyAndReturnArgs} args - Arguments to update many Authors.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Authors and only return the `id`
     * const authorWithIdOnly = await prisma.author.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends AuthorUpdateManyAndReturnArgs>(
      args: SelectSubset<T, AuthorUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AuthorPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Author.
     * @param {AuthorUpsertArgs} args - Arguments to update or create a Author.
     * @example
     * // Update or create a Author
     * const author = await prisma.author.upsert({
     *   create: {
     *     // ... data to create a Author
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Author we want to update
     *   }
     * })
     */
    upsert<T extends AuthorUpsertArgs>(
      args: SelectSubset<T, AuthorUpsertArgs<ExtArgs>>
    ): Prisma__AuthorClient<
      $Result.GetResult<
        Prisma.$AuthorPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorCountArgs} args - Arguments to filter Authors to count.
     * @example
     * // Count the number of Authors
     * const count = await prisma.author.count({
     *   where: {
     *     // ... the filter for the Authors we want to count
     *   }
     * })
     **/
    count<T extends AuthorCountArgs>(
      args?: Subset<T, AuthorCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 user
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends AuthorAggregateArgs>(
      args: Subset<T, AuthorAggregateArgs>
    ): Prisma.PrismaPromise<GetAuthorAggregateType<T>>;

    /**
     * Group by Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends AuthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorGroupByArgs['orderBy'] }
        : { orderBy?: AuthorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AuthorGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetAuthorGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Author model
     */
    readonly fields: AuthorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Author.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthorClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    books<T extends Author$booksArgs<ExtArgs> = {}>(
      args?: Subset<T, Author$booksArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$BookAuthorPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Author model
   */
  interface AuthorFieldRefs {
    readonly id: FieldRef<'Author', 'String'>;
    readonly name: FieldRef<'Author', 'String'>;
    readonly bio: FieldRef<'Author', 'String'>;
  }

  // Custom InputTypes
  /**
   * Author findUnique
   */
  export type AuthorFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null;
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput;
  };

  /**
   * Author findUniqueOrThrow
   */
  export type AuthorFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null;
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput;
  };

  /**
   * Author findFirst
   */
  export type AuthorFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null;
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Authors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[];
  };

  /**
   * Author findFirstOrThrow
   */
  export type AuthorFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null;
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Authors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[];
  };

  /**
   * Author findMany
   */
  export type AuthorFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null;
    /**
     * Filter, which Authors to fetch.
     */
    where?: AuthorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Authors.
     */
    cursor?: AuthorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Authors.
     */
    skip?: number;
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[];
  };

  /**
   * Author create
   */
  export type AuthorCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null;
    /**
     * The data needed to create a Author.
     */
    data: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>;
  };

  /**
   * Author createMany
   */
  export type AuthorCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Authors.
     */
    data: AuthorCreateManyInput | AuthorCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Author createManyAndReturn
   */
  export type AuthorCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null;
    /**
     * The data used to create many Authors.
     */
    data: AuthorCreateManyInput | AuthorCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Author update
   */
  export type AuthorUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null;
    /**
     * The data needed to update a Author.
     */
    data: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>;
    /**
     * Choose, which Author to update.
     */
    where: AuthorWhereUniqueInput;
  };

  /**
   * Author updateMany
   */
  export type AuthorUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyInput>;
    /**
     * Filter which Authors to update
     */
    where?: AuthorWhereInput;
    /**
     * Limit how many Authors to update.
     */
    limit?: number;
  };

  /**
   * Author updateManyAndReturn
   */
  export type AuthorUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null;
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyInput>;
    /**
     * Filter which Authors to update
     */
    where?: AuthorWhereInput;
    /**
     * Limit how many Authors to update.
     */
    limit?: number;
  };

  /**
   * Author upsert
   */
  export type AuthorUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null;
    /**
     * The filter to search for the Author to update in case it exists.
     */
    where: AuthorWhereUniqueInput;
    /**
     * In case the Author found by the `where` argument doesn't exist, create a new Author with this data.
     */
    create: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>;
    /**
     * In case the Author was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>;
  };

  /**
   * Author delete
   */
  export type AuthorDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null;
    /**
     * Filter which Author to delete.
     */
    where: AuthorWhereUniqueInput;
  };

  /**
   * Author deleteMany
   */
  export type AuthorDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Authors to delete
     */
    where?: AuthorWhereInput;
    /**
     * Limit how many Authors to delete.
     */
    limit?: number;
  };

  /**
   * Author.books
   */
  export type Author$booksArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null;
    where?: BookAuthorWhereInput;
    orderBy?:
      | BookAuthorOrderByWithRelationInput
      | BookAuthorOrderByWithRelationInput[];
    cursor?: BookAuthorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BookAuthorScalarFieldEnum | BookAuthorScalarFieldEnum[];
  };

  /**
   * Author without action
   */
  export type AuthorDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null;
  };

  /**
   * Model BookAuthor
   */

  export type AggregateBookAuthor = {
    _count: BookAuthorCountAggregateOutputType | null;
    _min: BookAuthorMinAggregateOutputType | null;
    _max: BookAuthorMaxAggregateOutputType | null;
  };

  export type BookAuthorMinAggregateOutputType = {
    bookId: string | null;
    authorId: string | null;
  };

  export type BookAuthorMaxAggregateOutputType = {
    bookId: string | null;
    authorId: string | null;
  };

  export type BookAuthorCountAggregateOutputType = {
    bookId: number;
    authorId: number;
    _all: number;
  };

  export type BookAuthorMinAggregateInputType = {
    bookId?: true;
    authorId?: true;
  };

  export type BookAuthorMaxAggregateInputType = {
    bookId?: true;
    authorId?: true;
  };

  export type BookAuthorCountAggregateInputType = {
    bookId?: true;
    authorId?: true;
    _all?: true;
  };

  export type BookAuthorAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which BookAuthor to aggregate.
     */
    where?: BookAuthorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BookAuthors to fetch.
     */
    orderBy?:
      | BookAuthorOrderByWithRelationInput
      | BookAuthorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: BookAuthorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BookAuthors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BookAuthors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned BookAuthors
     **/
    _count?: true | BookAuthorCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BookAuthorMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BookAuthorMaxAggregateInputType;
  };

  export type GetBookAuthorAggregateType<T extends BookAuthorAggregateArgs> = {
    [P in keyof T & keyof AggregateBookAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookAuthor[P]>
      : GetScalarType<T[P], AggregateBookAuthor[P]>;
  };

  export type BookAuthorGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: BookAuthorWhereInput;
    orderBy?:
      | BookAuthorOrderByWithAggregationInput
      | BookAuthorOrderByWithAggregationInput[];
    by: BookAuthorScalarFieldEnum[] | BookAuthorScalarFieldEnum;
    having?: BookAuthorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BookAuthorCountAggregateInputType | true;
    _min?: BookAuthorMinAggregateInputType;
    _max?: BookAuthorMaxAggregateInputType;
  };

  export type BookAuthorGroupByOutputType = {
    bookId: string;
    authorId: string;
    _count: BookAuthorCountAggregateOutputType | null;
    _min: BookAuthorMinAggregateOutputType | null;
    _max: BookAuthorMaxAggregateOutputType | null;
  };

  type GetBookAuthorGroupByPayload<T extends BookAuthorGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<BookAuthorGroupByOutputType, T['by']> & {
          [P in keyof T & keyof BookAuthorGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookAuthorGroupByOutputType[P]>
            : GetScalarType<T[P], BookAuthorGroupByOutputType[P]>;
        }
      >
    >;

  export type BookAuthorSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      bookId?: boolean;
      authorId?: boolean;
      book?: boolean | BookDefaultArgs<ExtArgs>;
      author?: boolean | AuthorDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['bookAuthor']
  >;

  export type BookAuthorSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      bookId?: boolean;
      authorId?: boolean;
      book?: boolean | BookDefaultArgs<ExtArgs>;
      author?: boolean | AuthorDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['bookAuthor']
  >;

  export type BookAuthorSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      bookId?: boolean;
      authorId?: boolean;
      book?: boolean | BookDefaultArgs<ExtArgs>;
      author?: boolean | AuthorDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['bookAuthor']
  >;

  export type BookAuthorSelectScalar = {
    bookId?: boolean;
    authorId?: boolean;
  };

  export type BookAuthorOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'bookId' | 'authorId',
    ExtArgs['result']['bookAuthor']
  >;
  export type BookAuthorInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    book?: boolean | BookDefaultArgs<ExtArgs>;
    author?: boolean | AuthorDefaultArgs<ExtArgs>;
  };
  export type BookAuthorIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    book?: boolean | BookDefaultArgs<ExtArgs>;
    author?: boolean | AuthorDefaultArgs<ExtArgs>;
  };
  export type BookAuthorIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    book?: boolean | BookDefaultArgs<ExtArgs>;
    author?: boolean | AuthorDefaultArgs<ExtArgs>;
  };

  export type $BookAuthorPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'BookAuthor';
    objects: {
      book: Prisma.$BookPayload<ExtArgs>;
      author: Prisma.$AuthorPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        bookId: string;
        authorId: string;
      },
      ExtArgs['result']['bookAuthor']
    >;
    composites: {};
  };

  type BookAuthorGetPayload<
    S extends boolean | null | undefined | BookAuthorDefaultArgs,
  > = $Result.GetResult<Prisma.$BookAuthorPayload, S>;

  type BookAuthorCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    BookAuthorFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: BookAuthorCountAggregateInputType | true;
  };

  export interface BookAuthorDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['BookAuthor'];
      meta: { name: 'BookAuthor' };
    };
    /**
     * Find zero or one BookAuthor that matches the filter.
     * @param {BookAuthorFindUniqueArgs} args - Arguments to find a BookAuthor
     * @example
     * // Get one BookAuthor
     * const bookAuthor = await prisma.bookAuthor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookAuthorFindUniqueArgs>(
      args: SelectSubset<T, BookAuthorFindUniqueArgs<ExtArgs>>
    ): Prisma__BookAuthorClient<
      $Result.GetResult<
        Prisma.$BookAuthorPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one BookAuthor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookAuthorFindUniqueOrThrowArgs} args - Arguments to find a BookAuthor
     * @example
     * // Get one BookAuthor
     * const bookAuthor = await prisma.bookAuthor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookAuthorFindUniqueOrThrowArgs>(
      args: SelectSubset<T, BookAuthorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BookAuthorClient<
      $Result.GetResult<
        Prisma.$BookAuthorPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first BookAuthor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAuthorFindFirstArgs} args - Arguments to find a BookAuthor
     * @example
     * // Get one BookAuthor
     * const bookAuthor = await prisma.bookAuthor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookAuthorFindFirstArgs>(
      args?: SelectSubset<T, BookAuthorFindFirstArgs<ExtArgs>>
    ): Prisma__BookAuthorClient<
      $Result.GetResult<
        Prisma.$BookAuthorPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first BookAuthor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAuthorFindFirstOrThrowArgs} args - Arguments to find a BookAuthor
     * @example
     * // Get one BookAuthor
     * const bookAuthor = await prisma.bookAuthor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookAuthorFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BookAuthorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BookAuthorClient<
      $Result.GetResult<
        Prisma.$BookAuthorPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more BookAuthors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAuthorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookAuthors
     * const bookAuthors = await prisma.bookAuthor.findMany()
     *
     * // Get first 10 BookAuthors
     * const bookAuthors = await prisma.bookAuthor.findMany({ take: 10 })
     *
     * // Only select the `bookId`
     * const bookAuthorWithBookIdOnly = await prisma.bookAuthor.findMany({ select: { bookId: true } })
     *
     */
    findMany<T extends BookAuthorFindManyArgs>(
      args?: SelectSubset<T, BookAuthorFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BookAuthorPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a BookAuthor.
     * @param {BookAuthorCreateArgs} args - Arguments to create a BookAuthor.
     * @example
     * // Create one BookAuthor
     * const BookAuthor = await prisma.bookAuthor.create({
     *   data: {
     *     // ... data to create a BookAuthor
     *   }
     * })
     *
     */
    create<T extends BookAuthorCreateArgs>(
      args: SelectSubset<T, BookAuthorCreateArgs<ExtArgs>>
    ): Prisma__BookAuthorClient<
      $Result.GetResult<
        Prisma.$BookAuthorPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many BookAuthors.
     * @param {BookAuthorCreateManyArgs} args - Arguments to create many BookAuthors.
     * @example
     * // Create many BookAuthors
     * const bookAuthor = await prisma.bookAuthor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BookAuthorCreateManyArgs>(
      args?: SelectSubset<T, BookAuthorCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many BookAuthors and returns the data saved in the database.
     * @param {BookAuthorCreateManyAndReturnArgs} args - Arguments to create many BookAuthors.
     * @example
     * // Create many BookAuthors
     * const bookAuthor = await prisma.bookAuthor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many BookAuthors and only return the `bookId`
     * const bookAuthorWithBookIdOnly = await prisma.bookAuthor.createManyAndReturn({
     *   select: { bookId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BookAuthorCreateManyAndReturnArgs>(
      args?: SelectSubset<T, BookAuthorCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BookAuthorPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a BookAuthor.
     * @param {BookAuthorDeleteArgs} args - Arguments to delete one BookAuthor.
     * @example
     * // Delete one BookAuthor
     * const BookAuthor = await prisma.bookAuthor.delete({
     *   where: {
     *     // ... filter to delete one BookAuthor
     *   }
     * })
     *
     */
    delete<T extends BookAuthorDeleteArgs>(
      args: SelectSubset<T, BookAuthorDeleteArgs<ExtArgs>>
    ): Prisma__BookAuthorClient<
      $Result.GetResult<
        Prisma.$BookAuthorPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one BookAuthor.
     * @param {BookAuthorUpdateArgs} args - Arguments to update one BookAuthor.
     * @example
     * // Update one BookAuthor
     * const bookAuthor = await prisma.bookAuthor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BookAuthorUpdateArgs>(
      args: SelectSubset<T, BookAuthorUpdateArgs<ExtArgs>>
    ): Prisma__BookAuthorClient<
      $Result.GetResult<
        Prisma.$BookAuthorPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more BookAuthors.
     * @param {BookAuthorDeleteManyArgs} args - Arguments to filter BookAuthors to delete.
     * @example
     * // Delete a few BookAuthors
     * const { count } = await prisma.bookAuthor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BookAuthorDeleteManyArgs>(
      args?: SelectSubset<T, BookAuthorDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more BookAuthors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAuthorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookAuthors
     * const bookAuthor = await prisma.bookAuthor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BookAuthorUpdateManyArgs>(
      args: SelectSubset<T, BookAuthorUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more BookAuthors and returns the data updated in the database.
     * @param {BookAuthorUpdateManyAndReturnArgs} args - Arguments to update many BookAuthors.
     * @example
     * // Update many BookAuthors
     * const bookAuthor = await prisma.bookAuthor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more BookAuthors and only return the `bookId`
     * const bookAuthorWithBookIdOnly = await prisma.bookAuthor.updateManyAndReturn({
     *   select: { bookId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends BookAuthorUpdateManyAndReturnArgs>(
      args: SelectSubset<T, BookAuthorUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BookAuthorPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one BookAuthor.
     * @param {BookAuthorUpsertArgs} args - Arguments to update or create a BookAuthor.
     * @example
     * // Update or create a BookAuthor
     * const bookAuthor = await prisma.bookAuthor.upsert({
     *   create: {
     *     // ... data to create a BookAuthor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookAuthor we want to update
     *   }
     * })
     */
    upsert<T extends BookAuthorUpsertArgs>(
      args: SelectSubset<T, BookAuthorUpsertArgs<ExtArgs>>
    ): Prisma__BookAuthorClient<
      $Result.GetResult<
        Prisma.$BookAuthorPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of BookAuthors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAuthorCountArgs} args - Arguments to filter BookAuthors to count.
     * @example
     * // Count the number of BookAuthors
     * const count = await prisma.bookAuthor.count({
     *   where: {
     *     // ... the filter for the BookAuthors we want to count
     *   }
     * })
     **/
    count<T extends BookAuthorCountArgs>(
      args?: Subset<T, BookAuthorCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookAuthorCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a BookAuthor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 user
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends BookAuthorAggregateArgs>(
      args: Subset<T, BookAuthorAggregateArgs>
    ): Prisma.PrismaPromise<GetBookAuthorAggregateType<T>>;

    /**
     * Group by BookAuthor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAuthorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends BookAuthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookAuthorGroupByArgs['orderBy'] }
        : { orderBy?: BookAuthorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, BookAuthorGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetBookAuthorGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the BookAuthor model
     */
    readonly fields: BookAuthorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookAuthor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookAuthorClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    book<T extends BookDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, BookDefaultArgs<ExtArgs>>
    ): Prisma__BookClient<
      | $Result.GetResult<
          Prisma.$BookPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    author<T extends AuthorDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, AuthorDefaultArgs<ExtArgs>>
    ): Prisma__AuthorClient<
      | $Result.GetResult<
          Prisma.$AuthorPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the BookAuthor model
   */
  interface BookAuthorFieldRefs {
    readonly bookId: FieldRef<'BookAuthor', 'String'>;
    readonly authorId: FieldRef<'BookAuthor', 'String'>;
  }

  // Custom InputTypes
  /**
   * BookAuthor findUnique
   */
  export type BookAuthorFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null;
    /**
     * Filter, which BookAuthor to fetch.
     */
    where: BookAuthorWhereUniqueInput;
  };

  /**
   * BookAuthor findUniqueOrThrow
   */
  export type BookAuthorFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null;
    /**
     * Filter, which BookAuthor to fetch.
     */
    where: BookAuthorWhereUniqueInput;
  };

  /**
   * BookAuthor findFirst
   */
  export type BookAuthorFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null;
    /**
     * Filter, which BookAuthor to fetch.
     */
    where?: BookAuthorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BookAuthors to fetch.
     */
    orderBy?:
      | BookAuthorOrderByWithRelationInput
      | BookAuthorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BookAuthors.
     */
    cursor?: BookAuthorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BookAuthors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BookAuthors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BookAuthors.
     */
    distinct?: BookAuthorScalarFieldEnum | BookAuthorScalarFieldEnum[];
  };

  /**
   * BookAuthor findFirstOrThrow
   */
  export type BookAuthorFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null;
    /**
     * Filter, which BookAuthor to fetch.
     */
    where?: BookAuthorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BookAuthors to fetch.
     */
    orderBy?:
      | BookAuthorOrderByWithRelationInput
      | BookAuthorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BookAuthors.
     */
    cursor?: BookAuthorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BookAuthors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BookAuthors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BookAuthors.
     */
    distinct?: BookAuthorScalarFieldEnum | BookAuthorScalarFieldEnum[];
  };

  /**
   * BookAuthor findMany
   */
  export type BookAuthorFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null;
    /**
     * Filter, which BookAuthors to fetch.
     */
    where?: BookAuthorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BookAuthors to fetch.
     */
    orderBy?:
      | BookAuthorOrderByWithRelationInput
      | BookAuthorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing BookAuthors.
     */
    cursor?: BookAuthorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BookAuthors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BookAuthors.
     */
    skip?: number;
    distinct?: BookAuthorScalarFieldEnum | BookAuthorScalarFieldEnum[];
  };

  /**
   * BookAuthor create
   */
  export type BookAuthorCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null;
    /**
     * The data needed to create a BookAuthor.
     */
    data: XOR<BookAuthorCreateInput, BookAuthorUncheckedCreateInput>;
  };

  /**
   * BookAuthor createMany
   */
  export type BookAuthorCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many BookAuthors.
     */
    data: BookAuthorCreateManyInput | BookAuthorCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * BookAuthor createManyAndReturn
   */
  export type BookAuthorCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null;
    /**
     * The data used to create many BookAuthors.
     */
    data: BookAuthorCreateManyInput | BookAuthorCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * BookAuthor update
   */
  export type BookAuthorUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null;
    /**
     * The data needed to update a BookAuthor.
     */
    data: XOR<BookAuthorUpdateInput, BookAuthorUncheckedUpdateInput>;
    /**
     * Choose, which BookAuthor to update.
     */
    where: BookAuthorWhereUniqueInput;
  };

  /**
   * BookAuthor updateMany
   */
  export type BookAuthorUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update BookAuthors.
     */
    data: XOR<
      BookAuthorUpdateManyMutationInput,
      BookAuthorUncheckedUpdateManyInput
    >;
    /**
     * Filter which BookAuthors to update
     */
    where?: BookAuthorWhereInput;
    /**
     * Limit how many BookAuthors to update.
     */
    limit?: number;
  };

  /**
   * BookAuthor updateManyAndReturn
   */
  export type BookAuthorUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null;
    /**
     * The data used to update BookAuthors.
     */
    data: XOR<
      BookAuthorUpdateManyMutationInput,
      BookAuthorUncheckedUpdateManyInput
    >;
    /**
     * Filter which BookAuthors to update
     */
    where?: BookAuthorWhereInput;
    /**
     * Limit how many BookAuthors to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * BookAuthor upsert
   */
  export type BookAuthorUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null;
    /**
     * The filter to search for the BookAuthor to update in case it exists.
     */
    where: BookAuthorWhereUniqueInput;
    /**
     * In case the BookAuthor found by the `where` argument doesn't exist, create a new BookAuthor with this data.
     */
    create: XOR<BookAuthorCreateInput, BookAuthorUncheckedCreateInput>;
    /**
     * In case the BookAuthor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookAuthorUpdateInput, BookAuthorUncheckedUpdateInput>;
  };

  /**
   * BookAuthor delete
   */
  export type BookAuthorDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null;
    /**
     * Filter which BookAuthor to delete.
     */
    where: BookAuthorWhereUniqueInput;
  };

  /**
   * BookAuthor deleteMany
   */
  export type BookAuthorDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which BookAuthors to delete
     */
    where?: BookAuthorWhereInput;
    /**
     * Limit how many BookAuthors to delete.
     */
    limit?: number;
  };

  /**
   * BookAuthor without action
   */
  export type BookAuthorDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null;
  };

  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null;
    _min: CategoryMinAggregateOutputType | null;
    _max: CategoryMaxAggregateOutputType | null;
  };

  export type CategoryMinAggregateOutputType = {
    id: string | null;
    name: string | null;
  };

  export type CategoryMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
  };

  export type CategoryCountAggregateOutputType = {
    id: number;
    name: number;
    _all: number;
  };

  export type CategoryMinAggregateInputType = {
    id?: true;
    name?: true;
  };

  export type CategoryMaxAggregateInputType = {
    id?: true;
    name?: true;
  };

  export type CategoryCountAggregateInputType = {
    id?: true;
    name?: true;
    _all?: true;
  };

  export type CategoryAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?:
      | CategoryOrderByWithRelationInput
      | CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Categories
     **/
    _count?: true | CategoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CategoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CategoryMaxAggregateInputType;
  };

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
    [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>;
  };

  export type CategoryGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CategoryWhereInput;
    orderBy?:
      | CategoryOrderByWithAggregationInput
      | CategoryOrderByWithAggregationInput[];
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum;
    having?: CategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CategoryCountAggregateInputType | true;
    _min?: CategoryMinAggregateInputType;
    _max?: CategoryMaxAggregateInputType;
  };

  export type CategoryGroupByOutputType = {
    id: string;
    name: string;
    _count: CategoryCountAggregateOutputType | null;
    _min: CategoryMinAggregateOutputType | null;
    _max: CategoryMaxAggregateOutputType | null;
  };

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CategoryGroupByOutputType, T['by']> & {
          [P in keyof T & keyof CategoryGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>;
        }
      >
    >;

  export type CategorySelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      books?: boolean | Category$booksArgs<ExtArgs>;
      _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['category']
  >;

  export type CategorySelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
    },
    ExtArgs['result']['category']
  >;

  export type CategorySelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
    },
    ExtArgs['result']['category']
  >;

  export type CategorySelectScalar = {
    id?: boolean;
    name?: boolean;
  };

  export type CategoryOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<'id' | 'name', ExtArgs['result']['category']>;
  export type CategoryInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    books?: boolean | Category$booksArgs<ExtArgs>;
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type CategoryIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type CategoryIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $CategoryPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Category';
    objects: {
      books: Prisma.$BookCategoryPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
      },
      ExtArgs['result']['category']
    >;
    composites: {};
  };

  type CategoryGetPayload<
    S extends boolean | null | undefined | CategoryDefaultArgs,
  > = $Result.GetResult<Prisma.$CategoryPayload, S>;

  type CategoryCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CategoryCountAggregateInputType | true;
  };

  export interface CategoryDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Category'];
      meta: { name: 'Category' };
    };
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     *
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CategoryFindManyArgs>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     *
     */
    create<T extends CategoryCreateArgs>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CategoryCreateManyArgs>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     *
     */
    delete<T extends CategoryDeleteArgs>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CategoryUpdateArgs>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CategoryDeleteManyArgs>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CategoryUpdateManyArgs>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
     **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 user
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CategoryAggregateArgs>(
      args: Subset<T, CategoryAggregateArgs>
    ): Prisma.PrismaPromise<GetCategoryAggregateType<T>>;

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetCategoryGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Category model
     */
    readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    books<T extends Category$booksArgs<ExtArgs> = {}>(
      args?: Subset<T, Category$booksArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$BookCategoryPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<'Category', 'String'>;
    readonly name: FieldRef<'Category', 'String'>;
  }

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput;
  };

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput;
  };

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?:
      | CategoryOrderByWithRelationInput
      | CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[];
  };

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?:
      | CategoryOrderByWithRelationInput
      | CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[];
  };

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?:
      | CategoryOrderByWithRelationInput
      | CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[];
  };

  /**
   * Category create
   */
  export type CategoryCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>;
  };

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Category update
   */
  export type CategoryUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>;
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput;
  };

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Categories.
     */
    data: XOR<
      CategoryUpdateManyMutationInput,
      CategoryUncheckedUpdateManyInput
    >;
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput;
    /**
     * Limit how many Categories to update.
     */
    limit?: number;
  };

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * The data used to update Categories.
     */
    data: XOR<
      CategoryUpdateManyMutationInput,
      CategoryUncheckedUpdateManyInput
    >;
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput;
    /**
     * Limit how many Categories to update.
     */
    limit?: number;
  };

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput;
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>;
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>;
  };

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput;
  };

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput;
    /**
     * Limit how many Categories to delete.
     */
    limit?: number;
  };

  /**
   * Category.books
   */
  export type Category$booksArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookCategory
     */
    select?: BookCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookCategory
     */
    omit?: BookCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCategoryInclude<ExtArgs> | null;
    where?: BookCategoryWhereInput;
    orderBy?:
      | BookCategoryOrderByWithRelationInput
      | BookCategoryOrderByWithRelationInput[];
    cursor?: BookCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BookCategoryScalarFieldEnum | BookCategoryScalarFieldEnum[];
  };

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
  };

  /**
   * Model BookCategory
   */

  export type AggregateBookCategory = {
    _count: BookCategoryCountAggregateOutputType | null;
    _min: BookCategoryMinAggregateOutputType | null;
    _max: BookCategoryMaxAggregateOutputType | null;
  };

  export type BookCategoryMinAggregateOutputType = {
    bookId: string | null;
    categoryId: string | null;
  };

  export type BookCategoryMaxAggregateOutputType = {
    bookId: string | null;
    categoryId: string | null;
  };

  export type BookCategoryCountAggregateOutputType = {
    bookId: number;
    categoryId: number;
    _all: number;
  };

  export type BookCategoryMinAggregateInputType = {
    bookId?: true;
    categoryId?: true;
  };

  export type BookCategoryMaxAggregateInputType = {
    bookId?: true;
    categoryId?: true;
  };

  export type BookCategoryCountAggregateInputType = {
    bookId?: true;
    categoryId?: true;
    _all?: true;
  };

  export type BookCategoryAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which BookCategory to aggregate.
     */
    where?: BookCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BookCategories to fetch.
     */
    orderBy?:
      | BookCategoryOrderByWithRelationInput
      | BookCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: BookCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BookCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BookCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned BookCategories
     **/
    _count?: true | BookCategoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BookCategoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BookCategoryMaxAggregateInputType;
  };

  export type GetBookCategoryAggregateType<
    T extends BookCategoryAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateBookCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookCategory[P]>
      : GetScalarType<T[P], AggregateBookCategory[P]>;
  };

  export type BookCategoryGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: BookCategoryWhereInput;
    orderBy?:
      | BookCategoryOrderByWithAggregationInput
      | BookCategoryOrderByWithAggregationInput[];
    by: BookCategoryScalarFieldEnum[] | BookCategoryScalarFieldEnum;
    having?: BookCategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BookCategoryCountAggregateInputType | true;
    _min?: BookCategoryMinAggregateInputType;
    _max?: BookCategoryMaxAggregateInputType;
  };

  export type BookCategoryGroupByOutputType = {
    bookId: string;
    categoryId: string;
    _count: BookCategoryCountAggregateOutputType | null;
    _min: BookCategoryMinAggregateOutputType | null;
    _max: BookCategoryMaxAggregateOutputType | null;
  };

  type GetBookCategoryGroupByPayload<T extends BookCategoryGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<BookCategoryGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof BookCategoryGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], BookCategoryGroupByOutputType[P]>;
        }
      >
    >;

  export type BookCategorySelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      bookId?: boolean;
      categoryId?: boolean;
      book?: boolean | BookDefaultArgs<ExtArgs>;
      category?: boolean | CategoryDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['bookCategory']
  >;

  export type BookCategorySelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      bookId?: boolean;
      categoryId?: boolean;
      book?: boolean | BookDefaultArgs<ExtArgs>;
      category?: boolean | CategoryDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['bookCategory']
  >;

  export type BookCategorySelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      bookId?: boolean;
      categoryId?: boolean;
      book?: boolean | BookDefaultArgs<ExtArgs>;
      category?: boolean | CategoryDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['bookCategory']
  >;

  export type BookCategorySelectScalar = {
    bookId?: boolean;
    categoryId?: boolean;
  };

  export type BookCategoryOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'bookId' | 'categoryId',
    ExtArgs['result']['bookCategory']
  >;
  export type BookCategoryInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    book?: boolean | BookDefaultArgs<ExtArgs>;
    category?: boolean | CategoryDefaultArgs<ExtArgs>;
  };
  export type BookCategoryIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    book?: boolean | BookDefaultArgs<ExtArgs>;
    category?: boolean | CategoryDefaultArgs<ExtArgs>;
  };
  export type BookCategoryIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    book?: boolean | BookDefaultArgs<ExtArgs>;
    category?: boolean | CategoryDefaultArgs<ExtArgs>;
  };

  export type $BookCategoryPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'BookCategory';
    objects: {
      book: Prisma.$BookPayload<ExtArgs>;
      category: Prisma.$CategoryPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        bookId: string;
        categoryId: string;
      },
      ExtArgs['result']['bookCategory']
    >;
    composites: {};
  };

  type BookCategoryGetPayload<
    S extends boolean | null | undefined | BookCategoryDefaultArgs,
  > = $Result.GetResult<Prisma.$BookCategoryPayload, S>;

  type BookCategoryCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    BookCategoryFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: BookCategoryCountAggregateInputType | true;
  };

  export interface BookCategoryDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['BookCategory'];
      meta: { name: 'BookCategory' };
    };
    /**
     * Find zero or one BookCategory that matches the filter.
     * @param {BookCategoryFindUniqueArgs} args - Arguments to find a BookCategory
     * @example
     * // Get one BookCategory
     * const bookCategory = await prisma.bookCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookCategoryFindUniqueArgs>(
      args: SelectSubset<T, BookCategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__BookCategoryClient<
      $Result.GetResult<
        Prisma.$BookCategoryPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one BookCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookCategoryFindUniqueOrThrowArgs} args - Arguments to find a BookCategory
     * @example
     * // Get one BookCategory
     * const bookCategory = await prisma.bookCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookCategoryFindUniqueOrThrowArgs>(
      args: SelectSubset<T, BookCategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BookCategoryClient<
      $Result.GetResult<
        Prisma.$BookCategoryPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first BookCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCategoryFindFirstArgs} args - Arguments to find a BookCategory
     * @example
     * // Get one BookCategory
     * const bookCategory = await prisma.bookCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookCategoryFindFirstArgs>(
      args?: SelectSubset<T, BookCategoryFindFirstArgs<ExtArgs>>
    ): Prisma__BookCategoryClient<
      $Result.GetResult<
        Prisma.$BookCategoryPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first BookCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCategoryFindFirstOrThrowArgs} args - Arguments to find a BookCategory
     * @example
     * // Get one BookCategory
     * const bookCategory = await prisma.bookCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookCategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BookCategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BookCategoryClient<
      $Result.GetResult<
        Prisma.$BookCategoryPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more BookCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookCategories
     * const bookCategories = await prisma.bookCategory.findMany()
     *
     * // Get first 10 BookCategories
     * const bookCategories = await prisma.bookCategory.findMany({ take: 10 })
     *
     * // Only select the `bookId`
     * const bookCategoryWithBookIdOnly = await prisma.bookCategory.findMany({ select: { bookId: true } })
     *
     */
    findMany<T extends BookCategoryFindManyArgs>(
      args?: SelectSubset<T, BookCategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BookCategoryPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a BookCategory.
     * @param {BookCategoryCreateArgs} args - Arguments to create a BookCategory.
     * @example
     * // Create one BookCategory
     * const BookCategory = await prisma.bookCategory.create({
     *   data: {
     *     // ... data to create a BookCategory
     *   }
     * })
     *
     */
    create<T extends BookCategoryCreateArgs>(
      args: SelectSubset<T, BookCategoryCreateArgs<ExtArgs>>
    ): Prisma__BookCategoryClient<
      $Result.GetResult<
        Prisma.$BookCategoryPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many BookCategories.
     * @param {BookCategoryCreateManyArgs} args - Arguments to create many BookCategories.
     * @example
     * // Create many BookCategories
     * const bookCategory = await prisma.bookCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BookCategoryCreateManyArgs>(
      args?: SelectSubset<T, BookCategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many BookCategories and returns the data saved in the database.
     * @param {BookCategoryCreateManyAndReturnArgs} args - Arguments to create many BookCategories.
     * @example
     * // Create many BookCategories
     * const bookCategory = await prisma.bookCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many BookCategories and only return the `bookId`
     * const bookCategoryWithBookIdOnly = await prisma.bookCategory.createManyAndReturn({
     *   select: { bookId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BookCategoryCreateManyAndReturnArgs>(
      args?: SelectSubset<T, BookCategoryCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BookCategoryPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a BookCategory.
     * @param {BookCategoryDeleteArgs} args - Arguments to delete one BookCategory.
     * @example
     * // Delete one BookCategory
     * const BookCategory = await prisma.bookCategory.delete({
     *   where: {
     *     // ... filter to delete one BookCategory
     *   }
     * })
     *
     */
    delete<T extends BookCategoryDeleteArgs>(
      args: SelectSubset<T, BookCategoryDeleteArgs<ExtArgs>>
    ): Prisma__BookCategoryClient<
      $Result.GetResult<
        Prisma.$BookCategoryPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one BookCategory.
     * @param {BookCategoryUpdateArgs} args - Arguments to update one BookCategory.
     * @example
     * // Update one BookCategory
     * const bookCategory = await prisma.bookCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BookCategoryUpdateArgs>(
      args: SelectSubset<T, BookCategoryUpdateArgs<ExtArgs>>
    ): Prisma__BookCategoryClient<
      $Result.GetResult<
        Prisma.$BookCategoryPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more BookCategories.
     * @param {BookCategoryDeleteManyArgs} args - Arguments to filter BookCategories to delete.
     * @example
     * // Delete a few BookCategories
     * const { count } = await prisma.bookCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BookCategoryDeleteManyArgs>(
      args?: SelectSubset<T, BookCategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more BookCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookCategories
     * const bookCategory = await prisma.bookCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BookCategoryUpdateManyArgs>(
      args: SelectSubset<T, BookCategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more BookCategories and returns the data updated in the database.
     * @param {BookCategoryUpdateManyAndReturnArgs} args - Arguments to update many BookCategories.
     * @example
     * // Update many BookCategories
     * const bookCategory = await prisma.bookCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more BookCategories and only return the `bookId`
     * const bookCategoryWithBookIdOnly = await prisma.bookCategory.updateManyAndReturn({
     *   select: { bookId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends BookCategoryUpdateManyAndReturnArgs>(
      args: SelectSubset<T, BookCategoryUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BookCategoryPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one BookCategory.
     * @param {BookCategoryUpsertArgs} args - Arguments to update or create a BookCategory.
     * @example
     * // Update or create a BookCategory
     * const bookCategory = await prisma.bookCategory.upsert({
     *   create: {
     *     // ... data to create a BookCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookCategory we want to update
     *   }
     * })
     */
    upsert<T extends BookCategoryUpsertArgs>(
      args: SelectSubset<T, BookCategoryUpsertArgs<ExtArgs>>
    ): Prisma__BookCategoryClient<
      $Result.GetResult<
        Prisma.$BookCategoryPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of BookCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCategoryCountArgs} args - Arguments to filter BookCategories to count.
     * @example
     * // Count the number of BookCategories
     * const count = await prisma.bookCategory.count({
     *   where: {
     *     // ... the filter for the BookCategories we want to count
     *   }
     * })
     **/
    count<T extends BookCategoryCountArgs>(
      args?: Subset<T, BookCategoryCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCategoryCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a BookCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 user
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends BookCategoryAggregateArgs>(
      args: Subset<T, BookCategoryAggregateArgs>
    ): Prisma.PrismaPromise<GetBookCategoryAggregateType<T>>;

    /**
     * Group by BookCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends BookCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookCategoryGroupByArgs['orderBy'] }
        : { orderBy?: BookCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, BookCategoryGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetBookCategoryGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the BookCategory model
     */
    readonly fields: BookCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookCategoryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    book<T extends BookDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, BookDefaultArgs<ExtArgs>>
    ): Prisma__BookClient<
      | $Result.GetResult<
          Prisma.$BookPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, CategoryDefaultArgs<ExtArgs>>
    ): Prisma__CategoryClient<
      | $Result.GetResult<
          Prisma.$CategoryPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the BookCategory model
   */
  interface BookCategoryFieldRefs {
    readonly bookId: FieldRef<'BookCategory', 'String'>;
    readonly categoryId: FieldRef<'BookCategory', 'String'>;
  }

  // Custom InputTypes
  /**
   * BookCategory findUnique
   */
  export type BookCategoryFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookCategory
     */
    select?: BookCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookCategory
     */
    omit?: BookCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which BookCategory to fetch.
     */
    where: BookCategoryWhereUniqueInput;
  };

  /**
   * BookCategory findUniqueOrThrow
   */
  export type BookCategoryFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookCategory
     */
    select?: BookCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookCategory
     */
    omit?: BookCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which BookCategory to fetch.
     */
    where: BookCategoryWhereUniqueInput;
  };

  /**
   * BookCategory findFirst
   */
  export type BookCategoryFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookCategory
     */
    select?: BookCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookCategory
     */
    omit?: BookCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which BookCategory to fetch.
     */
    where?: BookCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BookCategories to fetch.
     */
    orderBy?:
      | BookCategoryOrderByWithRelationInput
      | BookCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BookCategories.
     */
    cursor?: BookCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BookCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BookCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BookCategories.
     */
    distinct?: BookCategoryScalarFieldEnum | BookCategoryScalarFieldEnum[];
  };

  /**
   * BookCategory findFirstOrThrow
   */
  export type BookCategoryFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookCategory
     */
    select?: BookCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookCategory
     */
    omit?: BookCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which BookCategory to fetch.
     */
    where?: BookCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BookCategories to fetch.
     */
    orderBy?:
      | BookCategoryOrderByWithRelationInput
      | BookCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BookCategories.
     */
    cursor?: BookCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BookCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BookCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BookCategories.
     */
    distinct?: BookCategoryScalarFieldEnum | BookCategoryScalarFieldEnum[];
  };

  /**
   * BookCategory findMany
   */
  export type BookCategoryFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookCategory
     */
    select?: BookCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookCategory
     */
    omit?: BookCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which BookCategories to fetch.
     */
    where?: BookCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BookCategories to fetch.
     */
    orderBy?:
      | BookCategoryOrderByWithRelationInput
      | BookCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing BookCategories.
     */
    cursor?: BookCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BookCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BookCategories.
     */
    skip?: number;
    distinct?: BookCategoryScalarFieldEnum | BookCategoryScalarFieldEnum[];
  };

  /**
   * BookCategory create
   */
  export type BookCategoryCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookCategory
     */
    select?: BookCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookCategory
     */
    omit?: BookCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCategoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a BookCategory.
     */
    data: XOR<BookCategoryCreateInput, BookCategoryUncheckedCreateInput>;
  };

  /**
   * BookCategory createMany
   */
  export type BookCategoryCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many BookCategories.
     */
    data: BookCategoryCreateManyInput | BookCategoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * BookCategory createManyAndReturn
   */
  export type BookCategoryCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookCategory
     */
    select?: BookCategorySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BookCategory
     */
    omit?: BookCategoryOmit<ExtArgs> | null;
    /**
     * The data used to create many BookCategories.
     */
    data: BookCategoryCreateManyInput | BookCategoryCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCategoryIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * BookCategory update
   */
  export type BookCategoryUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookCategory
     */
    select?: BookCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookCategory
     */
    omit?: BookCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCategoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a BookCategory.
     */
    data: XOR<BookCategoryUpdateInput, BookCategoryUncheckedUpdateInput>;
    /**
     * Choose, which BookCategory to update.
     */
    where: BookCategoryWhereUniqueInput;
  };

  /**
   * BookCategory updateMany
   */
  export type BookCategoryUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update BookCategories.
     */
    data: XOR<
      BookCategoryUpdateManyMutationInput,
      BookCategoryUncheckedUpdateManyInput
    >;
    /**
     * Filter which BookCategories to update
     */
    where?: BookCategoryWhereInput;
    /**
     * Limit how many BookCategories to update.
     */
    limit?: number;
  };

  /**
   * BookCategory updateManyAndReturn
   */
  export type BookCategoryUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookCategory
     */
    select?: BookCategorySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BookCategory
     */
    omit?: BookCategoryOmit<ExtArgs> | null;
    /**
     * The data used to update BookCategories.
     */
    data: XOR<
      BookCategoryUpdateManyMutationInput,
      BookCategoryUncheckedUpdateManyInput
    >;
    /**
     * Filter which BookCategories to update
     */
    where?: BookCategoryWhereInput;
    /**
     * Limit how many BookCategories to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCategoryIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * BookCategory upsert
   */
  export type BookCategoryUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookCategory
     */
    select?: BookCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookCategory
     */
    omit?: BookCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCategoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the BookCategory to update in case it exists.
     */
    where: BookCategoryWhereUniqueInput;
    /**
     * In case the BookCategory found by the `where` argument doesn't exist, create a new BookCategory with this data.
     */
    create: XOR<BookCategoryCreateInput, BookCategoryUncheckedCreateInput>;
    /**
     * In case the BookCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookCategoryUpdateInput, BookCategoryUncheckedUpdateInput>;
  };

  /**
   * BookCategory delete
   */
  export type BookCategoryDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookCategory
     */
    select?: BookCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookCategory
     */
    omit?: BookCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCategoryInclude<ExtArgs> | null;
    /**
     * Filter which BookCategory to delete.
     */
    where: BookCategoryWhereUniqueInput;
  };

  /**
   * BookCategory deleteMany
   */
  export type BookCategoryDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which BookCategories to delete
     */
    where?: BookCategoryWhereInput;
    /**
     * Limit how many BookCategories to delete.
     */
    limit?: number;
  };

  /**
   * BookCategory without action
   */
  export type BookCategoryDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BookCategory
     */
    select?: BookCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookCategory
     */
    omit?: BookCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCategoryInclude<ExtArgs> | null;
  };

  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null;
    _avg: CommentAvgAggregateOutputType | null;
    _sum: CommentSumAggregateOutputType | null;
    _min: CommentMinAggregateOutputType | null;
    _max: CommentMaxAggregateOutputType | null;
  };

  export type CommentAvgAggregateOutputType = {
    rating: number | null;
  };

  export type CommentSumAggregateOutputType = {
    rating: number | null;
  };

  export type CommentMinAggregateOutputType = {
    id: string | null;
    content: string | null;
    rating: number | null;
    createdAt: Date | null;
    userId: string | null;
    bookId: string | null;
  };

  export type CommentMaxAggregateOutputType = {
    id: string | null;
    content: string | null;
    rating: number | null;
    createdAt: Date | null;
    userId: string | null;
    bookId: string | null;
  };

  export type CommentCountAggregateOutputType = {
    id: number;
    content: number;
    rating: number;
    createdAt: number;
    userId: number;
    bookId: number;
    _all: number;
  };

  export type CommentAvgAggregateInputType = {
    rating?: true;
  };

  export type CommentSumAggregateInputType = {
    rating?: true;
  };

  export type CommentMinAggregateInputType = {
    id?: true;
    content?: true;
    rating?: true;
    createdAt?: true;
    userId?: true;
    bookId?: true;
  };

  export type CommentMaxAggregateInputType = {
    id?: true;
    content?: true;
    rating?: true;
    createdAt?: true;
    userId?: true;
    bookId?: true;
  };

  export type CommentCountAggregateInputType = {
    id?: true;
    content?: true;
    rating?: true;
    createdAt?: true;
    userId?: true;
    bookId?: true;
    _all?: true;
  };

  export type CommentAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     */
    orderBy?:
      | CommentOrderByWithRelationInput
      | CommentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Comments
     **/
    _count?: true | CommentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CommentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CommentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CommentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CommentMaxAggregateInputType;
  };

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
    [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>;
  };

  export type CommentGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CommentWhereInput;
    orderBy?:
      | CommentOrderByWithAggregationInput
      | CommentOrderByWithAggregationInput[];
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum;
    having?: CommentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CommentCountAggregateInputType | true;
    _avg?: CommentAvgAggregateInputType;
    _sum?: CommentSumAggregateInputType;
    _min?: CommentMinAggregateInputType;
    _max?: CommentMaxAggregateInputType;
  };

  export type CommentGroupByOutputType = {
    id: string;
    content: string;
    rating: number | null;
    createdAt: Date;
    userId: string;
    bookId: string;
    _count: CommentCountAggregateOutputType | null;
    _avg: CommentAvgAggregateOutputType | null;
    _sum: CommentSumAggregateOutputType | null;
    _min: CommentMinAggregateOutputType | null;
    _max: CommentMaxAggregateOutputType | null;
  };

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CommentGroupByOutputType, T['by']> & {
          [P in keyof T & keyof CommentGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>;
        }
      >
    >;

  export type CommentSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      content?: boolean;
      rating?: boolean;
      createdAt?: boolean;
      userId?: boolean;
      bookId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      book?: boolean | BookDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['comment']
  >;

  export type CommentSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      content?: boolean;
      rating?: boolean;
      createdAt?: boolean;
      userId?: boolean;
      bookId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      book?: boolean | BookDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['comment']
  >;

  export type CommentSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      content?: boolean;
      rating?: boolean;
      createdAt?: boolean;
      userId?: boolean;
      bookId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      book?: boolean | BookDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['comment']
  >;

  export type CommentSelectScalar = {
    id?: boolean;
    content?: boolean;
    rating?: boolean;
    createdAt?: boolean;
    userId?: boolean;
    bookId?: boolean;
  };

  export type CommentOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'content' | 'rating' | 'createdAt' | 'userId' | 'bookId',
    ExtArgs['result']['comment']
  >;
  export type CommentInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    book?: boolean | BookDefaultArgs<ExtArgs>;
  };
  export type CommentIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    book?: boolean | BookDefaultArgs<ExtArgs>;
  };
  export type CommentIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    book?: boolean | BookDefaultArgs<ExtArgs>;
  };

  export type $CommentPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Comment';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      book: Prisma.$BookPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        content: string;
        rating: number | null;
        createdAt: Date;
        userId: string;
        bookId: string;
      },
      ExtArgs['result']['comment']
    >;
    composites: {};
  };

  type CommentGetPayload<
    S extends boolean | null | undefined | CommentDefaultArgs,
  > = $Result.GetResult<Prisma.$CommentPayload, S>;

  type CommentCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CommentCountAggregateInputType | true;
  };

  export interface CommentDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Comment'];
      meta: { name: 'Comment' };
    };
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(
      args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(
      args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     *
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CommentFindManyArgs>(
      args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     *
     */
    create<T extends CommentCreateArgs>(
      args: SelectSubset<T, CommentCreateArgs<ExtArgs>>
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CommentCreateManyArgs>(
      args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     *
     */
    delete<T extends CommentDeleteArgs>(
      args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CommentUpdateArgs>(
      args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CommentDeleteManyArgs>(
      args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CommentUpdateManyArgs>(
      args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(
      args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
     **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 user
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CommentAggregateArgs>(
      args: Subset<T, CommentAggregateArgs>
    ): Prisma.PrismaPromise<GetCommentAggregateType<T>>;

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetCommentGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Comment model
     */
    readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    book<T extends BookDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, BookDefaultArgs<ExtArgs>>
    ): Prisma__BookClient<
      | $Result.GetResult<
          Prisma.$BookPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<'Comment', 'String'>;
    readonly content: FieldRef<'Comment', 'String'>;
    readonly rating: FieldRef<'Comment', 'Int'>;
    readonly createdAt: FieldRef<'Comment', 'DateTime'>;
    readonly userId: FieldRef<'Comment', 'String'>;
    readonly bookId: FieldRef<'Comment', 'String'>;
  }

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput;
  };

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput;
  };

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     */
    orderBy?:
      | CommentOrderByWithRelationInput
      | CommentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[];
  };

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     */
    orderBy?:
      | CommentOrderByWithRelationInput
      | CommentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[];
  };

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     */
    orderBy?:
      | CommentOrderByWithRelationInput
      | CommentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     */
    skip?: number;
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[];
  };

  /**
   * Comment create
   */
  export type CommentCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>;
  };

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Comment update
   */
  export type CommentUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>;
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput;
  };

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>;
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput;
    /**
     * Limit how many Comments to update.
     */
    limit?: number;
  };

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>;
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput;
    /**
     * Limit how many Comments to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput;
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>;
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>;
  };

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput;
  };

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput;
    /**
     * Limit how many Comments to delete.
     */
    limit?: number;
  };

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
  };

  /**
   * Model Like
   */

  export type AggregateLike = {
    _count: LikeCountAggregateOutputType | null;
    _min: LikeMinAggregateOutputType | null;
    _max: LikeMaxAggregateOutputType | null;
  };

  export type LikeMinAggregateOutputType = {
    userId: string | null;
    bookId: string | null;
    createdAt: Date | null;
  };

  export type LikeMaxAggregateOutputType = {
    userId: string | null;
    bookId: string | null;
    createdAt: Date | null;
  };

  export type LikeCountAggregateOutputType = {
    userId: number;
    bookId: number;
    createdAt: number;
    _all: number;
  };

  export type LikeMinAggregateInputType = {
    userId?: true;
    bookId?: true;
    createdAt?: true;
  };

  export type LikeMaxAggregateInputType = {
    userId?: true;
    bookId?: true;
    createdAt?: true;
  };

  export type LikeCountAggregateInputType = {
    userId?: true;
    bookId?: true;
    createdAt?: true;
    _all?: true;
  };

  export type LikeAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Like to aggregate.
     */
    where?: LikeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: LikeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Likes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Likes
     **/
    _count?: true | LikeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: LikeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: LikeMaxAggregateInputType;
  };

  export type GetLikeAggregateType<T extends LikeAggregateArgs> = {
    [P in keyof T & keyof AggregateLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLike[P]>
      : GetScalarType<T[P], AggregateLike[P]>;
  };

  export type LikeGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: LikeWhereInput;
    orderBy?:
      | LikeOrderByWithAggregationInput
      | LikeOrderByWithAggregationInput[];
    by: LikeScalarFieldEnum[] | LikeScalarFieldEnum;
    having?: LikeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LikeCountAggregateInputType | true;
    _min?: LikeMinAggregateInputType;
    _max?: LikeMaxAggregateInputType;
  };

  export type LikeGroupByOutputType = {
    userId: string;
    bookId: string;
    createdAt: Date;
    _count: LikeCountAggregateOutputType | null;
    _min: LikeMinAggregateOutputType | null;
    _max: LikeMaxAggregateOutputType | null;
  };

  type GetLikeGroupByPayload<T extends LikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikeGroupByOutputType, T['by']> & {
        [P in keyof T & keyof LikeGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], LikeGroupByOutputType[P]>
          : GetScalarType<T[P], LikeGroupByOutputType[P]>;
      }
    >
  >;

  export type LikeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      userId?: boolean;
      bookId?: boolean;
      createdAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      book?: boolean | BookDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['like']
  >;

  export type LikeSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      userId?: boolean;
      bookId?: boolean;
      createdAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      book?: boolean | BookDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['like']
  >;

  export type LikeSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      userId?: boolean;
      bookId?: boolean;
      createdAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      book?: boolean | BookDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['like']
  >;

  export type LikeSelectScalar = {
    userId?: boolean;
    bookId?: boolean;
    createdAt?: boolean;
  };

  export type LikeOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'userId' | 'bookId' | 'createdAt',
    ExtArgs['result']['like']
  >;
  export type LikeInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    book?: boolean | BookDefaultArgs<ExtArgs>;
  };
  export type LikeIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    book?: boolean | BookDefaultArgs<ExtArgs>;
  };
  export type LikeIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    book?: boolean | BookDefaultArgs<ExtArgs>;
  };

  export type $LikePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Like';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      book: Prisma.$BookPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        userId: string;
        bookId: string;
        createdAt: Date;
      },
      ExtArgs['result']['like']
    >;
    composites: {};
  };

  type LikeGetPayload<S extends boolean | null | undefined | LikeDefaultArgs> =
    $Result.GetResult<Prisma.$LikePayload, S>;

  type LikeCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<LikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LikeCountAggregateInputType | true;
  };

  export interface LikeDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Like'];
      meta: { name: 'Like' };
    };
    /**
     * Find zero or one Like that matches the filter.
     * @param {LikeFindUniqueArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikeFindUniqueArgs>(
      args: SelectSubset<T, LikeFindUniqueArgs<ExtArgs>>
    ): Prisma__LikeClient<
      $Result.GetResult<
        Prisma.$LikePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Like that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LikeFindUniqueOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikeFindUniqueOrThrowArgs>(
      args: SelectSubset<T, LikeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LikeClient<
      $Result.GetResult<
        Prisma.$LikePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Like that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikeFindFirstArgs>(
      args?: SelectSubset<T, LikeFindFirstArgs<ExtArgs>>
    ): Prisma__LikeClient<
      $Result.GetResult<
        Prisma.$LikePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Like that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LikeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LikeClient<
      $Result.GetResult<
        Prisma.$LikePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.like.findMany()
     *
     * // Get first 10 Likes
     * const likes = await prisma.like.findMany({ take: 10 })
     *
     * // Only select the `userId`
     * const likeWithUserIdOnly = await prisma.like.findMany({ select: { userId: true } })
     *
     */
    findMany<T extends LikeFindManyArgs>(
      args?: SelectSubset<T, LikeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LikePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Like.
     * @param {LikeCreateArgs} args - Arguments to create a Like.
     * @example
     * // Create one Like
     * const Like = await prisma.like.create({
     *   data: {
     *     // ... data to create a Like
     *   }
     * })
     *
     */
    create<T extends LikeCreateArgs>(
      args: SelectSubset<T, LikeCreateArgs<ExtArgs>>
    ): Prisma__LikeClient<
      $Result.GetResult<
        Prisma.$LikePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Likes.
     * @param {LikeCreateManyArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LikeCreateManyArgs>(
      args?: SelectSubset<T, LikeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Likes and returns the data saved in the database.
     * @param {LikeCreateManyAndReturnArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Likes and only return the `userId`
     * const likeWithUserIdOnly = await prisma.like.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LikeCreateManyAndReturnArgs>(
      args?: SelectSubset<T, LikeCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LikePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Like.
     * @param {LikeDeleteArgs} args - Arguments to delete one Like.
     * @example
     * // Delete one Like
     * const Like = await prisma.like.delete({
     *   where: {
     *     // ... filter to delete one Like
     *   }
     * })
     *
     */
    delete<T extends LikeDeleteArgs>(
      args: SelectSubset<T, LikeDeleteArgs<ExtArgs>>
    ): Prisma__LikeClient<
      $Result.GetResult<
        Prisma.$LikePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Like.
     * @param {LikeUpdateArgs} args - Arguments to update one Like.
     * @example
     * // Update one Like
     * const like = await prisma.like.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LikeUpdateArgs>(
      args: SelectSubset<T, LikeUpdateArgs<ExtArgs>>
    ): Prisma__LikeClient<
      $Result.GetResult<
        Prisma.$LikePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Likes.
     * @param {LikeDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.like.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LikeDeleteManyArgs>(
      args?: SelectSubset<T, LikeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LikeUpdateManyArgs>(
      args: SelectSubset<T, LikeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Likes and returns the data updated in the database.
     * @param {LikeUpdateManyAndReturnArgs} args - Arguments to update many Likes.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Likes and only return the `userId`
     * const likeWithUserIdOnly = await prisma.like.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends LikeUpdateManyAndReturnArgs>(
      args: SelectSubset<T, LikeUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LikePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Like.
     * @param {LikeUpsertArgs} args - Arguments to update or create a Like.
     * @example
     * // Update or create a Like
     * const like = await prisma.like.upsert({
     *   create: {
     *     // ... data to create a Like
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Like we want to update
     *   }
     * })
     */
    upsert<T extends LikeUpsertArgs>(
      args: SelectSubset<T, LikeUpsertArgs<ExtArgs>>
    ): Prisma__LikeClient<
      $Result.GetResult<
        Prisma.$LikePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.like.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
     **/
    count<T extends LikeCountArgs>(
      args?: Subset<T, LikeCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikeCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 user
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends LikeAggregateArgs>(
      args: Subset<T, LikeAggregateArgs>
    ): Prisma.PrismaPromise<GetLikeAggregateType<T>>;

    /**
     * Group by Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends LikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikeGroupByArgs['orderBy'] }
        : { orderBy?: LikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, LikeGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetLikeGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Like model
     */
    readonly fields: LikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Like.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikeClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    book<T extends BookDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, BookDefaultArgs<ExtArgs>>
    ): Prisma__BookClient<
      | $Result.GetResult<
          Prisma.$BookPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Like model
   */
  interface LikeFieldRefs {
    readonly userId: FieldRef<'Like', 'String'>;
    readonly bookId: FieldRef<'Like', 'String'>;
    readonly createdAt: FieldRef<'Like', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Like findUnique
   */
  export type LikeFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null;
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput;
  };

  /**
   * Like findUniqueOrThrow
   */
  export type LikeFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null;
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput;
  };

  /**
   * Like findFirst
   */
  export type LikeFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null;
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Likes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[];
  };

  /**
   * Like findFirstOrThrow
   */
  export type LikeFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null;
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Likes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[];
  };

  /**
   * Like findMany
   */
  export type LikeFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null;
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Likes.
     */
    cursor?: LikeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Likes.
     */
    skip?: number;
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[];
  };

  /**
   * Like create
   */
  export type LikeCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null;
    /**
     * The data needed to create a Like.
     */
    data: XOR<LikeCreateInput, LikeUncheckedCreateInput>;
  };

  /**
   * Like createMany
   */
  export type LikeCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Likes.
     */
    data: LikeCreateManyInput | LikeCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Like createManyAndReturn
   */
  export type LikeCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null;
    /**
     * The data used to create many Likes.
     */
    data: LikeCreateManyInput | LikeCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Like update
   */
  export type LikeUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null;
    /**
     * The data needed to update a Like.
     */
    data: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>;
    /**
     * Choose, which Like to update.
     */
    where: LikeWhereUniqueInput;
  };

  /**
   * Like updateMany
   */
  export type LikeUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Likes.
     */
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyInput>;
    /**
     * Filter which Likes to update
     */
    where?: LikeWhereInput;
    /**
     * Limit how many Likes to update.
     */
    limit?: number;
  };

  /**
   * Like updateManyAndReturn
   */
  export type LikeUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null;
    /**
     * The data used to update Likes.
     */
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyInput>;
    /**
     * Filter which Likes to update
     */
    where?: LikeWhereInput;
    /**
     * Limit how many Likes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Like upsert
   */
  export type LikeUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null;
    /**
     * The filter to search for the Like to update in case it exists.
     */
    where: LikeWhereUniqueInput;
    /**
     * In case the Like found by the `where` argument doesn't exist, create a new Like with this data.
     */
    create: XOR<LikeCreateInput, LikeUncheckedCreateInput>;
    /**
     * In case the Like was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>;
  };

  /**
   * Like delete
   */
  export type LikeDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null;
    /**
     * Filter which Like to delete.
     */
    where: LikeWhereUniqueInput;
  };

  /**
   * Like deleteMany
   */
  export type LikeDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Likes to delete
     */
    where?: LikeWhereInput;
    /**
     * Limit how many Likes to delete.
     */
    limit?: number;
  };

  /**
   * Like without action
   */
  export type LikeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null;
  };

  /**
   * Model Favorite
   */

  export type AggregateFavorite = {
    _count: FavoriteCountAggregateOutputType | null;
    _min: FavoriteMinAggregateOutputType | null;
    _max: FavoriteMaxAggregateOutputType | null;
  };

  export type FavoriteMinAggregateOutputType = {
    userId: string | null;
    bookId: string | null;
    createdAt: Date | null;
  };

  export type FavoriteMaxAggregateOutputType = {
    userId: string | null;
    bookId: string | null;
    createdAt: Date | null;
  };

  export type FavoriteCountAggregateOutputType = {
    userId: number;
    bookId: number;
    createdAt: number;
    _all: number;
  };

  export type FavoriteMinAggregateInputType = {
    userId?: true;
    bookId?: true;
    createdAt?: true;
  };

  export type FavoriteMaxAggregateInputType = {
    userId?: true;
    bookId?: true;
    createdAt?: true;
  };

  export type FavoriteCountAggregateInputType = {
    userId?: true;
    bookId?: true;
    createdAt?: true;
    _all?: true;
  };

  export type FavoriteAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Favorite to aggregate.
     */
    where?: FavoriteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Favorites to fetch.
     */
    orderBy?:
      | FavoriteOrderByWithRelationInput
      | FavoriteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: FavoriteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Favorites.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Favorites
     **/
    _count?: true | FavoriteCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: FavoriteMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: FavoriteMaxAggregateInputType;
  };

  export type GetFavoriteAggregateType<T extends FavoriteAggregateArgs> = {
    [P in keyof T & keyof AggregateFavorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorite[P]>
      : GetScalarType<T[P], AggregateFavorite[P]>;
  };

  export type FavoriteGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FavoriteWhereInput;
    orderBy?:
      | FavoriteOrderByWithAggregationInput
      | FavoriteOrderByWithAggregationInput[];
    by: FavoriteScalarFieldEnum[] | FavoriteScalarFieldEnum;
    having?: FavoriteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FavoriteCountAggregateInputType | true;
    _min?: FavoriteMinAggregateInputType;
    _max?: FavoriteMaxAggregateInputType;
  };

  export type FavoriteGroupByOutputType = {
    userId: string;
    bookId: string;
    createdAt: Date;
    _count: FavoriteCountAggregateOutputType | null;
    _min: FavoriteMinAggregateOutputType | null;
    _max: FavoriteMaxAggregateOutputType | null;
  };

  type GetFavoriteGroupByPayload<T extends FavoriteGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<FavoriteGroupByOutputType, T['by']> & {
          [P in keyof T & keyof FavoriteGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteGroupByOutputType[P]>;
        }
      >
    >;

  export type FavoriteSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      userId?: boolean;
      bookId?: boolean;
      createdAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      book?: boolean | BookDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['favorite']
  >;

  export type FavoriteSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      userId?: boolean;
      bookId?: boolean;
      createdAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      book?: boolean | BookDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['favorite']
  >;

  export type FavoriteSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      userId?: boolean;
      bookId?: boolean;
      createdAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      book?: boolean | BookDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['favorite']
  >;

  export type FavoriteSelectScalar = {
    userId?: boolean;
    bookId?: boolean;
    createdAt?: boolean;
  };

  export type FavoriteOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'userId' | 'bookId' | 'createdAt',
    ExtArgs['result']['favorite']
  >;
  export type FavoriteInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    book?: boolean | BookDefaultArgs<ExtArgs>;
  };
  export type FavoriteIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    book?: boolean | BookDefaultArgs<ExtArgs>;
  };
  export type FavoriteIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    book?: boolean | BookDefaultArgs<ExtArgs>;
  };

  export type $FavoritePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Favorite';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      book: Prisma.$BookPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        userId: string;
        bookId: string;
        createdAt: Date;
      },
      ExtArgs['result']['favorite']
    >;
    composites: {};
  };

  type FavoriteGetPayload<
    S extends boolean | null | undefined | FavoriteDefaultArgs,
  > = $Result.GetResult<Prisma.$FavoritePayload, S>;

  type FavoriteCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<FavoriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FavoriteCountAggregateInputType | true;
  };

  export interface FavoriteDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Favorite'];
      meta: { name: 'Favorite' };
    };
    /**
     * Find zero or one Favorite that matches the filter.
     * @param {FavoriteFindUniqueArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteFindUniqueArgs>(
      args: SelectSubset<T, FavoriteFindUniqueArgs<ExtArgs>>
    ): Prisma__FavoriteClient<
      $Result.GetResult<
        Prisma.$FavoritePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Favorite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriteFindUniqueOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteFindUniqueOrThrowArgs>(
      args: SelectSubset<T, FavoriteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FavoriteClient<
      $Result.GetResult<
        Prisma.$FavoritePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Favorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteFindFirstArgs>(
      args?: SelectSubset<T, FavoriteFindFirstArgs<ExtArgs>>
    ): Prisma__FavoriteClient<
      $Result.GetResult<
        Prisma.$FavoritePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Favorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FavoriteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FavoriteClient<
      $Result.GetResult<
        Prisma.$FavoritePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorites
     * const favorites = await prisma.favorite.findMany()
     *
     * // Get first 10 Favorites
     * const favorites = await prisma.favorite.findMany({ take: 10 })
     *
     * // Only select the `userId`
     * const favoriteWithUserIdOnly = await prisma.favorite.findMany({ select: { userId: true } })
     *
     */
    findMany<T extends FavoriteFindManyArgs>(
      args?: SelectSubset<T, FavoriteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$FavoritePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Favorite.
     * @param {FavoriteCreateArgs} args - Arguments to create a Favorite.
     * @example
     * // Create one Favorite
     * const Favorite = await prisma.favorite.create({
     *   data: {
     *     // ... data to create a Favorite
     *   }
     * })
     *
     */
    create<T extends FavoriteCreateArgs>(
      args: SelectSubset<T, FavoriteCreateArgs<ExtArgs>>
    ): Prisma__FavoriteClient<
      $Result.GetResult<
        Prisma.$FavoritePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Favorites.
     * @param {FavoriteCreateManyArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends FavoriteCreateManyArgs>(
      args?: SelectSubset<T, FavoriteCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Favorites and returns the data saved in the database.
     * @param {FavoriteCreateManyAndReturnArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Favorites and only return the `userId`
     * const favoriteWithUserIdOnly = await prisma.favorite.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends FavoriteCreateManyAndReturnArgs>(
      args?: SelectSubset<T, FavoriteCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$FavoritePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Favorite.
     * @param {FavoriteDeleteArgs} args - Arguments to delete one Favorite.
     * @example
     * // Delete one Favorite
     * const Favorite = await prisma.favorite.delete({
     *   where: {
     *     // ... filter to delete one Favorite
     *   }
     * })
     *
     */
    delete<T extends FavoriteDeleteArgs>(
      args: SelectSubset<T, FavoriteDeleteArgs<ExtArgs>>
    ): Prisma__FavoriteClient<
      $Result.GetResult<
        Prisma.$FavoritePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Favorite.
     * @param {FavoriteUpdateArgs} args - Arguments to update one Favorite.
     * @example
     * // Update one Favorite
     * const favorite = await prisma.favorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends FavoriteUpdateArgs>(
      args: SelectSubset<T, FavoriteUpdateArgs<ExtArgs>>
    ): Prisma__FavoriteClient<
      $Result.GetResult<
        Prisma.$FavoritePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Favorites.
     * @param {FavoriteDeleteManyArgs} args - Arguments to filter Favorites to delete.
     * @example
     * // Delete a few Favorites
     * const { count } = await prisma.favorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends FavoriteDeleteManyArgs>(
      args?: SelectSubset<T, FavoriteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends FavoriteUpdateManyArgs>(
      args: SelectSubset<T, FavoriteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Favorites and returns the data updated in the database.
     * @param {FavoriteUpdateManyAndReturnArgs} args - Arguments to update many Favorites.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Favorites and only return the `userId`
     * const favoriteWithUserIdOnly = await prisma.favorite.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends FavoriteUpdateManyAndReturnArgs>(
      args: SelectSubset<T, FavoriteUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$FavoritePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Favorite.
     * @param {FavoriteUpsertArgs} args - Arguments to update or create a Favorite.
     * @example
     * // Update or create a Favorite
     * const favorite = await prisma.favorite.upsert({
     *   create: {
     *     // ... data to create a Favorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorite we want to update
     *   }
     * })
     */
    upsert<T extends FavoriteUpsertArgs>(
      args: SelectSubset<T, FavoriteUpsertArgs<ExtArgs>>
    ): Prisma__FavoriteClient<
      $Result.GetResult<
        Prisma.$FavoritePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCountArgs} args - Arguments to filter Favorites to count.
     * @example
     * // Count the number of Favorites
     * const count = await prisma.favorite.count({
     *   where: {
     *     // ... the filter for the Favorites we want to count
     *   }
     * })
     **/
    count<T extends FavoriteCountArgs>(
      args?: Subset<T, FavoriteCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 user
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends FavoriteAggregateArgs>(
      args: Subset<T, FavoriteAggregateArgs>
    ): Prisma.PrismaPromise<GetFavoriteAggregateType<T>>;

    /**
     * Group by Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends FavoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, FavoriteGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetFavoriteGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Favorite model
     */
    readonly fields: FavoriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    book<T extends BookDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, BookDefaultArgs<ExtArgs>>
    ): Prisma__BookClient<
      | $Result.GetResult<
          Prisma.$BookPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Favorite model
   */
  interface FavoriteFieldRefs {
    readonly userId: FieldRef<'Favorite', 'String'>;
    readonly bookId: FieldRef<'Favorite', 'String'>;
    readonly createdAt: FieldRef<'Favorite', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Favorite findUnique
   */
  export type FavoriteFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null;
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput;
  };

  /**
   * Favorite findUniqueOrThrow
   */
  export type FavoriteFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null;
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput;
  };

  /**
   * Favorite findFirst
   */
  export type FavoriteFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null;
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Favorites to fetch.
     */
    orderBy?:
      | FavoriteOrderByWithRelationInput
      | FavoriteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Favorites.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[];
  };

  /**
   * Favorite findFirstOrThrow
   */
  export type FavoriteFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null;
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Favorites to fetch.
     */
    orderBy?:
      | FavoriteOrderByWithRelationInput
      | FavoriteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Favorites.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[];
  };

  /**
   * Favorite findMany
   */
  export type FavoriteFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null;
    /**
     * Filter, which Favorites to fetch.
     */
    where?: FavoriteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Favorites to fetch.
     */
    orderBy?:
      | FavoriteOrderByWithRelationInput
      | FavoriteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Favorites.
     */
    cursor?: FavoriteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Favorites.
     */
    skip?: number;
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[];
  };

  /**
   * Favorite create
   */
  export type FavoriteCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null;
    /**
     * The data needed to create a Favorite.
     */
    data: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>;
  };

  /**
   * Favorite createMany
   */
  export type FavoriteCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Favorite createManyAndReturn
   */
  export type FavoriteCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null;
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Favorite update
   */
  export type FavoriteUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null;
    /**
     * The data needed to update a Favorite.
     */
    data: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>;
    /**
     * Choose, which Favorite to update.
     */
    where: FavoriteWhereUniqueInput;
  };

  /**
   * Favorite updateMany
   */
  export type FavoriteUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Favorites.
     */
    data: XOR<
      FavoriteUpdateManyMutationInput,
      FavoriteUncheckedUpdateManyInput
    >;
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput;
    /**
     * Limit how many Favorites to update.
     */
    limit?: number;
  };

  /**
   * Favorite updateManyAndReturn
   */
  export type FavoriteUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null;
    /**
     * The data used to update Favorites.
     */
    data: XOR<
      FavoriteUpdateManyMutationInput,
      FavoriteUncheckedUpdateManyInput
    >;
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput;
    /**
     * Limit how many Favorites to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Favorite upsert
   */
  export type FavoriteUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null;
    /**
     * The filter to search for the Favorite to update in case it exists.
     */
    where: FavoriteWhereUniqueInput;
    /**
     * In case the Favorite found by the `where` argument doesn't exist, create a new Favorite with this data.
     */
    create: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>;
    /**
     * In case the Favorite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>;
  };

  /**
   * Favorite delete
   */
  export type FavoriteDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null;
    /**
     * Filter which Favorite to delete.
     */
    where: FavoriteWhereUniqueInput;
  };

  /**
   * Favorite deleteMany
   */
  export type FavoriteDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Favorites to delete
     */
    where?: FavoriteWhereInput;
    /**
     * Limit how many Favorites to delete.
     */
    limit?: number;
  };

  /**
   * Favorite without action
   */
  export type FavoriteDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null;
  };

  /**
   * Model ReadingProgress
   */

  export type AggregateReadingProgress = {
    _count: ReadingProgressCountAggregateOutputType | null;
    _avg: ReadingProgressAvgAggregateOutputType | null;
    _sum: ReadingProgressSumAggregateOutputType | null;
    _min: ReadingProgressMinAggregateOutputType | null;
    _max: ReadingProgressMaxAggregateOutputType | null;
  };

  export type ReadingProgressAvgAggregateOutputType = {
    currentPage: number | null;
    totalPages: number | null;
  };

  export type ReadingProgressSumAggregateOutputType = {
    currentPage: number | null;
    totalPages: number | null;
  };

  export type ReadingProgressMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    bookId: string | null;
    currentPage: number | null;
    totalPages: number | null;
    isFinished: boolean | null;
    updatedAt: Date | null;
  };

  export type ReadingProgressMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    bookId: string | null;
    currentPage: number | null;
    totalPages: number | null;
    isFinished: boolean | null;
    updatedAt: Date | null;
  };

  export type ReadingProgressCountAggregateOutputType = {
    id: number;
    userId: number;
    bookId: number;
    currentPage: number;
    totalPages: number;
    isFinished: number;
    updatedAt: number;
    _all: number;
  };

  export type ReadingProgressAvgAggregateInputType = {
    currentPage?: true;
    totalPages?: true;
  };

  export type ReadingProgressSumAggregateInputType = {
    currentPage?: true;
    totalPages?: true;
  };

  export type ReadingProgressMinAggregateInputType = {
    id?: true;
    userId?: true;
    bookId?: true;
    currentPage?: true;
    totalPages?: true;
    isFinished?: true;
    updatedAt?: true;
  };

  export type ReadingProgressMaxAggregateInputType = {
    id?: true;
    userId?: true;
    bookId?: true;
    currentPage?: true;
    totalPages?: true;
    isFinished?: true;
    updatedAt?: true;
  };

  export type ReadingProgressCountAggregateInputType = {
    id?: true;
    userId?: true;
    bookId?: true;
    currentPage?: true;
    totalPages?: true;
    isFinished?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type ReadingProgressAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ReadingProgress to aggregate.
     */
    where?: ReadingProgressWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ReadingProgresses to fetch.
     */
    orderBy?:
      | ReadingProgressOrderByWithRelationInput
      | ReadingProgressOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ReadingProgressWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ReadingProgresses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ReadingProgresses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ReadingProgresses
     **/
    _count?: true | ReadingProgressCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ReadingProgressAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ReadingProgressSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ReadingProgressMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ReadingProgressMaxAggregateInputType;
  };

  export type GetReadingProgressAggregateType<
    T extends ReadingProgressAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateReadingProgress]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReadingProgress[P]>
      : GetScalarType<T[P], AggregateReadingProgress[P]>;
  };

  export type ReadingProgressGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ReadingProgressWhereInput;
    orderBy?:
      | ReadingProgressOrderByWithAggregationInput
      | ReadingProgressOrderByWithAggregationInput[];
    by: ReadingProgressScalarFieldEnum[] | ReadingProgressScalarFieldEnum;
    having?: ReadingProgressScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReadingProgressCountAggregateInputType | true;
    _avg?: ReadingProgressAvgAggregateInputType;
    _sum?: ReadingProgressSumAggregateInputType;
    _min?: ReadingProgressMinAggregateInputType;
    _max?: ReadingProgressMaxAggregateInputType;
  };

  export type ReadingProgressGroupByOutputType = {
    id: string;
    userId: string;
    bookId: string;
    currentPage: number;
    totalPages: number | null;
    isFinished: boolean;
    updatedAt: Date;
    _count: ReadingProgressCountAggregateOutputType | null;
    _avg: ReadingProgressAvgAggregateOutputType | null;
    _sum: ReadingProgressSumAggregateOutputType | null;
    _min: ReadingProgressMinAggregateOutputType | null;
    _max: ReadingProgressMaxAggregateOutputType | null;
  };

  type GetReadingProgressGroupByPayload<T extends ReadingProgressGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ReadingProgressGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof ReadingProgressGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReadingProgressGroupByOutputType[P]>
            : GetScalarType<T[P], ReadingProgressGroupByOutputType[P]>;
        }
      >
    >;

  export type ReadingProgressSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      bookId?: boolean;
      currentPage?: boolean;
      totalPages?: boolean;
      isFinished?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      book?: boolean | BookDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['readingProgress']
  >;

  export type ReadingProgressSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      bookId?: boolean;
      currentPage?: boolean;
      totalPages?: boolean;
      isFinished?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      book?: boolean | BookDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['readingProgress']
  >;

  export type ReadingProgressSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      bookId?: boolean;
      currentPage?: boolean;
      totalPages?: boolean;
      isFinished?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      book?: boolean | BookDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['readingProgress']
  >;

  export type ReadingProgressSelectScalar = {
    id?: boolean;
    userId?: boolean;
    bookId?: boolean;
    currentPage?: boolean;
    totalPages?: boolean;
    isFinished?: boolean;
    updatedAt?: boolean;
  };

  export type ReadingProgressOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'userId'
    | 'bookId'
    | 'currentPage'
    | 'totalPages'
    | 'isFinished'
    | 'updatedAt',
    ExtArgs['result']['readingProgress']
  >;
  export type ReadingProgressInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    book?: boolean | BookDefaultArgs<ExtArgs>;
  };
  export type ReadingProgressIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    book?: boolean | BookDefaultArgs<ExtArgs>;
  };
  export type ReadingProgressIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    book?: boolean | BookDefaultArgs<ExtArgs>;
  };

  export type $ReadingProgressPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'ReadingProgress';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      book: Prisma.$BookPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        bookId: string;
        currentPage: number;
        totalPages: number | null;
        isFinished: boolean;
        updatedAt: Date;
      },
      ExtArgs['result']['readingProgress']
    >;
    composites: {};
  };

  type ReadingProgressGetPayload<
    S extends boolean | null | undefined | ReadingProgressDefaultArgs,
  > = $Result.GetResult<Prisma.$ReadingProgressPayload, S>;

  type ReadingProgressCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    ReadingProgressFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: ReadingProgressCountAggregateInputType | true;
  };

  export interface ReadingProgressDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['ReadingProgress'];
      meta: { name: 'ReadingProgress' };
    };
    /**
     * Find zero or one ReadingProgress that matches the filter.
     * @param {ReadingProgressFindUniqueArgs} args - Arguments to find a ReadingProgress
     * @example
     * // Get one ReadingProgress
     * const readingProgress = await prisma.readingProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReadingProgressFindUniqueArgs>(
      args: SelectSubset<T, ReadingProgressFindUniqueArgs<ExtArgs>>
    ): Prisma__ReadingProgressClient<
      $Result.GetResult<
        Prisma.$ReadingProgressPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one ReadingProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReadingProgressFindUniqueOrThrowArgs} args - Arguments to find a ReadingProgress
     * @example
     * // Get one ReadingProgress
     * const readingProgress = await prisma.readingProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReadingProgressFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ReadingProgressFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ReadingProgressClient<
      $Result.GetResult<
        Prisma.$ReadingProgressPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ReadingProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingProgressFindFirstArgs} args - Arguments to find a ReadingProgress
     * @example
     * // Get one ReadingProgress
     * const readingProgress = await prisma.readingProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReadingProgressFindFirstArgs>(
      args?: SelectSubset<T, ReadingProgressFindFirstArgs<ExtArgs>>
    ): Prisma__ReadingProgressClient<
      $Result.GetResult<
        Prisma.$ReadingProgressPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ReadingProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingProgressFindFirstOrThrowArgs} args - Arguments to find a ReadingProgress
     * @example
     * // Get one ReadingProgress
     * const readingProgress = await prisma.readingProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReadingProgressFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ReadingProgressFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ReadingProgressClient<
      $Result.GetResult<
        Prisma.$ReadingProgressPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more ReadingProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReadingProgresses
     * const readingProgresses = await prisma.readingProgress.findMany()
     *
     * // Get first 10 ReadingProgresses
     * const readingProgresses = await prisma.readingProgress.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const readingProgressWithIdOnly = await prisma.readingProgress.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ReadingProgressFindManyArgs>(
      args?: SelectSubset<T, ReadingProgressFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ReadingProgressPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a ReadingProgress.
     * @param {ReadingProgressCreateArgs} args - Arguments to create a ReadingProgress.
     * @example
     * // Create one ReadingProgress
     * const ReadingProgress = await prisma.readingProgress.create({
     *   data: {
     *     // ... data to create a ReadingProgress
     *   }
     * })
     *
     */
    create<T extends ReadingProgressCreateArgs>(
      args: SelectSubset<T, ReadingProgressCreateArgs<ExtArgs>>
    ): Prisma__ReadingProgressClient<
      $Result.GetResult<
        Prisma.$ReadingProgressPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many ReadingProgresses.
     * @param {ReadingProgressCreateManyArgs} args - Arguments to create many ReadingProgresses.
     * @example
     * // Create many ReadingProgresses
     * const readingProgress = await prisma.readingProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ReadingProgressCreateManyArgs>(
      args?: SelectSubset<T, ReadingProgressCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many ReadingProgresses and returns the data saved in the database.
     * @param {ReadingProgressCreateManyAndReturnArgs} args - Arguments to create many ReadingProgresses.
     * @example
     * // Create many ReadingProgresses
     * const readingProgress = await prisma.readingProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ReadingProgresses and only return the `id`
     * const readingProgressWithIdOnly = await prisma.readingProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ReadingProgressCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ReadingProgressCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ReadingProgressPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a ReadingProgress.
     * @param {ReadingProgressDeleteArgs} args - Arguments to delete one ReadingProgress.
     * @example
     * // Delete one ReadingProgress
     * const ReadingProgress = await prisma.readingProgress.delete({
     *   where: {
     *     // ... filter to delete one ReadingProgress
     *   }
     * })
     *
     */
    delete<T extends ReadingProgressDeleteArgs>(
      args: SelectSubset<T, ReadingProgressDeleteArgs<ExtArgs>>
    ): Prisma__ReadingProgressClient<
      $Result.GetResult<
        Prisma.$ReadingProgressPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one ReadingProgress.
     * @param {ReadingProgressUpdateArgs} args - Arguments to update one ReadingProgress.
     * @example
     * // Update one ReadingProgress
     * const readingProgress = await prisma.readingProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ReadingProgressUpdateArgs>(
      args: SelectSubset<T, ReadingProgressUpdateArgs<ExtArgs>>
    ): Prisma__ReadingProgressClient<
      $Result.GetResult<
        Prisma.$ReadingProgressPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more ReadingProgresses.
     * @param {ReadingProgressDeleteManyArgs} args - Arguments to filter ReadingProgresses to delete.
     * @example
     * // Delete a few ReadingProgresses
     * const { count } = await prisma.readingProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ReadingProgressDeleteManyArgs>(
      args?: SelectSubset<T, ReadingProgressDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ReadingProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReadingProgresses
     * const readingProgress = await prisma.readingProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ReadingProgressUpdateManyArgs>(
      args: SelectSubset<T, ReadingProgressUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ReadingProgresses and returns the data updated in the database.
     * @param {ReadingProgressUpdateManyAndReturnArgs} args - Arguments to update many ReadingProgresses.
     * @example
     * // Update many ReadingProgresses
     * const readingProgress = await prisma.readingProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ReadingProgresses and only return the `id`
     * const readingProgressWithIdOnly = await prisma.readingProgress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ReadingProgressUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ReadingProgressUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ReadingProgressPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one ReadingProgress.
     * @param {ReadingProgressUpsertArgs} args - Arguments to update or create a ReadingProgress.
     * @example
     * // Update or create a ReadingProgress
     * const readingProgress = await prisma.readingProgress.upsert({
     *   create: {
     *     // ... data to create a ReadingProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReadingProgress we want to update
     *   }
     * })
     */
    upsert<T extends ReadingProgressUpsertArgs>(
      args: SelectSubset<T, ReadingProgressUpsertArgs<ExtArgs>>
    ): Prisma__ReadingProgressClient<
      $Result.GetResult<
        Prisma.$ReadingProgressPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of ReadingProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingProgressCountArgs} args - Arguments to filter ReadingProgresses to count.
     * @example
     * // Count the number of ReadingProgresses
     * const count = await prisma.readingProgress.count({
     *   where: {
     *     // ... the filter for the ReadingProgresses we want to count
     *   }
     * })
     **/
    count<T extends ReadingProgressCountArgs>(
      args?: Subset<T, ReadingProgressCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReadingProgressCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a ReadingProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 user
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ReadingProgressAggregateArgs>(
      args: Subset<T, ReadingProgressAggregateArgs>
    ): Prisma.PrismaPromise<GetReadingProgressAggregateType<T>>;

    /**
     * Group by ReadingProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingProgressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ReadingProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReadingProgressGroupByArgs['orderBy'] }
        : { orderBy?: ReadingProgressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ReadingProgressGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetReadingProgressGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ReadingProgress model
     */
    readonly fields: ReadingProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReadingProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReadingProgressClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    book<T extends BookDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, BookDefaultArgs<ExtArgs>>
    ): Prisma__BookClient<
      | $Result.GetResult<
          Prisma.$BookPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the ReadingProgress model
   */
  interface ReadingProgressFieldRefs {
    readonly id: FieldRef<'ReadingProgress', 'String'>;
    readonly userId: FieldRef<'ReadingProgress', 'String'>;
    readonly bookId: FieldRef<'ReadingProgress', 'String'>;
    readonly currentPage: FieldRef<'ReadingProgress', 'Int'>;
    readonly totalPages: FieldRef<'ReadingProgress', 'Int'>;
    readonly isFinished: FieldRef<'ReadingProgress', 'Boolean'>;
    readonly updatedAt: FieldRef<'ReadingProgress', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * ReadingProgress findUnique
   */
  export type ReadingProgressFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ReadingProgress
     */
    select?: ReadingProgressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ReadingProgress
     */
    omit?: ReadingProgressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingProgressInclude<ExtArgs> | null;
    /**
     * Filter, which ReadingProgress to fetch.
     */
    where: ReadingProgressWhereUniqueInput;
  };

  /**
   * ReadingProgress findUniqueOrThrow
   */
  export type ReadingProgressFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ReadingProgress
     */
    select?: ReadingProgressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ReadingProgress
     */
    omit?: ReadingProgressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingProgressInclude<ExtArgs> | null;
    /**
     * Filter, which ReadingProgress to fetch.
     */
    where: ReadingProgressWhereUniqueInput;
  };

  /**
   * ReadingProgress findFirst
   */
  export type ReadingProgressFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ReadingProgress
     */
    select?: ReadingProgressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ReadingProgress
     */
    omit?: ReadingProgressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingProgressInclude<ExtArgs> | null;
    /**
     * Filter, which ReadingProgress to fetch.
     */
    where?: ReadingProgressWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ReadingProgresses to fetch.
     */
    orderBy?:
      | ReadingProgressOrderByWithRelationInput
      | ReadingProgressOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ReadingProgresses.
     */
    cursor?: ReadingProgressWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ReadingProgresses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ReadingProgresses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ReadingProgresses.
     */
    distinct?:
      | ReadingProgressScalarFieldEnum
      | ReadingProgressScalarFieldEnum[];
  };

  /**
   * ReadingProgress findFirstOrThrow
   */
  export type ReadingProgressFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ReadingProgress
     */
    select?: ReadingProgressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ReadingProgress
     */
    omit?: ReadingProgressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingProgressInclude<ExtArgs> | null;
    /**
     * Filter, which ReadingProgress to fetch.
     */
    where?: ReadingProgressWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ReadingProgresses to fetch.
     */
    orderBy?:
      | ReadingProgressOrderByWithRelationInput
      | ReadingProgressOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ReadingProgresses.
     */
    cursor?: ReadingProgressWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ReadingProgresses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ReadingProgresses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ReadingProgresses.
     */
    distinct?:
      | ReadingProgressScalarFieldEnum
      | ReadingProgressScalarFieldEnum[];
  };

  /**
   * ReadingProgress findMany
   */
  export type ReadingProgressFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ReadingProgress
     */
    select?: ReadingProgressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ReadingProgress
     */
    omit?: ReadingProgressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingProgressInclude<ExtArgs> | null;
    /**
     * Filter, which ReadingProgresses to fetch.
     */
    where?: ReadingProgressWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ReadingProgresses to fetch.
     */
    orderBy?:
      | ReadingProgressOrderByWithRelationInput
      | ReadingProgressOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ReadingProgresses.
     */
    cursor?: ReadingProgressWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ReadingProgresses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ReadingProgresses.
     */
    skip?: number;
    distinct?:
      | ReadingProgressScalarFieldEnum
      | ReadingProgressScalarFieldEnum[];
  };

  /**
   * ReadingProgress create
   */
  export type ReadingProgressCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ReadingProgress
     */
    select?: ReadingProgressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ReadingProgress
     */
    omit?: ReadingProgressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingProgressInclude<ExtArgs> | null;
    /**
     * The data needed to create a ReadingProgress.
     */
    data: XOR<ReadingProgressCreateInput, ReadingProgressUncheckedCreateInput>;
  };

  /**
   * ReadingProgress createMany
   */
  export type ReadingProgressCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many ReadingProgresses.
     */
    data: ReadingProgressCreateManyInput | ReadingProgressCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ReadingProgress createManyAndReturn
   */
  export type ReadingProgressCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ReadingProgress
     */
    select?: ReadingProgressSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ReadingProgress
     */
    omit?: ReadingProgressOmit<ExtArgs> | null;
    /**
     * The data used to create many ReadingProgresses.
     */
    data: ReadingProgressCreateManyInput | ReadingProgressCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingProgressIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ReadingProgress update
   */
  export type ReadingProgressUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ReadingProgress
     */
    select?: ReadingProgressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ReadingProgress
     */
    omit?: ReadingProgressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingProgressInclude<ExtArgs> | null;
    /**
     * The data needed to update a ReadingProgress.
     */
    data: XOR<ReadingProgressUpdateInput, ReadingProgressUncheckedUpdateInput>;
    /**
     * Choose, which ReadingProgress to update.
     */
    where: ReadingProgressWhereUniqueInput;
  };

  /**
   * ReadingProgress updateMany
   */
  export type ReadingProgressUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update ReadingProgresses.
     */
    data: XOR<
      ReadingProgressUpdateManyMutationInput,
      ReadingProgressUncheckedUpdateManyInput
    >;
    /**
     * Filter which ReadingProgresses to update
     */
    where?: ReadingProgressWhereInput;
    /**
     * Limit how many ReadingProgresses to update.
     */
    limit?: number;
  };

  /**
   * ReadingProgress updateManyAndReturn
   */
  export type ReadingProgressUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ReadingProgress
     */
    select?: ReadingProgressSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ReadingProgress
     */
    omit?: ReadingProgressOmit<ExtArgs> | null;
    /**
     * The data used to update ReadingProgresses.
     */
    data: XOR<
      ReadingProgressUpdateManyMutationInput,
      ReadingProgressUncheckedUpdateManyInput
    >;
    /**
     * Filter which ReadingProgresses to update
     */
    where?: ReadingProgressWhereInput;
    /**
     * Limit how many ReadingProgresses to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingProgressIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ReadingProgress upsert
   */
  export type ReadingProgressUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ReadingProgress
     */
    select?: ReadingProgressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ReadingProgress
     */
    omit?: ReadingProgressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingProgressInclude<ExtArgs> | null;
    /**
     * The filter to search for the ReadingProgress to update in case it exists.
     */
    where: ReadingProgressWhereUniqueInput;
    /**
     * In case the ReadingProgress found by the `where` argument doesn't exist, create a new ReadingProgress with this data.
     */
    create: XOR<
      ReadingProgressCreateInput,
      ReadingProgressUncheckedCreateInput
    >;
    /**
     * In case the ReadingProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      ReadingProgressUpdateInput,
      ReadingProgressUncheckedUpdateInput
    >;
  };

  /**
   * ReadingProgress delete
   */
  export type ReadingProgressDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ReadingProgress
     */
    select?: ReadingProgressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ReadingProgress
     */
    omit?: ReadingProgressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingProgressInclude<ExtArgs> | null;
    /**
     * Filter which ReadingProgress to delete.
     */
    where: ReadingProgressWhereUniqueInput;
  };

  /**
   * ReadingProgress deleteMany
   */
  export type ReadingProgressDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ReadingProgresses to delete
     */
    where?: ReadingProgressWhereInput;
    /**
     * Limit how many ReadingProgresses to delete.
     */
    limit?: number;
  };

  /**
   * ReadingProgress without action
   */
  export type ReadingProgressDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ReadingProgress
     */
    select?: ReadingProgressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ReadingProgress
     */
    omit?: ReadingProgressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingProgressInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    password: 'password';
    fullName: 'fullName';
    gender: 'gender';
    birthDate: 'birthDate';
    avatarUrl: 'avatarUrl';
    resetToken: 'resetToken';
    resetTokenExpiry: 'resetTokenExpiry';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const BookScalarFieldEnum: {
    id: 'id';
    title: 'title';
    description: 'description';
    coverUrl: 'coverUrl';
    publishedAt: 'publishedAt';
    producerId: 'producerId';
    producerName: 'producerName';
    fileUrl: 'fileUrl';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type BookScalarFieldEnum =
    (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum];

  export const AuthorScalarFieldEnum: {
    id: 'id';
    name: 'name';
    bio: 'bio';
  };

  export type AuthorScalarFieldEnum =
    (typeof AuthorScalarFieldEnum)[keyof typeof AuthorScalarFieldEnum];

  export const BookAuthorScalarFieldEnum: {
    bookId: 'bookId';
    authorId: 'authorId';
  };

  export type BookAuthorScalarFieldEnum =
    (typeof BookAuthorScalarFieldEnum)[keyof typeof BookAuthorScalarFieldEnum];

  export const CategoryScalarFieldEnum: {
    id: 'id';
    name: 'name';
  };

  export type CategoryScalarFieldEnum =
    (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum];

  export const BookCategoryScalarFieldEnum: {
    bookId: 'bookId';
    categoryId: 'categoryId';
  };

  export type BookCategoryScalarFieldEnum =
    (typeof BookCategoryScalarFieldEnum)[keyof typeof BookCategoryScalarFieldEnum];

  export const CommentScalarFieldEnum: {
    id: 'id';
    content: 'content';
    rating: 'rating';
    createdAt: 'createdAt';
    userId: 'userId';
    bookId: 'bookId';
  };

  export type CommentScalarFieldEnum =
    (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum];

  export const LikeScalarFieldEnum: {
    userId: 'userId';
    bookId: 'bookId';
    createdAt: 'createdAt';
  };

  export type LikeScalarFieldEnum =
    (typeof LikeScalarFieldEnum)[keyof typeof LikeScalarFieldEnum];

  export const FavoriteScalarFieldEnum: {
    userId: 'userId';
    bookId: 'bookId';
    createdAt: 'createdAt';
  };

  export type FavoriteScalarFieldEnum =
    (typeof FavoriteScalarFieldEnum)[keyof typeof FavoriteScalarFieldEnum];

  export const ReadingProgressScalarFieldEnum: {
    id: 'id';
    userId: 'userId';
    bookId: 'bookId';
    currentPage: 'currentPage';
    totalPages: 'totalPages';
    isFinished: 'isFinished';
    updatedAt: 'updatedAt';
  };

  export type ReadingProgressScalarFieldEnum =
    (typeof ReadingProgressScalarFieldEnum)[keyof typeof ReadingProgressScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Gender'
  >;

  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Gender[]'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Boolean'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<'User'> | string;
    email?: StringFilter<'User'> | string;
    password?: StringFilter<'User'> | string;
    fullName?: StringFilter<'User'> | string;
    gender?: EnumGenderNullableFilter<'User'> | $Enums.Gender | null;
    birthDate?: DateTimeNullableFilter<'User'> | Date | string | null;
    avatarUrl?: StringNullableFilter<'User'> | string | null;
    resetToken?: StringNullableFilter<'User'> | string | null;
    resetTokenExpiry?: DateTimeNullableFilter<'User'> | Date | string | null;
    createdAt?: DateTimeFilter<'User'> | Date | string;
    updatedAt?: DateTimeFilter<'User'> | Date | string;
    comments?: CommentListRelationFilter;
    favorites?: FavoriteListRelationFilter;
    likes?: LikeListRelationFilter;
    addedBooks?: BookListRelationFilter;
    readingProgress?: ReadingProgressListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    fullName?: SortOrder;
    gender?: SortOrderInput | SortOrder;
    birthDate?: SortOrderInput | SortOrder;
    avatarUrl?: SortOrderInput | SortOrder;
    resetToken?: SortOrderInput | SortOrder;
    resetTokenExpiry?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    comments?: CommentOrderByRelationAggregateInput;
    favorites?: FavoriteOrderByRelationAggregateInput;
    likes?: LikeOrderByRelationAggregateInput;
    addedBooks?: BookOrderByRelationAggregateInput;
    readingProgress?: ReadingProgressOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      password?: StringFilter<'User'> | string;
      fullName?: StringFilter<'User'> | string;
      gender?: EnumGenderNullableFilter<'User'> | $Enums.Gender | null;
      birthDate?: DateTimeNullableFilter<'User'> | Date | string | null;
      avatarUrl?: StringNullableFilter<'User'> | string | null;
      resetToken?: StringNullableFilter<'User'> | string | null;
      resetTokenExpiry?: DateTimeNullableFilter<'User'> | Date | string | null;
      createdAt?: DateTimeFilter<'User'> | Date | string;
      updatedAt?: DateTimeFilter<'User'> | Date | string;
      comments?: CommentListRelationFilter;
      favorites?: FavoriteListRelationFilter;
      likes?: LikeListRelationFilter;
      addedBooks?: BookListRelationFilter;
      readingProgress?: ReadingProgressListRelationFilter;
    },
    'id' | 'email'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    fullName?: SortOrder;
    gender?: SortOrderInput | SortOrder;
    birthDate?: SortOrderInput | SortOrder;
    avatarUrl?: SortOrderInput | SortOrder;
    resetToken?: SortOrderInput | SortOrder;
    resetTokenExpiry?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'User'> | string;
    email?: StringWithAggregatesFilter<'User'> | string;
    password?: StringWithAggregatesFilter<'User'> | string;
    fullName?: StringWithAggregatesFilter<'User'> | string;
    gender?:
      | EnumGenderNullableWithAggregatesFilter<'User'>
      | $Enums.Gender
      | null;
    birthDate?:
      | DateTimeNullableWithAggregatesFilter<'User'>
      | Date
      | string
      | null;
    avatarUrl?: StringNullableWithAggregatesFilter<'User'> | string | null;
    resetToken?: StringNullableWithAggregatesFilter<'User'> | string | null;
    resetTokenExpiry?:
      | DateTimeNullableWithAggregatesFilter<'User'>
      | Date
      | string
      | null;
    createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
  };

  export type BookWhereInput = {
    AND?: BookWhereInput | BookWhereInput[];
    OR?: BookWhereInput[];
    NOT?: BookWhereInput | BookWhereInput[];
    id?: StringFilter<'Book'> | string;
    title?: StringFilter<'Book'> | string;
    description?: StringNullableFilter<'Book'> | string | null;
    coverUrl?: StringNullableFilter<'Book'> | string | null;
    publishedAt?: DateTimeNullableFilter<'Book'> | Date | string | null;
    producerId?: StringNullableFilter<'Book'> | string | null;
    producerName?: StringNullableFilter<'Book'> | string | null;
    fileUrl?: StringNullableFilter<'Book'> | string | null;
    createdAt?: DateTimeFilter<'Book'> | Date | string;
    updatedAt?: DateTimeFilter<'Book'> | Date | string;
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null;
    authors?: BookAuthorListRelationFilter;
    categories?: BookCategoryListRelationFilter;
    comments?: CommentListRelationFilter;
    likes?: LikeListRelationFilter;
    favorites?: FavoriteListRelationFilter;
    readingProgress?: ReadingProgressListRelationFilter;
  };

  export type BookOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    coverUrl?: SortOrderInput | SortOrder;
    publishedAt?: SortOrderInput | SortOrder;
    producerId?: SortOrderInput | SortOrder;
    producerName?: SortOrderInput | SortOrder;
    fileUrl?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
    authors?: BookAuthorOrderByRelationAggregateInput;
    categories?: BookCategoryOrderByRelationAggregateInput;
    comments?: CommentOrderByRelationAggregateInput;
    likes?: LikeOrderByRelationAggregateInput;
    favorites?: FavoriteOrderByRelationAggregateInput;
    readingProgress?: ReadingProgressOrderByRelationAggregateInput;
  };

  export type BookWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: BookWhereInput | BookWhereInput[];
      OR?: BookWhereInput[];
      NOT?: BookWhereInput | BookWhereInput[];
      title?: StringFilter<'Book'> | string;
      description?: StringNullableFilter<'Book'> | string | null;
      coverUrl?: StringNullableFilter<'Book'> | string | null;
      publishedAt?: DateTimeNullableFilter<'Book'> | Date | string | null;
      producerId?: StringNullableFilter<'Book'> | string | null;
      producerName?: StringNullableFilter<'Book'> | string | null;
      fileUrl?: StringNullableFilter<'Book'> | string | null;
      createdAt?: DateTimeFilter<'Book'> | Date | string;
      updatedAt?: DateTimeFilter<'Book'> | Date | string;
      user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null;
      authors?: BookAuthorListRelationFilter;
      categories?: BookCategoryListRelationFilter;
      comments?: CommentListRelationFilter;
      likes?: LikeListRelationFilter;
      favorites?: FavoriteListRelationFilter;
      readingProgress?: ReadingProgressListRelationFilter;
    },
    'id'
  >;

  export type BookOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    coverUrl?: SortOrderInput | SortOrder;
    publishedAt?: SortOrderInput | SortOrder;
    producerId?: SortOrderInput | SortOrder;
    producerName?: SortOrderInput | SortOrder;
    fileUrl?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: BookCountOrderByAggregateInput;
    _max?: BookMaxOrderByAggregateInput;
    _min?: BookMinOrderByAggregateInput;
  };

  export type BookScalarWhereWithAggregatesInput = {
    AND?:
      | BookScalarWhereWithAggregatesInput
      | BookScalarWhereWithAggregatesInput[];
    OR?: BookScalarWhereWithAggregatesInput[];
    NOT?:
      | BookScalarWhereWithAggregatesInput
      | BookScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Book'> | string;
    title?: StringWithAggregatesFilter<'Book'> | string;
    description?: StringNullableWithAggregatesFilter<'Book'> | string | null;
    coverUrl?: StringNullableWithAggregatesFilter<'Book'> | string | null;
    publishedAt?:
      | DateTimeNullableWithAggregatesFilter<'Book'>
      | Date
      | string
      | null;
    producerId?: StringNullableWithAggregatesFilter<'Book'> | string | null;
    producerName?: StringNullableWithAggregatesFilter<'Book'> | string | null;
    fileUrl?: StringNullableWithAggregatesFilter<'Book'> | string | null;
    createdAt?: DateTimeWithAggregatesFilter<'Book'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Book'> | Date | string;
  };

  export type AuthorWhereInput = {
    AND?: AuthorWhereInput | AuthorWhereInput[];
    OR?: AuthorWhereInput[];
    NOT?: AuthorWhereInput | AuthorWhereInput[];
    id?: StringFilter<'Author'> | string;
    name?: StringFilter<'Author'> | string;
    bio?: StringNullableFilter<'Author'> | string | null;
    books?: BookAuthorListRelationFilter;
  };

  export type AuthorOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    bio?: SortOrderInput | SortOrder;
    books?: BookAuthorOrderByRelationAggregateInput;
  };

  export type AuthorWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: AuthorWhereInput | AuthorWhereInput[];
      OR?: AuthorWhereInput[];
      NOT?: AuthorWhereInput | AuthorWhereInput[];
      name?: StringFilter<'Author'> | string;
      bio?: StringNullableFilter<'Author'> | string | null;
      books?: BookAuthorListRelationFilter;
    },
    'id'
  >;

  export type AuthorOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    bio?: SortOrderInput | SortOrder;
    _count?: AuthorCountOrderByAggregateInput;
    _max?: AuthorMaxOrderByAggregateInput;
    _min?: AuthorMinOrderByAggregateInput;
  };

  export type AuthorScalarWhereWithAggregatesInput = {
    AND?:
      | AuthorScalarWhereWithAggregatesInput
      | AuthorScalarWhereWithAggregatesInput[];
    OR?: AuthorScalarWhereWithAggregatesInput[];
    NOT?:
      | AuthorScalarWhereWithAggregatesInput
      | AuthorScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Author'> | string;
    name?: StringWithAggregatesFilter<'Author'> | string;
    bio?: StringNullableWithAggregatesFilter<'Author'> | string | null;
  };

  export type BookAuthorWhereInput = {
    AND?: BookAuthorWhereInput | BookAuthorWhereInput[];
    OR?: BookAuthorWhereInput[];
    NOT?: BookAuthorWhereInput | BookAuthorWhereInput[];
    bookId?: StringFilter<'BookAuthor'> | string;
    authorId?: StringFilter<'BookAuthor'> | string;
    book?: XOR<BookScalarRelationFilter, BookWhereInput>;
    author?: XOR<AuthorScalarRelationFilter, AuthorWhereInput>;
  };

  export type BookAuthorOrderByWithRelationInput = {
    bookId?: SortOrder;
    authorId?: SortOrder;
    book?: BookOrderByWithRelationInput;
    author?: AuthorOrderByWithRelationInput;
  };

  export type BookAuthorWhereUniqueInput = Prisma.AtLeast<
    {
      bookId_authorId?: BookAuthorBookIdAuthorIdCompoundUniqueInput;
      AND?: BookAuthorWhereInput | BookAuthorWhereInput[];
      OR?: BookAuthorWhereInput[];
      NOT?: BookAuthorWhereInput | BookAuthorWhereInput[];
      bookId?: StringFilter<'BookAuthor'> | string;
      authorId?: StringFilter<'BookAuthor'> | string;
      book?: XOR<BookScalarRelationFilter, BookWhereInput>;
      author?: XOR<AuthorScalarRelationFilter, AuthorWhereInput>;
    },
    'bookId_authorId'
  >;

  export type BookAuthorOrderByWithAggregationInput = {
    bookId?: SortOrder;
    authorId?: SortOrder;
    _count?: BookAuthorCountOrderByAggregateInput;
    _max?: BookAuthorMaxOrderByAggregateInput;
    _min?: BookAuthorMinOrderByAggregateInput;
  };

  export type BookAuthorScalarWhereWithAggregatesInput = {
    AND?:
      | BookAuthorScalarWhereWithAggregatesInput
      | BookAuthorScalarWhereWithAggregatesInput[];
    OR?: BookAuthorScalarWhereWithAggregatesInput[];
    NOT?:
      | BookAuthorScalarWhereWithAggregatesInput
      | BookAuthorScalarWhereWithAggregatesInput[];
    bookId?: StringWithAggregatesFilter<'BookAuthor'> | string;
    authorId?: StringWithAggregatesFilter<'BookAuthor'> | string;
  };

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[];
    OR?: CategoryWhereInput[];
    NOT?: CategoryWhereInput | CategoryWhereInput[];
    id?: StringFilter<'Category'> | string;
    name?: StringFilter<'Category'> | string;
    books?: BookCategoryListRelationFilter;
  };

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    books?: BookCategoryOrderByRelationAggregateInput;
  };

  export type CategoryWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      name?: string;
      AND?: CategoryWhereInput | CategoryWhereInput[];
      OR?: CategoryWhereInput[];
      NOT?: CategoryWhereInput | CategoryWhereInput[];
      books?: BookCategoryListRelationFilter;
    },
    'id' | 'name'
  >;

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    _count?: CategoryCountOrderByAggregateInput;
    _max?: CategoryMaxOrderByAggregateInput;
    _min?: CategoryMinOrderByAggregateInput;
  };

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?:
      | CategoryScalarWhereWithAggregatesInput
      | CategoryScalarWhereWithAggregatesInput[];
    OR?: CategoryScalarWhereWithAggregatesInput[];
    NOT?:
      | CategoryScalarWhereWithAggregatesInput
      | CategoryScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Category'> | string;
    name?: StringWithAggregatesFilter<'Category'> | string;
  };

  export type BookCategoryWhereInput = {
    AND?: BookCategoryWhereInput | BookCategoryWhereInput[];
    OR?: BookCategoryWhereInput[];
    NOT?: BookCategoryWhereInput | BookCategoryWhereInput[];
    bookId?: StringFilter<'BookCategory'> | string;
    categoryId?: StringFilter<'BookCategory'> | string;
    book?: XOR<BookScalarRelationFilter, BookWhereInput>;
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>;
  };

  export type BookCategoryOrderByWithRelationInput = {
    bookId?: SortOrder;
    categoryId?: SortOrder;
    book?: BookOrderByWithRelationInput;
    category?: CategoryOrderByWithRelationInput;
  };

  export type BookCategoryWhereUniqueInput = Prisma.AtLeast<
    {
      bookId_categoryId?: BookCategoryBookIdCategoryIdCompoundUniqueInput;
      AND?: BookCategoryWhereInput | BookCategoryWhereInput[];
      OR?: BookCategoryWhereInput[];
      NOT?: BookCategoryWhereInput | BookCategoryWhereInput[];
      bookId?: StringFilter<'BookCategory'> | string;
      categoryId?: StringFilter<'BookCategory'> | string;
      book?: XOR<BookScalarRelationFilter, BookWhereInput>;
      category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>;
    },
    'bookId_categoryId'
  >;

  export type BookCategoryOrderByWithAggregationInput = {
    bookId?: SortOrder;
    categoryId?: SortOrder;
    _count?: BookCategoryCountOrderByAggregateInput;
    _max?: BookCategoryMaxOrderByAggregateInput;
    _min?: BookCategoryMinOrderByAggregateInput;
  };

  export type BookCategoryScalarWhereWithAggregatesInput = {
    AND?:
      | BookCategoryScalarWhereWithAggregatesInput
      | BookCategoryScalarWhereWithAggregatesInput[];
    OR?: BookCategoryScalarWhereWithAggregatesInput[];
    NOT?:
      | BookCategoryScalarWhereWithAggregatesInput
      | BookCategoryScalarWhereWithAggregatesInput[];
    bookId?: StringWithAggregatesFilter<'BookCategory'> | string;
    categoryId?: StringWithAggregatesFilter<'BookCategory'> | string;
  };

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[];
    OR?: CommentWhereInput[];
    NOT?: CommentWhereInput | CommentWhereInput[];
    id?: StringFilter<'Comment'> | string;
    content?: StringFilter<'Comment'> | string;
    rating?: IntNullableFilter<'Comment'> | number | null;
    createdAt?: DateTimeFilter<'Comment'> | Date | string;
    userId?: StringFilter<'Comment'> | string;
    bookId?: StringFilter<'Comment'> | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    book?: XOR<BookScalarRelationFilter, BookWhereInput>;
  };

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder;
    content?: SortOrder;
    rating?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    userId?: SortOrder;
    bookId?: SortOrder;
    user?: UserOrderByWithRelationInput;
    book?: BookOrderByWithRelationInput;
  };

  export type CommentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: CommentWhereInput | CommentWhereInput[];
      OR?: CommentWhereInput[];
      NOT?: CommentWhereInput | CommentWhereInput[];
      content?: StringFilter<'Comment'> | string;
      rating?: IntNullableFilter<'Comment'> | number | null;
      createdAt?: DateTimeFilter<'Comment'> | Date | string;
      userId?: StringFilter<'Comment'> | string;
      bookId?: StringFilter<'Comment'> | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      book?: XOR<BookScalarRelationFilter, BookWhereInput>;
    },
    'id'
  >;

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder;
    content?: SortOrder;
    rating?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    userId?: SortOrder;
    bookId?: SortOrder;
    _count?: CommentCountOrderByAggregateInput;
    _avg?: CommentAvgOrderByAggregateInput;
    _max?: CommentMaxOrderByAggregateInput;
    _min?: CommentMinOrderByAggregateInput;
    _sum?: CommentSumOrderByAggregateInput;
  };

  export type CommentScalarWhereWithAggregatesInput = {
    AND?:
      | CommentScalarWhereWithAggregatesInput
      | CommentScalarWhereWithAggregatesInput[];
    OR?: CommentScalarWhereWithAggregatesInput[];
    NOT?:
      | CommentScalarWhereWithAggregatesInput
      | CommentScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Comment'> | string;
    content?: StringWithAggregatesFilter<'Comment'> | string;
    rating?: IntNullableWithAggregatesFilter<'Comment'> | number | null;
    createdAt?: DateTimeWithAggregatesFilter<'Comment'> | Date | string;
    userId?: StringWithAggregatesFilter<'Comment'> | string;
    bookId?: StringWithAggregatesFilter<'Comment'> | string;
  };

  export type LikeWhereInput = {
    AND?: LikeWhereInput | LikeWhereInput[];
    OR?: LikeWhereInput[];
    NOT?: LikeWhereInput | LikeWhereInput[];
    userId?: StringFilter<'Like'> | string;
    bookId?: StringFilter<'Like'> | string;
    createdAt?: DateTimeFilter<'Like'> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    book?: XOR<BookScalarRelationFilter, BookWhereInput>;
  };

  export type LikeOrderByWithRelationInput = {
    userId?: SortOrder;
    bookId?: SortOrder;
    createdAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
    book?: BookOrderByWithRelationInput;
  };

  export type LikeWhereUniqueInput = Prisma.AtLeast<
    {
      userId_bookId?: LikeUserIdBookIdCompoundUniqueInput;
      AND?: LikeWhereInput | LikeWhereInput[];
      OR?: LikeWhereInput[];
      NOT?: LikeWhereInput | LikeWhereInput[];
      userId?: StringFilter<'Like'> | string;
      bookId?: StringFilter<'Like'> | string;
      createdAt?: DateTimeFilter<'Like'> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      book?: XOR<BookScalarRelationFilter, BookWhereInput>;
    },
    'userId_bookId'
  >;

  export type LikeOrderByWithAggregationInput = {
    userId?: SortOrder;
    bookId?: SortOrder;
    createdAt?: SortOrder;
    _count?: LikeCountOrderByAggregateInput;
    _max?: LikeMaxOrderByAggregateInput;
    _min?: LikeMinOrderByAggregateInput;
  };

  export type LikeScalarWhereWithAggregatesInput = {
    AND?:
      | LikeScalarWhereWithAggregatesInput
      | LikeScalarWhereWithAggregatesInput[];
    OR?: LikeScalarWhereWithAggregatesInput[];
    NOT?:
      | LikeScalarWhereWithAggregatesInput
      | LikeScalarWhereWithAggregatesInput[];
    userId?: StringWithAggregatesFilter<'Like'> | string;
    bookId?: StringWithAggregatesFilter<'Like'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Like'> | Date | string;
  };

  export type FavoriteWhereInput = {
    AND?: FavoriteWhereInput | FavoriteWhereInput[];
    OR?: FavoriteWhereInput[];
    NOT?: FavoriteWhereInput | FavoriteWhereInput[];
    userId?: StringFilter<'Favorite'> | string;
    bookId?: StringFilter<'Favorite'> | string;
    createdAt?: DateTimeFilter<'Favorite'> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    book?: XOR<BookScalarRelationFilter, BookWhereInput>;
  };

  export type FavoriteOrderByWithRelationInput = {
    userId?: SortOrder;
    bookId?: SortOrder;
    createdAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
    book?: BookOrderByWithRelationInput;
  };

  export type FavoriteWhereUniqueInput = Prisma.AtLeast<
    {
      userId_bookId?: FavoriteUserIdBookIdCompoundUniqueInput;
      AND?: FavoriteWhereInput | FavoriteWhereInput[];
      OR?: FavoriteWhereInput[];
      NOT?: FavoriteWhereInput | FavoriteWhereInput[];
      userId?: StringFilter<'Favorite'> | string;
      bookId?: StringFilter<'Favorite'> | string;
      createdAt?: DateTimeFilter<'Favorite'> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      book?: XOR<BookScalarRelationFilter, BookWhereInput>;
    },
    'userId_bookId'
  >;

  export type FavoriteOrderByWithAggregationInput = {
    userId?: SortOrder;
    bookId?: SortOrder;
    createdAt?: SortOrder;
    _count?: FavoriteCountOrderByAggregateInput;
    _max?: FavoriteMaxOrderByAggregateInput;
    _min?: FavoriteMinOrderByAggregateInput;
  };

  export type FavoriteScalarWhereWithAggregatesInput = {
    AND?:
      | FavoriteScalarWhereWithAggregatesInput
      | FavoriteScalarWhereWithAggregatesInput[];
    OR?: FavoriteScalarWhereWithAggregatesInput[];
    NOT?:
      | FavoriteScalarWhereWithAggregatesInput
      | FavoriteScalarWhereWithAggregatesInput[];
    userId?: StringWithAggregatesFilter<'Favorite'> | string;
    bookId?: StringWithAggregatesFilter<'Favorite'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Favorite'> | Date | string;
  };

  export type ReadingProgressWhereInput = {
    AND?: ReadingProgressWhereInput | ReadingProgressWhereInput[];
    OR?: ReadingProgressWhereInput[];
    NOT?: ReadingProgressWhereInput | ReadingProgressWhereInput[];
    id?: StringFilter<'ReadingProgress'> | string;
    userId?: StringFilter<'ReadingProgress'> | string;
    bookId?: StringFilter<'ReadingProgress'> | string;
    currentPage?: IntFilter<'ReadingProgress'> | number;
    totalPages?: IntNullableFilter<'ReadingProgress'> | number | null;
    isFinished?: BoolFilter<'ReadingProgress'> | boolean;
    updatedAt?: DateTimeFilter<'ReadingProgress'> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    book?: XOR<BookScalarRelationFilter, BookWhereInput>;
  };

  export type ReadingProgressOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    bookId?: SortOrder;
    currentPage?: SortOrder;
    totalPages?: SortOrderInput | SortOrder;
    isFinished?: SortOrder;
    updatedAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
    book?: BookOrderByWithRelationInput;
  };

  export type ReadingProgressWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      userId_bookId?: ReadingProgressUserIdBookIdCompoundUniqueInput;
      AND?: ReadingProgressWhereInput | ReadingProgressWhereInput[];
      OR?: ReadingProgressWhereInput[];
      NOT?: ReadingProgressWhereInput | ReadingProgressWhereInput[];
      userId?: StringFilter<'ReadingProgress'> | string;
      bookId?: StringFilter<'ReadingProgress'> | string;
      currentPage?: IntFilter<'ReadingProgress'> | number;
      totalPages?: IntNullableFilter<'ReadingProgress'> | number | null;
      isFinished?: BoolFilter<'ReadingProgress'> | boolean;
      updatedAt?: DateTimeFilter<'ReadingProgress'> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      book?: XOR<BookScalarRelationFilter, BookWhereInput>;
    },
    'id' | 'userId_bookId'
  >;

  export type ReadingProgressOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    bookId?: SortOrder;
    currentPage?: SortOrder;
    totalPages?: SortOrderInput | SortOrder;
    isFinished?: SortOrder;
    updatedAt?: SortOrder;
    _count?: ReadingProgressCountOrderByAggregateInput;
    _avg?: ReadingProgressAvgOrderByAggregateInput;
    _max?: ReadingProgressMaxOrderByAggregateInput;
    _min?: ReadingProgressMinOrderByAggregateInput;
    _sum?: ReadingProgressSumOrderByAggregateInput;
  };

  export type ReadingProgressScalarWhereWithAggregatesInput = {
    AND?:
      | ReadingProgressScalarWhereWithAggregatesInput
      | ReadingProgressScalarWhereWithAggregatesInput[];
    OR?: ReadingProgressScalarWhereWithAggregatesInput[];
    NOT?:
      | ReadingProgressScalarWhereWithAggregatesInput
      | ReadingProgressScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'ReadingProgress'> | string;
    userId?: StringWithAggregatesFilter<'ReadingProgress'> | string;
    bookId?: StringWithAggregatesFilter<'ReadingProgress'> | string;
    currentPage?: IntWithAggregatesFilter<'ReadingProgress'> | number;
    totalPages?:
      | IntNullableWithAggregatesFilter<'ReadingProgress'>
      | number
      | null;
    isFinished?: BoolWithAggregatesFilter<'ReadingProgress'> | boolean;
    updatedAt?: DateTimeWithAggregatesFilter<'ReadingProgress'> | Date | string;
  };

  export type UserCreateInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    gender?: $Enums.Gender | null;
    birthDate?: Date | string | null;
    avatarUrl?: string | null;
    resetToken?: string | null;
    resetTokenExpiry?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    comments?: CommentCreateNestedManyWithoutUserInput;
    favorites?: FavoriteCreateNestedManyWithoutUserInput;
    likes?: LikeCreateNestedManyWithoutUserInput;
    addedBooks?: BookCreateNestedManyWithoutUserInput;
    readingProgress?: ReadingProgressCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    gender?: $Enums.Gender | null;
    birthDate?: Date | string | null;
    avatarUrl?: string | null;
    resetToken?: string | null;
    resetTokenExpiry?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput;
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput;
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput;
    addedBooks?: BookUncheckedCreateNestedManyWithoutUserInput;
    readingProgress?: ReadingProgressUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    gender?:
      | NullableEnumGenderFieldUpdateOperationsInput
      | $Enums.Gender
      | null;
    birthDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null;
    resetTokenExpiry?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: CommentUpdateManyWithoutUserNestedInput;
    favorites?: FavoriteUpdateManyWithoutUserNestedInput;
    likes?: LikeUpdateManyWithoutUserNestedInput;
    addedBooks?: BookUpdateManyWithoutUserNestedInput;
    readingProgress?: ReadingProgressUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    gender?:
      | NullableEnumGenderFieldUpdateOperationsInput
      | $Enums.Gender
      | null;
    birthDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null;
    resetTokenExpiry?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput;
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput;
    addedBooks?: BookUncheckedUpdateManyWithoutUserNestedInput;
    readingProgress?: ReadingProgressUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    gender?: $Enums.Gender | null;
    birthDate?: Date | string | null;
    avatarUrl?: string | null;
    resetToken?: string | null;
    resetTokenExpiry?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    gender?:
      | NullableEnumGenderFieldUpdateOperationsInput
      | $Enums.Gender
      | null;
    birthDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null;
    resetTokenExpiry?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    gender?:
      | NullableEnumGenderFieldUpdateOperationsInput
      | $Enums.Gender
      | null;
    birthDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null;
    resetTokenExpiry?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BookCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    coverUrl?: string | null;
    publishedAt?: Date | string | null;
    producerName?: string | null;
    fileUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user?: UserCreateNestedOneWithoutAddedBooksInput;
    authors?: BookAuthorCreateNestedManyWithoutBookInput;
    categories?: BookCategoryCreateNestedManyWithoutBookInput;
    comments?: CommentCreateNestedManyWithoutBookInput;
    likes?: LikeCreateNestedManyWithoutBookInput;
    favorites?: FavoriteCreateNestedManyWithoutBookInput;
    readingProgress?: ReadingProgressCreateNestedManyWithoutBookInput;
  };

  export type BookUncheckedCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    coverUrl?: string | null;
    publishedAt?: Date | string | null;
    producerId?: string | null;
    producerName?: string | null;
    fileUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authors?: BookAuthorUncheckedCreateNestedManyWithoutBookInput;
    categories?: BookCategoryUncheckedCreateNestedManyWithoutBookInput;
    comments?: CommentUncheckedCreateNestedManyWithoutBookInput;
    likes?: LikeUncheckedCreateNestedManyWithoutBookInput;
    favorites?: FavoriteUncheckedCreateNestedManyWithoutBookInput;
    readingProgress?: ReadingProgressUncheckedCreateNestedManyWithoutBookInput;
  };

  export type BookUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    producerName?: NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneWithoutAddedBooksNestedInput;
    authors?: BookAuthorUpdateManyWithoutBookNestedInput;
    categories?: BookCategoryUpdateManyWithoutBookNestedInput;
    comments?: CommentUpdateManyWithoutBookNestedInput;
    likes?: LikeUpdateManyWithoutBookNestedInput;
    favorites?: FavoriteUpdateManyWithoutBookNestedInput;
    readingProgress?: ReadingProgressUpdateManyWithoutBookNestedInput;
  };

  export type BookUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    producerId?: NullableStringFieldUpdateOperationsInput | string | null;
    producerName?: NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authors?: BookAuthorUncheckedUpdateManyWithoutBookNestedInput;
    categories?: BookCategoryUncheckedUpdateManyWithoutBookNestedInput;
    comments?: CommentUncheckedUpdateManyWithoutBookNestedInput;
    likes?: LikeUncheckedUpdateManyWithoutBookNestedInput;
    favorites?: FavoriteUncheckedUpdateManyWithoutBookNestedInput;
    readingProgress?: ReadingProgressUncheckedUpdateManyWithoutBookNestedInput;
  };

  export type BookCreateManyInput = {
    id?: string;
    title: string;
    description?: string | null;
    coverUrl?: string | null;
    publishedAt?: Date | string | null;
    producerId?: string | null;
    producerName?: string | null;
    fileUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type BookUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    producerName?: NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BookUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    producerId?: NullableStringFieldUpdateOperationsInput | string | null;
    producerName?: NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AuthorCreateInput = {
    id?: string;
    name: string;
    bio?: string | null;
    books?: BookAuthorCreateNestedManyWithoutAuthorInput;
  };

  export type AuthorUncheckedCreateInput = {
    id?: string;
    name: string;
    bio?: string | null;
    books?: BookAuthorUncheckedCreateNestedManyWithoutAuthorInput;
  };

  export type AuthorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    books?: BookAuthorUpdateManyWithoutAuthorNestedInput;
  };

  export type AuthorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    books?: BookAuthorUncheckedUpdateManyWithoutAuthorNestedInput;
  };

  export type AuthorCreateManyInput = {
    id?: string;
    name: string;
    bio?: string | null;
  };

  export type AuthorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type AuthorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type BookAuthorCreateInput = {
    book: BookCreateNestedOneWithoutAuthorsInput;
    author: AuthorCreateNestedOneWithoutBooksInput;
  };

  export type BookAuthorUncheckedCreateInput = {
    bookId: string;
    authorId: string;
  };

  export type BookAuthorUpdateInput = {
    book?: BookUpdateOneRequiredWithoutAuthorsNestedInput;
    author?: AuthorUpdateOneRequiredWithoutBooksNestedInput;
  };

  export type BookAuthorUncheckedUpdateInput = {
    bookId?: StringFieldUpdateOperationsInput | string;
    authorId?: StringFieldUpdateOperationsInput | string;
  };

  export type BookAuthorCreateManyInput = {
    bookId: string;
    authorId: string;
  };

  export type BookAuthorUpdateManyMutationInput = {};

  export type BookAuthorUncheckedUpdateManyInput = {
    bookId?: StringFieldUpdateOperationsInput | string;
    authorId?: StringFieldUpdateOperationsInput | string;
  };

  export type CategoryCreateInput = {
    id?: string;
    name: string;
    books?: BookCategoryCreateNestedManyWithoutCategoryInput;
  };

  export type CategoryUncheckedCreateInput = {
    id?: string;
    name: string;
    books?: BookCategoryUncheckedCreateNestedManyWithoutCategoryInput;
  };

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    books?: BookCategoryUpdateManyWithoutCategoryNestedInput;
  };

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    books?: BookCategoryUncheckedUpdateManyWithoutCategoryNestedInput;
  };

  export type CategoryCreateManyInput = {
    id?: string;
    name: string;
  };

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
  };

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
  };

  export type BookCategoryCreateInput = {
    book: BookCreateNestedOneWithoutCategoriesInput;
    category: CategoryCreateNestedOneWithoutBooksInput;
  };

  export type BookCategoryUncheckedCreateInput = {
    bookId: string;
    categoryId: string;
  };

  export type BookCategoryUpdateInput = {
    book?: BookUpdateOneRequiredWithoutCategoriesNestedInput;
    category?: CategoryUpdateOneRequiredWithoutBooksNestedInput;
  };

  export type BookCategoryUncheckedUpdateInput = {
    bookId?: StringFieldUpdateOperationsInput | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
  };

  export type BookCategoryCreateManyInput = {
    bookId: string;
    categoryId: string;
  };

  export type BookCategoryUpdateManyMutationInput = {};

  export type BookCategoryUncheckedUpdateManyInput = {
    bookId?: StringFieldUpdateOperationsInput | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
  };

  export type CommentCreateInput = {
    id?: string;
    content: string;
    rating?: number | null;
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutCommentsInput;
    book: BookCreateNestedOneWithoutCommentsInput;
  };

  export type CommentUncheckedCreateInput = {
    id?: string;
    content: string;
    rating?: number | null;
    createdAt?: Date | string;
    userId: string;
    bookId: string;
  };

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput;
    book?: BookUpdateOneRequiredWithoutCommentsNestedInput;
  };

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: StringFieldUpdateOperationsInput | string;
    bookId?: StringFieldUpdateOperationsInput | string;
  };

  export type CommentCreateManyInput = {
    id?: string;
    content: string;
    rating?: number | null;
    createdAt?: Date | string;
    userId: string;
    bookId: string;
  };

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: StringFieldUpdateOperationsInput | string;
    bookId?: StringFieldUpdateOperationsInput | string;
  };

  export type LikeCreateInput = {
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutLikesInput;
    book: BookCreateNestedOneWithoutLikesInput;
  };

  export type LikeUncheckedCreateInput = {
    userId: string;
    bookId: string;
    createdAt?: Date | string;
  };

  export type LikeUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutLikesNestedInput;
    book?: BookUpdateOneRequiredWithoutLikesNestedInput;
  };

  export type LikeUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    bookId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type LikeCreateManyInput = {
    userId: string;
    bookId: string;
    createdAt?: Date | string;
  };

  export type LikeUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type LikeUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    bookId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FavoriteCreateInput = {
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutFavoritesInput;
    book: BookCreateNestedOneWithoutFavoritesInput;
  };

  export type FavoriteUncheckedCreateInput = {
    userId: string;
    bookId: string;
    createdAt?: Date | string;
  };

  export type FavoriteUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutFavoritesNestedInput;
    book?: BookUpdateOneRequiredWithoutFavoritesNestedInput;
  };

  export type FavoriteUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    bookId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FavoriteCreateManyInput = {
    userId: string;
    bookId: string;
    createdAt?: Date | string;
  };

  export type FavoriteUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FavoriteUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    bookId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ReadingProgressCreateInput = {
    id?: string;
    currentPage?: number;
    totalPages?: number | null;
    isFinished?: boolean;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutReadingProgressInput;
    book: BookCreateNestedOneWithoutReadingProgressInput;
  };

  export type ReadingProgressUncheckedCreateInput = {
    id?: string;
    userId: string;
    bookId: string;
    currentPage?: number;
    totalPages?: number | null;
    isFinished?: boolean;
    updatedAt?: Date | string;
  };

  export type ReadingProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    currentPage?: IntFieldUpdateOperationsInput | number;
    totalPages?: NullableIntFieldUpdateOperationsInput | number | null;
    isFinished?: BoolFieldUpdateOperationsInput | boolean;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutReadingProgressNestedInput;
    book?: BookUpdateOneRequiredWithoutReadingProgressNestedInput;
  };

  export type ReadingProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    bookId?: StringFieldUpdateOperationsInput | string;
    currentPage?: IntFieldUpdateOperationsInput | number;
    totalPages?: NullableIntFieldUpdateOperationsInput | number | null;
    isFinished?: BoolFieldUpdateOperationsInput | boolean;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ReadingProgressCreateManyInput = {
    id?: string;
    userId: string;
    bookId: string;
    currentPage?: number;
    totalPages?: number | null;
    isFinished?: boolean;
    updatedAt?: Date | string;
  };

  export type ReadingProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    currentPage?: IntFieldUpdateOperationsInput | number;
    totalPages?: NullableIntFieldUpdateOperationsInput | number | null;
    isFinished?: BoolFieldUpdateOperationsInput | boolean;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ReadingProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    bookId?: StringFieldUpdateOperationsInput | string;
    currentPage?: IntFieldUpdateOperationsInput | number;
    totalPages?: NullableIntFieldUpdateOperationsInput | number | null;
    isFinished?: BoolFieldUpdateOperationsInput | boolean;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type EnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null;
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null;
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type CommentListRelationFilter = {
    every?: CommentWhereInput;
    some?: CommentWhereInput;
    none?: CommentWhereInput;
  };

  export type FavoriteListRelationFilter = {
    every?: FavoriteWhereInput;
    some?: FavoriteWhereInput;
    none?: FavoriteWhereInput;
  };

  export type LikeListRelationFilter = {
    every?: LikeWhereInput;
    some?: LikeWhereInput;
    none?: LikeWhereInput;
  };

  export type BookListRelationFilter = {
    every?: BookWhereInput;
    some?: BookWhereInput;
    none?: BookWhereInput;
  };

  export type ReadingProgressListRelationFilter = {
    every?: ReadingProgressWhereInput;
    some?: ReadingProgressWhereInput;
    none?: ReadingProgressWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type FavoriteOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type LikeOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type BookOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ReadingProgressOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    fullName?: SortOrder;
    gender?: SortOrder;
    birthDate?: SortOrder;
    avatarUrl?: SortOrder;
    resetToken?: SortOrder;
    resetTokenExpiry?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    fullName?: SortOrder;
    gender?: SortOrder;
    birthDate?: SortOrder;
    avatarUrl?: SortOrder;
    resetToken?: SortOrder;
    resetTokenExpiry?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    fullName?: SortOrder;
    gender?: SortOrder;
    birthDate?: SortOrder;
    avatarUrl?: SortOrder;
    resetToken?: SortOrder;
    resetTokenExpiry?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type EnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null;
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null;
    not?:
      | NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel>
      | $Enums.Gender
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>;
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?:
      | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
      | Date
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null;
    isNot?: UserWhereInput | null;
  };

  export type BookAuthorListRelationFilter = {
    every?: BookAuthorWhereInput;
    some?: BookAuthorWhereInput;
    none?: BookAuthorWhereInput;
  };

  export type BookCategoryListRelationFilter = {
    every?: BookCategoryWhereInput;
    some?: BookCategoryWhereInput;
    none?: BookCategoryWhereInput;
  };

  export type BookAuthorOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type BookCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type BookCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    coverUrl?: SortOrder;
    publishedAt?: SortOrder;
    producerId?: SortOrder;
    producerName?: SortOrder;
    fileUrl?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type BookMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    coverUrl?: SortOrder;
    publishedAt?: SortOrder;
    producerId?: SortOrder;
    producerName?: SortOrder;
    fileUrl?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type BookMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    coverUrl?: SortOrder;
    publishedAt?: SortOrder;
    producerId?: SortOrder;
    producerName?: SortOrder;
    fileUrl?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type AuthorCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    bio?: SortOrder;
  };

  export type AuthorMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    bio?: SortOrder;
  };

  export type AuthorMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    bio?: SortOrder;
  };

  export type BookScalarRelationFilter = {
    is?: BookWhereInput;
    isNot?: BookWhereInput;
  };

  export type AuthorScalarRelationFilter = {
    is?: AuthorWhereInput;
    isNot?: AuthorWhereInput;
  };

  export type BookAuthorBookIdAuthorIdCompoundUniqueInput = {
    bookId: string;
    authorId: string;
  };

  export type BookAuthorCountOrderByAggregateInput = {
    bookId?: SortOrder;
    authorId?: SortOrder;
  };

  export type BookAuthorMaxOrderByAggregateInput = {
    bookId?: SortOrder;
    authorId?: SortOrder;
  };

  export type BookAuthorMinOrderByAggregateInput = {
    bookId?: SortOrder;
    authorId?: SortOrder;
  };

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
  };

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
  };

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
  };

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput;
    isNot?: CategoryWhereInput;
  };

  export type BookCategoryBookIdCategoryIdCompoundUniqueInput = {
    bookId: string;
    categoryId: string;
  };

  export type BookCategoryCountOrderByAggregateInput = {
    bookId?: SortOrder;
    categoryId?: SortOrder;
  };

  export type BookCategoryMaxOrderByAggregateInput = {
    bookId?: SortOrder;
    categoryId?: SortOrder;
  };

  export type BookCategoryMinOrderByAggregateInput = {
    bookId?: SortOrder;
    categoryId?: SortOrder;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder;
    content?: SortOrder;
    rating?: SortOrder;
    createdAt?: SortOrder;
    userId?: SortOrder;
    bookId?: SortOrder;
  };

  export type CommentAvgOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder;
    content?: SortOrder;
    rating?: SortOrder;
    createdAt?: SortOrder;
    userId?: SortOrder;
    bookId?: SortOrder;
  };

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder;
    content?: SortOrder;
    rating?: SortOrder;
    createdAt?: SortOrder;
    userId?: SortOrder;
    bookId?: SortOrder;
  };

  export type CommentSumOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type LikeUserIdBookIdCompoundUniqueInput = {
    userId: string;
    bookId: string;
  };

  export type LikeCountOrderByAggregateInput = {
    userId?: SortOrder;
    bookId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type LikeMaxOrderByAggregateInput = {
    userId?: SortOrder;
    bookId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type LikeMinOrderByAggregateInput = {
    userId?: SortOrder;
    bookId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type FavoriteUserIdBookIdCompoundUniqueInput = {
    userId: string;
    bookId: string;
  };

  export type FavoriteCountOrderByAggregateInput = {
    userId?: SortOrder;
    bookId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type FavoriteMaxOrderByAggregateInput = {
    userId?: SortOrder;
    bookId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type FavoriteMinOrderByAggregateInput = {
    userId?: SortOrder;
    bookId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type ReadingProgressUserIdBookIdCompoundUniqueInput = {
    userId: string;
    bookId: string;
  };

  export type ReadingProgressCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    bookId?: SortOrder;
    currentPage?: SortOrder;
    totalPages?: SortOrder;
    isFinished?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ReadingProgressAvgOrderByAggregateInput = {
    currentPage?: SortOrder;
    totalPages?: SortOrder;
  };

  export type ReadingProgressMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    bookId?: SortOrder;
    currentPage?: SortOrder;
    totalPages?: SortOrder;
    isFinished?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ReadingProgressMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    bookId?: SortOrder;
    currentPage?: SortOrder;
    totalPages?: SortOrder;
    isFinished?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ReadingProgressSumOrderByAggregateInput = {
    currentPage?: SortOrder;
    totalPages?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type CommentCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          CommentCreateWithoutUserInput,
          CommentUncheckedCreateWithoutUserInput
        >
      | CommentCreateWithoutUserInput[]
      | CommentUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutUserInput
      | CommentCreateOrConnectWithoutUserInput[];
    createMany?: CommentCreateManyUserInputEnvelope;
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
  };

  export type FavoriteCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          FavoriteCreateWithoutUserInput,
          FavoriteUncheckedCreateWithoutUserInput
        >
      | FavoriteCreateWithoutUserInput[]
      | FavoriteUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | FavoriteCreateOrConnectWithoutUserInput
      | FavoriteCreateOrConnectWithoutUserInput[];
    createMany?: FavoriteCreateManyUserInputEnvelope;
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[];
  };

  export type LikeCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
      | LikeCreateWithoutUserInput[]
      | LikeUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | LikeCreateOrConnectWithoutUserInput
      | LikeCreateOrConnectWithoutUserInput[];
    createMany?: LikeCreateManyUserInputEnvelope;
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
  };

  export type BookCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput>
      | BookCreateWithoutUserInput[]
      | BookUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | BookCreateOrConnectWithoutUserInput
      | BookCreateOrConnectWithoutUserInput[];
    createMany?: BookCreateManyUserInputEnvelope;
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[];
  };

  export type ReadingProgressCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          ReadingProgressCreateWithoutUserInput,
          ReadingProgressUncheckedCreateWithoutUserInput
        >
      | ReadingProgressCreateWithoutUserInput[]
      | ReadingProgressUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ReadingProgressCreateOrConnectWithoutUserInput
      | ReadingProgressCreateOrConnectWithoutUserInput[];
    createMany?: ReadingProgressCreateManyUserInputEnvelope;
    connect?:
      | ReadingProgressWhereUniqueInput
      | ReadingProgressWhereUniqueInput[];
  };

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          CommentCreateWithoutUserInput,
          CommentUncheckedCreateWithoutUserInput
        >
      | CommentCreateWithoutUserInput[]
      | CommentUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutUserInput
      | CommentCreateOrConnectWithoutUserInput[];
    createMany?: CommentCreateManyUserInputEnvelope;
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
  };

  export type FavoriteUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          FavoriteCreateWithoutUserInput,
          FavoriteUncheckedCreateWithoutUserInput
        >
      | FavoriteCreateWithoutUserInput[]
      | FavoriteUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | FavoriteCreateOrConnectWithoutUserInput
      | FavoriteCreateOrConnectWithoutUserInput[];
    createMany?: FavoriteCreateManyUserInputEnvelope;
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[];
  };

  export type LikeUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
      | LikeCreateWithoutUserInput[]
      | LikeUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | LikeCreateOrConnectWithoutUserInput
      | LikeCreateOrConnectWithoutUserInput[];
    createMany?: LikeCreateManyUserInputEnvelope;
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
  };

  export type BookUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput>
      | BookCreateWithoutUserInput[]
      | BookUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | BookCreateOrConnectWithoutUserInput
      | BookCreateOrConnectWithoutUserInput[];
    createMany?: BookCreateManyUserInputEnvelope;
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[];
  };

  export type ReadingProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          ReadingProgressCreateWithoutUserInput,
          ReadingProgressUncheckedCreateWithoutUserInput
        >
      | ReadingProgressCreateWithoutUserInput[]
      | ReadingProgressUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ReadingProgressCreateOrConnectWithoutUserInput
      | ReadingProgressCreateOrConnectWithoutUserInput[];
    createMany?: ReadingProgressCreateManyUserInputEnvelope;
    connect?:
      | ReadingProgressWhereUniqueInput
      | ReadingProgressWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableEnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender | null;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          CommentCreateWithoutUserInput,
          CommentUncheckedCreateWithoutUserInput
        >
      | CommentCreateWithoutUserInput[]
      | CommentUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutUserInput
      | CommentCreateOrConnectWithoutUserInput[];
    upsert?:
      | CommentUpsertWithWhereUniqueWithoutUserInput
      | CommentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: CommentCreateManyUserInputEnvelope;
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    update?:
      | CommentUpdateWithWhereUniqueWithoutUserInput
      | CommentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | CommentUpdateManyWithWhereWithoutUserInput
      | CommentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[];
  };

  export type FavoriteUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          FavoriteCreateWithoutUserInput,
          FavoriteUncheckedCreateWithoutUserInput
        >
      | FavoriteCreateWithoutUserInput[]
      | FavoriteUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | FavoriteCreateOrConnectWithoutUserInput
      | FavoriteCreateOrConnectWithoutUserInput[];
    upsert?:
      | FavoriteUpsertWithWhereUniqueWithoutUserInput
      | FavoriteUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: FavoriteCreateManyUserInputEnvelope;
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[];
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[];
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[];
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[];
    update?:
      | FavoriteUpdateWithWhereUniqueWithoutUserInput
      | FavoriteUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | FavoriteUpdateManyWithWhereWithoutUserInput
      | FavoriteUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[];
  };

  export type LikeUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
      | LikeCreateWithoutUserInput[]
      | LikeUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | LikeCreateOrConnectWithoutUserInput
      | LikeCreateOrConnectWithoutUserInput[];
    upsert?:
      | LikeUpsertWithWhereUniqueWithoutUserInput
      | LikeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: LikeCreateManyUserInputEnvelope;
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
    update?:
      | LikeUpdateWithWhereUniqueWithoutUserInput
      | LikeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | LikeUpdateManyWithWhereWithoutUserInput
      | LikeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[];
  };

  export type BookUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput>
      | BookCreateWithoutUserInput[]
      | BookUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | BookCreateOrConnectWithoutUserInput
      | BookCreateOrConnectWithoutUserInput[];
    upsert?:
      | BookUpsertWithWhereUniqueWithoutUserInput
      | BookUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: BookCreateManyUserInputEnvelope;
    set?: BookWhereUniqueInput | BookWhereUniqueInput[];
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[];
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[];
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[];
    update?:
      | BookUpdateWithWhereUniqueWithoutUserInput
      | BookUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | BookUpdateManyWithWhereWithoutUserInput
      | BookUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[];
  };

  export type ReadingProgressUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          ReadingProgressCreateWithoutUserInput,
          ReadingProgressUncheckedCreateWithoutUserInput
        >
      | ReadingProgressCreateWithoutUserInput[]
      | ReadingProgressUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ReadingProgressCreateOrConnectWithoutUserInput
      | ReadingProgressCreateOrConnectWithoutUserInput[];
    upsert?:
      | ReadingProgressUpsertWithWhereUniqueWithoutUserInput
      | ReadingProgressUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ReadingProgressCreateManyUserInputEnvelope;
    set?: ReadingProgressWhereUniqueInput | ReadingProgressWhereUniqueInput[];
    disconnect?:
      | ReadingProgressWhereUniqueInput
      | ReadingProgressWhereUniqueInput[];
    delete?:
      | ReadingProgressWhereUniqueInput
      | ReadingProgressWhereUniqueInput[];
    connect?:
      | ReadingProgressWhereUniqueInput
      | ReadingProgressWhereUniqueInput[];
    update?:
      | ReadingProgressUpdateWithWhereUniqueWithoutUserInput
      | ReadingProgressUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | ReadingProgressUpdateManyWithWhereWithoutUserInput
      | ReadingProgressUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | ReadingProgressScalarWhereInput
      | ReadingProgressScalarWhereInput[];
  };

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          CommentCreateWithoutUserInput,
          CommentUncheckedCreateWithoutUserInput
        >
      | CommentCreateWithoutUserInput[]
      | CommentUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutUserInput
      | CommentCreateOrConnectWithoutUserInput[];
    upsert?:
      | CommentUpsertWithWhereUniqueWithoutUserInput
      | CommentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: CommentCreateManyUserInputEnvelope;
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    update?:
      | CommentUpdateWithWhereUniqueWithoutUserInput
      | CommentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | CommentUpdateManyWithWhereWithoutUserInput
      | CommentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[];
  };

  export type FavoriteUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          FavoriteCreateWithoutUserInput,
          FavoriteUncheckedCreateWithoutUserInput
        >
      | FavoriteCreateWithoutUserInput[]
      | FavoriteUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | FavoriteCreateOrConnectWithoutUserInput
      | FavoriteCreateOrConnectWithoutUserInput[];
    upsert?:
      | FavoriteUpsertWithWhereUniqueWithoutUserInput
      | FavoriteUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: FavoriteCreateManyUserInputEnvelope;
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[];
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[];
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[];
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[];
    update?:
      | FavoriteUpdateWithWhereUniqueWithoutUserInput
      | FavoriteUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | FavoriteUpdateManyWithWhereWithoutUserInput
      | FavoriteUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[];
  };

  export type LikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
      | LikeCreateWithoutUserInput[]
      | LikeUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | LikeCreateOrConnectWithoutUserInput
      | LikeCreateOrConnectWithoutUserInput[];
    upsert?:
      | LikeUpsertWithWhereUniqueWithoutUserInput
      | LikeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: LikeCreateManyUserInputEnvelope;
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
    update?:
      | LikeUpdateWithWhereUniqueWithoutUserInput
      | LikeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | LikeUpdateManyWithWhereWithoutUserInput
      | LikeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[];
  };

  export type BookUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput>
      | BookCreateWithoutUserInput[]
      | BookUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | BookCreateOrConnectWithoutUserInput
      | BookCreateOrConnectWithoutUserInput[];
    upsert?:
      | BookUpsertWithWhereUniqueWithoutUserInput
      | BookUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: BookCreateManyUserInputEnvelope;
    set?: BookWhereUniqueInput | BookWhereUniqueInput[];
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[];
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[];
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[];
    update?:
      | BookUpdateWithWhereUniqueWithoutUserInput
      | BookUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | BookUpdateManyWithWhereWithoutUserInput
      | BookUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[];
  };

  export type ReadingProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          ReadingProgressCreateWithoutUserInput,
          ReadingProgressUncheckedCreateWithoutUserInput
        >
      | ReadingProgressCreateWithoutUserInput[]
      | ReadingProgressUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ReadingProgressCreateOrConnectWithoutUserInput
      | ReadingProgressCreateOrConnectWithoutUserInput[];
    upsert?:
      | ReadingProgressUpsertWithWhereUniqueWithoutUserInput
      | ReadingProgressUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ReadingProgressCreateManyUserInputEnvelope;
    set?: ReadingProgressWhereUniqueInput | ReadingProgressWhereUniqueInput[];
    disconnect?:
      | ReadingProgressWhereUniqueInput
      | ReadingProgressWhereUniqueInput[];
    delete?:
      | ReadingProgressWhereUniqueInput
      | ReadingProgressWhereUniqueInput[];
    connect?:
      | ReadingProgressWhereUniqueInput
      | ReadingProgressWhereUniqueInput[];
    update?:
      | ReadingProgressUpdateWithWhereUniqueWithoutUserInput
      | ReadingProgressUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | ReadingProgressUpdateManyWithWhereWithoutUserInput
      | ReadingProgressUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | ReadingProgressScalarWhereInput
      | ReadingProgressScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutAddedBooksInput = {
    create?: XOR<
      UserCreateWithoutAddedBooksInput,
      UserUncheckedCreateWithoutAddedBooksInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutAddedBooksInput;
    connect?: UserWhereUniqueInput;
  };

  export type BookAuthorCreateNestedManyWithoutBookInput = {
    create?:
      | XOR<
          BookAuthorCreateWithoutBookInput,
          BookAuthorUncheckedCreateWithoutBookInput
        >
      | BookAuthorCreateWithoutBookInput[]
      | BookAuthorUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | BookAuthorCreateOrConnectWithoutBookInput
      | BookAuthorCreateOrConnectWithoutBookInput[];
    createMany?: BookAuthorCreateManyBookInputEnvelope;
    connect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[];
  };

  export type BookCategoryCreateNestedManyWithoutBookInput = {
    create?:
      | XOR<
          BookCategoryCreateWithoutBookInput,
          BookCategoryUncheckedCreateWithoutBookInput
        >
      | BookCategoryCreateWithoutBookInput[]
      | BookCategoryUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | BookCategoryCreateOrConnectWithoutBookInput
      | BookCategoryCreateOrConnectWithoutBookInput[];
    createMany?: BookCategoryCreateManyBookInputEnvelope;
    connect?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[];
  };

  export type CommentCreateNestedManyWithoutBookInput = {
    create?:
      | XOR<
          CommentCreateWithoutBookInput,
          CommentUncheckedCreateWithoutBookInput
        >
      | CommentCreateWithoutBookInput[]
      | CommentUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutBookInput
      | CommentCreateOrConnectWithoutBookInput[];
    createMany?: CommentCreateManyBookInputEnvelope;
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
  };

  export type LikeCreateNestedManyWithoutBookInput = {
    create?:
      | XOR<LikeCreateWithoutBookInput, LikeUncheckedCreateWithoutBookInput>
      | LikeCreateWithoutBookInput[]
      | LikeUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | LikeCreateOrConnectWithoutBookInput
      | LikeCreateOrConnectWithoutBookInput[];
    createMany?: LikeCreateManyBookInputEnvelope;
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
  };

  export type FavoriteCreateNestedManyWithoutBookInput = {
    create?:
      | XOR<
          FavoriteCreateWithoutBookInput,
          FavoriteUncheckedCreateWithoutBookInput
        >
      | FavoriteCreateWithoutBookInput[]
      | FavoriteUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | FavoriteCreateOrConnectWithoutBookInput
      | FavoriteCreateOrConnectWithoutBookInput[];
    createMany?: FavoriteCreateManyBookInputEnvelope;
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[];
  };

  export type ReadingProgressCreateNestedManyWithoutBookInput = {
    create?:
      | XOR<
          ReadingProgressCreateWithoutBookInput,
          ReadingProgressUncheckedCreateWithoutBookInput
        >
      | ReadingProgressCreateWithoutBookInput[]
      | ReadingProgressUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | ReadingProgressCreateOrConnectWithoutBookInput
      | ReadingProgressCreateOrConnectWithoutBookInput[];
    createMany?: ReadingProgressCreateManyBookInputEnvelope;
    connect?:
      | ReadingProgressWhereUniqueInput
      | ReadingProgressWhereUniqueInput[];
  };

  export type BookAuthorUncheckedCreateNestedManyWithoutBookInput = {
    create?:
      | XOR<
          BookAuthorCreateWithoutBookInput,
          BookAuthorUncheckedCreateWithoutBookInput
        >
      | BookAuthorCreateWithoutBookInput[]
      | BookAuthorUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | BookAuthorCreateOrConnectWithoutBookInput
      | BookAuthorCreateOrConnectWithoutBookInput[];
    createMany?: BookAuthorCreateManyBookInputEnvelope;
    connect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[];
  };

  export type BookCategoryUncheckedCreateNestedManyWithoutBookInput = {
    create?:
      | XOR<
          BookCategoryCreateWithoutBookInput,
          BookCategoryUncheckedCreateWithoutBookInput
        >
      | BookCategoryCreateWithoutBookInput[]
      | BookCategoryUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | BookCategoryCreateOrConnectWithoutBookInput
      | BookCategoryCreateOrConnectWithoutBookInput[];
    createMany?: BookCategoryCreateManyBookInputEnvelope;
    connect?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[];
  };

  export type CommentUncheckedCreateNestedManyWithoutBookInput = {
    create?:
      | XOR<
          CommentCreateWithoutBookInput,
          CommentUncheckedCreateWithoutBookInput
        >
      | CommentCreateWithoutBookInput[]
      | CommentUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutBookInput
      | CommentCreateOrConnectWithoutBookInput[];
    createMany?: CommentCreateManyBookInputEnvelope;
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
  };

  export type LikeUncheckedCreateNestedManyWithoutBookInput = {
    create?:
      | XOR<LikeCreateWithoutBookInput, LikeUncheckedCreateWithoutBookInput>
      | LikeCreateWithoutBookInput[]
      | LikeUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | LikeCreateOrConnectWithoutBookInput
      | LikeCreateOrConnectWithoutBookInput[];
    createMany?: LikeCreateManyBookInputEnvelope;
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
  };

  export type FavoriteUncheckedCreateNestedManyWithoutBookInput = {
    create?:
      | XOR<
          FavoriteCreateWithoutBookInput,
          FavoriteUncheckedCreateWithoutBookInput
        >
      | FavoriteCreateWithoutBookInput[]
      | FavoriteUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | FavoriteCreateOrConnectWithoutBookInput
      | FavoriteCreateOrConnectWithoutBookInput[];
    createMany?: FavoriteCreateManyBookInputEnvelope;
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[];
  };

  export type ReadingProgressUncheckedCreateNestedManyWithoutBookInput = {
    create?:
      | XOR<
          ReadingProgressCreateWithoutBookInput,
          ReadingProgressUncheckedCreateWithoutBookInput
        >
      | ReadingProgressCreateWithoutBookInput[]
      | ReadingProgressUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | ReadingProgressCreateOrConnectWithoutBookInput
      | ReadingProgressCreateOrConnectWithoutBookInput[];
    createMany?: ReadingProgressCreateManyBookInputEnvelope;
    connect?:
      | ReadingProgressWhereUniqueInput
      | ReadingProgressWhereUniqueInput[];
  };

  export type UserUpdateOneWithoutAddedBooksNestedInput = {
    create?: XOR<
      UserCreateWithoutAddedBooksInput,
      UserUncheckedCreateWithoutAddedBooksInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutAddedBooksInput;
    upsert?: UserUpsertWithoutAddedBooksInput;
    disconnect?: UserWhereInput | boolean;
    delete?: UserWhereInput | boolean;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutAddedBooksInput,
        UserUpdateWithoutAddedBooksInput
      >,
      UserUncheckedUpdateWithoutAddedBooksInput
    >;
  };

  export type BookAuthorUpdateManyWithoutBookNestedInput = {
    create?:
      | XOR<
          BookAuthorCreateWithoutBookInput,
          BookAuthorUncheckedCreateWithoutBookInput
        >
      | BookAuthorCreateWithoutBookInput[]
      | BookAuthorUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | BookAuthorCreateOrConnectWithoutBookInput
      | BookAuthorCreateOrConnectWithoutBookInput[];
    upsert?:
      | BookAuthorUpsertWithWhereUniqueWithoutBookInput
      | BookAuthorUpsertWithWhereUniqueWithoutBookInput[];
    createMany?: BookAuthorCreateManyBookInputEnvelope;
    set?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[];
    disconnect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[];
    delete?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[];
    connect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[];
    update?:
      | BookAuthorUpdateWithWhereUniqueWithoutBookInput
      | BookAuthorUpdateWithWhereUniqueWithoutBookInput[];
    updateMany?:
      | BookAuthorUpdateManyWithWhereWithoutBookInput
      | BookAuthorUpdateManyWithWhereWithoutBookInput[];
    deleteMany?: BookAuthorScalarWhereInput | BookAuthorScalarWhereInput[];
  };

  export type BookCategoryUpdateManyWithoutBookNestedInput = {
    create?:
      | XOR<
          BookCategoryCreateWithoutBookInput,
          BookCategoryUncheckedCreateWithoutBookInput
        >
      | BookCategoryCreateWithoutBookInput[]
      | BookCategoryUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | BookCategoryCreateOrConnectWithoutBookInput
      | BookCategoryCreateOrConnectWithoutBookInput[];
    upsert?:
      | BookCategoryUpsertWithWhereUniqueWithoutBookInput
      | BookCategoryUpsertWithWhereUniqueWithoutBookInput[];
    createMany?: BookCategoryCreateManyBookInputEnvelope;
    set?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[];
    disconnect?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[];
    delete?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[];
    connect?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[];
    update?:
      | BookCategoryUpdateWithWhereUniqueWithoutBookInput
      | BookCategoryUpdateWithWhereUniqueWithoutBookInput[];
    updateMany?:
      | BookCategoryUpdateManyWithWhereWithoutBookInput
      | BookCategoryUpdateManyWithWhereWithoutBookInput[];
    deleteMany?: BookCategoryScalarWhereInput | BookCategoryScalarWhereInput[];
  };

  export type CommentUpdateManyWithoutBookNestedInput = {
    create?:
      | XOR<
          CommentCreateWithoutBookInput,
          CommentUncheckedCreateWithoutBookInput
        >
      | CommentCreateWithoutBookInput[]
      | CommentUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutBookInput
      | CommentCreateOrConnectWithoutBookInput[];
    upsert?:
      | CommentUpsertWithWhereUniqueWithoutBookInput
      | CommentUpsertWithWhereUniqueWithoutBookInput[];
    createMany?: CommentCreateManyBookInputEnvelope;
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    update?:
      | CommentUpdateWithWhereUniqueWithoutBookInput
      | CommentUpdateWithWhereUniqueWithoutBookInput[];
    updateMany?:
      | CommentUpdateManyWithWhereWithoutBookInput
      | CommentUpdateManyWithWhereWithoutBookInput[];
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[];
  };

  export type LikeUpdateManyWithoutBookNestedInput = {
    create?:
      | XOR<LikeCreateWithoutBookInput, LikeUncheckedCreateWithoutBookInput>
      | LikeCreateWithoutBookInput[]
      | LikeUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | LikeCreateOrConnectWithoutBookInput
      | LikeCreateOrConnectWithoutBookInput[];
    upsert?:
      | LikeUpsertWithWhereUniqueWithoutBookInput
      | LikeUpsertWithWhereUniqueWithoutBookInput[];
    createMany?: LikeCreateManyBookInputEnvelope;
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
    update?:
      | LikeUpdateWithWhereUniqueWithoutBookInput
      | LikeUpdateWithWhereUniqueWithoutBookInput[];
    updateMany?:
      | LikeUpdateManyWithWhereWithoutBookInput
      | LikeUpdateManyWithWhereWithoutBookInput[];
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[];
  };

  export type FavoriteUpdateManyWithoutBookNestedInput = {
    create?:
      | XOR<
          FavoriteCreateWithoutBookInput,
          FavoriteUncheckedCreateWithoutBookInput
        >
      | FavoriteCreateWithoutBookInput[]
      | FavoriteUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | FavoriteCreateOrConnectWithoutBookInput
      | FavoriteCreateOrConnectWithoutBookInput[];
    upsert?:
      | FavoriteUpsertWithWhereUniqueWithoutBookInput
      | FavoriteUpsertWithWhereUniqueWithoutBookInput[];
    createMany?: FavoriteCreateManyBookInputEnvelope;
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[];
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[];
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[];
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[];
    update?:
      | FavoriteUpdateWithWhereUniqueWithoutBookInput
      | FavoriteUpdateWithWhereUniqueWithoutBookInput[];
    updateMany?:
      | FavoriteUpdateManyWithWhereWithoutBookInput
      | FavoriteUpdateManyWithWhereWithoutBookInput[];
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[];
  };

  export type ReadingProgressUpdateManyWithoutBookNestedInput = {
    create?:
      | XOR<
          ReadingProgressCreateWithoutBookInput,
          ReadingProgressUncheckedCreateWithoutBookInput
        >
      | ReadingProgressCreateWithoutBookInput[]
      | ReadingProgressUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | ReadingProgressCreateOrConnectWithoutBookInput
      | ReadingProgressCreateOrConnectWithoutBookInput[];
    upsert?:
      | ReadingProgressUpsertWithWhereUniqueWithoutBookInput
      | ReadingProgressUpsertWithWhereUniqueWithoutBookInput[];
    createMany?: ReadingProgressCreateManyBookInputEnvelope;
    set?: ReadingProgressWhereUniqueInput | ReadingProgressWhereUniqueInput[];
    disconnect?:
      | ReadingProgressWhereUniqueInput
      | ReadingProgressWhereUniqueInput[];
    delete?:
      | ReadingProgressWhereUniqueInput
      | ReadingProgressWhereUniqueInput[];
    connect?:
      | ReadingProgressWhereUniqueInput
      | ReadingProgressWhereUniqueInput[];
    update?:
      | ReadingProgressUpdateWithWhereUniqueWithoutBookInput
      | ReadingProgressUpdateWithWhereUniqueWithoutBookInput[];
    updateMany?:
      | ReadingProgressUpdateManyWithWhereWithoutBookInput
      | ReadingProgressUpdateManyWithWhereWithoutBookInput[];
    deleteMany?:
      | ReadingProgressScalarWhereInput
      | ReadingProgressScalarWhereInput[];
  };

  export type BookAuthorUncheckedUpdateManyWithoutBookNestedInput = {
    create?:
      | XOR<
          BookAuthorCreateWithoutBookInput,
          BookAuthorUncheckedCreateWithoutBookInput
        >
      | BookAuthorCreateWithoutBookInput[]
      | BookAuthorUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | BookAuthorCreateOrConnectWithoutBookInput
      | BookAuthorCreateOrConnectWithoutBookInput[];
    upsert?:
      | BookAuthorUpsertWithWhereUniqueWithoutBookInput
      | BookAuthorUpsertWithWhereUniqueWithoutBookInput[];
    createMany?: BookAuthorCreateManyBookInputEnvelope;
    set?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[];
    disconnect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[];
    delete?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[];
    connect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[];
    update?:
      | BookAuthorUpdateWithWhereUniqueWithoutBookInput
      | BookAuthorUpdateWithWhereUniqueWithoutBookInput[];
    updateMany?:
      | BookAuthorUpdateManyWithWhereWithoutBookInput
      | BookAuthorUpdateManyWithWhereWithoutBookInput[];
    deleteMany?: BookAuthorScalarWhereInput | BookAuthorScalarWhereInput[];
  };

  export type BookCategoryUncheckedUpdateManyWithoutBookNestedInput = {
    create?:
      | XOR<
          BookCategoryCreateWithoutBookInput,
          BookCategoryUncheckedCreateWithoutBookInput
        >
      | BookCategoryCreateWithoutBookInput[]
      | BookCategoryUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | BookCategoryCreateOrConnectWithoutBookInput
      | BookCategoryCreateOrConnectWithoutBookInput[];
    upsert?:
      | BookCategoryUpsertWithWhereUniqueWithoutBookInput
      | BookCategoryUpsertWithWhereUniqueWithoutBookInput[];
    createMany?: BookCategoryCreateManyBookInputEnvelope;
    set?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[];
    disconnect?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[];
    delete?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[];
    connect?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[];
    update?:
      | BookCategoryUpdateWithWhereUniqueWithoutBookInput
      | BookCategoryUpdateWithWhereUniqueWithoutBookInput[];
    updateMany?:
      | BookCategoryUpdateManyWithWhereWithoutBookInput
      | BookCategoryUpdateManyWithWhereWithoutBookInput[];
    deleteMany?: BookCategoryScalarWhereInput | BookCategoryScalarWhereInput[];
  };

  export type CommentUncheckedUpdateManyWithoutBookNestedInput = {
    create?:
      | XOR<
          CommentCreateWithoutBookInput,
          CommentUncheckedCreateWithoutBookInput
        >
      | CommentCreateWithoutBookInput[]
      | CommentUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutBookInput
      | CommentCreateOrConnectWithoutBookInput[];
    upsert?:
      | CommentUpsertWithWhereUniqueWithoutBookInput
      | CommentUpsertWithWhereUniqueWithoutBookInput[];
    createMany?: CommentCreateManyBookInputEnvelope;
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    update?:
      | CommentUpdateWithWhereUniqueWithoutBookInput
      | CommentUpdateWithWhereUniqueWithoutBookInput[];
    updateMany?:
      | CommentUpdateManyWithWhereWithoutBookInput
      | CommentUpdateManyWithWhereWithoutBookInput[];
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[];
  };

  export type LikeUncheckedUpdateManyWithoutBookNestedInput = {
    create?:
      | XOR<LikeCreateWithoutBookInput, LikeUncheckedCreateWithoutBookInput>
      | LikeCreateWithoutBookInput[]
      | LikeUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | LikeCreateOrConnectWithoutBookInput
      | LikeCreateOrConnectWithoutBookInput[];
    upsert?:
      | LikeUpsertWithWhereUniqueWithoutBookInput
      | LikeUpsertWithWhereUniqueWithoutBookInput[];
    createMany?: LikeCreateManyBookInputEnvelope;
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[];
    update?:
      | LikeUpdateWithWhereUniqueWithoutBookInput
      | LikeUpdateWithWhereUniqueWithoutBookInput[];
    updateMany?:
      | LikeUpdateManyWithWhereWithoutBookInput
      | LikeUpdateManyWithWhereWithoutBookInput[];
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[];
  };

  export type FavoriteUncheckedUpdateManyWithoutBookNestedInput = {
    create?:
      | XOR<
          FavoriteCreateWithoutBookInput,
          FavoriteUncheckedCreateWithoutBookInput
        >
      | FavoriteCreateWithoutBookInput[]
      | FavoriteUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | FavoriteCreateOrConnectWithoutBookInput
      | FavoriteCreateOrConnectWithoutBookInput[];
    upsert?:
      | FavoriteUpsertWithWhereUniqueWithoutBookInput
      | FavoriteUpsertWithWhereUniqueWithoutBookInput[];
    createMany?: FavoriteCreateManyBookInputEnvelope;
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[];
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[];
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[];
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[];
    update?:
      | FavoriteUpdateWithWhereUniqueWithoutBookInput
      | FavoriteUpdateWithWhereUniqueWithoutBookInput[];
    updateMany?:
      | FavoriteUpdateManyWithWhereWithoutBookInput
      | FavoriteUpdateManyWithWhereWithoutBookInput[];
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[];
  };

  export type ReadingProgressUncheckedUpdateManyWithoutBookNestedInput = {
    create?:
      | XOR<
          ReadingProgressCreateWithoutBookInput,
          ReadingProgressUncheckedCreateWithoutBookInput
        >
      | ReadingProgressCreateWithoutBookInput[]
      | ReadingProgressUncheckedCreateWithoutBookInput[];
    connectOrCreate?:
      | ReadingProgressCreateOrConnectWithoutBookInput
      | ReadingProgressCreateOrConnectWithoutBookInput[];
    upsert?:
      | ReadingProgressUpsertWithWhereUniqueWithoutBookInput
      | ReadingProgressUpsertWithWhereUniqueWithoutBookInput[];
    createMany?: ReadingProgressCreateManyBookInputEnvelope;
    set?: ReadingProgressWhereUniqueInput | ReadingProgressWhereUniqueInput[];
    disconnect?:
      | ReadingProgressWhereUniqueInput
      | ReadingProgressWhereUniqueInput[];
    delete?:
      | ReadingProgressWhereUniqueInput
      | ReadingProgressWhereUniqueInput[];
    connect?:
      | ReadingProgressWhereUniqueInput
      | ReadingProgressWhereUniqueInput[];
    update?:
      | ReadingProgressUpdateWithWhereUniqueWithoutBookInput
      | ReadingProgressUpdateWithWhereUniqueWithoutBookInput[];
    updateMany?:
      | ReadingProgressUpdateManyWithWhereWithoutBookInput
      | ReadingProgressUpdateManyWithWhereWithoutBookInput[];
    deleteMany?:
      | ReadingProgressScalarWhereInput
      | ReadingProgressScalarWhereInput[];
  };

  export type BookAuthorCreateNestedManyWithoutAuthorInput = {
    create?:
      | XOR<
          BookAuthorCreateWithoutAuthorInput,
          BookAuthorUncheckedCreateWithoutAuthorInput
        >
      | BookAuthorCreateWithoutAuthorInput[]
      | BookAuthorUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | BookAuthorCreateOrConnectWithoutAuthorInput
      | BookAuthorCreateOrConnectWithoutAuthorInput[];
    createMany?: BookAuthorCreateManyAuthorInputEnvelope;
    connect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[];
  };

  export type BookAuthorUncheckedCreateNestedManyWithoutAuthorInput = {
    create?:
      | XOR<
          BookAuthorCreateWithoutAuthorInput,
          BookAuthorUncheckedCreateWithoutAuthorInput
        >
      | BookAuthorCreateWithoutAuthorInput[]
      | BookAuthorUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | BookAuthorCreateOrConnectWithoutAuthorInput
      | BookAuthorCreateOrConnectWithoutAuthorInput[];
    createMany?: BookAuthorCreateManyAuthorInputEnvelope;
    connect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[];
  };

  export type BookAuthorUpdateManyWithoutAuthorNestedInput = {
    create?:
      | XOR<
          BookAuthorCreateWithoutAuthorInput,
          BookAuthorUncheckedCreateWithoutAuthorInput
        >
      | BookAuthorCreateWithoutAuthorInput[]
      | BookAuthorUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | BookAuthorCreateOrConnectWithoutAuthorInput
      | BookAuthorCreateOrConnectWithoutAuthorInput[];
    upsert?:
      | BookAuthorUpsertWithWhereUniqueWithoutAuthorInput
      | BookAuthorUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: BookAuthorCreateManyAuthorInputEnvelope;
    set?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[];
    disconnect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[];
    delete?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[];
    connect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[];
    update?:
      | BookAuthorUpdateWithWhereUniqueWithoutAuthorInput
      | BookAuthorUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?:
      | BookAuthorUpdateManyWithWhereWithoutAuthorInput
      | BookAuthorUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: BookAuthorScalarWhereInput | BookAuthorScalarWhereInput[];
  };

  export type BookAuthorUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?:
      | XOR<
          BookAuthorCreateWithoutAuthorInput,
          BookAuthorUncheckedCreateWithoutAuthorInput
        >
      | BookAuthorCreateWithoutAuthorInput[]
      | BookAuthorUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | BookAuthorCreateOrConnectWithoutAuthorInput
      | BookAuthorCreateOrConnectWithoutAuthorInput[];
    upsert?:
      | BookAuthorUpsertWithWhereUniqueWithoutAuthorInput
      | BookAuthorUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: BookAuthorCreateManyAuthorInputEnvelope;
    set?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[];
    disconnect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[];
    delete?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[];
    connect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[];
    update?:
      | BookAuthorUpdateWithWhereUniqueWithoutAuthorInput
      | BookAuthorUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?:
      | BookAuthorUpdateManyWithWhereWithoutAuthorInput
      | BookAuthorUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: BookAuthorScalarWhereInput | BookAuthorScalarWhereInput[];
  };

  export type BookCreateNestedOneWithoutAuthorsInput = {
    create?: XOR<
      BookCreateWithoutAuthorsInput,
      BookUncheckedCreateWithoutAuthorsInput
    >;
    connectOrCreate?: BookCreateOrConnectWithoutAuthorsInput;
    connect?: BookWhereUniqueInput;
  };

  export type AuthorCreateNestedOneWithoutBooksInput = {
    create?: XOR<
      AuthorCreateWithoutBooksInput,
      AuthorUncheckedCreateWithoutBooksInput
    >;
    connectOrCreate?: AuthorCreateOrConnectWithoutBooksInput;
    connect?: AuthorWhereUniqueInput;
  };

  export type BookUpdateOneRequiredWithoutAuthorsNestedInput = {
    create?: XOR<
      BookCreateWithoutAuthorsInput,
      BookUncheckedCreateWithoutAuthorsInput
    >;
    connectOrCreate?: BookCreateOrConnectWithoutAuthorsInput;
    upsert?: BookUpsertWithoutAuthorsInput;
    connect?: BookWhereUniqueInput;
    update?: XOR<
      XOR<
        BookUpdateToOneWithWhereWithoutAuthorsInput,
        BookUpdateWithoutAuthorsInput
      >,
      BookUncheckedUpdateWithoutAuthorsInput
    >;
  };

  export type AuthorUpdateOneRequiredWithoutBooksNestedInput = {
    create?: XOR<
      AuthorCreateWithoutBooksInput,
      AuthorUncheckedCreateWithoutBooksInput
    >;
    connectOrCreate?: AuthorCreateOrConnectWithoutBooksInput;
    upsert?: AuthorUpsertWithoutBooksInput;
    connect?: AuthorWhereUniqueInput;
    update?: XOR<
      XOR<
        AuthorUpdateToOneWithWhereWithoutBooksInput,
        AuthorUpdateWithoutBooksInput
      >,
      AuthorUncheckedUpdateWithoutBooksInput
    >;
  };

  export type BookCategoryCreateNestedManyWithoutCategoryInput = {
    create?:
      | XOR<
          BookCategoryCreateWithoutCategoryInput,
          BookCategoryUncheckedCreateWithoutCategoryInput
        >
      | BookCategoryCreateWithoutCategoryInput[]
      | BookCategoryUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | BookCategoryCreateOrConnectWithoutCategoryInput
      | BookCategoryCreateOrConnectWithoutCategoryInput[];
    createMany?: BookCategoryCreateManyCategoryInputEnvelope;
    connect?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[];
  };

  export type BookCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?:
      | XOR<
          BookCategoryCreateWithoutCategoryInput,
          BookCategoryUncheckedCreateWithoutCategoryInput
        >
      | BookCategoryCreateWithoutCategoryInput[]
      | BookCategoryUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | BookCategoryCreateOrConnectWithoutCategoryInput
      | BookCategoryCreateOrConnectWithoutCategoryInput[];
    createMany?: BookCategoryCreateManyCategoryInputEnvelope;
    connect?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[];
  };

  export type BookCategoryUpdateManyWithoutCategoryNestedInput = {
    create?:
      | XOR<
          BookCategoryCreateWithoutCategoryInput,
          BookCategoryUncheckedCreateWithoutCategoryInput
        >
      | BookCategoryCreateWithoutCategoryInput[]
      | BookCategoryUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | BookCategoryCreateOrConnectWithoutCategoryInput
      | BookCategoryCreateOrConnectWithoutCategoryInput[];
    upsert?:
      | BookCategoryUpsertWithWhereUniqueWithoutCategoryInput
      | BookCategoryUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: BookCategoryCreateManyCategoryInputEnvelope;
    set?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[];
    disconnect?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[];
    delete?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[];
    connect?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[];
    update?:
      | BookCategoryUpdateWithWhereUniqueWithoutCategoryInput
      | BookCategoryUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?:
      | BookCategoryUpdateManyWithWhereWithoutCategoryInput
      | BookCategoryUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: BookCategoryScalarWhereInput | BookCategoryScalarWhereInput[];
  };

  export type BookCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?:
      | XOR<
          BookCategoryCreateWithoutCategoryInput,
          BookCategoryUncheckedCreateWithoutCategoryInput
        >
      | BookCategoryCreateWithoutCategoryInput[]
      | BookCategoryUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | BookCategoryCreateOrConnectWithoutCategoryInput
      | BookCategoryCreateOrConnectWithoutCategoryInput[];
    upsert?:
      | BookCategoryUpsertWithWhereUniqueWithoutCategoryInput
      | BookCategoryUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: BookCategoryCreateManyCategoryInputEnvelope;
    set?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[];
    disconnect?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[];
    delete?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[];
    connect?: BookCategoryWhereUniqueInput | BookCategoryWhereUniqueInput[];
    update?:
      | BookCategoryUpdateWithWhereUniqueWithoutCategoryInput
      | BookCategoryUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?:
      | BookCategoryUpdateManyWithWhereWithoutCategoryInput
      | BookCategoryUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: BookCategoryScalarWhereInput | BookCategoryScalarWhereInput[];
  };

  export type BookCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<
      BookCreateWithoutCategoriesInput,
      BookUncheckedCreateWithoutCategoriesInput
    >;
    connectOrCreate?: BookCreateOrConnectWithoutCategoriesInput;
    connect?: BookWhereUniqueInput;
  };

  export type CategoryCreateNestedOneWithoutBooksInput = {
    create?: XOR<
      CategoryCreateWithoutBooksInput,
      CategoryUncheckedCreateWithoutBooksInput
    >;
    connectOrCreate?: CategoryCreateOrConnectWithoutBooksInput;
    connect?: CategoryWhereUniqueInput;
  };

  export type BookUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<
      BookCreateWithoutCategoriesInput,
      BookUncheckedCreateWithoutCategoriesInput
    >;
    connectOrCreate?: BookCreateOrConnectWithoutCategoriesInput;
    upsert?: BookUpsertWithoutCategoriesInput;
    connect?: BookWhereUniqueInput;
    update?: XOR<
      XOR<
        BookUpdateToOneWithWhereWithoutCategoriesInput,
        BookUpdateWithoutCategoriesInput
      >,
      BookUncheckedUpdateWithoutCategoriesInput
    >;
  };

  export type CategoryUpdateOneRequiredWithoutBooksNestedInput = {
    create?: XOR<
      CategoryCreateWithoutBooksInput,
      CategoryUncheckedCreateWithoutBooksInput
    >;
    connectOrCreate?: CategoryCreateOrConnectWithoutBooksInput;
    upsert?: CategoryUpsertWithoutBooksInput;
    connect?: CategoryWhereUniqueInput;
    update?: XOR<
      XOR<
        CategoryUpdateToOneWithWhereWithoutBooksInput,
        CategoryUpdateWithoutBooksInput
      >,
      CategoryUncheckedUpdateWithoutBooksInput
    >;
  };

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<
      UserCreateWithoutCommentsInput,
      UserUncheckedCreateWithoutCommentsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput;
    connect?: UserWhereUniqueInput;
  };

  export type BookCreateNestedOneWithoutCommentsInput = {
    create?: XOR<
      BookCreateWithoutCommentsInput,
      BookUncheckedCreateWithoutCommentsInput
    >;
    connectOrCreate?: BookCreateOrConnectWithoutCommentsInput;
    connect?: BookWhereUniqueInput;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<
      UserCreateWithoutCommentsInput,
      UserUncheckedCreateWithoutCommentsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput;
    upsert?: UserUpsertWithoutCommentsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutCommentsInput,
        UserUpdateWithoutCommentsInput
      >,
      UserUncheckedUpdateWithoutCommentsInput
    >;
  };

  export type BookUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<
      BookCreateWithoutCommentsInput,
      BookUncheckedCreateWithoutCommentsInput
    >;
    connectOrCreate?: BookCreateOrConnectWithoutCommentsInput;
    upsert?: BookUpsertWithoutCommentsInput;
    connect?: BookWhereUniqueInput;
    update?: XOR<
      XOR<
        BookUpdateToOneWithWhereWithoutCommentsInput,
        BookUpdateWithoutCommentsInput
      >,
      BookUncheckedUpdateWithoutCommentsInput
    >;
  };

  export type UserCreateNestedOneWithoutLikesInput = {
    create?: XOR<
      UserCreateWithoutLikesInput,
      UserUncheckedCreateWithoutLikesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput;
    connect?: UserWhereUniqueInput;
  };

  export type BookCreateNestedOneWithoutLikesInput = {
    create?: XOR<
      BookCreateWithoutLikesInput,
      BookUncheckedCreateWithoutLikesInput
    >;
    connectOrCreate?: BookCreateOrConnectWithoutLikesInput;
    connect?: BookWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<
      UserCreateWithoutLikesInput,
      UserUncheckedCreateWithoutLikesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput;
    upsert?: UserUpsertWithoutLikesInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutLikesInput,
        UserUpdateWithoutLikesInput
      >,
      UserUncheckedUpdateWithoutLikesInput
    >;
  };

  export type BookUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<
      BookCreateWithoutLikesInput,
      BookUncheckedCreateWithoutLikesInput
    >;
    connectOrCreate?: BookCreateOrConnectWithoutLikesInput;
    upsert?: BookUpsertWithoutLikesInput;
    connect?: BookWhereUniqueInput;
    update?: XOR<
      XOR<
        BookUpdateToOneWithWhereWithoutLikesInput,
        BookUpdateWithoutLikesInput
      >,
      BookUncheckedUpdateWithoutLikesInput
    >;
  };

  export type UserCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<
      UserCreateWithoutFavoritesInput,
      UserUncheckedCreateWithoutFavoritesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput;
    connect?: UserWhereUniqueInput;
  };

  export type BookCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<
      BookCreateWithoutFavoritesInput,
      BookUncheckedCreateWithoutFavoritesInput
    >;
    connectOrCreate?: BookCreateOrConnectWithoutFavoritesInput;
    connect?: BookWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<
      UserCreateWithoutFavoritesInput,
      UserUncheckedCreateWithoutFavoritesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput;
    upsert?: UserUpsertWithoutFavoritesInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutFavoritesInput,
        UserUpdateWithoutFavoritesInput
      >,
      UserUncheckedUpdateWithoutFavoritesInput
    >;
  };

  export type BookUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<
      BookCreateWithoutFavoritesInput,
      BookUncheckedCreateWithoutFavoritesInput
    >;
    connectOrCreate?: BookCreateOrConnectWithoutFavoritesInput;
    upsert?: BookUpsertWithoutFavoritesInput;
    connect?: BookWhereUniqueInput;
    update?: XOR<
      XOR<
        BookUpdateToOneWithWhereWithoutFavoritesInput,
        BookUpdateWithoutFavoritesInput
      >,
      BookUncheckedUpdateWithoutFavoritesInput
    >;
  };

  export type UserCreateNestedOneWithoutReadingProgressInput = {
    create?: XOR<
      UserCreateWithoutReadingProgressInput,
      UserUncheckedCreateWithoutReadingProgressInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutReadingProgressInput;
    connect?: UserWhereUniqueInput;
  };

  export type BookCreateNestedOneWithoutReadingProgressInput = {
    create?: XOR<
      BookCreateWithoutReadingProgressInput,
      BookUncheckedCreateWithoutReadingProgressInput
    >;
    connectOrCreate?: BookCreateOrConnectWithoutReadingProgressInput;
    connect?: BookWhereUniqueInput;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type UserUpdateOneRequiredWithoutReadingProgressNestedInput = {
    create?: XOR<
      UserCreateWithoutReadingProgressInput,
      UserUncheckedCreateWithoutReadingProgressInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutReadingProgressInput;
    upsert?: UserUpsertWithoutReadingProgressInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutReadingProgressInput,
        UserUpdateWithoutReadingProgressInput
      >,
      UserUncheckedUpdateWithoutReadingProgressInput
    >;
  };

  export type BookUpdateOneRequiredWithoutReadingProgressNestedInput = {
    create?: XOR<
      BookCreateWithoutReadingProgressInput,
      BookUncheckedCreateWithoutReadingProgressInput
    >;
    connectOrCreate?: BookCreateOrConnectWithoutReadingProgressInput;
    upsert?: BookUpsertWithoutReadingProgressInput;
    connect?: BookWhereUniqueInput;
    update?: XOR<
      XOR<
        BookUpdateToOneWithWhereWithoutReadingProgressInput,
        BookUpdateWithoutReadingProgressInput
      >,
      BookUncheckedUpdateWithoutReadingProgressInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null;
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null;
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedEnumGenderNullableWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null;
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null;
    not?:
      | NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel>
      | $Enums.Gender
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>;
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
      in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
      notIn?:
        | Date[]
        | string[]
        | ListDateTimeFieldRefInput<$PrismaModel>
        | null;
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?:
        | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
        | Date
        | string
        | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _min?: NestedDateTimeNullableFilter<$PrismaModel>;
      _max?: NestedDateTimeNullableFilter<$PrismaModel>;
    };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type CommentCreateWithoutUserInput = {
    id?: string;
    content: string;
    rating?: number | null;
    createdAt?: Date | string;
    book: BookCreateNestedOneWithoutCommentsInput;
  };

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: string;
    content: string;
    rating?: number | null;
    createdAt?: Date | string;
    bookId: string;
  };

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput;
    create: XOR<
      CommentCreateWithoutUserInput,
      CommentUncheckedCreateWithoutUserInput
    >;
  };

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type FavoriteCreateWithoutUserInput = {
    createdAt?: Date | string;
    book: BookCreateNestedOneWithoutFavoritesInput;
  };

  export type FavoriteUncheckedCreateWithoutUserInput = {
    bookId: string;
    createdAt?: Date | string;
  };

  export type FavoriteCreateOrConnectWithoutUserInput = {
    where: FavoriteWhereUniqueInput;
    create: XOR<
      FavoriteCreateWithoutUserInput,
      FavoriteUncheckedCreateWithoutUserInput
    >;
  };

  export type FavoriteCreateManyUserInputEnvelope = {
    data: FavoriteCreateManyUserInput | FavoriteCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type LikeCreateWithoutUserInput = {
    createdAt?: Date | string;
    book: BookCreateNestedOneWithoutLikesInput;
  };

  export type LikeUncheckedCreateWithoutUserInput = {
    bookId: string;
    createdAt?: Date | string;
  };

  export type LikeCreateOrConnectWithoutUserInput = {
    where: LikeWhereUniqueInput;
    create: XOR<
      LikeCreateWithoutUserInput,
      LikeUncheckedCreateWithoutUserInput
    >;
  };

  export type LikeCreateManyUserInputEnvelope = {
    data: LikeCreateManyUserInput | LikeCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type BookCreateWithoutUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    coverUrl?: string | null;
    publishedAt?: Date | string | null;
    producerName?: string | null;
    fileUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authors?: BookAuthorCreateNestedManyWithoutBookInput;
    categories?: BookCategoryCreateNestedManyWithoutBookInput;
    comments?: CommentCreateNestedManyWithoutBookInput;
    likes?: LikeCreateNestedManyWithoutBookInput;
    favorites?: FavoriteCreateNestedManyWithoutBookInput;
    readingProgress?: ReadingProgressCreateNestedManyWithoutBookInput;
  };

  export type BookUncheckedCreateWithoutUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    coverUrl?: string | null;
    publishedAt?: Date | string | null;
    producerName?: string | null;
    fileUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authors?: BookAuthorUncheckedCreateNestedManyWithoutBookInput;
    categories?: BookCategoryUncheckedCreateNestedManyWithoutBookInput;
    comments?: CommentUncheckedCreateNestedManyWithoutBookInput;
    likes?: LikeUncheckedCreateNestedManyWithoutBookInput;
    favorites?: FavoriteUncheckedCreateNestedManyWithoutBookInput;
    readingProgress?: ReadingProgressUncheckedCreateNestedManyWithoutBookInput;
  };

  export type BookCreateOrConnectWithoutUserInput = {
    where: BookWhereUniqueInput;
    create: XOR<
      BookCreateWithoutUserInput,
      BookUncheckedCreateWithoutUserInput
    >;
  };

  export type BookCreateManyUserInputEnvelope = {
    data: BookCreateManyUserInput | BookCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type ReadingProgressCreateWithoutUserInput = {
    id?: string;
    currentPage?: number;
    totalPages?: number | null;
    isFinished?: boolean;
    updatedAt?: Date | string;
    book: BookCreateNestedOneWithoutReadingProgressInput;
  };

  export type ReadingProgressUncheckedCreateWithoutUserInput = {
    id?: string;
    bookId: string;
    currentPage?: number;
    totalPages?: number | null;
    isFinished?: boolean;
    updatedAt?: Date | string;
  };

  export type ReadingProgressCreateOrConnectWithoutUserInput = {
    where: ReadingProgressWhereUniqueInput;
    create: XOR<
      ReadingProgressCreateWithoutUserInput,
      ReadingProgressUncheckedCreateWithoutUserInput
    >;
  };

  export type ReadingProgressCreateManyUserInputEnvelope = {
    data:
      | ReadingProgressCreateManyUserInput
      | ReadingProgressCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput;
    update: XOR<
      CommentUpdateWithoutUserInput,
      CommentUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      CommentCreateWithoutUserInput,
      CommentUncheckedCreateWithoutUserInput
    >;
  };

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput;
    data: XOR<
      CommentUpdateWithoutUserInput,
      CommentUncheckedUpdateWithoutUserInput
    >;
  };

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput;
    data: XOR<
      CommentUpdateManyMutationInput,
      CommentUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[];
    OR?: CommentScalarWhereInput[];
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[];
    id?: StringFilter<'Comment'> | string;
    content?: StringFilter<'Comment'> | string;
    rating?: IntNullableFilter<'Comment'> | number | null;
    createdAt?: DateTimeFilter<'Comment'> | Date | string;
    userId?: StringFilter<'Comment'> | string;
    bookId?: StringFilter<'Comment'> | string;
  };

  export type FavoriteUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput;
    update: XOR<
      FavoriteUpdateWithoutUserInput,
      FavoriteUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      FavoriteCreateWithoutUserInput,
      FavoriteUncheckedCreateWithoutUserInput
    >;
  };

  export type FavoriteUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput;
    data: XOR<
      FavoriteUpdateWithoutUserInput,
      FavoriteUncheckedUpdateWithoutUserInput
    >;
  };

  export type FavoriteUpdateManyWithWhereWithoutUserInput = {
    where: FavoriteScalarWhereInput;
    data: XOR<
      FavoriteUpdateManyMutationInput,
      FavoriteUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type FavoriteScalarWhereInput = {
    AND?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[];
    OR?: FavoriteScalarWhereInput[];
    NOT?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[];
    userId?: StringFilter<'Favorite'> | string;
    bookId?: StringFilter<'Favorite'> | string;
    createdAt?: DateTimeFilter<'Favorite'> | Date | string;
  };

  export type LikeUpsertWithWhereUniqueWithoutUserInput = {
    where: LikeWhereUniqueInput;
    update: XOR<
      LikeUpdateWithoutUserInput,
      LikeUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      LikeCreateWithoutUserInput,
      LikeUncheckedCreateWithoutUserInput
    >;
  };

  export type LikeUpdateWithWhereUniqueWithoutUserInput = {
    where: LikeWhereUniqueInput;
    data: XOR<LikeUpdateWithoutUserInput, LikeUncheckedUpdateWithoutUserInput>;
  };

  export type LikeUpdateManyWithWhereWithoutUserInput = {
    where: LikeScalarWhereInput;
    data: XOR<
      LikeUpdateManyMutationInput,
      LikeUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type LikeScalarWhereInput = {
    AND?: LikeScalarWhereInput | LikeScalarWhereInput[];
    OR?: LikeScalarWhereInput[];
    NOT?: LikeScalarWhereInput | LikeScalarWhereInput[];
    userId?: StringFilter<'Like'> | string;
    bookId?: StringFilter<'Like'> | string;
    createdAt?: DateTimeFilter<'Like'> | Date | string;
  };

  export type BookUpsertWithWhereUniqueWithoutUserInput = {
    where: BookWhereUniqueInput;
    update: XOR<
      BookUpdateWithoutUserInput,
      BookUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      BookCreateWithoutUserInput,
      BookUncheckedCreateWithoutUserInput
    >;
  };

  export type BookUpdateWithWhereUniqueWithoutUserInput = {
    where: BookWhereUniqueInput;
    data: XOR<BookUpdateWithoutUserInput, BookUncheckedUpdateWithoutUserInput>;
  };

  export type BookUpdateManyWithWhereWithoutUserInput = {
    where: BookScalarWhereInput;
    data: XOR<
      BookUpdateManyMutationInput,
      BookUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type BookScalarWhereInput = {
    AND?: BookScalarWhereInput | BookScalarWhereInput[];
    OR?: BookScalarWhereInput[];
    NOT?: BookScalarWhereInput | BookScalarWhereInput[];
    id?: StringFilter<'Book'> | string;
    title?: StringFilter<'Book'> | string;
    description?: StringNullableFilter<'Book'> | string | null;
    coverUrl?: StringNullableFilter<'Book'> | string | null;
    publishedAt?: DateTimeNullableFilter<'Book'> | Date | string | null;
    producerId?: StringNullableFilter<'Book'> | string | null;
    producerName?: StringNullableFilter<'Book'> | string | null;
    fileUrl?: StringNullableFilter<'Book'> | string | null;
    createdAt?: DateTimeFilter<'Book'> | Date | string;
    updatedAt?: DateTimeFilter<'Book'> | Date | string;
  };

  export type ReadingProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: ReadingProgressWhereUniqueInput;
    update: XOR<
      ReadingProgressUpdateWithoutUserInput,
      ReadingProgressUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      ReadingProgressCreateWithoutUserInput,
      ReadingProgressUncheckedCreateWithoutUserInput
    >;
  };

  export type ReadingProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: ReadingProgressWhereUniqueInput;
    data: XOR<
      ReadingProgressUpdateWithoutUserInput,
      ReadingProgressUncheckedUpdateWithoutUserInput
    >;
  };

  export type ReadingProgressUpdateManyWithWhereWithoutUserInput = {
    where: ReadingProgressScalarWhereInput;
    data: XOR<
      ReadingProgressUpdateManyMutationInput,
      ReadingProgressUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type ReadingProgressScalarWhereInput = {
    AND?: ReadingProgressScalarWhereInput | ReadingProgressScalarWhereInput[];
    OR?: ReadingProgressScalarWhereInput[];
    NOT?: ReadingProgressScalarWhereInput | ReadingProgressScalarWhereInput[];
    id?: StringFilter<'ReadingProgress'> | string;
    userId?: StringFilter<'ReadingProgress'> | string;
    bookId?: StringFilter<'ReadingProgress'> | string;
    currentPage?: IntFilter<'ReadingProgress'> | number;
    totalPages?: IntNullableFilter<'ReadingProgress'> | number | null;
    isFinished?: BoolFilter<'ReadingProgress'> | boolean;
    updatedAt?: DateTimeFilter<'ReadingProgress'> | Date | string;
  };

  export type UserCreateWithoutAddedBooksInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    gender?: $Enums.Gender | null;
    birthDate?: Date | string | null;
    avatarUrl?: string | null;
    resetToken?: string | null;
    resetTokenExpiry?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    comments?: CommentCreateNestedManyWithoutUserInput;
    favorites?: FavoriteCreateNestedManyWithoutUserInput;
    likes?: LikeCreateNestedManyWithoutUserInput;
    readingProgress?: ReadingProgressCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutAddedBooksInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    gender?: $Enums.Gender | null;
    birthDate?: Date | string | null;
    avatarUrl?: string | null;
    resetToken?: string | null;
    resetTokenExpiry?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput;
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput;
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput;
    readingProgress?: ReadingProgressUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutAddedBooksInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutAddedBooksInput,
      UserUncheckedCreateWithoutAddedBooksInput
    >;
  };

  export type BookAuthorCreateWithoutBookInput = {
    author: AuthorCreateNestedOneWithoutBooksInput;
  };

  export type BookAuthorUncheckedCreateWithoutBookInput = {
    authorId: string;
  };

  export type BookAuthorCreateOrConnectWithoutBookInput = {
    where: BookAuthorWhereUniqueInput;
    create: XOR<
      BookAuthorCreateWithoutBookInput,
      BookAuthorUncheckedCreateWithoutBookInput
    >;
  };

  export type BookAuthorCreateManyBookInputEnvelope = {
    data: BookAuthorCreateManyBookInput | BookAuthorCreateManyBookInput[];
    skipDuplicates?: boolean;
  };

  export type BookCategoryCreateWithoutBookInput = {
    category: CategoryCreateNestedOneWithoutBooksInput;
  };

  export type BookCategoryUncheckedCreateWithoutBookInput = {
    categoryId: string;
  };

  export type BookCategoryCreateOrConnectWithoutBookInput = {
    where: BookCategoryWhereUniqueInput;
    create: XOR<
      BookCategoryCreateWithoutBookInput,
      BookCategoryUncheckedCreateWithoutBookInput
    >;
  };

  export type BookCategoryCreateManyBookInputEnvelope = {
    data: BookCategoryCreateManyBookInput | BookCategoryCreateManyBookInput[];
    skipDuplicates?: boolean;
  };

  export type CommentCreateWithoutBookInput = {
    id?: string;
    content: string;
    rating?: number | null;
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutCommentsInput;
  };

  export type CommentUncheckedCreateWithoutBookInput = {
    id?: string;
    content: string;
    rating?: number | null;
    createdAt?: Date | string;
    userId: string;
  };

  export type CommentCreateOrConnectWithoutBookInput = {
    where: CommentWhereUniqueInput;
    create: XOR<
      CommentCreateWithoutBookInput,
      CommentUncheckedCreateWithoutBookInput
    >;
  };

  export type CommentCreateManyBookInputEnvelope = {
    data: CommentCreateManyBookInput | CommentCreateManyBookInput[];
    skipDuplicates?: boolean;
  };

  export type LikeCreateWithoutBookInput = {
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutLikesInput;
  };

  export type LikeUncheckedCreateWithoutBookInput = {
    userId: string;
    createdAt?: Date | string;
  };

  export type LikeCreateOrConnectWithoutBookInput = {
    where: LikeWhereUniqueInput;
    create: XOR<
      LikeCreateWithoutBookInput,
      LikeUncheckedCreateWithoutBookInput
    >;
  };

  export type LikeCreateManyBookInputEnvelope = {
    data: LikeCreateManyBookInput | LikeCreateManyBookInput[];
    skipDuplicates?: boolean;
  };

  export type FavoriteCreateWithoutBookInput = {
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutFavoritesInput;
  };

  export type FavoriteUncheckedCreateWithoutBookInput = {
    userId: string;
    createdAt?: Date | string;
  };

  export type FavoriteCreateOrConnectWithoutBookInput = {
    where: FavoriteWhereUniqueInput;
    create: XOR<
      FavoriteCreateWithoutBookInput,
      FavoriteUncheckedCreateWithoutBookInput
    >;
  };

  export type FavoriteCreateManyBookInputEnvelope = {
    data: FavoriteCreateManyBookInput | FavoriteCreateManyBookInput[];
    skipDuplicates?: boolean;
  };

  export type ReadingProgressCreateWithoutBookInput = {
    id?: string;
    currentPage?: number;
    totalPages?: number | null;
    isFinished?: boolean;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutReadingProgressInput;
  };

  export type ReadingProgressUncheckedCreateWithoutBookInput = {
    id?: string;
    userId: string;
    currentPage?: number;
    totalPages?: number | null;
    isFinished?: boolean;
    updatedAt?: Date | string;
  };

  export type ReadingProgressCreateOrConnectWithoutBookInput = {
    where: ReadingProgressWhereUniqueInput;
    create: XOR<
      ReadingProgressCreateWithoutBookInput,
      ReadingProgressUncheckedCreateWithoutBookInput
    >;
  };

  export type ReadingProgressCreateManyBookInputEnvelope = {
    data:
      | ReadingProgressCreateManyBookInput
      | ReadingProgressCreateManyBookInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithoutAddedBooksInput = {
    update: XOR<
      UserUpdateWithoutAddedBooksInput,
      UserUncheckedUpdateWithoutAddedBooksInput
    >;
    create: XOR<
      UserCreateWithoutAddedBooksInput,
      UserUncheckedCreateWithoutAddedBooksInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutAddedBooksInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutAddedBooksInput,
      UserUncheckedUpdateWithoutAddedBooksInput
    >;
  };

  export type UserUpdateWithoutAddedBooksInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    gender?:
      | NullableEnumGenderFieldUpdateOperationsInput
      | $Enums.Gender
      | null;
    birthDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null;
    resetTokenExpiry?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: CommentUpdateManyWithoutUserNestedInput;
    favorites?: FavoriteUpdateManyWithoutUserNestedInput;
    likes?: LikeUpdateManyWithoutUserNestedInput;
    readingProgress?: ReadingProgressUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutAddedBooksInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    gender?:
      | NullableEnumGenderFieldUpdateOperationsInput
      | $Enums.Gender
      | null;
    birthDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null;
    resetTokenExpiry?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput;
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput;
    readingProgress?: ReadingProgressUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type BookAuthorUpsertWithWhereUniqueWithoutBookInput = {
    where: BookAuthorWhereUniqueInput;
    update: XOR<
      BookAuthorUpdateWithoutBookInput,
      BookAuthorUncheckedUpdateWithoutBookInput
    >;
    create: XOR<
      BookAuthorCreateWithoutBookInput,
      BookAuthorUncheckedCreateWithoutBookInput
    >;
  };

  export type BookAuthorUpdateWithWhereUniqueWithoutBookInput = {
    where: BookAuthorWhereUniqueInput;
    data: XOR<
      BookAuthorUpdateWithoutBookInput,
      BookAuthorUncheckedUpdateWithoutBookInput
    >;
  };

  export type BookAuthorUpdateManyWithWhereWithoutBookInput = {
    where: BookAuthorScalarWhereInput;
    data: XOR<
      BookAuthorUpdateManyMutationInput,
      BookAuthorUncheckedUpdateManyWithoutBookInput
    >;
  };

  export type BookAuthorScalarWhereInput = {
    AND?: BookAuthorScalarWhereInput | BookAuthorScalarWhereInput[];
    OR?: BookAuthorScalarWhereInput[];
    NOT?: BookAuthorScalarWhereInput | BookAuthorScalarWhereInput[];
    bookId?: StringFilter<'BookAuthor'> | string;
    authorId?: StringFilter<'BookAuthor'> | string;
  };

  export type BookCategoryUpsertWithWhereUniqueWithoutBookInput = {
    where: BookCategoryWhereUniqueInput;
    update: XOR<
      BookCategoryUpdateWithoutBookInput,
      BookCategoryUncheckedUpdateWithoutBookInput
    >;
    create: XOR<
      BookCategoryCreateWithoutBookInput,
      BookCategoryUncheckedCreateWithoutBookInput
    >;
  };

  export type BookCategoryUpdateWithWhereUniqueWithoutBookInput = {
    where: BookCategoryWhereUniqueInput;
    data: XOR<
      BookCategoryUpdateWithoutBookInput,
      BookCategoryUncheckedUpdateWithoutBookInput
    >;
  };

  export type BookCategoryUpdateManyWithWhereWithoutBookInput = {
    where: BookCategoryScalarWhereInput;
    data: XOR<
      BookCategoryUpdateManyMutationInput,
      BookCategoryUncheckedUpdateManyWithoutBookInput
    >;
  };

  export type BookCategoryScalarWhereInput = {
    AND?: BookCategoryScalarWhereInput | BookCategoryScalarWhereInput[];
    OR?: BookCategoryScalarWhereInput[];
    NOT?: BookCategoryScalarWhereInput | BookCategoryScalarWhereInput[];
    bookId?: StringFilter<'BookCategory'> | string;
    categoryId?: StringFilter<'BookCategory'> | string;
  };

  export type CommentUpsertWithWhereUniqueWithoutBookInput = {
    where: CommentWhereUniqueInput;
    update: XOR<
      CommentUpdateWithoutBookInput,
      CommentUncheckedUpdateWithoutBookInput
    >;
    create: XOR<
      CommentCreateWithoutBookInput,
      CommentUncheckedCreateWithoutBookInput
    >;
  };

  export type CommentUpdateWithWhereUniqueWithoutBookInput = {
    where: CommentWhereUniqueInput;
    data: XOR<
      CommentUpdateWithoutBookInput,
      CommentUncheckedUpdateWithoutBookInput
    >;
  };

  export type CommentUpdateManyWithWhereWithoutBookInput = {
    where: CommentScalarWhereInput;
    data: XOR<
      CommentUpdateManyMutationInput,
      CommentUncheckedUpdateManyWithoutBookInput
    >;
  };

  export type LikeUpsertWithWhereUniqueWithoutBookInput = {
    where: LikeWhereUniqueInput;
    update: XOR<
      LikeUpdateWithoutBookInput,
      LikeUncheckedUpdateWithoutBookInput
    >;
    create: XOR<
      LikeCreateWithoutBookInput,
      LikeUncheckedCreateWithoutBookInput
    >;
  };

  export type LikeUpdateWithWhereUniqueWithoutBookInput = {
    where: LikeWhereUniqueInput;
    data: XOR<LikeUpdateWithoutBookInput, LikeUncheckedUpdateWithoutBookInput>;
  };

  export type LikeUpdateManyWithWhereWithoutBookInput = {
    where: LikeScalarWhereInput;
    data: XOR<
      LikeUpdateManyMutationInput,
      LikeUncheckedUpdateManyWithoutBookInput
    >;
  };

  export type FavoriteUpsertWithWhereUniqueWithoutBookInput = {
    where: FavoriteWhereUniqueInput;
    update: XOR<
      FavoriteUpdateWithoutBookInput,
      FavoriteUncheckedUpdateWithoutBookInput
    >;
    create: XOR<
      FavoriteCreateWithoutBookInput,
      FavoriteUncheckedCreateWithoutBookInput
    >;
  };

  export type FavoriteUpdateWithWhereUniqueWithoutBookInput = {
    where: FavoriteWhereUniqueInput;
    data: XOR<
      FavoriteUpdateWithoutBookInput,
      FavoriteUncheckedUpdateWithoutBookInput
    >;
  };

  export type FavoriteUpdateManyWithWhereWithoutBookInput = {
    where: FavoriteScalarWhereInput;
    data: XOR<
      FavoriteUpdateManyMutationInput,
      FavoriteUncheckedUpdateManyWithoutBookInput
    >;
  };

  export type ReadingProgressUpsertWithWhereUniqueWithoutBookInput = {
    where: ReadingProgressWhereUniqueInput;
    update: XOR<
      ReadingProgressUpdateWithoutBookInput,
      ReadingProgressUncheckedUpdateWithoutBookInput
    >;
    create: XOR<
      ReadingProgressCreateWithoutBookInput,
      ReadingProgressUncheckedCreateWithoutBookInput
    >;
  };

  export type ReadingProgressUpdateWithWhereUniqueWithoutBookInput = {
    where: ReadingProgressWhereUniqueInput;
    data: XOR<
      ReadingProgressUpdateWithoutBookInput,
      ReadingProgressUncheckedUpdateWithoutBookInput
    >;
  };

  export type ReadingProgressUpdateManyWithWhereWithoutBookInput = {
    where: ReadingProgressScalarWhereInput;
    data: XOR<
      ReadingProgressUpdateManyMutationInput,
      ReadingProgressUncheckedUpdateManyWithoutBookInput
    >;
  };

  export type BookAuthorCreateWithoutAuthorInput = {
    book: BookCreateNestedOneWithoutAuthorsInput;
  };

  export type BookAuthorUncheckedCreateWithoutAuthorInput = {
    bookId: string;
  };

  export type BookAuthorCreateOrConnectWithoutAuthorInput = {
    where: BookAuthorWhereUniqueInput;
    create: XOR<
      BookAuthorCreateWithoutAuthorInput,
      BookAuthorUncheckedCreateWithoutAuthorInput
    >;
  };

  export type BookAuthorCreateManyAuthorInputEnvelope = {
    data: BookAuthorCreateManyAuthorInput | BookAuthorCreateManyAuthorInput[];
    skipDuplicates?: boolean;
  };

  export type BookAuthorUpsertWithWhereUniqueWithoutAuthorInput = {
    where: BookAuthorWhereUniqueInput;
    update: XOR<
      BookAuthorUpdateWithoutAuthorInput,
      BookAuthorUncheckedUpdateWithoutAuthorInput
    >;
    create: XOR<
      BookAuthorCreateWithoutAuthorInput,
      BookAuthorUncheckedCreateWithoutAuthorInput
    >;
  };

  export type BookAuthorUpdateWithWhereUniqueWithoutAuthorInput = {
    where: BookAuthorWhereUniqueInput;
    data: XOR<
      BookAuthorUpdateWithoutAuthorInput,
      BookAuthorUncheckedUpdateWithoutAuthorInput
    >;
  };

  export type BookAuthorUpdateManyWithWhereWithoutAuthorInput = {
    where: BookAuthorScalarWhereInput;
    data: XOR<
      BookAuthorUpdateManyMutationInput,
      BookAuthorUncheckedUpdateManyWithoutAuthorInput
    >;
  };

  export type BookCreateWithoutAuthorsInput = {
    id?: string;
    title: string;
    description?: string | null;
    coverUrl?: string | null;
    publishedAt?: Date | string | null;
    producerName?: string | null;
    fileUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user?: UserCreateNestedOneWithoutAddedBooksInput;
    categories?: BookCategoryCreateNestedManyWithoutBookInput;
    comments?: CommentCreateNestedManyWithoutBookInput;
    likes?: LikeCreateNestedManyWithoutBookInput;
    favorites?: FavoriteCreateNestedManyWithoutBookInput;
    readingProgress?: ReadingProgressCreateNestedManyWithoutBookInput;
  };

  export type BookUncheckedCreateWithoutAuthorsInput = {
    id?: string;
    title: string;
    description?: string | null;
    coverUrl?: string | null;
    publishedAt?: Date | string | null;
    producerId?: string | null;
    producerName?: string | null;
    fileUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    categories?: BookCategoryUncheckedCreateNestedManyWithoutBookInput;
    comments?: CommentUncheckedCreateNestedManyWithoutBookInput;
    likes?: LikeUncheckedCreateNestedManyWithoutBookInput;
    favorites?: FavoriteUncheckedCreateNestedManyWithoutBookInput;
    readingProgress?: ReadingProgressUncheckedCreateNestedManyWithoutBookInput;
  };

  export type BookCreateOrConnectWithoutAuthorsInput = {
    where: BookWhereUniqueInput;
    create: XOR<
      BookCreateWithoutAuthorsInput,
      BookUncheckedCreateWithoutAuthorsInput
    >;
  };

  export type AuthorCreateWithoutBooksInput = {
    id?: string;
    name: string;
    bio?: string | null;
  };

  export type AuthorUncheckedCreateWithoutBooksInput = {
    id?: string;
    name: string;
    bio?: string | null;
  };

  export type AuthorCreateOrConnectWithoutBooksInput = {
    where: AuthorWhereUniqueInput;
    create: XOR<
      AuthorCreateWithoutBooksInput,
      AuthorUncheckedCreateWithoutBooksInput
    >;
  };

  export type BookUpsertWithoutAuthorsInput = {
    update: XOR<
      BookUpdateWithoutAuthorsInput,
      BookUncheckedUpdateWithoutAuthorsInput
    >;
    create: XOR<
      BookCreateWithoutAuthorsInput,
      BookUncheckedCreateWithoutAuthorsInput
    >;
    where?: BookWhereInput;
  };

  export type BookUpdateToOneWithWhereWithoutAuthorsInput = {
    where?: BookWhereInput;
    data: XOR<
      BookUpdateWithoutAuthorsInput,
      BookUncheckedUpdateWithoutAuthorsInput
    >;
  };

  export type BookUpdateWithoutAuthorsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    producerName?: NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneWithoutAddedBooksNestedInput;
    categories?: BookCategoryUpdateManyWithoutBookNestedInput;
    comments?: CommentUpdateManyWithoutBookNestedInput;
    likes?: LikeUpdateManyWithoutBookNestedInput;
    favorites?: FavoriteUpdateManyWithoutBookNestedInput;
    readingProgress?: ReadingProgressUpdateManyWithoutBookNestedInput;
  };

  export type BookUncheckedUpdateWithoutAuthorsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    producerId?: NullableStringFieldUpdateOperationsInput | string | null;
    producerName?: NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    categories?: BookCategoryUncheckedUpdateManyWithoutBookNestedInput;
    comments?: CommentUncheckedUpdateManyWithoutBookNestedInput;
    likes?: LikeUncheckedUpdateManyWithoutBookNestedInput;
    favorites?: FavoriteUncheckedUpdateManyWithoutBookNestedInput;
    readingProgress?: ReadingProgressUncheckedUpdateManyWithoutBookNestedInput;
  };

  export type AuthorUpsertWithoutBooksInput = {
    update: XOR<
      AuthorUpdateWithoutBooksInput,
      AuthorUncheckedUpdateWithoutBooksInput
    >;
    create: XOR<
      AuthorCreateWithoutBooksInput,
      AuthorUncheckedCreateWithoutBooksInput
    >;
    where?: AuthorWhereInput;
  };

  export type AuthorUpdateToOneWithWhereWithoutBooksInput = {
    where?: AuthorWhereInput;
    data: XOR<
      AuthorUpdateWithoutBooksInput,
      AuthorUncheckedUpdateWithoutBooksInput
    >;
  };

  export type AuthorUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type AuthorUncheckedUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type BookCategoryCreateWithoutCategoryInput = {
    book: BookCreateNestedOneWithoutCategoriesInput;
  };

  export type BookCategoryUncheckedCreateWithoutCategoryInput = {
    bookId: string;
  };

  export type BookCategoryCreateOrConnectWithoutCategoryInput = {
    where: BookCategoryWhereUniqueInput;
    create: XOR<
      BookCategoryCreateWithoutCategoryInput,
      BookCategoryUncheckedCreateWithoutCategoryInput
    >;
  };

  export type BookCategoryCreateManyCategoryInputEnvelope = {
    data:
      | BookCategoryCreateManyCategoryInput
      | BookCategoryCreateManyCategoryInput[];
    skipDuplicates?: boolean;
  };

  export type BookCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: BookCategoryWhereUniqueInput;
    update: XOR<
      BookCategoryUpdateWithoutCategoryInput,
      BookCategoryUncheckedUpdateWithoutCategoryInput
    >;
    create: XOR<
      BookCategoryCreateWithoutCategoryInput,
      BookCategoryUncheckedCreateWithoutCategoryInput
    >;
  };

  export type BookCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: BookCategoryWhereUniqueInput;
    data: XOR<
      BookCategoryUpdateWithoutCategoryInput,
      BookCategoryUncheckedUpdateWithoutCategoryInput
    >;
  };

  export type BookCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: BookCategoryScalarWhereInput;
    data: XOR<
      BookCategoryUpdateManyMutationInput,
      BookCategoryUncheckedUpdateManyWithoutCategoryInput
    >;
  };

  export type BookCreateWithoutCategoriesInput = {
    id?: string;
    title: string;
    description?: string | null;
    coverUrl?: string | null;
    publishedAt?: Date | string | null;
    producerName?: string | null;
    fileUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user?: UserCreateNestedOneWithoutAddedBooksInput;
    authors?: BookAuthorCreateNestedManyWithoutBookInput;
    comments?: CommentCreateNestedManyWithoutBookInput;
    likes?: LikeCreateNestedManyWithoutBookInput;
    favorites?: FavoriteCreateNestedManyWithoutBookInput;
    readingProgress?: ReadingProgressCreateNestedManyWithoutBookInput;
  };

  export type BookUncheckedCreateWithoutCategoriesInput = {
    id?: string;
    title: string;
    description?: string | null;
    coverUrl?: string | null;
    publishedAt?: Date | string | null;
    producerId?: string | null;
    producerName?: string | null;
    fileUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authors?: BookAuthorUncheckedCreateNestedManyWithoutBookInput;
    comments?: CommentUncheckedCreateNestedManyWithoutBookInput;
    likes?: LikeUncheckedCreateNestedManyWithoutBookInput;
    favorites?: FavoriteUncheckedCreateNestedManyWithoutBookInput;
    readingProgress?: ReadingProgressUncheckedCreateNestedManyWithoutBookInput;
  };

  export type BookCreateOrConnectWithoutCategoriesInput = {
    where: BookWhereUniqueInput;
    create: XOR<
      BookCreateWithoutCategoriesInput,
      BookUncheckedCreateWithoutCategoriesInput
    >;
  };

  export type CategoryCreateWithoutBooksInput = {
    id?: string;
    name: string;
  };

  export type CategoryUncheckedCreateWithoutBooksInput = {
    id?: string;
    name: string;
  };

  export type CategoryCreateOrConnectWithoutBooksInput = {
    where: CategoryWhereUniqueInput;
    create: XOR<
      CategoryCreateWithoutBooksInput,
      CategoryUncheckedCreateWithoutBooksInput
    >;
  };

  export type BookUpsertWithoutCategoriesInput = {
    update: XOR<
      BookUpdateWithoutCategoriesInput,
      BookUncheckedUpdateWithoutCategoriesInput
    >;
    create: XOR<
      BookCreateWithoutCategoriesInput,
      BookUncheckedCreateWithoutCategoriesInput
    >;
    where?: BookWhereInput;
  };

  export type BookUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: BookWhereInput;
    data: XOR<
      BookUpdateWithoutCategoriesInput,
      BookUncheckedUpdateWithoutCategoriesInput
    >;
  };

  export type BookUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    producerName?: NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneWithoutAddedBooksNestedInput;
    authors?: BookAuthorUpdateManyWithoutBookNestedInput;
    comments?: CommentUpdateManyWithoutBookNestedInput;
    likes?: LikeUpdateManyWithoutBookNestedInput;
    favorites?: FavoriteUpdateManyWithoutBookNestedInput;
    readingProgress?: ReadingProgressUpdateManyWithoutBookNestedInput;
  };

  export type BookUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    producerId?: NullableStringFieldUpdateOperationsInput | string | null;
    producerName?: NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authors?: BookAuthorUncheckedUpdateManyWithoutBookNestedInput;
    comments?: CommentUncheckedUpdateManyWithoutBookNestedInput;
    likes?: LikeUncheckedUpdateManyWithoutBookNestedInput;
    favorites?: FavoriteUncheckedUpdateManyWithoutBookNestedInput;
    readingProgress?: ReadingProgressUncheckedUpdateManyWithoutBookNestedInput;
  };

  export type CategoryUpsertWithoutBooksInput = {
    update: XOR<
      CategoryUpdateWithoutBooksInput,
      CategoryUncheckedUpdateWithoutBooksInput
    >;
    create: XOR<
      CategoryCreateWithoutBooksInput,
      CategoryUncheckedCreateWithoutBooksInput
    >;
    where?: CategoryWhereInput;
  };

  export type CategoryUpdateToOneWithWhereWithoutBooksInput = {
    where?: CategoryWhereInput;
    data: XOR<
      CategoryUpdateWithoutBooksInput,
      CategoryUncheckedUpdateWithoutBooksInput
    >;
  };

  export type CategoryUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
  };

  export type CategoryUncheckedUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
  };

  export type UserCreateWithoutCommentsInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    gender?: $Enums.Gender | null;
    birthDate?: Date | string | null;
    avatarUrl?: string | null;
    resetToken?: string | null;
    resetTokenExpiry?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    favorites?: FavoriteCreateNestedManyWithoutUserInput;
    likes?: LikeCreateNestedManyWithoutUserInput;
    addedBooks?: BookCreateNestedManyWithoutUserInput;
    readingProgress?: ReadingProgressCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    gender?: $Enums.Gender | null;
    birthDate?: Date | string | null;
    avatarUrl?: string | null;
    resetToken?: string | null;
    resetTokenExpiry?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput;
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput;
    addedBooks?: BookUncheckedCreateNestedManyWithoutUserInput;
    readingProgress?: ReadingProgressUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutCommentsInput,
      UserUncheckedCreateWithoutCommentsInput
    >;
  };

  export type BookCreateWithoutCommentsInput = {
    id?: string;
    title: string;
    description?: string | null;
    coverUrl?: string | null;
    publishedAt?: Date | string | null;
    producerName?: string | null;
    fileUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user?: UserCreateNestedOneWithoutAddedBooksInput;
    authors?: BookAuthorCreateNestedManyWithoutBookInput;
    categories?: BookCategoryCreateNestedManyWithoutBookInput;
    likes?: LikeCreateNestedManyWithoutBookInput;
    favorites?: FavoriteCreateNestedManyWithoutBookInput;
    readingProgress?: ReadingProgressCreateNestedManyWithoutBookInput;
  };

  export type BookUncheckedCreateWithoutCommentsInput = {
    id?: string;
    title: string;
    description?: string | null;
    coverUrl?: string | null;
    publishedAt?: Date | string | null;
    producerId?: string | null;
    producerName?: string | null;
    fileUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authors?: BookAuthorUncheckedCreateNestedManyWithoutBookInput;
    categories?: BookCategoryUncheckedCreateNestedManyWithoutBookInput;
    likes?: LikeUncheckedCreateNestedManyWithoutBookInput;
    favorites?: FavoriteUncheckedCreateNestedManyWithoutBookInput;
    readingProgress?: ReadingProgressUncheckedCreateNestedManyWithoutBookInput;
  };

  export type BookCreateOrConnectWithoutCommentsInput = {
    where: BookWhereUniqueInput;
    create: XOR<
      BookCreateWithoutCommentsInput,
      BookUncheckedCreateWithoutCommentsInput
    >;
  };

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<
      UserUpdateWithoutCommentsInput,
      UserUncheckedUpdateWithoutCommentsInput
    >;
    create: XOR<
      UserCreateWithoutCommentsInput,
      UserUncheckedCreateWithoutCommentsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutCommentsInput,
      UserUncheckedUpdateWithoutCommentsInput
    >;
  };

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    gender?:
      | NullableEnumGenderFieldUpdateOperationsInput
      | $Enums.Gender
      | null;
    birthDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null;
    resetTokenExpiry?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    favorites?: FavoriteUpdateManyWithoutUserNestedInput;
    likes?: LikeUpdateManyWithoutUserNestedInput;
    addedBooks?: BookUpdateManyWithoutUserNestedInput;
    readingProgress?: ReadingProgressUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    gender?:
      | NullableEnumGenderFieldUpdateOperationsInput
      | $Enums.Gender
      | null;
    birthDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null;
    resetTokenExpiry?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput;
    addedBooks?: BookUncheckedUpdateManyWithoutUserNestedInput;
    readingProgress?: ReadingProgressUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type BookUpsertWithoutCommentsInput = {
    update: XOR<
      BookUpdateWithoutCommentsInput,
      BookUncheckedUpdateWithoutCommentsInput
    >;
    create: XOR<
      BookCreateWithoutCommentsInput,
      BookUncheckedCreateWithoutCommentsInput
    >;
    where?: BookWhereInput;
  };

  export type BookUpdateToOneWithWhereWithoutCommentsInput = {
    where?: BookWhereInput;
    data: XOR<
      BookUpdateWithoutCommentsInput,
      BookUncheckedUpdateWithoutCommentsInput
    >;
  };

  export type BookUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    producerName?: NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneWithoutAddedBooksNestedInput;
    authors?: BookAuthorUpdateManyWithoutBookNestedInput;
    categories?: BookCategoryUpdateManyWithoutBookNestedInput;
    likes?: LikeUpdateManyWithoutBookNestedInput;
    favorites?: FavoriteUpdateManyWithoutBookNestedInput;
    readingProgress?: ReadingProgressUpdateManyWithoutBookNestedInput;
  };

  export type BookUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    producerId?: NullableStringFieldUpdateOperationsInput | string | null;
    producerName?: NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authors?: BookAuthorUncheckedUpdateManyWithoutBookNestedInput;
    categories?: BookCategoryUncheckedUpdateManyWithoutBookNestedInput;
    likes?: LikeUncheckedUpdateManyWithoutBookNestedInput;
    favorites?: FavoriteUncheckedUpdateManyWithoutBookNestedInput;
    readingProgress?: ReadingProgressUncheckedUpdateManyWithoutBookNestedInput;
  };

  export type UserCreateWithoutLikesInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    gender?: $Enums.Gender | null;
    birthDate?: Date | string | null;
    avatarUrl?: string | null;
    resetToken?: string | null;
    resetTokenExpiry?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    comments?: CommentCreateNestedManyWithoutUserInput;
    favorites?: FavoriteCreateNestedManyWithoutUserInput;
    addedBooks?: BookCreateNestedManyWithoutUserInput;
    readingProgress?: ReadingProgressCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutLikesInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    gender?: $Enums.Gender | null;
    birthDate?: Date | string | null;
    avatarUrl?: string | null;
    resetToken?: string | null;
    resetTokenExpiry?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput;
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput;
    addedBooks?: BookUncheckedCreateNestedManyWithoutUserInput;
    readingProgress?: ReadingProgressUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutLikesInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutLikesInput,
      UserUncheckedCreateWithoutLikesInput
    >;
  };

  export type BookCreateWithoutLikesInput = {
    id?: string;
    title: string;
    description?: string | null;
    coverUrl?: string | null;
    publishedAt?: Date | string | null;
    producerName?: string | null;
    fileUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user?: UserCreateNestedOneWithoutAddedBooksInput;
    authors?: BookAuthorCreateNestedManyWithoutBookInput;
    categories?: BookCategoryCreateNestedManyWithoutBookInput;
    comments?: CommentCreateNestedManyWithoutBookInput;
    favorites?: FavoriteCreateNestedManyWithoutBookInput;
    readingProgress?: ReadingProgressCreateNestedManyWithoutBookInput;
  };

  export type BookUncheckedCreateWithoutLikesInput = {
    id?: string;
    title: string;
    description?: string | null;
    coverUrl?: string | null;
    publishedAt?: Date | string | null;
    producerId?: string | null;
    producerName?: string | null;
    fileUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authors?: BookAuthorUncheckedCreateNestedManyWithoutBookInput;
    categories?: BookCategoryUncheckedCreateNestedManyWithoutBookInput;
    comments?: CommentUncheckedCreateNestedManyWithoutBookInput;
    favorites?: FavoriteUncheckedCreateNestedManyWithoutBookInput;
    readingProgress?: ReadingProgressUncheckedCreateNestedManyWithoutBookInput;
  };

  export type BookCreateOrConnectWithoutLikesInput = {
    where: BookWhereUniqueInput;
    create: XOR<
      BookCreateWithoutLikesInput,
      BookUncheckedCreateWithoutLikesInput
    >;
  };

  export type UserUpsertWithoutLikesInput = {
    update: XOR<
      UserUpdateWithoutLikesInput,
      UserUncheckedUpdateWithoutLikesInput
    >;
    create: XOR<
      UserCreateWithoutLikesInput,
      UserUncheckedCreateWithoutLikesInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutLikesInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutLikesInput,
      UserUncheckedUpdateWithoutLikesInput
    >;
  };

  export type UserUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    gender?:
      | NullableEnumGenderFieldUpdateOperationsInput
      | $Enums.Gender
      | null;
    birthDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null;
    resetTokenExpiry?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: CommentUpdateManyWithoutUserNestedInput;
    favorites?: FavoriteUpdateManyWithoutUserNestedInput;
    addedBooks?: BookUpdateManyWithoutUserNestedInput;
    readingProgress?: ReadingProgressUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    gender?:
      | NullableEnumGenderFieldUpdateOperationsInput
      | $Enums.Gender
      | null;
    birthDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null;
    resetTokenExpiry?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput;
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    addedBooks?: BookUncheckedUpdateManyWithoutUserNestedInput;
    readingProgress?: ReadingProgressUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type BookUpsertWithoutLikesInput = {
    update: XOR<
      BookUpdateWithoutLikesInput,
      BookUncheckedUpdateWithoutLikesInput
    >;
    create: XOR<
      BookCreateWithoutLikesInput,
      BookUncheckedCreateWithoutLikesInput
    >;
    where?: BookWhereInput;
  };

  export type BookUpdateToOneWithWhereWithoutLikesInput = {
    where?: BookWhereInput;
    data: XOR<
      BookUpdateWithoutLikesInput,
      BookUncheckedUpdateWithoutLikesInput
    >;
  };

  export type BookUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    producerName?: NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneWithoutAddedBooksNestedInput;
    authors?: BookAuthorUpdateManyWithoutBookNestedInput;
    categories?: BookCategoryUpdateManyWithoutBookNestedInput;
    comments?: CommentUpdateManyWithoutBookNestedInput;
    favorites?: FavoriteUpdateManyWithoutBookNestedInput;
    readingProgress?: ReadingProgressUpdateManyWithoutBookNestedInput;
  };

  export type BookUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    producerId?: NullableStringFieldUpdateOperationsInput | string | null;
    producerName?: NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authors?: BookAuthorUncheckedUpdateManyWithoutBookNestedInput;
    categories?: BookCategoryUncheckedUpdateManyWithoutBookNestedInput;
    comments?: CommentUncheckedUpdateManyWithoutBookNestedInput;
    favorites?: FavoriteUncheckedUpdateManyWithoutBookNestedInput;
    readingProgress?: ReadingProgressUncheckedUpdateManyWithoutBookNestedInput;
  };

  export type UserCreateWithoutFavoritesInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    gender?: $Enums.Gender | null;
    birthDate?: Date | string | null;
    avatarUrl?: string | null;
    resetToken?: string | null;
    resetTokenExpiry?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    comments?: CommentCreateNestedManyWithoutUserInput;
    likes?: LikeCreateNestedManyWithoutUserInput;
    addedBooks?: BookCreateNestedManyWithoutUserInput;
    readingProgress?: ReadingProgressCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutFavoritesInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    gender?: $Enums.Gender | null;
    birthDate?: Date | string | null;
    avatarUrl?: string | null;
    resetToken?: string | null;
    resetTokenExpiry?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput;
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput;
    addedBooks?: BookUncheckedCreateNestedManyWithoutUserInput;
    readingProgress?: ReadingProgressUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutFavoritesInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutFavoritesInput,
      UserUncheckedCreateWithoutFavoritesInput
    >;
  };

  export type BookCreateWithoutFavoritesInput = {
    id?: string;
    title: string;
    description?: string | null;
    coverUrl?: string | null;
    publishedAt?: Date | string | null;
    producerName?: string | null;
    fileUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user?: UserCreateNestedOneWithoutAddedBooksInput;
    authors?: BookAuthorCreateNestedManyWithoutBookInput;
    categories?: BookCategoryCreateNestedManyWithoutBookInput;
    comments?: CommentCreateNestedManyWithoutBookInput;
    likes?: LikeCreateNestedManyWithoutBookInput;
    readingProgress?: ReadingProgressCreateNestedManyWithoutBookInput;
  };

  export type BookUncheckedCreateWithoutFavoritesInput = {
    id?: string;
    title: string;
    description?: string | null;
    coverUrl?: string | null;
    publishedAt?: Date | string | null;
    producerId?: string | null;
    producerName?: string | null;
    fileUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authors?: BookAuthorUncheckedCreateNestedManyWithoutBookInput;
    categories?: BookCategoryUncheckedCreateNestedManyWithoutBookInput;
    comments?: CommentUncheckedCreateNestedManyWithoutBookInput;
    likes?: LikeUncheckedCreateNestedManyWithoutBookInput;
    readingProgress?: ReadingProgressUncheckedCreateNestedManyWithoutBookInput;
  };

  export type BookCreateOrConnectWithoutFavoritesInput = {
    where: BookWhereUniqueInput;
    create: XOR<
      BookCreateWithoutFavoritesInput,
      BookUncheckedCreateWithoutFavoritesInput
    >;
  };

  export type UserUpsertWithoutFavoritesInput = {
    update: XOR<
      UserUpdateWithoutFavoritesInput,
      UserUncheckedUpdateWithoutFavoritesInput
    >;
    create: XOR<
      UserCreateWithoutFavoritesInput,
      UserUncheckedCreateWithoutFavoritesInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutFavoritesInput,
      UserUncheckedUpdateWithoutFavoritesInput
    >;
  };

  export type UserUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    gender?:
      | NullableEnumGenderFieldUpdateOperationsInput
      | $Enums.Gender
      | null;
    birthDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null;
    resetTokenExpiry?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: CommentUpdateManyWithoutUserNestedInput;
    likes?: LikeUpdateManyWithoutUserNestedInput;
    addedBooks?: BookUpdateManyWithoutUserNestedInput;
    readingProgress?: ReadingProgressUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    gender?:
      | NullableEnumGenderFieldUpdateOperationsInput
      | $Enums.Gender
      | null;
    birthDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null;
    resetTokenExpiry?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput;
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput;
    addedBooks?: BookUncheckedUpdateManyWithoutUserNestedInput;
    readingProgress?: ReadingProgressUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type BookUpsertWithoutFavoritesInput = {
    update: XOR<
      BookUpdateWithoutFavoritesInput,
      BookUncheckedUpdateWithoutFavoritesInput
    >;
    create: XOR<
      BookCreateWithoutFavoritesInput,
      BookUncheckedCreateWithoutFavoritesInput
    >;
    where?: BookWhereInput;
  };

  export type BookUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: BookWhereInput;
    data: XOR<
      BookUpdateWithoutFavoritesInput,
      BookUncheckedUpdateWithoutFavoritesInput
    >;
  };

  export type BookUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    producerName?: NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneWithoutAddedBooksNestedInput;
    authors?: BookAuthorUpdateManyWithoutBookNestedInput;
    categories?: BookCategoryUpdateManyWithoutBookNestedInput;
    comments?: CommentUpdateManyWithoutBookNestedInput;
    likes?: LikeUpdateManyWithoutBookNestedInput;
    readingProgress?: ReadingProgressUpdateManyWithoutBookNestedInput;
  };

  export type BookUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    producerId?: NullableStringFieldUpdateOperationsInput | string | null;
    producerName?: NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authors?: BookAuthorUncheckedUpdateManyWithoutBookNestedInput;
    categories?: BookCategoryUncheckedUpdateManyWithoutBookNestedInput;
    comments?: CommentUncheckedUpdateManyWithoutBookNestedInput;
    likes?: LikeUncheckedUpdateManyWithoutBookNestedInput;
    readingProgress?: ReadingProgressUncheckedUpdateManyWithoutBookNestedInput;
  };

  export type UserCreateWithoutReadingProgressInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    gender?: $Enums.Gender | null;
    birthDate?: Date | string | null;
    avatarUrl?: string | null;
    resetToken?: string | null;
    resetTokenExpiry?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    comments?: CommentCreateNestedManyWithoutUserInput;
    favorites?: FavoriteCreateNestedManyWithoutUserInput;
    likes?: LikeCreateNestedManyWithoutUserInput;
    addedBooks?: BookCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutReadingProgressInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    gender?: $Enums.Gender | null;
    birthDate?: Date | string | null;
    avatarUrl?: string | null;
    resetToken?: string | null;
    resetTokenExpiry?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput;
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput;
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput;
    addedBooks?: BookUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutReadingProgressInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutReadingProgressInput,
      UserUncheckedCreateWithoutReadingProgressInput
    >;
  };

  export type BookCreateWithoutReadingProgressInput = {
    id?: string;
    title: string;
    description?: string | null;
    coverUrl?: string | null;
    publishedAt?: Date | string | null;
    producerName?: string | null;
    fileUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user?: UserCreateNestedOneWithoutAddedBooksInput;
    authors?: BookAuthorCreateNestedManyWithoutBookInput;
    categories?: BookCategoryCreateNestedManyWithoutBookInput;
    comments?: CommentCreateNestedManyWithoutBookInput;
    likes?: LikeCreateNestedManyWithoutBookInput;
    favorites?: FavoriteCreateNestedManyWithoutBookInput;
  };

  export type BookUncheckedCreateWithoutReadingProgressInput = {
    id?: string;
    title: string;
    description?: string | null;
    coverUrl?: string | null;
    publishedAt?: Date | string | null;
    producerId?: string | null;
    producerName?: string | null;
    fileUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authors?: BookAuthorUncheckedCreateNestedManyWithoutBookInput;
    categories?: BookCategoryUncheckedCreateNestedManyWithoutBookInput;
    comments?: CommentUncheckedCreateNestedManyWithoutBookInput;
    likes?: LikeUncheckedCreateNestedManyWithoutBookInput;
    favorites?: FavoriteUncheckedCreateNestedManyWithoutBookInput;
  };

  export type BookCreateOrConnectWithoutReadingProgressInput = {
    where: BookWhereUniqueInput;
    create: XOR<
      BookCreateWithoutReadingProgressInput,
      BookUncheckedCreateWithoutReadingProgressInput
    >;
  };

  export type UserUpsertWithoutReadingProgressInput = {
    update: XOR<
      UserUpdateWithoutReadingProgressInput,
      UserUncheckedUpdateWithoutReadingProgressInput
    >;
    create: XOR<
      UserCreateWithoutReadingProgressInput,
      UserUncheckedCreateWithoutReadingProgressInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutReadingProgressInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutReadingProgressInput,
      UserUncheckedUpdateWithoutReadingProgressInput
    >;
  };

  export type UserUpdateWithoutReadingProgressInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    gender?:
      | NullableEnumGenderFieldUpdateOperationsInput
      | $Enums.Gender
      | null;
    birthDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null;
    resetTokenExpiry?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: CommentUpdateManyWithoutUserNestedInput;
    favorites?: FavoriteUpdateManyWithoutUserNestedInput;
    likes?: LikeUpdateManyWithoutUserNestedInput;
    addedBooks?: BookUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutReadingProgressInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    gender?:
      | NullableEnumGenderFieldUpdateOperationsInput
      | $Enums.Gender
      | null;
    birthDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null;
    resetTokenExpiry?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput;
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput;
    addedBooks?: BookUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type BookUpsertWithoutReadingProgressInput = {
    update: XOR<
      BookUpdateWithoutReadingProgressInput,
      BookUncheckedUpdateWithoutReadingProgressInput
    >;
    create: XOR<
      BookCreateWithoutReadingProgressInput,
      BookUncheckedCreateWithoutReadingProgressInput
    >;
    where?: BookWhereInput;
  };

  export type BookUpdateToOneWithWhereWithoutReadingProgressInput = {
    where?: BookWhereInput;
    data: XOR<
      BookUpdateWithoutReadingProgressInput,
      BookUncheckedUpdateWithoutReadingProgressInput
    >;
  };

  export type BookUpdateWithoutReadingProgressInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    producerName?: NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneWithoutAddedBooksNestedInput;
    authors?: BookAuthorUpdateManyWithoutBookNestedInput;
    categories?: BookCategoryUpdateManyWithoutBookNestedInput;
    comments?: CommentUpdateManyWithoutBookNestedInput;
    likes?: LikeUpdateManyWithoutBookNestedInput;
    favorites?: FavoriteUpdateManyWithoutBookNestedInput;
  };

  export type BookUncheckedUpdateWithoutReadingProgressInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    producerId?: NullableStringFieldUpdateOperationsInput | string | null;
    producerName?: NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authors?: BookAuthorUncheckedUpdateManyWithoutBookNestedInput;
    categories?: BookCategoryUncheckedUpdateManyWithoutBookNestedInput;
    comments?: CommentUncheckedUpdateManyWithoutBookNestedInput;
    likes?: LikeUncheckedUpdateManyWithoutBookNestedInput;
    favorites?: FavoriteUncheckedUpdateManyWithoutBookNestedInput;
  };

  export type CommentCreateManyUserInput = {
    id?: string;
    content: string;
    rating?: number | null;
    createdAt?: Date | string;
    bookId: string;
  };

  export type FavoriteCreateManyUserInput = {
    bookId: string;
    createdAt?: Date | string;
  };

  export type LikeCreateManyUserInput = {
    bookId: string;
    createdAt?: Date | string;
  };

  export type BookCreateManyUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    coverUrl?: string | null;
    publishedAt?: Date | string | null;
    producerName?: string | null;
    fileUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ReadingProgressCreateManyUserInput = {
    id?: string;
    bookId: string;
    currentPage?: number;
    totalPages?: number | null;
    isFinished?: boolean;
    updatedAt?: Date | string;
  };

  export type CommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    book?: BookUpdateOneRequiredWithoutCommentsNestedInput;
  };

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    bookId?: StringFieldUpdateOperationsInput | string;
  };

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    bookId?: StringFieldUpdateOperationsInput | string;
  };

  export type FavoriteUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    book?: BookUpdateOneRequiredWithoutFavoritesNestedInput;
  };

  export type FavoriteUncheckedUpdateWithoutUserInput = {
    bookId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FavoriteUncheckedUpdateManyWithoutUserInput = {
    bookId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type LikeUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    book?: BookUpdateOneRequiredWithoutLikesNestedInput;
  };

  export type LikeUncheckedUpdateWithoutUserInput = {
    bookId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type LikeUncheckedUpdateManyWithoutUserInput = {
    bookId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BookUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    producerName?: NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authors?: BookAuthorUpdateManyWithoutBookNestedInput;
    categories?: BookCategoryUpdateManyWithoutBookNestedInput;
    comments?: CommentUpdateManyWithoutBookNestedInput;
    likes?: LikeUpdateManyWithoutBookNestedInput;
    favorites?: FavoriteUpdateManyWithoutBookNestedInput;
    readingProgress?: ReadingProgressUpdateManyWithoutBookNestedInput;
  };

  export type BookUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    producerName?: NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authors?: BookAuthorUncheckedUpdateManyWithoutBookNestedInput;
    categories?: BookCategoryUncheckedUpdateManyWithoutBookNestedInput;
    comments?: CommentUncheckedUpdateManyWithoutBookNestedInput;
    likes?: LikeUncheckedUpdateManyWithoutBookNestedInput;
    favorites?: FavoriteUncheckedUpdateManyWithoutBookNestedInput;
    readingProgress?: ReadingProgressUncheckedUpdateManyWithoutBookNestedInput;
  };

  export type BookUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    producerName?: NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ReadingProgressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    currentPage?: IntFieldUpdateOperationsInput | number;
    totalPages?: NullableIntFieldUpdateOperationsInput | number | null;
    isFinished?: BoolFieldUpdateOperationsInput | boolean;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    book?: BookUpdateOneRequiredWithoutReadingProgressNestedInput;
  };

  export type ReadingProgressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    bookId?: StringFieldUpdateOperationsInput | string;
    currentPage?: IntFieldUpdateOperationsInput | number;
    totalPages?: NullableIntFieldUpdateOperationsInput | number | null;
    isFinished?: BoolFieldUpdateOperationsInput | boolean;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ReadingProgressUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    bookId?: StringFieldUpdateOperationsInput | string;
    currentPage?: IntFieldUpdateOperationsInput | number;
    totalPages?: NullableIntFieldUpdateOperationsInput | number | null;
    isFinished?: BoolFieldUpdateOperationsInput | boolean;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BookAuthorCreateManyBookInput = {
    authorId: string;
  };

  export type BookCategoryCreateManyBookInput = {
    categoryId: string;
  };

  export type CommentCreateManyBookInput = {
    id?: string;
    content: string;
    rating?: number | null;
    createdAt?: Date | string;
    userId: string;
  };

  export type LikeCreateManyBookInput = {
    userId: string;
    createdAt?: Date | string;
  };

  export type FavoriteCreateManyBookInput = {
    userId: string;
    createdAt?: Date | string;
  };

  export type ReadingProgressCreateManyBookInput = {
    id?: string;
    userId: string;
    currentPage?: number;
    totalPages?: number | null;
    isFinished?: boolean;
    updatedAt?: Date | string;
  };

  export type BookAuthorUpdateWithoutBookInput = {
    author?: AuthorUpdateOneRequiredWithoutBooksNestedInput;
  };

  export type BookAuthorUncheckedUpdateWithoutBookInput = {
    authorId?: StringFieldUpdateOperationsInput | string;
  };

  export type BookAuthorUncheckedUpdateManyWithoutBookInput = {
    authorId?: StringFieldUpdateOperationsInput | string;
  };

  export type BookCategoryUpdateWithoutBookInput = {
    category?: CategoryUpdateOneRequiredWithoutBooksNestedInput;
  };

  export type BookCategoryUncheckedUpdateWithoutBookInput = {
    categoryId?: StringFieldUpdateOperationsInput | string;
  };

  export type BookCategoryUncheckedUpdateManyWithoutBookInput = {
    categoryId?: StringFieldUpdateOperationsInput | string;
  };

  export type CommentUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput;
  };

  export type CommentUncheckedUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: StringFieldUpdateOperationsInput | string;
  };

  export type CommentUncheckedUpdateManyWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: StringFieldUpdateOperationsInput | string;
  };

  export type LikeUpdateWithoutBookInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutLikesNestedInput;
  };

  export type LikeUncheckedUpdateWithoutBookInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type LikeUncheckedUpdateManyWithoutBookInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FavoriteUpdateWithoutBookInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutFavoritesNestedInput;
  };

  export type FavoriteUncheckedUpdateWithoutBookInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FavoriteUncheckedUpdateManyWithoutBookInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ReadingProgressUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string;
    currentPage?: IntFieldUpdateOperationsInput | number;
    totalPages?: NullableIntFieldUpdateOperationsInput | number | null;
    isFinished?: BoolFieldUpdateOperationsInput | boolean;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutReadingProgressNestedInput;
  };

  export type ReadingProgressUncheckedUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    currentPage?: IntFieldUpdateOperationsInput | number;
    totalPages?: NullableIntFieldUpdateOperationsInput | number | null;
    isFinished?: BoolFieldUpdateOperationsInput | boolean;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ReadingProgressUncheckedUpdateManyWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    currentPage?: IntFieldUpdateOperationsInput | number;
    totalPages?: NullableIntFieldUpdateOperationsInput | number | null;
    isFinished?: BoolFieldUpdateOperationsInput | boolean;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BookAuthorCreateManyAuthorInput = {
    bookId: string;
  };

  export type BookAuthorUpdateWithoutAuthorInput = {
    book?: BookUpdateOneRequiredWithoutAuthorsNestedInput;
  };

  export type BookAuthorUncheckedUpdateWithoutAuthorInput = {
    bookId?: StringFieldUpdateOperationsInput | string;
  };

  export type BookAuthorUncheckedUpdateManyWithoutAuthorInput = {
    bookId?: StringFieldUpdateOperationsInput | string;
  };

  export type BookCategoryCreateManyCategoryInput = {
    bookId: string;
  };

  export type BookCategoryUpdateWithoutCategoryInput = {
    book?: BookUpdateOneRequiredWithoutCategoriesNestedInput;
  };

  export type BookCategoryUncheckedUpdateWithoutCategoryInput = {
    bookId?: StringFieldUpdateOperationsInput | string;
  };

  export type BookCategoryUncheckedUpdateManyWithoutCategoryInput = {
    bookId?: StringFieldUpdateOperationsInput | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
