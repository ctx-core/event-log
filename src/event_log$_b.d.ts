import { Readable$ } from '@ctx-core/store';
import type { event_log_Ctx } from './event_log_Ctx';
export declare function event_log$_b(ctx: event_log_Ctx): event_log$_T;
export interface event_log_record_T<I extends any = any> extends Record<string, I> {
}
export declare type event_log_T = event_log_record_T[];
export declare type event_log_add_T = (record: event_log_record_T) => event_log_T;
export declare type event_log_set_limit_T = (in_limit: number) => void;
export interface event_log$_T extends Readable$<event_log_T> {
    add: event_log_add_T;
    set_limit: event_log_set_limit_T;
}
