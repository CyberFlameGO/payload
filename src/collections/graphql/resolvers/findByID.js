/* eslint-disable no-param-reassign */
const findByID = require('../../queries/findByID');

const findByIDResolver = collection => async (_, args, context) => {
  const options = {
    config: collection.config,
    Model: collection.Model,
    depth: 0,
    id: args.id,
    user: context.user,
    api: 'GraphQL',
  };

  if (args.locale) {
    context.locale = args.locale;
    options.locale = args.locale;
  }

  if (args.fallbackLocale) {
    context.fallbackLocale = args.fallbackLocale;
    options.fallbackLocale = args.fallbackLocale;
  }

  const result = await findByID(options);

  return result;
};

module.exports = findByIDResolver;