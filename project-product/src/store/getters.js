export  const getTrade= (state)=>{
  return {
    purchase:state.purchase,
    sale:state.sale,
    balance:state.balance,
  }
}
export const getLoadingState= (state)=>{
  return state.isLoading;
}
