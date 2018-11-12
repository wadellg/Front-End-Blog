var arrOrdered = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
var arrA = [29,10,14,37,6];

/**
 * real乱序(洗牌)     Fisher–Yates 算法 ( Ronald Fisher 和 Frank Yates )
 * 
 * 原理很简单，就是遍历数组元素，然后将当前元素与以后随机位置的元素进行交换
 */
function shuffle(arr) {
  for(var i=0;i<arr.length;i++){
    var j = Math.floor(Math.random() * i);  // 生成随机位置（排除掉当前位置）
    var temp = arr[i];     //将当前位置变量赋值给临时对象
    arr[i] = arr[j];   // 将随机位置的元素设置到当前位置 
    arr[j] = temp;      // 再将临时变量的值赋值给随机位置的对象实现交换
    
    // es6 可以精简掉temp 
    // [arr[i], arr[j]] = [arr[j], arr[i]];   
  }
  return arr;
}

// 乱序 test 
console.log(shuffle(arrOrdered));
console.log(shuffle(arrOrdered));
console.log(shuffle(arrOrdered));

/**
 * 插入排序
 * 
 * 循环嵌套   时间复杂度O(m^2) 
 * 
 * 原理在于将第一个元素视为有序序列，遍历数组，将之后的元素依次插入这个构建的有序序列中
 * 每一步将一个待排序的记录，插入到前面已经排好序的有序序列中去，直到插完所有元素为止。
 * 简单插入排序在最好情况下，需要比较n-1次，无需交换元素，时间复杂度为O(n);
 * 在最坏情况下，时间复杂度依然为O(n2)。
 * 在数组元素随机排列的情况下，插入排序还是要优于冒泡和简单选择排序的
 */
function insertionSort(arr) {
  for(var i=1; i< arr.length; i++) {

    var temp = arr[i];
    var j = i;
    //console.log(j, '当前位置temp:', temp, arr);
    while (j>=0 && temp < arr[j-1]) {   // 向左比较，若当前对象比前一个小，则开始比对。
      arr[j] = arr[j-1];   // 把当前位置跟左侧对象 替换
      j--;
      //console.log('    然后j-1, j=', j, arr);
    }
    arr[j] = temp;
    //console.log(j, '位置改成', temp, arr);
  }
  return arr;
}

// 测试插入排序
console.log(insertionSort(arrA));


/**
 * 冒泡排序
 * 元素依次像气泡似的逐渐像后排，最大的在最后边（前边）。
 * 
 * 两个嵌套的循环. 其中, 外层循环移动游标; 内层循环遍历游标及之后(或之前)的元素, 
 * 通过两两交换的方式, 每次只确保该内循环结束位置排序正确, 然后内层循环周期结束, 
 * 交由外层循环往后(或前)移动游标, 随即开始下一轮内层循环, 以此类推, 直至循环结束.
 * 
 * 平均时间复杂度 O(n²) ，最好 O(n)， 最坏 O(n²)
 * 空间复杂度 O(1)
 */
function bubbleSort(arr) {
  for (var i=0;i<arr.length;i++) {
    var temp = arr[i];
    console.log(temp);

    for (var j=i+1;j<arr.length;j++) {
      if (temp > arr[j]){
        arr[j-1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
// 测试冒泡排序
console.log(bubbleSort(arrA));