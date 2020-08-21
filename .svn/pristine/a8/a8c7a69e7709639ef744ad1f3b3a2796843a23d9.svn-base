// 获取推荐数据的网络请求 PageSize是每页条数 PageNum是页码 colId是分类id 
function getRecommend(PageSize, colId, PageNum = 1) {
	return getAjax('get', "Articles/RecommendDo", '{"PageSize":"' + PageSize + '","PageNum":"' + PageNum + '","ColId":"' + colId + '"}')
}
// 获取影视数据的网络请求 PageSize是每页条数 PageNum是页码 colId是分类id 
function getMoviesdata(PageSize, colId, PageNum = 1) {
	return getAjax('get', "Articles/ListDo", '{"PageSize":"' + PageSize + '","PageNum":"' + PageNum + '","ColId":"' + colId + '"}')
}
// 获取最新内容的网络请求
function getNewestdata(PageSize, colId, PageNum = 1) {
	return getAjax('get', "Articles/NewestDo", '{"PageSize":"' + PageSize + '","PageNum":"' + PageNum + '","ColId":"' + colId + '"}')
}
// 获取热门的网络请求 PageSize是每页条数 PageNum是页码 colId是分类id 
function getHotdata(PageSize, colId, PageNum = 1) {
	return getAjax('get', "Articles/HotDo", '{"PageSize":"' + PageSize + '","PageNum":"' + PageNum + '","ColId":"' + colId + '"}')
}
// 获取焦点的网络请求
function getFocusdata(PageSize, colId, PageNum = 1) {
	return getAjax('get', "Articles/FocusDo", '{"PageSize":"' + PageSize + '","PageNum":"' + PageNum + '","ColId":"' + colId + '"}')
}
