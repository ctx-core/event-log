import { ReadableAtom_, split_atom_ } from '@ctx-core/nanostores'
import { assign, be_ } from '@ctx-core/object'
export const event_log__ = be_<event_log__T>('event_log__', ()=>{
	const event_log:event_log_T = []
	let limit = 10_000
	const [event_log_, set] = split_atom_<event_log_T>(event_log)
	return assign(event_log_, {
		add,
		set_limit,
	}) as event_log__T
	function add(record:event_log_record_T) {
		event_log.unshift(record)
		if (event_log.length > limit) {
			event_log.splice(limit)
		}
		set(event_log)
	}
	function set_limit(in_limit:number) {
		limit = in_limit
	}
})
export interface event_log_record_T<I extends any = any> extends Record<string, I> {}
export type event_log_T = event_log_record_T[]
export type event_log_add_T = (record:event_log_record_T)=>event_log_T
export type event_log_set_limit_T = (in_limit:number)=>void
export interface event_log__T extends ReadableAtom_<event_log_T> {
	add:event_log_add_T
	set_limit:event_log_set_limit_T
}
export { event_log__ as event_log$_ }
