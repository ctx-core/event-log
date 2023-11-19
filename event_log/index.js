import { be_atom_triple_, be_computed_pair_ } from '@ctx-core/nanostores'
const [
	,
	_event_log_,
	_event_log__set,
] = be_atom_triple_(()=>[])
export const [
	event_log$_,
	event_log_,
] = be_computed_pair_(ctx=>{
	if (_event_log_(ctx)?.length > event_log_limit_(ctx)) {
		_event_log_(ctx).splice(event_log_limit_(ctx))
	}
	return _event_log_(ctx)
}).config({ id: 'event_log' })
export { event_log$_ as event_log__ }
const [
	event_log_limit$_,
	event_log_limit_,
] = be_atom_triple_(()=>10000)
export function event_log__add(ctx, record) {
	_event_log__set(ctx, [record, ..._event_log_(ctx)])
}
export function event_log__set_limit(ctx, limit) {
	event_log_limit$_(ctx).$ = limit
}
