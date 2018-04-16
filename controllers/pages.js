import models from '../models';

export const getPages = async(req, res) => {
  const { url } = req.params;
  try {
    const page = await models.Menus.findOne({
      where: {
        url: `/${url || ""}`
      },
      include: [
        models.Pages
      ],
    });

    res.render('pages', { menuTree: req.menuTree, page: page.Pages[0]});
  } catch(e){
    console.log(e)
  }
};