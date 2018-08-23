'use strict';

const escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
const meta = {    // table of character substitutions
  '\b': '\\b',
  '\t': '\\t',
  '\n': '\\n',
  '\f': '\\f',
  '\r': '\\r',
  '"' : '\\"',
  '\\': '\\\\'
};

/**
 * Convert JSON object to string
 * @param {o} object
 */
const stringify = o => {
    if (typeof o !== 'object' || o === null || o instanceof Array)
      return value(o);

    return object(o);
}

const object = o => {
  const keys = Object.keys(o);
  const max = keys.length;
  
  if (max == 0) return '{}';
  
  var str = `{"${keys[0]}":${value(o[keys[0]])}`;

  var i = 1;
  for(; i < max; i++) {
    const p = keys[i];
    const v = value(o[p]);
    if (v)
      str += `,"${p}":${v}`;
  }

  return `${str}}`;
}

const value = val => {
  switch(typeof val) {
    case 'string':
        return quote(val);
    case 'number': 
    case 'boolean':
        return '' + val;
    case 'function':
        return null;
    case 'object':
        if (val instanceof Date)  return '"' + val.toISOString() + '"';
        if (val instanceof Array) return '[' + val.map(value).join(',') + ']';
        if (val === null)         return 'null';
                                  return stringify(val);
  }
}




const quote = s => 
  escapable.test(s) ?
      '"' + s.replace(escapable, a => {
          var c = meta[a];
          return typeof c === 'string' ? c :
              '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
      }) + '"' :
      '"' + s + '"';


module.exports = stringify;