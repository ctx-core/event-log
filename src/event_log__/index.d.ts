import type { ReadableAtom_ } from '@ctx-core/nanostores'
import type { be__return_T, Ctx } from '@ctx-core/object'
export declare const event_log__:be__return_T<event_log__T>
export declare function event_log__add<I = any>(ctx:Ctx, record:event_log_record_T<I>):void
export declare function event_log__set_limit(ctx:Ctx, limit:number):void
export interface event_log_record_T<I = any> extends Record<string, I> {}
export declare type event_log_T<I = any> = event_log_record_T<I>[];
export declare type event_log_add_T<I = any> = (record:event_log_record_T<I>)=>event_log_T<I>;
export declare type event_log_set_limit_T = (in_limit:number)=>void;
export interface event_log__T<I = any> extends ReadableAtom_<event_log_T<I>> {
	add:event_log_add_T<I>;
	set_limit:event_log_set_limit_T;
}
export { event_log__ as event_log$_ }
