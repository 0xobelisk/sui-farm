type NetworkType = 'testnet' | 'mainnet' | 'devnet' | 'localnet';

export const Network: NetworkType = 'testnet';
export const PackageId = '0x8c9e060966896b8bf48aa296f33a948bb54244f8e68ff07b198206a035b50638';
/** The first-published (original) package ID — stable across upgrades. Used for dapp_key and indexer filtering. */
export const OriginalPackageId = '0x8c9e060966896b8bf48aa296f33a948bb54244f8e68ff07b198206a035b50638';
/** Canonical dapp_key type string derived from OriginalPackageId. Pass to the Dubhe SDK and GraphQL queries. */
export const DappKey = '8c9e060966896b8bf48aa296f33a948bb54244f8e68ff07b198206a035b50638::dapp_key::DappKey';
export const DappHubId = '0x12a319387cf2d465d4f4181523d089a368e542fccbdd878e70a4db0df007bb78';
export const DappStorageId = '0x37960590f9993471895617fac3e79551f4fdaeb759d7eaa00008a9e9122c3f4f';

// Published package ID of the dubhe framework — required for proxy operations.
export const FrameworkPackageId: string | undefined = '0x89302436f6624fb9274ab0126737a599cb154b008687d71f6d8ce9e0d22ec3ce';
