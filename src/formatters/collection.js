import { Collection } from 'immutable'

import { represent } from '../common'

export function representKeyedCollection(fmt) {
    fmt.map(this, fmt => {
        for (const [key, value] of this.entrySeq().sort()) {
            fmt.entry(key, value)
        }
    })
}
Collection.Keyed.prototype[represent] = representKeyedCollection

export function representIndexedCollection(fmt) {
    fmt.list(this, fmt => {
        for (const value of this.values()) {
            fmt.entry(value)
        }
    })
}
Collection.Indexed.prototype[represent] = representIndexedCollection

export function representSetCollection(fmt) {
    fmt.set(this, fmt => {
        for (const value of this.values()) {
            fmt.entry(value)
        }
    })
}
Collection.Set.prototype[represent] = representSetCollection
