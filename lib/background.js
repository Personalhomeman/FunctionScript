module.exports = {
  modes: {
    'info': (definition, params) => Buffer.from(`Initiated ${definition.name}...`),
    'empty': (definition, params) => Buffer.from([]),
    'params': (definition, params) => {
      let specifiedBgParams = definition.bg.value
        .split(/\s+/)
        .filter(param => !!param);
      return !specifiedBgParams.length
        ? params
        : Object.keys(params).reduce((bgParams, param) => {
            if (specifiedBgParams.includes(param)) {
              bgParams[param] = params[param];
            }
            return bgParams;
          }, {});
    }
  },
  defaultMode: 'info',
  generateDefaultValue: function () {
    return {
      mode: this.defaultMode,
      value: ''
    };
  }
};
