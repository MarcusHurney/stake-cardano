// @flow
import React, { Component } from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import classnames from 'classnames';
import { LoadingSpinner } from '../Widgets/LoadingSpinner';
import { LoadingSpinnerSkin } from '../Widgets/LoadingSpinnerSkin';
import { MAILCHIMP_ACTION } from './constants';
import spinnerStyles from '../Widgets/LoadingSpinner.module.scss'; 
import styles from './Subscribe.module.scss';
import success from '../../assets/svg/success.svg';
import refresh from '../../assets/svg/refresh.svg';

type State = {
  NAME: string,
  EMAIL: string,
  refreshed: boolean,
};

export default class Subscribe extends Component<{}, State> {
 constructor(props: {}) {
    super(props);
    this.state = {
      NAME: '',
      EMAIL: '',
      refreshed: false,
    };
  }

  onEmailChange = (event: Object) => {
    this.setState({
      EMAIL: event.target.value
    });
  }

  onNameChange = (event: Object) => {
    this.setState({
      NAME: event.target.value
    });
  }

  onSubmit = (subscribe: Function) => {
    subscribe(this.state);
    this.setState({
     NAME: '',
     EMAIL: '',
     refreshed: false,
    });
  }

  refreshSubmitBtn = () => this.setState({ NAME: '', EMAIL: '', refreshed: true });

  renderSubscribeBtn = (
    { status, onSubscribe }: { status: string, onSubscribe: Function }
  ) => {
    if (!status || this.state.refreshed) {
      return (
        <button className={styles.subscribeBtn} onClick={onSubscribe}>
          Subscribe
        </button>
      );
    } else if (status === 'sending') {
      return (
        <button className={styles.subscribeBtn}>
          <LoadingSpinner skin={LoadingSpinnerSkin} theme={spinnerStyles} />
        </button>
      );
    } else if (status === 'error') {
      return (
        <div className={styles.errorMsg}>
          <span>Error Subscribing</span>
          <button className={styles.refreshBtn} onClick={this.refreshSubmitBtn}>
            <img src={refresh} className={styles.refreshIcon} alt="refresh" />
          </button>
        </div>
      );
    } else if (status === 'success') {
      return (
        <button className={classnames([styles.subscribeBtn, styles.success])}>
          <img src={success} className={styles.successIcon} alt="success checkmark" />
        </button>
      );
    }
  }
  
  render() {
    return (
      <MailchimpSubscribe
        url={MAILCHIMP_ACTION}
        render={({ subscribe, status, message }) => {
          const onSubscribe = this.onSubmit.bind(null, subscribe);
          return (
            <div id="subscribeForm" className={styles.component}>
              <label className={styles.label}>
                Name:
                <input id="nameInput" type="text" value={this.state.NAME} onChange={this.onNameChange} />
              </label>
              <label className={styles.label}>
                Email:
                <input type="email" value={this.state.EMAIL} onChange={this.onEmailChange} />
              </label>
              {this.renderSubscribeBtn({ status, onSubscribe })}
            </div>
          );
        }}
      />
    );
  }
}