
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface IQuery {
    hello(name: string): string | Promise<string>;
    hero(heroId: string): Hero | Promise<Hero>;
}

export interface Hero {
    id: string;
    name: string;
}
