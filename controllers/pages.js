import models from '../models';

function getNestedChildren(arr, parent) {
  var out = []
  for(var i in arr) {
    if(arr[i].id == parent) {
      var children = getNestedChildren(arr, arr[i].id)

      if(children.length) {
        arr[i].children = children
      }
      out.push(arr[i])
    }
  }
  return out
}

export const getPages = async(req, res) => {
  try {
    const menus = await models.Menus.findAll();

    console.log(getNestedChildren(menus));

    res.render('pages', {menuItems: menus});
  } catch(e){
    console.log(e)
  }
};