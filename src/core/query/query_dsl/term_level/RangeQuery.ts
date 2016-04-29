export interface RangeQueryOptions {
  lt?:number | string
  lte?:number | string
  gt?:number | string
  gte?:number | string
  boost?:number
  format?:string
  time_zone?:string
}

export function RangeQuery(key, options:RangeQueryOptions) {
  return {
    range: {
      [key]:options
    }
  }
}
