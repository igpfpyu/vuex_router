//全局方法
//验证是否为空
export const isNull=(params)=>{
    let newPass = (params instanceof Array) || (params instanceof Object) ? JSON.stringify(params) : String(params);
    switch (newPass) {
        case "null":
        case "undefined":
        case "defined":
        case "{}":
        case "[]":
        case "":
            //为空
            return true;
        default:
            //不为空
            return false;
    }
};
//验证手机号；
export const isMobile=(num)=>{
    var mobilereg = /^1[3|4|5|7|8][0-9]{9}$/;
    return mobilereg.test(parseInt(num));
}
