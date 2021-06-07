import React from 'react';
import Styled from 'styled-components';
import select from '../../assets/select.svg';
import pencil from '../../assets/pencil.svg';
import { withRouter } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { makeStyles, withStyles, withTheme } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles({
  select: {
    '& .MuiSvgIcon-root': {
      display: 'none',
    },
  },
});

const BootstrapInput = withStyles(theme => ({
  input: {
    color: 'black',
    width: '100px',
    borderRadius: 5,
    position: 'relative',
    backgroundColor: 'none',
    border: '1px solid white',
    fontSize: 18,
    fontWeight: 'bold',
    padding: '5px 7px',
    margin: '7px auto',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    background: `url(${select}) no-repeat 95% 50%`,
    '&:focus': {
      fontSize: 18,
      fontWeight: 'bold',
      borderRadius: 5,
      borderColor: 'white',
      backgroundColor: 'none',
      boxShadow: '0 0 0 0.2rem rgba(255,255,255,.25)',
    },
  },
}))(InputBase);

const NewBoxWrap = Styled.div`
  width: 256px;
  height: 490px;
  border-radius: 13px;
  background-color: #CABFC5;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .image {
    width: 230px;
    height: 230px;
    border-radius: 13px;
    margin-top: 13px;
    padding: 10px;
    background-color: white;
    box-sizing: border-box;
    & > img {
    width: 210px;
    height: 210px;
    }
  }

  .title {
    width: 230px;
    font-size: 23px;
    font-weight: bold;
    text-align: center;
    padding: 7px;
    border: none;
    border-bottom: 1px solid white;
    box-sizing: border-box;
    background: none;
    &:focus {
      outline: none;
      background-color: rgba(255, 255, 255, 0.4);
    }
  }
  input[type='text'] {
    padding: 9px;
  }

  .section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 180px;

    &__left {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-right: 10px;
      border-right: 1px solid white;
      font-size: 17px;
      color: white;
      height: 150px;

      & > p {
        margin: 13px 0;
      }
    }

    &__right {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      margin-left: 10px;
      height: 150px;
    }
  }

  .colors {
    display: flex;
    flex-direction: row;
    height: 50px;
    align-items: center;

    &--first,
    &--second {
      width: 30px;
      height: 30px;
      border-radius: 15px;
      margin-right: 6px;
    }

    & > span {
      font-size: 14px;
      margin-right: 10px;
    }
  }

  .type, .weather {
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0;
  }

  .edit {
    font-size: 17px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 220px;
    position: relative;
    top: -15px;

    & > img {
      width: 25px;
      height: 25px;
    }
  }
`;

const NewBox = ({ clothes, setClothes, history, match }) => {
  const isReadOnly = match.path === '/closet/new' ? true : false;
  const classes = useStyles();

  const [state, setState] = React.useState(clothes);
  const { image, title, colors, type, weather } = state;

  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <NewBoxWrap>
      <div className="image">
        <img src={image && image.preview} alt="" />
      </div>
      {isReadOnly ? (
        <div className="title">{title}</div>
      ) : (
        <input
          className="title"
          type="text"
          name="title"
          readOnly={isReadOnly}
          onChange={handleChange}
          value={title}
        />
      )}
      <div className="section">
        <div className="section__left">
          <p>색상</p>
          <p>분류</p>
          <p>계절</p>
        </div>
        <div className="section__right">
          <div className="colors">
            <div
              className="colors--first"
              style={{ backgroundColor: colors && Object.keys(colors)[0] }}
            ></div>
            <span>{colors && Object.values(colors)[0]}%</span>
            <div
              className="colors--second"
              style={{ backgroundColor: colors && Object.keys(colors)[1] }}
            ></div>
            <span>{colors && Object.values(colors)[1]}%</span>
          </div>
          {isReadOnly ? (
            <p className="type">{type}</p>
          ) : (
            <FormControl>
              <NativeSelect
                className={classes.select}
                value={type}
                name="type"
                onChange={handleChange}
                input={<BootstrapInput />}
              >
                <option value={'셔츠'}>셔츠</option>
                <option value={'티셔츠'}>티셔츠</option>
                <option value={'니트/맨투맨'}>니트/맨투맨</option>
                <option value={'바지'}>바지</option>
                <option value={'치마'}>치마</option>
                <option value={'드레스/원피스'}>드레스/원피스</option>
              </NativeSelect>
            </FormControl>
          )}
          {isReadOnly ? (
            <p className="weather">{weather}</p>
          ) : (
            <FormControl>
              <NativeSelect
                className={classes.select}
                value={weather}
                name="weather"
                onChange={handleChange}
                input={<BootstrapInput />}
              >
                <option value={'봄/가을'}>봄/가을</option>
                <option value={'여름'}>여름</option>
                <option value={'겨울'}>겨울</option>
              </NativeSelect>
            </FormControl>
          )}
        </div>
      </div>
      {isReadOnly ? (
        <div className="edit" onClick={() => history.push('/closet/new/edit')}>
          수정
          <img src={pencil} alt="" />
        </div>
      ) : (
        <div
          className="edit"
          onClick={() => {
            history.push('/closet/new');
            setClothes(state);
          }}
        >
          저장
          <img src={pencil} alt="" />
        </div>
      )}
    </NewBoxWrap>
  );
};

export default withRouter(NewBox);
