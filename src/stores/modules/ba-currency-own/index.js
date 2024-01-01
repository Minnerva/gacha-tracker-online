import { saveData, setListDataListen } from '@/utils'

export default {
  namespaced: true,
  state: {
    DB_PATH_BA_CURRENCY_OWN: `/ba-currency-own`,
    
    listGetListener: false,
    listLatestListener: false,
    listLatestBeforeMonthListener: false,
  },
  actions: {
    save ({ state, rootState }, { key, data }) {
      saveData(`${state.DB_PATH_BA_CURRENCY_OWN}/${rootState.uid}/${key}`, data)
    },
    setGetRecordsListen ({ state, rootState }, { year, month, callback }) {
      const { listGetListener } = state
      if (listGetListener) {
        listGetListener.off()
        state.listGetListener = false
      }

      state.listLatestListener = setListDataListen(
        `${state.DB_PATH_BA_CURRENCY_OWN}/${rootState.uid}`,
        callback,
        {
          order: `key`,
          filters: [
            {
              type: `between`,
              start: `${year}-${month}-00`,
              end: `${year}-${month}-99`
            }
          ]
        }
      )
    },
    setGetLatestRecordListen ({ state, rootState }, callback) {
      const { listLatestListener } = state
      if (listLatestListener) {
        listLatestListener.off()
        state.listLatestListener = false
      }

      state.listLatestListener = setListDataListen(
        `${state.DB_PATH_BA_CURRENCY_OWN}/${rootState.uid}`,
        callback,
        {
          filters: [
            {
              type: `last`,
              value: 1
            }
          ]
        }
      )
    },
    setGetLatestBeforeMonthListener ({ state, rootState }, { year, month, callback }) {
      const { listLatestBeforeMonthListener } = state
      if (listLatestBeforeMonthListener) {
        listLatestBeforeMonthListener.off()
        state.listLatestBeforeMonthListener = false
      }

      state.listLatestBeforeMonthListener = setListDataListen(
        `${state.DB_PATH_BA_CURRENCY_OWN}/${rootState.uid}`,
        callback,
        {
          order: `key`,
          filters: [
            {
              type: `endBefore`,
              value: `${year}-${month}-00`
            },
            {
              type: `last`,
              value: 1
            }
          ]
        }
      )
    }
  }
}