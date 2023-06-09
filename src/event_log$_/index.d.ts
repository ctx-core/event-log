import type { be_computed_pair_T, ReadableAtom_ } from '@ctx-core/nanostores'
import type { be__return_T, Ctx } from '@ctx-core/object'
export declare const [
	event_log$_,
	event_log_
]: be_computed_pair_T<event_log__T>
export { event_log$_ as event_log__ }
export declare const event_log$_:be__return_T<event_log__T>
export declare function event_log__add<I = any>(ctx:Ctx, record:event_log_record_T<I>):void
export declare function event_log__set_limit(ctx:Ctx, limit:number):void
export interface event_log_record_T<I = any> extends Record<string, I> {}
export declare type event_log_T<I = any> = event_log_record_T<I>[];
export declare type event_log_add_T<I = any> = (record:event_log_record_T<I>)=>event_log_T<I>;
export declare type event_log_set_limit_T = (in_limit:number)=>void;
export type event_log__T<I = any> = ReadableAtom_<event_log_T<I>>
