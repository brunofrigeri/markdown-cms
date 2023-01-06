type ItemReturn<T> = {
  key: T[keyof T]
  data: T[]
}

export type ArrayGroupedBy<T> = ItemReturn<T>[]

export const arrayGroupBy = <T>(
  array: T[],
  key: keyof T
): ArrayGroupedBy<T> => {
  let arrayGroupByReturn: ArrayGroupedBy<T> = []
  array.forEach((item) => {
    const itemKey = item[key]

    const data = array.filter((it) => it[key] === itemKey)

    if (!arrayGroupByReturn.find((itemReturn) => itemReturn.key === itemKey)) {
      arrayGroupByReturn.push({
        key: itemKey,
        data,
      })
    }
  })

  return arrayGroupByReturn
}
