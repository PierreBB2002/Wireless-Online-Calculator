// js/script.js

function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0;
}

function performCalculation() {
    // Get user inputs
    const bandwidth = parseFloat(document.getElementById('bwidth').value);
    const subcarrierSpacing = parseFloat(document.getElementById('SubSpacing').value);
    const ofdmNumber = parseInt(document.getElementById('OFDMNo').value);
    const resourceBlockDuration = parseFloat(document.getElementById('RBD').value / 1000);
    const qamBits = parseInt(document.getElementById('QAMBits').value);
    const numOfParallel = parseInt(document.getElementById('ParallelNum').value);

    // Validate inputs
    if(Number.isNaN(bandwidth)){
        alert('Enter the missing inputs');
        return;
    }
    if (!Number.isInteger(bandwidth / subcarrierSpacing)) {
        alert('Bandwidth / Subcarrier Spacing should be an integer.');
        return;
    }

    if (!isPowerOfTwo(qamBits)) {
        alert('QAM bits should be a power of 2.');
        return;
    }
    if(numOfParallel < 0){
        alert('Number of parallel resources block should be a positive integer.');
        return;
    }

    // Perform calculations (dummy calculations for demonstration)
    const resourceElements = Math.log2(qamBits);
    const bitsPerOFDM = parseFloat(resourceElements * parseFloat(bandwidth / subcarrierSpacing));
    const bitsPerOFDM_Resource = bitsPerOFDM * ofdmNumber;
    //const maxRate = parseFloat(numOfParallel * parseFloat(bitsPerOFDM / resourceBlockDuration));
    const maxRate = parseFloat(numOfParallel * parseFloat(bitsPerOFDM_Resource / resourceBlockDuration));


    // Display results
    const resultsDiv = document.getElementById('results');
    resultsDiv.className = 'results-container';
    resultsDiv.innerHTML = `
        <h3 class="results-title">Calculation Results:</h3>
        <p>Number of Bits per Resource Elements: <span class="results-value">${resourceElements.toFixed(2)} bits</span></p>
        <p>Number of Bits per OFDM Symbol: <span class="results-value">${bitsPerOFDM.toFixed(2)} bits</span></p>
        <p>Number of Bits per OFDM Resource Block: <span class="results-value">${bitsPerOFDM_Resource.toFixed(2)} bits/Resource Block</span></p>
        <p>Maximum Transmission Rate: <span class="results-value">${maxRate.toFixed(2)} bps</span></p>
    `;
}
