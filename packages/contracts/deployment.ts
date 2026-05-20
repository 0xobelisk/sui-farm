type NetworkType = 'testnet' | 'mainnet' | 'devnet' | 'localnet';

export const Network: NetworkType = 'testnet';
export const PackageId = '0xf595bf753820e8e14eece4cc76778abb9170b5c29325da8aa8ec2ac145900fee';
/** The first-published (original) package ID — stable across upgrades. Used for dapp_key and indexer filtering. */
export const OriginalPackageId = '0xf595bf753820e8e14eece4cc76778abb9170b5c29325da8aa8ec2ac145900fee';
/** Canonical dapp_key type string derived from OriginalPackageId. Pass to the Dubhe SDK and GraphQL queries. */
export const DappKey = 'f595bf753820e8e14eece4cc76778abb9170b5c29325da8aa8ec2ac145900fee::dapp_key::DappKey';
export const DappHubId = '0x12a319387cf2d465d4f4181523d089a368e542fccbdd878e70a4db0df007bb78';
export const DappStorageId = '0x4e783c5948cc8131b9fd649d7016c43155b3edb2743bb0ac11bc06e3072df7a6';

// Published package ID of the dubhe framework — required for proxy operations.
export const FrameworkPackageId: string | undefined = '0x89302436f6624fb9274ab0126737a599cb154b008687d71f6d8ce9e0d22ec3ce';
