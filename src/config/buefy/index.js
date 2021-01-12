import Vue from 'vue';

import * as components from 'buefy/src/components';
import config, { setOptions } from 'buefy/src/utils/config';
import { use, registerComponentProgrammatic } from 'buefy/src/utils/plugins';

const Buefy = {
  install(_Vue, options = {}) {
    // Options
    setOptions(Object.assign(config, options));
    // Components
    Object.keys(components).forEach((componentKey) => {
      _Vue.use(components[componentKey]);
    });
    // Config component
    const BuefyProgrammatic = {
      setOptions(opts) {
        setOptions(Object.assign(config, opts));
      },
    };
    registerComponentProgrammatic(Vue, '$buefy', BuefyProgrammatic);
  },
};

use(Buefy);

Vue.use(Buefy, {
  defaultIconPack: 'fa',
  defaultDayNames: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
  defaultDateFormatter: (date) => date.toLocaleDateString('es-PE'),
  // defaultDateFormatter: (date) => moment(date).format("DD/MM/YYYY"),
  defaultMonthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre',
    'Octubre', 'Noviembre', 'Diciembre'],
});
