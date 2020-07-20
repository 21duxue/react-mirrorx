import mirror, { connect } from 'mirrorx';
// 组件引入
import IndexView from './index-view';
import CustomerDetail from './customer-detail';
import GridTable from './components/GridTable';
import TagPanel from './components/TagPanel';
import TwoLevelTab from './components/TwoLevelTab';

//引用模型
import model from './model';

// 数据和组件UI关联、绑定
mirror.model(model);

export const ConnectedIndexView = connect(state => state.customers, null)(IndexView);
export const ConnectedGridTable = connect(state => state.customers, null)(GridTable);
export const ConnectedCustomerDetail = connect(state => state.customers, null)(CustomerDetail);
export const ConnectedTagPanel = connect(state => state.customers, null)(TagPanel);
export const ConnectedTwoLevelTab = connect(state => state.customers, null)(TwoLevelTab);