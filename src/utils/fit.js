// 导出
export default function fit(res){
	const clientWidth = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
	if (!clientWidth) return;
	let fit = clientWidth / 370;
	return res * fit;
}