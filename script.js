async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (amount === '' || isNaN(amount)) {
        alert('Please enter a valid amount');
        return;
    }

    const apiKey = '7ec40f79a4b48053c70a9f14';
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.result === "error") {
            alert('Error retrieving exchange rates');
            return;
        }

        const rate = data.conversion_rates[toCurrency];
        const convertedAmount = (amount * rate).toFixed(2);
        document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    } catch (error) {
        alert('Error retrieving exchange rates');
        console.error('Error:', error);
    }
}

const clickLeft = () => {
    const sliderItemNodes = document.getElementsByClassName('slider-item');
   
    let prevIndex = null;
    for (let i = 0; i < sliderItemNodes.length; i += 1) {
     if (sliderItemNodes[i].classList.contains('selected')) {
      prevIndex = i - 1;
      if (prevIndex == -1) {
       prevIndex = sliderItemNodes.length - 1;
      }
     }
    }
   
    // const selectedNodes = document.getElementsByClassName('selected');
    // const selectedNode = selectedNodes[0];
    const [selectedNode] = document.getElementsByClassName('selected');
    /**
     * "class1 class2".toggle('class3') => "class1 class2 class3"
     * "class1 class2".toggle('class2') => "class1 class3"
     */
    selectedNode.classList.toggle('selected');
    sliderItemNodes[prevIndex].classList.toggle('selected');
   };
   
   const clickRight = () => {
       const sliderItemNodes = document.getElementsByClassName('slider-item');
   
    let nextIndex = null;
    for (let i = 0; i < sliderItemNodes.length; i += 1) {
       if (sliderItemNodes[i].classList.contains('selected')) {
           nextIndex = i + 1;
       if (nextIndex == sliderItemNodes.length) {
          nextIndex = 0;
       }
       }
   }
   
   const [selectedNode] = document.getElementsByClassName('selected');
   selectedNode.classList.toggle('selected');
   sliderItemNodes[nextIndex].classList.toggle('selected');
   };
   
   document.getElementById('left')
    .addEventListener('click', clickLeft);
    document.getElementById('right')
    .addEventListener('click', clickRight);