
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Hero {
    id: string;
    name: string;
}

export abstract class IQuery {
    abstract hello(name: string): string | Promise<string>;

    abstract hero(heroId: string): Hero | Promise<Hero>;
}
