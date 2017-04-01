import reposReducer,
{
  initialState
} from '../../src/reducers/reposReducer';
import {
  loadReposRequest,
  loadReposSuccess,
  loadReposFailure,
  selectRepo
} from '../../src/actions';
import { repos as data } from '../../config/jest/mockData';

describe('reposReducer', () => {
  it('return initialState หากไม่เจอ action ที่ตรงกัน', () => {
    expect(reposReducer(initialState, {type: 'มั่วๆ'})).toMatchSnapshot();
  });

  it('จัดการกับเคส failure action', () => {
    const error = new Error('ดูผมดิ ผมเออเร่อ');
    expect(reposReducer(initialState, loadReposFailure(error))).toMatchSnapshot();
  });

  it('จัดการกับเคส request action', () => {
    expect(reposReducer(initialState, loadReposRequest())).toMatchSnapshot();
  });

  it('จัดการกับเคส success action', () => {
    expect(reposReducer(initialState, loadReposSuccess(data))).toEqual({
      ...initialState,
      repos: data,
      isLoading: false
    });
  });

  it('จัดการกับเคส success action แบบ snapshot', () => {
    expect(reposReducer(initialState, loadReposSuccess(data))).toMatchSnapshot();
  });

  it('จัดการกับเคส SELECT_REPO', () => {
    expect(reposReducer(initialState, selectRepo(1000))).toMatchSnapshot();
  });

  it('จัดการกับเคส ยิง undefined state กับ unknow action', () => {
    expect(reposReducer(undefined, { type: 'unknown'})).toMatchSnapshot();
  });
});
