import { be_, assign } from '@ctx-core/object';
import { readable$_set_ctx_ } from '@ctx-core/store';
const key = 'event_log$';
export function event_log$_b(ctx) {
    return be_(key, () => {
        const event_log = [];
        let limit = 10000;
        const { store: event_log$, set } = readable$_set_ctx_(event_log);
        return assign(event_log$, {
            add,
            set_limit,
        });
        function add(record) {
            event_log.unshift(record);
            if (event_log.length > limit) {
                event_log.splice(limit);
            }
            set(event_log);
        }
        function set_limit(in_limit) {
            limit = in_limit;
        }
    })(ctx);
}
//# sourceMappingURL=src/event_log$_b.js.map