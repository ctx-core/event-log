import { atom_, be_computed_pair_, computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
const _event_log$_ = be_(()=>
	atom_([]))
export const [
	event_log$_,
	event_log_,
] = be_computed_pair_('event_log$_', ctx=>
	computed_([_event_log$_(ctx), event_log_limit$_(ctx)],
		(_event_log, event_log_limit)=>{
			if (_event_log?.length > event_log_limit) {
				_event_log.splice(event_log_limit)
			}
			return _event_log
		}))
export { event_log$_ as event_log__ }
const event_log_limit$_ = be_(	()=>
	atom_(10000))
export function event_log__add(ctx, record) {
	_event_log$_(ctx).$ = [record, ..._event_log$_(ctx).$]
}
export function event_log__set_limit(ctx, limit) {
	event_log_limit$_(ctx).$ = limit
}
