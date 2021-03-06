import models from '../models';

export const getPages = async(req, res) => {
  const { url } = req.params;
    const page = await models.Menus.findOne({
      where: {
        url: `/${url || ""}`
      },
      include: [
        models.Pages
      ],
    });

    res.render('pages', { page: page.Pages[0]});
};