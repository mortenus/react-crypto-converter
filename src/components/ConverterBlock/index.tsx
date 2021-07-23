import React from 'react';
import { observer, inject } from 'mobx-react';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import CurrenciesStore from '../../stores/currenciesStore';

type IConverterBlock = {
  classes: any;
  currenciesStore?: CurrenciesStore;
};

const ConverterBlock: React.FC<IConverterBlock> = inject('currenciesStore')(
  observer(({ classes, currenciesStore }) => {
    const coins: string[] = currenciesStore!.getItems.map((coin) => coin.name);

    return (
      <Paper className={classes.paper}>
        <div className={classes.cryptoInputBox}>
          <FormControl className={classes.currencyInput}>
            <TextField label="Сумма" />
          </FormControl>
          <FormControl className={classes.currencyType}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              Валюта
            </InputLabel>
            <Select value={coins[0]}>
              {coins.map((name) => (
                <MenuItem value={name}>{name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className={classes.cryptoInputBox}>
          <FormControl className={classes.currencyInput}>
            <TextField label="Сумма" />
          </FormControl>
          <FormControl className={classes.currencyType}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              Валюта
            </InputLabel>
            <Select value={coins[0]}>
              {coins.map((name) => (
                <MenuItem value={name}>{name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </Paper>
    );
  }),
);

export default ConverterBlock;
