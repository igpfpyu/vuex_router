import VUE from 'vue';
VUE.filter('isShowFilter', function(sum){
    console.log(sum);
    return sum>5 ? 1 : 2
})
VUE.filter('num', function(item){
    return item+"aaaa";
})
VUE.filter('nums', function(num){
    //console.log(isNaN(num)
    console.log(isNaN(num));
    return isNaN(num)? num : Number.parseFloat(num).toFixed(2);  //防止加引号的数字。

})
