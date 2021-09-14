export const updateTradeResult = (state, payload) => {
  if (!payload.count)
    payload.count = 1;
  state.purchase += parseFloat(payload.purchase) * parseInt(payload.count);
  state.sale += parseFloat(payload.sale) * parseInt(payload.count);
  state.balance = parseFloat(state.sale) - parseFloat(state.purchase);
}

export const updateLoadingState=(state,payload)=>{
  state.isLoading=payload;
}
