// Rating the article
var lis = document.querySelectorAll('main #rate ul li');
var changeSelected = function (node) { return function () {
    console.log(node);
    var previouslySelected = document.querySelector('main #rate ul li.selected');
    if (previouslySelected) {
        previouslySelected.classList.remove('selected');
    }
    node.classList.add('selected');
}; };
for (var index = 0; index < lis.length; index++) {
    var li = lis[index];
    li.addEventListener('click', changeSelected(li));
}
// Validating the rate
var submit = document.querySelector('main #rate button');
var validate = function (e) {
    e.preventDefault;
    var rateSelected = document.querySelector('main #rate ul li.selected');
    if (rateSelected) {
        var rate_1 = rateSelected.innerHTML;
        var rateSection_1 = document.querySelector('main section#rate');
        var thankSection_1 = document.querySelector('main section#thank');
        if (rateSection_1) {
            rateSection_1.classList.remove('show');
            rateSection_1.classList.add('hiding');
            window.setTimeout(function () {
                rateSection_1.classList.remove('hiding');
                rateSection_1.classList.add('hide');
                thankSection_1.classList.remove('hide');
                thankSection_1.classList.add('show');
                thankSection_1.querySelector('span.rate').innerHTML = rate_1;
            }, 1400);
        }
    }
    else {
        window.alert('Please rate the article first.');
    }
};
submit.addEventListener('click', validate);
