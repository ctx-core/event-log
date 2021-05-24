import { _b, assign } from '@ctx-core/object';
import { _readable_set_ctx$ } from '@ctx-core/store';
const key = 'event_log';
export function event_log_b(ctx) {
    return _b(key, () => {
        const $event_log = [];
        let limit = 10000;
        const { store: event_log, set } = _readable_set_ctx$($event_log);
        return assign(event_log, {
            add,
            set_limit,
        });
        function add(record) {
            $event_log.unshift(record);
            if ($event_log.length > limit) {
                $event_log.splice(limit);
            }
            set($event_log);
        }
        function set_limit(in_limit) {
            limit = in_limit;
        }
    })(ctx);
}
