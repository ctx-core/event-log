import type { be_atom_triple_T, be_computed_pair_T, ReadableAtom_ } from '@ctx-core/nanostores'
import type { Ctx } from 'ctx-core/be'
export declare const [
	event_log$_,
	event_log_
]:be_computed_pair_T<event_log__T>
export { event_log$_ as event_log__ }
export declare function event_log__add<I = unknown>(
	ctx:Ctx,
	record:event_log_record_T<I>
):void
export declare const [
	event_log_limit$_,
	event_log_limit_,
	event_log_limit__set,
]:be_atom_triple_T<number>
export declare function event_log__set_limit(ctx:Ctx, limit:number):void
export interface event_log_record_T<I = unknown> extends Record<string, I> {}
export declare type event_log_T<I = unknown> = event_log_record_T<I>[]
export declare type event_log_add_T<I = unknown> =
	(record:event_log_record_T<I>)=>event_log_T<I>
export declare type event_log_set_limit_T = (in_limit:number)=>void
export type event_log__T<I = unknown> = ReadableAtom_<event_log_T<I>>
