import GoodView from './good-view'
import GoodList from './good-list'
import NewApp from './NewApp'

import mirror, { connect } from 'mirrorx';

//引用模型
import model from '../model';

// 数据和组件UI关联、绑定
mirror.model(model);

export const ConnetGoodView  =  connect(state=>state.app)(GoodView)
export const ConnetGoodList  =  connect(state=>state.app)(GoodList)
export const ConnetNewApp  =  connect(state=>state.app)(NewApp)
