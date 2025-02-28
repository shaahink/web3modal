const SECURE_SITE = 'https://secure.walletconnect.com'

export const ONRAMP_PROVIDERS = [
  {
    label: 'Coinbase',
    name: 'coinbase',
    feeRange: '1-2%',
    url: ''
  }
]

export const ConstantsUtil = {
  FOUR_MINUTES_MS: 240_000,

  TEN_SEC_MS: 10_000,

  ONE_SEC_MS: 1_000,

  SECURE_SITE,

  SECURE_SITE_DASHBOARD: `${SECURE_SITE}/dashboard`,

  SECURE_SITE_FAVICON: `${SECURE_SITE}/images/favicon.png`,

  RESTRICTED_TIMEZONES: [
    'ASIA/SHANGHAI',
    'ASIA/URUMQI',
    'ASIA/CHONGQING',
    'ASIA/HARBIN',
    'ASIA/KASHGAR',
    'ASIA/MACAU',
    'ASIA/HONG_KONG',
    'ASIA/MACAO',
    'ASIA/BEIJING',
    'ASIA/HARBIN'
  ],

  CONNECTOR_RDNS_MAP: {
    coinbaseWallet: 'com.coinbase.wallet'
  } as Record<string, string>,
  /**
   * Network name to Coinbase Pay SDK chain name map object
   * @see supported chain names on Coinbase for Pay SDK: https://github.com/coinbase/cbpay-js/blob/d4bda2c05c4d5917c8db6a05476b603546046394/src/types/onramp.ts
   */
  WC_COINBASE_PAY_SDK_CHAINS: [
    'ethereum',
    'arbitrum',
    'polygon',
    'avalanche-c-chain',
    'optimism',
    'celo'
  ],

  WC_COINBASE_PAY_SDK_FALLBACK_CHAIN: 'ethereum',

  WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP: {
    Ethereum: 'ethereum',
    'Arbitrum One': 'arbitrum',
    Polygon: 'polygon',
    Avalanche: 'avalanche-c-chain',
    'OP Mainnet': 'optimism',
    Celo: 'celo'
  },

  WC_COINBASE_ONRAMP_APP_ID: 'bf18c88d-495a-463b-b249-0b9d3656cf5e'
}

export type CoinbasePaySDKChainNameValues =
  keyof typeof ConstantsUtil.WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP
