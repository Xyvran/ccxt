// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';

interface Exchange {
    publicGetDemoTemp (params?: {}): Promise<implicitReturnType>;
    publicGetExchangeCandlesPairTimeframeFromTo (params?: {}): Promise<implicitReturnType>;
    publicGetExchangePrices (params?: {}): Promise<implicitReturnType>;
    publicGetExchangeTicksPairFrom (params?: {}): Promise<implicitReturnType>;
    publicGetAssets (params?: {}): Promise<implicitReturnType>;
    publicGetMarkets (params?: {}): Promise<implicitReturnType>;
    publicGetExchangeBookPair (params?: {}): Promise<implicitReturnType>;
    publicGetExchangeBookUpdatesPairFrom (params?: {}): Promise<implicitReturnType>;
    privateGetUsersBalances (params?: {}): Promise<implicitReturnType>;
    privateGetUsersWallets (params?: {}): Promise<implicitReturnType>;
    privateGetUsersWalletsHistorySince (params?: {}): Promise<implicitReturnType>;
    privateGetExchangeOrdersStatusOrderID (params?: {}): Promise<implicitReturnType>;
    privateGetExchangeOrdersActive (params?: {}): Promise<implicitReturnType>;
    privateGetExchangeOrdersHistorySince (params?: {}): Promise<implicitReturnType>;
    privateGetExchangeFillsSince (params?: {}): Promise<implicitReturnType>;
    privateGetExchangeMargin (params?: {}): Promise<implicitReturnType>;
    privatePostJwt (params?: {}): Promise<implicitReturnType>;
    privatePostJwtDevice (params?: {}): Promise<implicitReturnType>;
    privatePostDevices (params?: {}): Promise<implicitReturnType>;
    privatePostJwtReadOnly (params?: {}): Promise<implicitReturnType>;
    privatePostExchangeOrdersCreate (params?: {}): Promise<implicitReturnType>;
    privatePostExchangeOrdersModifyOrderID (params?: {}): Promise<implicitReturnType>;
    privatePostExchangeSwap (params?: {}): Promise<implicitReturnType>;
    privatePostExchangeSwapConfirmSwapId (params?: {}): Promise<implicitReturnType>;
    privatePostExchangeOrdersCloseOrderID (params?: {}): Promise<implicitReturnType>;
    privatePostExchangeOrdersHedge (params?: {}): Promise<implicitReturnType>;
    privatePutJwt (params?: {}): Promise<implicitReturnType>;
    privatePutExchangeOrdersCancelOrderID (params?: {}): Promise<implicitReturnType>;
    privatePutUsersMarginCollateral (params?: {}): Promise<implicitReturnType>;
    privatePutUsersMarginPrimaryCurrency (params?: {}): Promise<implicitReturnType>;
}
abstract class Exchange extends _Exchange {}

export default Exchange
