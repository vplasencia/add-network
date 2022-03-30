function comparerNetworkName(a, b) {
  if (a.chainName > b.chainName) return 1;
  else if (a.chainName < b.chainName) return -1;
  return 0;
}

export function sortNetworksByName(networks){
    return networks.sort(comparerNetworkName);
}
