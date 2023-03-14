const express = require('express');
const boom = require('@hapi/boom');
const validatorHandler = require('../middlewares/validator.handler');
const router = express.Router();

router.get(
    '/',
    async (req, res, next) => {
      try {
        const { size } = req.query;
        const filter = req.body;
        //const users = await service.getAll(size || 10, filter);
        res.json({
          success: true,
          message: 'Users found successfully',
          data: "users",
        });
      } catch (error) {
        next(error);
      }
    }
  );

  module.exports = router;