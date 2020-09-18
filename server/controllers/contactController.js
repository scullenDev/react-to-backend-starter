const { contact } = require("../models");

module.exports = {
  findAll: (req, res, next) => {
    contact
      .findAll({ where: req.query })
      .then((contacts) => res.status(200).json(contacts))
      .catch((err) => res.status(500).json(err));
  },
  findById: (req, res, next) => {
    contact
      .findByPk(req.params.id, {
        rejectOnEmpty: true,
      })
      .then((contact) => res.status(200).json(contact))
      .catch((err) => res.status(500).json(err));
  },
  create: (req, res, next) => {
    console.log(req.body);
    contact
      .create(req.body)
      .then((contact) => res.status(200).json({ insertId: contact.id }))
      .catch((err) => {
        const errorList = err.errors.map((error) => error.message);
        res.status(500).json(errorList);
      });
  },
  update: (req, res, next) => {
    contact
      .update(req.body, {
        where: {
          id: req.params.id,
        },
      })
      .then((numChanged) => res.status(200).json({ changedRows: numChanged[0] }))
      .catch((err) => res.status(500).json(err));
  },
  delete: (req, res, next) => {
    contact
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then((wasDeleted) => res.status(200).json({ deleted: wasDeleted !== 0 }))
      .catch((err) => res.status(500).json(err));
  },
};
