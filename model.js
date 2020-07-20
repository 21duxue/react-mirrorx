/**
 * 数据模型类
 */

import { actions } from 'mirrorx';
import * as api from './service';
import { processData, deepClone } from "utils";
import { Message } from 'components/base-ui';


export default {
    // 确定Store中的数据模型作用于
    name: "customers",

    // 设置当前Modal所需的初始化state
    initialState: {
        cusList: {}, // 客商列表
        cusModelDetail: { // 客商详情
            obj: {
                config: {}
            }
        },
        cusBaseInfo: { //客商基本信息
        },
        pk_gd: "", // 客商模型pk_gd
        cusTagList: [], // 标签数据
        tagArr: [] // 传入到客商详情的标签
    },
    reducers: {
        /**
         * 纯函数，相当于 Redux 中的 Reducer，只负责对数据的更新。
         * @param {*} state
         * @param {*} data
         */
        updateState(state, data) { //更新state
            return {
                ...state,
                ...data
            };
        }
    },
    effects: {
        /**
         * 获取客商模型PK
         * @param {*} params 
         * @param {*} getState 
         */
        async getCusModel(params, getState) {
            let { result } = processData(await api.getMethod({}, '/modeling/mdmdesign/getCsModelPk?cloudModelCode=c_corporate&createWay=3'));
            if (!result.data.data) {
                return Message.create({ content: "查询模型PK失败，请先建立客商模型", color: 'danger', duration: 3 });
            }
            let param = Object.assign(params, { pk_gd: result.data.data });
            actions.customers.updateState({
                pk_gd: result.data.data
            });
            actions.customers.getCusList(param);
            actions.customers.getCusTagList({ pk_gd: result.data.data });
        },

        /**
         * 获取客商列表
         * @param {*} params 
         * @param {*} getState 
         */
        async getCusList(params, getState) {
            let { result } = processData(await api.postMethod(params, '/modeling/mdmshow/list/csQuery'));
            actions.customers.updateState({
                cusList: result.data
            })
            return result.data;
        },

        /**
         * 获取客商模型信息
         * @param {*} params
         * @param {*} getState
         */
        async getCusModelDetail(params, getState) {
            let { result } = processData(await api.getMethod(params, '/csm/api/detailforselected'));
            actions.customers.updateState({
                cusModelDetail: result.data
            })
            return result.data;
        },

        /**
         * 获取客商基本信息接口
         * @param {*} params
         * @param {*} getState
         */
        async getCusBaseInfo(params, getState) {
            let { result } = processData(await api.getMethod(params, '/modeling/mdmshow/list/csBaseinfo'));
            actions.customers.updateState({
                cusBaseInfo: result.data.data
            })
        },

        /**
         * 获取客商列表下客商标签
         * @param {*} params
         * @param {*} getState
         */
        async getCusTagList(params, getState) {
            let { result } = processData(await api.getMethod(params, '/csm/api/getTagList'));
            actions.customers.updateState({
                cusTagList: result.data.data || []
            })

        }
    }
};