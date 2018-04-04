const getNestedProperty = require('./index')

describe('getNestedProperty(obj,property)', () => {
  it('returns null if !obj',()=>{
    expect(getNestedProperty()).toBe(null)
    expect(getNestedProperty(null,'prop')).toBe(null)
    expect(getNestedProperty(undefined,'prop')).toBe(null)
  })

  it('returns null if obj is not an object', ()=>{
    expect(getNestedProperty('Not an object','prop')).toBe(null)
  })

  it('returns null if !property',()=>{
    expect(getNestedProperty({})).toBe(null)
    expect(getNestedProperty({},null)).toBe(null)
    expect(getNestedProperty({},undefined)).toBe(null)
  })

  it('returns null if property is not a string',()=>{
    expect(getNestedProperty({},{})).toBe(null)
  })

  const myObj = {
    a: {
      b: {
        c: 'The letter c',
        d: 'The letter d'
      },
      e: 'The letter e'
    }
  }

  it('returns null if the object does not have the specified property',()=>{
    expect(getNestedProperty(myObj,'a.b.e')).toBe(null)
  })

  it('returns the value of the property if the property is at the top level',()=>{
    expect(getNestedProperty(myObj,'a')).toBe(myObj.a)
  })

  it('returns the value of the property if the property is nested',()=>{
    expect(getNestedProperty(myObj,'a.b')).toBe(myObj.a.b)
  })
})
