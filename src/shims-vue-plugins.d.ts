/* eslint-disable */
import Vue from 'vue';
import { AxiosInstance } from 'axios';
import 'webpack-env';
import { FieldFlagsBag } from 'vee-validate';
import { SnackbarProgrammatic as Snackbar, DialogProgrammatic as Dialog } from 'buefy';
import ServiceToast from './app-config/toast/service';
import ServiceTour from './app-config/tour/service';
import { VueAnalyticsFacebookPixel } from "vue-analytics-facebook-pixel/src";

declare module 'vue/types/vue' {
  interface Vue {
    $auth: any;
    $axios: AxiosInstance;
    veeFields: FieldFlagsBag;
    $dialog: typeof Dialog;
    $snackbar: typeof Snackbar;
    $toast: ServiceToast;
    $tour: ServiceTour;
    $analytics: VueAnalyticsFacebookPixel;
  }
  interface VueConstructor {
    analytics: VueAnalyticsFacebookPixel;
  }
}


declare namespace NodeJS {
  interface Process extends __WebpackModuleApi.NodeProcess {
    server: boolean;
  }
}
