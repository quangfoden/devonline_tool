import axios from 'axios';

const state = () => ({
    isProcessing: false,
});

const mutations = {
    SET_PROCESSING(state, status) {
        state.isProcessing = status;
    }
};

const actions = {
    async createCardDraft({ commit }, templateId) {
        commit('SET_PROCESSING', true);
        try {
            const res = await axios.post('/api/cards/draft', {
                template_id: templateId
            });
            return res.data.draft_id;
        } catch (error) {
            throw error;
        } finally {
            commit('SET_PROCESSING', false);
        }
    }
};

export default {
    state,
    mutations,
    actions,
}