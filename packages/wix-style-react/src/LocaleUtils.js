import { setDay, format } from 'date-fns';

// todo: Change the imports syntax after wix-ui-tpa will support ESModules
import en from 'date-fns/locale/en-US';
import es from 'date-fns/locale/es';
import pt from 'date-fns/locale/pt';
import fr from 'date-fns/locale/fr';
import de from 'date-fns/locale/de';
import pl from 'date-fns/locale/pl';
import it from 'date-fns/locale/it';
import ru from 'date-fns/locale/ru';
import ja from 'date-fns/locale/ja';
import ko from 'date-fns/locale/ko';
import tr from 'date-fns/locale/tr';
import sv from 'date-fns/locale/sv';
import nl from 'date-fns/locale/nl';
import da from 'date-fns/locale/da';
import th from 'date-fns/locale/th';
import cs from 'date-fns/locale/cs';
import zh from 'date-fns/locale/zh-CN';
import uk from 'date-fns/locale/uk';
import no from 'date-fns/locale/nb';
/** ***************/

import { convertTokens } from '@date-fns/upgrade/v2';

const MONTHS_INDEXES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
export const CAPITALIZED_MONTH_LANGUAGES = [
  'es',
  'de',
  'fr',
  'ru',
  'it',
  'uk',
  'nl',
  'tr',
  'pl',
  'cs',
  'no',
  'pt',
];

export function capitalizeFirstLetter(str) {
  if (!str) {
    return undefined;
  }
  return str[0].toLocaleUpperCase() + str.substring(1);
}

// Capitalize first letter of month in certain languages
const capitalizeMonth = (month, locale) => {
  const shouldCapitalizeMonth = CAPITALIZED_MONTH_LANGUAGES.includes(locale);

  if (shouldCapitalizeMonth) {
    return capitalizeFirstLetter(month);
  }
  return month;
};

// Add a symbol indicating number is year in certain languages
export const YEAR_INDICATORS = {
  ja: '年',
  zh: '年',
  ko: '년',
};
const addYearIndicator = (year, locale) => {
  const yearIndicator = YEAR_INDICATORS[locale];
  if (yearIndicator) {
    return `${year}${yearIndicator}`;
  }
  return year;
};

const locales = {
  en,
  es,
  pt,
  fr,
  de,
  pl,
  it,
  ru,
  ja,
  ko,
  tr,
  sv,
  no,
  nl,
  da,
  th,
  cs,
  zh,
  uk,
};

const getLocale = locale =>
  typeof locale === 'string' ? locales[locale] : locale;

export const formatDate = (date, dateFormat, locale) =>
  format(date, convertTokens(dateFormat), {
    locale: getLocale(locale),
  });

export const formatDateV2 = (date, dateFormatV2, locale) =>
  format(date, dateFormatV2, {
    locale: getLocale(locale),
  });

export default locale => ({
  formatMonthTitle: date =>
    capitalizeMonth(
      format(date, 'LLLL yyyy', {
        locale: getLocale(locale),
      }),
      locale,
    ),

  formatWeekdayShort: index =>
    format(setDay(new Date(), index), 'iiiiii', {
      locale: getLocale(locale),
    }),

  formatWeekdayLong: index =>
    format(setDay(new Date(), index), 'iiii', {
      locale: getLocale(locale),
    }),

  formatDay: date =>
    format(date, 'iii	PP', {
      locale: getLocale(locale),
    }),

  formatYear: year => addYearIndicator(year, locale),

  getMonths: () =>
    MONTHS_INDEXES.map(i =>
      capitalizeMonth(
        format(new Date(2018, i), 'LLLL', {
          locale: getLocale(locale),
        }),
        locale,
      ),
    ),
});
