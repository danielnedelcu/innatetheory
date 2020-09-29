import { MUTATE_OVERLAY_STATE } from '~/constants/mutations.type'

export const state = () => ({
  overlayState: 0
})

export const getters = {
  getOverlayState: (state) => {
    return state.overlayState
  }
}

export const mutations = {
  mutateOverlayState: (state, obj) => {
    state.overlayState = obj
  }
}

export const actions = {
  async AssignOverlayState ({ commit }, payload) {
    await commit(MUTATE_OVERLAY_STATE, payload)
  }
}
