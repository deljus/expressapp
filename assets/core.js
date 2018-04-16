
function getNestedChildren(arr, parentKey, parent = 0) {
  let out = [];

  arr.forEach(obj => {
    if(obj[parentKey] === parent) {
      let children = getNestedChildren(arr, parentKey, obj.id);

      if(children.length) {
        obj.children = children
      }
      out.push(obj);
    }
  });
  return out
}

export {
  getNestedChildren
}