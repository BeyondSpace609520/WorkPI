
export function repeat<T>(count: number, f: () => T): T[] {
  return new Array(count).map(f);
}

type CaseBody<RT> = (() => RT) | RT;

type CaseSolver<T, RT> = {
  then: (body: CaseBody<RT>) => ((cmp: T) => (RT | null))
}

/** Matches when equal. */

export function eq<T, RT>(value: T): CaseSolver<T, RT> {
  return {
    then: (body: (() => RT) | RT) => {
      return (cmp: T) => {
        if (cmp === value) {
          if (typeof body === 'function') {
            const bf = body as Function;
            return bf();
          }
          return body;
        } else {
          return null;
        }
      }
    }
  }
}



/** Match a value to the given cases. */

export function match<VT, RT>(value: VT, cases: ((cmp: VT) => RT | null)[], otherwise: RT): RT {
  for (const c of cases) {
    const result = c(value);
    if (result !== null) {
      return result;
    }
  }

  return otherwise;
}



/** Generate a UUID. */

export function uuidv4(): string {
  const hex = [...Array(256).keys()]
    .map(index => (index).toString(16).padStart(2, '0'));

  const r = crypto.getRandomValues(new Uint8Array(16));

  r[6] = (r[6] & 0x0f) | 0x40;
  r[8] = (r[8] & 0x3f) | 0x80;

  return [...r.entries()]
    .map(([index, int]) => [4, 6, 8, 10].includes(index) ? `-${hex[int]}` : hex[int])
    .join('');
}

/** Path objects */

export function patchObject<T extends object, P extends keyof T>(obj: T, patch: {[K in P]: T[K] | undefined}): T {
  const o: any = Object.assign({}, obj);
  for (const k of Object.keys(patch)) {
    const v = (patch as any)[k];
    if (v === undefined) {
      delete o[k];
    } else {
      o[k] = v;
    }
  }
  return o;
}
